import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { getWhatsAppLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Hair Extensions Catanzaro | Extension Capelli Veri 100% Naturali',
  description:
    'Extension capelli naturali di alta qualità a Catanzaro. Cheratina, Tape-in, Weft cuciti. Color matching perfetto e applicazione professionale. Prenota consulenza gratuita!',
  keywords: [
    'hair extensions catanzaro',
    'extension capelli veri catanzaro',
    'extension capelli naturali calabria',
    'extension cheratina catanzaro',
    'tape in extensions catanzaro',
  ],
};

const FAQ = [
  {
    question: 'Che tipo di extension offrite?',
    answer:
      'Offriamo extension 100% capelli naturali Remy Hair di qualità premium in diverse applicazioni: extension a cheratina (durata 4-6 mesi), tape-in (durata 2-3 mesi) e weft cuciti (durata 3-4 mesi). Durante la consulenza gratuita ti aiuteremo a scegliere la tecnica più adatta alle tue esigenze.',
  },
  {
    question: 'Quanto durano le extension?',
    answer:
      'La durata dipende dal metodo di applicazione: le extension a cheratina durano 4-6 mesi, le tape-in 2-3 mesi (con possibilità di riposizionamento), i weft cuciti 3-4 mesi. Con la giusta manutenzione e i prodotti adeguati, puoi ottimizzare la durata delle tue extension.',
  },
  {
    question: 'Le extension rovinano i capelli?',
    answer:
      'Assolutamente no, se applicate correttamente da professionisti esperti. Utilizziamo solo tecniche certificate e prodotti di alta qualità che non danneggiano il capello naturale. È fondamentale seguire le indicazioni di manutenzione e non sovraccaricare i capelli.',
  },
  {
    question: 'Come funziona il color matching?',
    answer:
      'Effettuiamo uno studio accurato del tuo colore naturale o del colore desiderato, considerando sfumature, riflessi e la struttura del capello. Possiamo mixare diverse tonalità per un risultato ultra-naturale e, se necessario, ritoccare il colore delle extension per un match perfetto.',
  },
  {
    question: 'Posso fare shampoo, piscina e mare con le extension?',
    answer:
      'Sì! Puoi lavare normalmente i capelli (evitando prodotti oleosi vicino all\'attaccatura), fare il bagno in mare e piscina. Ti consigliamo di proteggere le extension con oli specifici e di risciacquare sempre dopo mare/piscina. Evitiamo fonti di calore eccessivo diretto sulle giunture.',
  },
];

