import { HairAnalysis } from "../types";

// Usa variabile ambiente per la API key
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// Prompt parrucchiere
const HAIR_PROMPT = `Sei un parrucchiere esperto con 15 anni di esperienza. Analizza questa foto e fornisci consulenza professionale in formato JSON:

{
  "faceShape": "forma del viso (ovale, tondo, quadrato, etc)",
  "eyeColor": "colore occhi dettagliato", 
  "skinTone": "incarnato e undertone (caldo/freddo/neutro)",
  "currentHair": "descrizione capelli attuali",
  "recommendedCuts": [
    {
      "name": "nome taglio",
      "description": "descrizione dettagliata",
      "why": "perché è consigliato per questa forma viso",
      "maintenance": "ogni quanto tagliare"
    }
  ],
  "colorSuggestions": [
    {
      "color": "colore consigliato",
      "technique": "tecnica (balayage, meches, etc)",
      "why": "perché valorizza occhi/incarnato"
    }
  ],
  "professionalNotes": "note aggiuntive per parrucchiere"
}

Rispondi SOLO in JSON valido, niente altro.`;

// Demo statica per fallback
const DEMO_ANALYSIS: HairAnalysis = {
  faceShape: "Ovale",
  eyeColor: "Verde chiaro",
  skinTone: "Chiaro, undertone neutro",
  currentHair: "Lungo, castano, leggermente mosso",
  recommendedCuts: [
    {
      name: "Bob scalato",
      description: "Taglio medio con scalature leggere per dare volume.",
      why: "Valorizza la forma ovale e i lineamenti delicati.",
      maintenance: "Ogni 6-8 settimane"
    }
  ],
  colorSuggestions: [
    {
      color: "#c3976e",
      technique: "Balayage",
      why: "Esalta il verde degli occhi e illumina l'incarnato."
    }
  ],
  professionalNotes: "Consigliato trattamento idratante mensile."
};

// Comprimi base64 se troppo grande (>2MB)
function compressBase64(base64: string, maxSizeKB = 2000): Promise<string> {
  if (!base64.startsWith("data:image")) return Promise.resolve(base64);
  const sizeKB = Math.round((base64.length * 3) / 4 / 1024);
  if (sizeKB <= maxSizeKB) return Promise.resolve(base64);
  // Riduci qualità JPEG
  return new Promise<string>((resolve) => {
    const img = new Image();
    img.src = base64;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);
      resolve(canvas.toDataURL("image/jpeg", 0.7)); // 70% qualità
    };
    img.onerror = () => resolve(base64);
  });
}

// Memoization per compressione immagini
const compressedCache = new Map<string, string>();
async function getCompressedBase64Memoized(base64: string): Promise<string> {
  if (compressedCache.has(base64)) {
    return compressedCache.get(base64)!;
  }
  const compressed = await compressBase64(base64);
  compressedCache.set(base64, compressed);
  return compressed;
}

// Validazione robusta JSON
function safeParseJSON(jsonString: string): HairAnalysis | null {
  try {
    const obj = JSON.parse(jsonString);
    if (
      obj &&
      typeof obj.faceShape === "string" &&
      typeof obj.eyeColor === "string" &&
      typeof obj.skinTone === "string" &&
      typeof obj.currentHair === "string" &&
      Array.isArray(obj.recommendedCuts) &&
      Array.isArray(obj.colorSuggestions) &&
      typeof obj.professionalNotes === "string"
    ) {
      return obj;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Analizza una foto (base64) con OpenAI GPT-4o Vision API.
 * Retry automatico, fallback demo, compressione base64, validazione robusta.
 */
export async function analyzeImage(
  base64Image: string,
  maxRetries = 2
): Promise<HairAnalysis> {
  if (!OPENAI_API_KEY) {
    console.error("OPENAI_API_KEY non impostata!");
    return DEMO_ANALYSIS;
  }

  // Comprimi se necessario, con memoization
  let compressedBase64 = base64Image;
  if (base64Image.length > 2_800_000) {
    try {
      compressedBase64 = await getCompressedBase64Memoized(base64Image);
    } catch {
      // Se fallisce, usa originale
    }
  }

  let lastError = "";
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(OPENAI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages: [
            {
              role: "system",
              content: "Sei un parrucchiere esperto.",
            },
            {
              role: "user",
              content: [
                { type: "text", text: HAIR_PROMPT },
                {
                  type: "image_url",
                  image_url: {
                    url: compressedBase64,
                  },
                },
              ],
            },
          ],
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        lastError = `API error: ${response.status} ${response.statusText}`;
        continue;
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;
      if (!content) {
        lastError = "Risposta API vuota.";
        continue;
      }

      // Estrai solo JSON dalla risposta
      const jsonStart = content.indexOf("{");
      const jsonEnd = content.lastIndexOf("}");
      if (jsonStart === -1 || jsonEnd === -1) {
        lastError = "JSON non trovato nella risposta.";
        continue;
      }

      const jsonString = content.substring(jsonStart, jsonEnd + 1);
      const result = safeParseJSON(jsonString);
      if (result) return result;
      lastError = "JSON non valido.";
    } catch (error: any) {
      lastError = error?.message || "Errore sconosciuto";
    }
  }

  // Fallback demo
  console.error("OpenAI Vision API fallita:", lastError);
  return DEMO_ANALYSIS;
}