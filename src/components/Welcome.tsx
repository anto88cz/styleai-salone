import React from "react";

interface WelcomeProps {
  onStart: () => void;
  clientName: string;
  setClientName: (name: string) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart, clientName, setClientName }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 bg-white rounded-xl shadow card animate-fade-in">
      <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-2 font-serif">
        Benvenuto in StyleAI Salone
      </h2>
      <p className="text-[var(--color-text)] mb-6 text-center max-w-md">
        Scopri il taglio e colore perfetto per te con la consulenza AI professionale del nostro salone. Carica una foto e ricevi consigli personalizzati!
      </p>
      <label className="mb-4 w-full max-w-xs text-left font-semibold text-[var(--color-secondary)]">
        Nome cliente (opzionale):
        <input
          type="text"
          value={clientName}
          onChange={e => setClientName(e.target.value)}
          className="mt-2 w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          placeholder="Inserisci il tuo nome"
          aria-label="Nome cliente"
        />
      </label>
      <button className="btn w-full max-w-xs mt-2" onClick={onStart} aria-label="Inizia analisi">
        Inizia
      </button>
    </div>
  );
};

export default Welcome;