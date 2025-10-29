import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { getWhatsAppLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Color Correction Catanzaro | Correzione Colore Capelli Danneggiati',
  description:
    'Specialisti in correzione colore a Catanzaro. Recupero capelli danneggiati, transizione dal nero, rimozione pigmenti indesiderati. Tecnica professionale con prodotti premium Olaplex.',
  keywords: [
    'color correction catanzaro',
    'correzione colore capelli catanzaro',
    'decolorazione sicura calabria',
    'rimozione colore nero catanzaro',
    'schiariture graduate catanzaro',
  ],
};

const FAQ = [
  {
    question: 'Cos\'è la color correction e quando serve?',
    answer:
      'La color correction è un trattamento professionale avanzato per correggere colorazioni sbagliate, rimuovere pigmenti indesiderati (verde, arancione, giallo ottone) o recuperare capelli danneggiati da trattamenti fai-da-te. Serve quando il colore attuale non corrisponde al risultato desiderato o quando i capelli presentano più tonalità disomogenee.',
  },
  {
    question: 'Quanto tempo richiede una correzione colore?',
    answer:
      'Dipende dalla condizione di partenza e dall\'obiettivo finale. Una correzione semplice richiede 3-5 ore, mentre casi complessi (es. transizione da nero a biondo) possono richiedere 6-8 ore o essere suddivisi in più sessioni per preservare la salute dei capelli. Durante la consulenza valutiamo insieme i tempi necessari.',
  },
  {
    question: 'La color correction danneggia i capelli?',
    answer:
      'Con la tecnica professionale corretta, prodotti premium (Olaplex, Wellaplex) e un colorista esperto, i danni sono minimizzati. Lavoriamo con protocolli specifici che proteggono la fibra capillare durante il processo. È fondamentale evitare decolorazioni aggressive fai-da-te che possono compromettere irreparabilmente i capelli.',
  },
  {
    question: 'Posso passare dal nero al biondo in una seduta?',
    answer:
      'Dipende dallo stato di salute dei capelli e dal tipo di nero (naturale, tintura, hennè). In molti casi è necessario procedere gradualmente in 2-3 sessioni distanziate per preservare l\'integrità del capello. Una transizione forzata in una sola seduta rischia di causare danni irreversibili. Valutiamo la strategia migliore durante la consulenza.',
  },
  {
    question: 'Quanto costa una color correction?',
    answer:
      'Il costo varia in base alla complessità del caso, lunghezza dei capelli, prodotti necessari e numero di sessioni. Parte da €150 per correzioni semplici fino a €400+ per transizioni complete. Durante la consulenza gratuita ti forniamo un preventivo dettagliato e personalizzato senza impegno.',
  },
  {
    question: 'Come mantenere il risultato dopo la correzione?',
    answer:
      'Essenziale usare shampoo e balsamo specifici per capelli trattati (senza solfati), applicare maschere ricostruttive settimanali, protettori di colore e limitare fonti di calore. Ti forniamo un piano di manutenzione personalizzato con prodotti professionali e indicazioni precise per far durare il colore 8-12 settimane.',
  },
];

