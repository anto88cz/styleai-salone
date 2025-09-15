import React, { useState, useEffect, Suspense, useCallback } from "react";
import Welcome from "./components/Welcome";
import Camera from "./components/Camera";
import Spinner from "./components/Spinner";
import Toast from "./components/Toast";
const Analysis = React.lazy(() => import("./components/Analysis"));
import { analyzeImage } from "./services/aiService";
import { HairAnalysis } from "./types";

type AppState = "welcome" | "camera" | "loading" | "analysis" | "error";

const LOGO_URL = "/icon-192.png"; // Assicurati che l'icona sia in public/

const App: React.FC = () => {
  const [state, setState] = useState<AppState>("welcome");
  const [photo, setPhoto] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<HairAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [clientName, setClientName] = useState<string>("");

  // Carica ultima analisi da localStorage
  useEffect(() => {
    const saved = localStorage.getItem("lastAnalysis");
    if (saved) {
      const { analysis, photo, clientName } = JSON.parse(saved);
      setAnalysis(analysis);
      setPhoto(photo);
      setClientName(clientName || "");
      setState("analysis");
    }
  }, []);

  // Salva analisi su localStorage
  useEffect(() => {
    if (state === "analysis" && analysis && photo) {
      localStorage.setItem(
        "lastAnalysis",
        JSON.stringify({ analysis, photo, clientName })
      );
    }
  }, [state, analysis, photo, clientName]);

  // Toast feedback
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Keyboard shortcuts (esempio: Esc per tornare indietro, N per nuova analisi)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (state === "analysis") handleBack();
        else if (state === "camera") setState("welcome");
      }
      if (e.key.toLowerCase() === "n" && state === "analysis")
        handleNewAnalysis();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  // Gestione flusso
  const handleStart = () => setState("camera");

  const handlePhotoCapture = async (base64: string) => {
    setPhoto(base64);
    setState("loading");
    setError(null);

    // Haptic feedback su mobile
    if ("vibrate" in navigator) navigator.vibrate(80);

    try {
      const result = await analyzeImage(base64);
      setAnalysis(result);
      setShowToast(true);
      setState("analysis");
    } catch (err: any) {
      setError("Errore nell'analisi AI. Riprova o carica un'altra foto.");
      setState("error");
    }
  };

  const handleCameraError = (msg: string) => {
    setError(msg);
    setState("error");
  };

  const handleBack = () => {
    if (state === "analysis") setState("camera");
    else setState("welcome");
    setError(null);
  };

  const handleNewAnalysis = () => {
    setAnalysis(null);
    setPhoto(null);
    setClientName("");
    setState("camera");
    setError(null);
  };

  // Progress indicator
  const getStep = () => {
    switch (state) {
      case "welcome":
        return 1;
      case "camera":
        return 2;
      case "loading":
      case "analysis":
        return 3;
      default:
        return 1;
    }
  };

  // Responsive container
  return (
    <div className="min-h-screen bg-[var(--color-background)] flex flex-col items-center justify-start tablet:px-8 px-2 py-4 transition-all duration-500">
      {/* Header con logo e nome */}
      <header className="flex items-center gap-4 mb-6 w-full max-w-2xl mx-auto">
        <img
          src={LOGO_URL}
          alt="Logo Salone"
          className="w-12 h-12 rounded-full shadow"
        />
        <h1 className="text-3xl font-bold text-[var(--color-primary)] font-serif">
          StyleAI Salone
        </h1>
      </header>

      {/* Progress indicator */}
      <div className="w-full max-w-2xl mx-auto mb-4 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <span className="text-[var(--color-secondary)] font-semibold">
            Step {getStep()}/3
          </span>
          <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-2 bg-[var(--color-primary)] transition-all"
              style={{ width: `${getStep() * 33.33}%` }}
            />
          </div>
        </div>
        {state !== "welcome" && (
          <button
            className="btn"
            onClick={handleBack}
            aria-label="Torna indietro"
          >
            Indietro
          </button>
        )}
      </div>

      {/* Toast notifications */}
      <Toast message="Analisi completata con successo!" show={showToast} />
      {error && (
        <div className="toast bg-red-500" role="alert" aria-live="assertive">
          {error}
        </div>
      )}

      {/* Main content con transizioni */}
      <main className="w-full max-w-2xl mx-auto animate-fade-in">
        {state === "welcome" && (
          <Welcome
            onStart={handleStart}
            clientName={clientName}
            setClientName={setClientName}
          />
        )}
        {state === "camera" && (
          <Camera onPhotoCapture={handlePhotoCapture} onError={handleCameraError} />
        )}
        {state === "loading" && (
          <div className="flex flex-col items-center justify-center py-16">
            <Spinner />
            <p className="mt-6 text-lg text-[var(--color-primary)] font-semibold animate-fade-in">
              Analisi AI in corso...
            </p>
          </div>
        )}
        {state === "analysis" && analysis && photo && (
          <Suspense fallback={<Spinner />}>
            <Analysis
              analysis={analysis}
              photo={photo}
              clientName={clientName}
              onNewAnalysis={handleNewAnalysis}
            />
          </Suspense>
        )}
        {state === "error" && (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-lg text-red-600 font-semibold mb-4">
              {error || "Si è verificato un errore."}
            </p>
            <button className="btn" onClick={handleBack}>
              Torna indietro
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;