export default function HairExtensionsPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center rounded-full bg-gold-500 px-4 py-2 text-sm font-medium text-white">
                <span className="mr-2">💁‍♀️</span>
                100% Capelli Naturali
              </div>

              <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Hair Extensions
                <br />
                <span className="text-gold-600">Premium Quality</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                Extension di alta qualità con capelli 100% naturali Remy Hair. Lunghezza e volume
                immediati con risultato invisibile e super naturale. Color matching perfetto
                garantito.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  href={getWhatsAppLink('Vorrei informazioni sulle Hair Extensions')}
                  variant="whatsapp"
                  size="lg"
                  external
                >
                  Prenota Consulenza Gratuita
                </Button>
                <Button href="/contatti" variant="outline" size="lg">
                  Chiedi Info
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 shadow-2xl">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 text-8xl">💁‍♀️</div>
                    <p className="text-2xl font-bold text-gray-700">Hair Extensions</p>
                    <p className="text-gray-600">Trasformazione Completa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Tipologie */}
      <Section background="white" padding="xl">
        <Container>
          <h2 className="section-heading text-center">Tipologie di Extension</h2>
          <p className="section-subtitle text-center">
            Scegli il metodo perfetto per le tue esigenze
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Extension a Cheratina',
                icon: '🔥',
                duration: '4-6 mesi',
                description:
                  'Le più durature e resistenti. Applicate con microanelli di cheratina termoattivati. Invisibili e comode, perfette per un look a lungo termine.',
                pros: ['Durata massima', 'Invisibili', 'Resistenti', 'Naturali'],
              },
              {
                title: 'Tape-In',
                icon: '📦',
                duration: '2-3 mesi',
                description:
                  'Extension adesive ultrasottili, veloci da applicare e rimuovere. Ideali per volumi leggeri e per chi vuole cambiare look frequentemente. Riposizionabili.',
                pros: ['Applicazione rapida', 'Leggerissime', 'Riposizionabili', 'Delicate'],
              },
              {
                title: 'Weft Cuciti',
                icon: '🧵',
                duration: '3-4 mesi',
                description:
                  'Ciocche cucite su una treccia sottile dei tuoi capelli. Tecnica tradizionale sicura, confortevole e removibile senza danni.',
                pros: ['Sicure', 'Confortevoli', 'Tradizionali', 'Versatili'],
              },
            ].map((type, index) => (
              <div
                key={index}
                className="rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-lg transition-all hover:-translate-y-2 hover:border-gold-200 hover:shadow-xl"
              >
                <div className="mb-4 text-5xl">{type.icon}</div>
                <h3 className="mb-2 font-display text-2xl font-bold text-gray-900">
                  {type.title}
                </h3>
                <div className="mb-4 inline-block rounded-full bg-gold-100 px-3 py-1 text-sm font-medium text-gold-700">
                  Durata: {type.duration}
                </div>
                <p className="mb-4 text-gray-600">{type.description}</p>
                <ul className="space-y-2">
                  {type.pros.map((pro, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <svg
                        className="mr-2 h-4 w-4 text-gold-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Perché Sceglierci */}
      <Section background="gradient" padding="xl">
        <Container>
          <h2 className="section-heading text-center">Perché Scegliere le Nostre Extension</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '✨',
                title: 'Capelli 100% Naturali',
                desc: 'Solo Remy Hair di altissima qualità, cuticole allineate e zero sintetici',
              },
              {
                icon: '🎨',
                title: 'Color Matching Perfetto',
                desc: 'Studio personalizzato del tuo colore con match preciso al millimetro',
              },
              {
                icon: '👩‍🔬',
                title: 'Applicazione Professionale',
                desc: 'Tecnici certificati con anni di esperienza specifica in extension',
              },
              {
                icon: '🛡️',
                title: 'Senza Danni',
                desc: 'Tecniche sicure che rispettano la salute dei tuoi capelli naturali',
              },
              {
                icon: '💎',
                title: 'Risultato Invisibile',
                desc: 'Attaccature impercettibili per un effetto ultra-naturale',
              },
              {
                icon: '🔧',
                title: 'Manutenzione Inclusa',
                desc: 'Assistenza e consigli personalizzati per la cura quotidiana',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="mb-3 text-4xl">{item.icon}</div>
                <h3 className="mb-2 font-display text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Manutenzione */}
      <Section background="white" padding="xl">
        <Container size="md">
          <h2 className="section-heading text-center">Come Prenderti Cura delle Extension</h2>
          <div className="mt-12 space-y-6">
            {[
              {
                title: 'Lavaggio',
                tips: [
                  'Lava i capelli 2-3 volte a settimana massimo',
                  'Usa shampoo e balsamo senza solfati e siliconi pesanti',
                  'Evita di applicare balsamo sulle giunture delle extension',
                  'Tampona delicatamente, non strofinare',
                ],
              },
              {
                title: 'Styling',
                tips: [
                  'Pettina sempre con spazzola specifica per extension',
                  'Inizia dalle punte e sali gradualmente',
                  'Proteggi con termoprotettore prima di phon/piastra',
                  'Evita temperature superiori a 180°C',
                ],
              },
              {
                title: 'Notte',
                tips: [
                  'Fai una treccia morbida o coda bassa prima di dormire',
                  'Usa una federa in seta o raso per ridurre l\'attrito',
                  'Non dormire mai con i capelli bagnati',
                ],
              },
              {
                title: 'Da Evitare',
                tips: [
                  'Oli e maschere pesanti vicino alle attaccature',
                  'Colorazioni/decolorazioni fai-da-te sulle extension',
                  'Tirare o strattonare durante lo styling',
                  'Cloro e acqua salata senza protezione',
                ],
              },
            ].map((section, index) => (
              <div key={index} className="rounded-2xl bg-gray-50 p-6">
                <h3 className="mb-4 font-display text-2xl font-bold text-gray-900">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-gold-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="gray" padding="xl">
        <Container size="md">
          <h2 className="section-heading text-center">Domande Frequenti</h2>
          <div className="mt-12 space-y-6">
            {FAQ.map((item, index) => (
              <details
                key={index}
                className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-lg"
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
              Inizia la Tua Trasformazione
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Prenota una consulenza gratuita e scopri quale tipo di extension è perfetta per te.
              Analizzeremo i tuoi capelli e ti mostreremo esempi reali.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href={getWhatsAppLink('Ciao, vorrei una consulenza gratuita per le extension!')}
                variant="whatsapp"
                size="lg"
                external
              >
                Consulenza Gratuita
              </Button>
              <Button href="/servizi" variant="outline" size="lg">
                Vedi Altri Servizi
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Consulenza personalizzata • Color matching incluso • Garanzia qualità
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