export default function ColorCorrectionPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center rounded-full bg-gold-500 px-4 py-2 text-sm font-medium text-white">
                <span className="mr-2">🎨</span>
                Specialisti Correzione Colore
              </div>

              <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Color Correction
                <br />
                <span className="text-gold-600">Professionale</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                Recuperiamo anche i casi più complessi: colorazioni sbagliate, capelli danneggiati,
                transizioni dal nero, rimozione pigmenti indesiderati. Tecnica avanzata con Olaplex
                per risultati perfetti senza compromettere la salute dei capelli.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  href={getWhatsAppLink('Vorrei una consulenza per la Color Correction')}
                  variant="whatsapp"
                  size="lg"
                  external
                >
                  Consulenza Gratuita
                </Button>
                <Button href="/contatti" variant="outline" size="lg">
                  Invia Foto Capelli
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 shadow-2xl">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 text-8xl">🎨</div>
                    <p className="text-2xl font-bold text-gray-700">Color Correction</p>
                    <p className="text-gray-600">Recupero Colore Professionale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Casi che Trattiamo */}
      <Section background="white" padding="xl">
        <Container>
          <h2 className="section-heading text-center">Situazioni che Risolviamo</h2>
          <p className="section-subtitle text-center">
            Specializzati nel recupero di qualsiasi problema di colore
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🟤➡️👱‍♀️',
                title: 'Transizione dal Nero',
                desc: 'Da bruno scuro/nero a biondo, caramello o balayage con tecnica graduale sicura',
              },
              {
                icon: '🟧',
                title: 'Rimozione Riflessi Arancioni',
                desc: 'Eliminazione toni ottoni indesiderati e neutralizzazione pigmenti caldi',
              },
              {
                icon: '🟢',
                title: 'Correzione Riflessi Verdi',
                desc: 'Rimozione pigmenti verdi da decolorazioni o colorazioni su cenere',
              },
              {
                icon: '🎭',
                title: 'Colori Disomogenei',
                desc: 'Uniformazione di capelli con più tonalità, ricrescite evidenti, chiazze',
              },
              {
                icon: '💔',
                title: 'Capelli Danneggiati',
                desc: 'Recupero struttura dopo trattamenti aggressivi, decolorazioni fai-da-te',
              },
              {
                icon: '❌',
                title: 'Colorazioni Sbagliate',
                desc: 'Correzione tinta troppo scura, troppo chiara, tono sbagliato',
              },
            ].map((situation, index) => (
              <div
                key={index}
                className="rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-lg transition-all hover:-translate-y-2 hover:border-gold-200 hover:shadow-xl"
              >
                <div className="mb-4 text-4xl">{situation.icon}</div>
                <h3 className="mb-2 font-display text-xl font-bold text-gray-900">
                  {situation.title}
                </h3>
                <p className="text-gray-600">{situation.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Processo */}
      <Section background="gradient" padding="xl">
        <Container>
          <h2 className="section-heading text-center">Il Nostro Processo in 5 Fasi</h2>
          <p className="section-subtitle text-center">
            Metodologia professionale per risultati garantiti
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Diagnosi Completa',
                desc: 'Analizziamo la condizione attuale: porosità, elasticità, storia colorazioni precedenti, pigmenti presenti. Valutiamo la fattibilità e definiamo il piano d\'azione.',
                icon: '🔬',
              },
              {
                number: '02',
                title: 'Test di Prova',
                desc: 'Eseguiamo test su ciocche campione per prevedere la reazione e aggiustare la formula. Verifichiamo tempi di posa e concentrazione prodotti.',
                icon: '🧪',
              },
              {
                number: '03',
                title: 'Preparazione Capelli',
                desc: 'Applicazione trattamenti pre-decolorazione (Olaplex Step 1) per proteggere i legami della cheratina durante il processo chimico.',
                icon: '🛡️',
              },
              {
                number: '04',
                title: 'Correzione Graduale',
                desc: 'Rimozione pigmenti indesiderati con tecniche mirate (decapaggio, decolorazione controllata, toner specifici). Procediamo per gradi rispettando i capelli.',
                icon: '🎨',
              },
              {
                number: '05',
                title: 'Tonalizzazione Finale',
                desc: 'Applicazione del colore definitivo con toner professionali per neutralizzare sottotoni e ottenere la nuance desiderata. Sigillatura con trattamenti ricostruttivi.',
                icon: '✨',
              },
              {
                number: '06',
                title: 'Piano Mantenimento',
                desc: 'Forniamo schema di manutenzione personalizzato: prodotti specifici, frequenza ritocchi, protezione colore. Follow-up incluso.',
                icon: '📋',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative rounded-2xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 font-display text-xl font-bold text-white shadow-md">
                  {step.number}
                </div>
                <div className="mb-3 text-4xl">{step.icon}</div>
                <h3 className="mb-2 font-display text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Prodotti Premium */}
      <Section background="white" padding="xl">
        <Container size="md">
          <h2 className="section-heading text-center">Prodotti Premium che Utilizziamo</h2>
          <div className="mt-12 space-y-6">
            {[
              {
                name: 'Olaplex',
                desc: 'Sistema di protezione dei legami della cheratina in 3 fasi. Previene rotture e danni durante decolorazioni e colorazioni aggressive. Ricostruisce la struttura dall\'interno.',
              },
              {
                name: 'Wellaplex',
                desc: 'Tecnologia bond-building per capelli più forti e sani. Riduce i danni chimici fino al 94%. Ideale per transizioni complesse e capelli fragili.',
              },
              {
                name: 'Redken Shades EQ',
                desc: 'Toner acidi ad alte prestazioni per tonalizzazioni perfette senza danneggiare. Gamma cromatica vastissima per neutralizzazioni precise.',
              },
              {
                name: 'Wella Blondor',
                desc: 'Decolorante professionale di ultima generazione con tecnologia anti-giallo. Schiarisce fino a 7 toni preservando la qualità del capello.',
              },
            ].map((product, index) => (
              <div
                key={index}
                className="flex items-start rounded-2xl bg-gradient-to-r from-gold-50 to-white p-6 shadow-md"
              >
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-500 text-2xl text-white">
                  💎
                </div>
                <div>
                  <h3 className="mb-2 font-display text-xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-700">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-gold-50 p-6 text-center">
            <p className="text-lg font-medium text-gray-800">
              <span className="text-gold-600">✓</span> Solo prodotti professionali originali
              <br />
              <span className="text-gold-600">✓</span> Nessun prodotto da supermercato o fai-da-te
              <br />
              <span className="text-gold-600">✓</span> Formule personalizzate per ogni caso
            </p>
          </div>
        </Container>
      </Section>

      {/* Specializzazione Biondo */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="rounded-2xl bg-white p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="mb-4 font-display text-3xl font-bold text-gray-900">
                  Specialisti del Biondo Perfetto
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  La transizione verso tonalità bionde richiede competenze tecniche avanzate.
                  Siamo specializzati in:
                </p>
                <ul className="space-y-4">
                  {[
                    'Biondo platino ghiaccio senza danni',
                    'Balayage naturale con schiariture graduate',
                    'Biondo cenere e biondo beige senza riflessi gialli',
                    'Biondo dorato caldo luminoso',
                    'Manutenzione biondo con toner personalizzati',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-gold-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="aspect-square w-64 overflow-hidden rounded-full bg-gradient-to-br from-gold-200 via-gold-100 to-white shadow-2xl">
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <div className="mb-2 text-6xl">👱‍♀️</div>
                        <p className="font-display text-2xl font-bold text-gray-800">
                          Biondo Perfetto
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 rounded-full bg-gold-500 px-6 py-3 font-bold text-white shadow-lg">
                    Esperti
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="white" padding="xl">
        <Container size="md">
          <h2 className="section-heading text-center">Domande Frequenti</h2>
          <div className="mt-12 space-y-6">
            {FAQ.map((item, index) => (
              <details
                key={index}
                className="group rounded-2xl bg-gray-50 p-6 shadow-md transition-all hover:shadow-lg"
              >
                <summary className="flex cursor-pointer items-center justify-between font-display text-xl font-bold text-gray-900">
                  {item.question}
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-gold-600 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="rounded-2xl bg-white p-8 text-center shadow-2xl md:p-12">
            <h2 className="mb-4 font-display text-3xl font-bold text-gray-900 md:text-4xl">
              Recuperiamo Anche il Tuo Colore
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Consulenza gratuita senza impegno. Inviaci foto dei tuoi capelli su WhatsApp e ti
              diremo subito se possiamo aiutarti, tempi necessari e costo stimato.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href={getWhatsAppLink('Ciao, vorrei una consulenza per color correction. Invio foto dei miei capelli.')}
                variant="whatsapp"
                size="lg"
                external
              >
                Invia Foto su WhatsApp
              </Button>
              <Button href="/servizi" variant="outline" size="lg">
                Vedi Altri Servizi
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Valutazione gratuita • Preventivo personalizzato • Garanzia risultato
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
