import React from "react";
import { HairAnalysis } from "../services/aiService";

interface AnalysisProps {
  analysis: HairAnalysis;
  photo: string;
  clientName?: string;
  onNewAnalysis: () => void;
}

const Analysis: React.FC<AnalysisProps> = ({
  analysis,
  photo,
  clientName,
  onNewAnalysis,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10 bg-white rounded-xl shadow-lg animate-fade-in">
      {/* Foto e info base */}
      <div className="flex flex-col items-center md:items-start gap-4 md:w-1/3">
        <img
          src={photo}
          alt="Cliente"
          className="w-40 h-40 object-cover rounded-full border-4 border-blue-300 shadow"
        />
        {clientName && (
          <h2 className="text-2xl font-bold text-blue-700">{clientName}</h2>
        )}
        <div className="mt-2 space-y-1 text-gray-700">
          <div>
            <span className="font-semibold">Forma viso:</span> {analysis.faceShape}
          </div>
          <div>
            <span className="font-semibold">Colore occhi:</span> {analysis.eyeColor}
          </div>
          <div>
            <span className="font-semibold">Incarnato:</span> {analysis.skinTone}
          </div>
          <div>
            <span className="font-semibold">Capelli attuali:</span> {analysis.currentHair}
          </div>
        </div>
      </div>

      {/* Analisi dettagliata */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Tagli consigliati */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Tagli consigliati</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {analysis.recommendedCuts.map((cut, idx) => (
              <div
                key={idx}
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow hover:scale-105 transition-transform"
              >
                <h4 className="font-semibold text-blue-700 text-lg">{cut.name}</h4>
                <p className="text-gray-700 mt-1">{cut.description}</p>
                <p className="text-sm text-blue-600 mt-2">
                  <span className="font-semibold">Perché:</span> {cut.why}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  <span className="font-semibold">Manutenzione:</span> {cut.maintenance}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Colori consigliati */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Colori consigliati</h3>
          <div className="flex flex-wrap gap-4">
            {analysis.colorSuggestions.map((color, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-pink-50 border border-pink-200 rounded-lg p-3 shadow"
              >
                <div
                  className="w-8 h-8 rounded-full border"
                  style={{ background: color.color }}
                  title={color.color}
                ></div>
                <div>
                  <div className="font-semibold text-pink-700">{color.color}</div>
                  <div className="text-xs text-gray-600">{color.technique}</div>
                  <div className="text-xs text-pink-600">{color.why}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note professionali */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Note professionali</h3>
          <div className="bg-gray-100 rounded-lg p-4 text-gray-700 shadow">
            {analysis.professionalNotes}
          </div>
        </section>

        {/* Azioni */}
        <div className="flex gap-4 mt-6">
          <button
            className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
            onClick={onNewAnalysis}
          >
            Nuova Analisi
          </button>
          <button
            className="px-5 py-2 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-green-600 transition"
            onClick={() => window.print()}
          >
            Salva/Stampa
          </button>
          <button
            className="px-5 py-2 bg-gray-400 text-white rounded-lg font-semibold shadow hover:bg-gray-500 transition"
            onClick={() => {
              const url = window.location.href;
              window.open(
                `https://wa.me/?text=Consulenza%20capelli:%20${encodeURIComponent(url)}`,
                "_blank"
              );
            }}
          >
            Condividi WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analysis;