import React, { useRef, useState } from "react";

interface CameraProps {
  onPhotoCapture: (base64: string) => void;
  onError: (error: string) => void;
}

const MAX_CAMERA_RETRIES = 2;

const Camera: React.FC<CameraProps> = ({ onPhotoCapture, onError }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [streaming, setStreaming] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [cameraAttempts, setCameraAttempts] = useState(0);

  // Avvia webcam con retry automatico
  const startCamera = async () => {
    setLoading(true);
    let success = false;
    for (let attempt = 0; attempt <= MAX_CAMERA_RETRIES; attempt++) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStreaming(true);
          success = true;
          break;
        }
      } catch (err) {
        setCameraAttempts(attempt + 1);
        if (attempt === MAX_CAMERA_RETRIES) {
          onError(
            "Impossibile accedere alla webcam. Puoi caricare una foto dalla galleria."
          );
        }
      }
    }
    setLoading(false);
    if (!success) setStreaming(false);
  };

  // Scatta foto dalla webcam
  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const base64 = canvas.toDataURL("image/jpeg");
      setPreview(base64);
      onPhotoCapture(base64);
    }
  };

  // Upload alternativa
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setPreview(base64);
      onPhotoCapture(base64);
      setLoading(false);
    };
    reader.onerror = () => {
      onError("Errore caricamento immagine. Riprova o scegli un altro file.");
      setLoading(false);
    };
    reader.readAsDataURL(file);
  };

  // UI
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto py-8">
      <div className="w-full aspect-square bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
        {!streaming && !preview && (
          <button
            className="absolute inset-0 w-full h-full flex items-center justify-center text-xl font-bold text-gray-600"
            onClick={startCamera}
          >
            Avvia Camera
          </button>
        )}
        {streaming && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
            style={{ borderRadius: "1rem" }}
          />
        )}
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover absolute inset-0"
            style={{ borderRadius: "1rem" }}
          />
        )}
        {/* Guida visuale */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="border-4 border-blue-400 rounded-full w-2/3 h-2/3"></div>
        </div>
      </div>

      <div className="flex gap-4 w-full justify-center">
        {streaming && !preview && (
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow"
            onClick={capturePhoto}
            disabled={loading}
          >
            {loading ? "Elaborazione..." : "Scatta Foto"}
          </button>
        )}
        <label className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg text-lg font-semibold shadow cursor-pointer">
          Carica dalla galleria
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
            disabled={loading}
          />
        </label>
      </div>

      {/* Loading spinner */}
      {loading && (
        <div className="mt-4 text-blue-600 font-semibold">Caricamento...</div>
      )}

      {/* Canvas nascosto per scatto foto */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Reset */}
      {preview && (
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => setPreview(null)}
        >
          Scatta/Carica un'altra foto
        </button>
      )}
    </div>
  );
};

export default Camera;