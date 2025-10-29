import type { Metadata } from 'next';import type { Metadata } from 'next';

import Container from '@/components/ui/Container';import Container from '@/components/ui/Container';

import Section from '@/components/ui/Section';import Section from '@/components/ui/Section';

import Button from '@/components/ui/Button';import Button from '@/components/ui/Button';

import { getWhatsAppLink } from '@/lib/whatsapp';import { getWhatsAppLink } from '@/lib/whatsapp';



export const metadata: Metadata = {export const metadata: Metadata = {

  title: 'Hair Extensions Catanzaro | Extension Capelli Veri 100% Naturali Tape-In',  title: 'Hair Extensions Catanzaro | Extension Capelli Veri 100% Naturali',

  description:  description:

    'Extension capelli naturali Tape-In di alta qualità a Catanzaro. Capelli vergini da singolo donatore. Color matching perfetto e applicazione professionale. Prenota consulenza gratuita!',    'Extension capelli naturali di alta qualità a Catanzaro. Cheratina, Tape-in, Weft cuciti. Color matching perfetto e applicazione professionale. Prenota consulenza gratuita!',

  keywords: [  keywords: [

    'hair extensions catanzaro',    'hair extensions catanzaro',

    'extension capelli veri catanzaro',    'extension capelli veri catanzaro',

    'extension capelli naturali calabria',    'extension capelli naturali calabria',

    'tape in extensions catanzaro',    'extension cheratina catanzaro',

    'extension tape in calabria',    'tape in extensions catanzaro',

  ],  ],

};};



const FAQ = [const FAQ = [

  {  {

    question: 'Che tipo di extension offrite?',    question: 'Che tipo di extension offrite?',

    answer:    answer:

      'Offriamo esclusivamente extension Tape-In con capelli vergini da singolo donatore di qualità premium. La tecnica Tape-In utilizza un sistema adesivo ultra-sottile per un risultato invisibile e naturale. Durante la consulenza gratuita valuteremo insieme se questa tecnica è adatta alle tue esigenze.',      'Offriamo extension 100% capelli naturali Remy Hair di qualità premium in diverse applicazioni: extension a cheratina (durata 4-6 mesi), tape-in (durata 2-3 mesi) e weft cuciti (durata 3-4 mesi). Durante la consulenza gratuita ti aiuteremo a scegliere la tecnica più adatta alle tue esigenze.',

  },  },

  {  {

    question: 'Quanto durano le extension Tape-In?',    question: 'Quanto durano le extension?',

    answer:    answer:

      'Le extension Tape-In durano 2-3 mesi con possibilità di riposizionamento. Sono ideali per volumi leggeri e per chi vuole cambiare look frequentemente. Con la giusta manutenzione e i prodotti adeguati, puoi ottimizzare la durata delle tue extension.',      'La durata dipende dal metodo di applicazione: le extension a cheratina durano 4-6 mesi, le tape-in 2-3 mesi (con possibilità di riposizionamento), i weft cuciti 3-4 mesi. Con la giusta manutenzione e i prodotti adeguati, puoi ottimizzare la durata delle tue extension.',

  },  },

  {  {

    question: 'Le extension rovinano i capelli?',    question: 'Le extension rovinano i capelli?',

    answer:    answer:

      'Assolutamente no! La tecnica Tape-In è una delle più delicate e sicure. Il sistema adesivo ultra-sottile non danneggia il capello naturale e permette una rimozione semplice e senza traumi. È fondamentale seguire le indicazioni di manutenzione.',      'Assolutamente no, se applicate correttamente da professionisti esperti. Utilizziamo solo tecniche certificate e prodotti di alta qualità che non danneggiano il capello naturale. È fondamentale seguire le indicazioni di manutenzione e non sovraccaricare i capelli.',

  },  },

  {  {

    question: 'Come funziona il color matching?',    question: 'Come funziona il color matching?',

    answer:    answer:

      'Effettuiamo uno studio accurato del tuo colore naturale o del colore desiderato, considerando sfumature, riflessi e la struttura del capello. Possiamo mixare diverse tonalità per un risultato ultra-naturale e, se necessario, ritoccare il colore delle extension per un match perfetto.',      'Effettuiamo uno studio accurato del tuo colore naturale o del colore desiderato, considerando sfumature, riflessi e la struttura del capello. Possiamo mixare diverse tonalità per un risultato ultra-naturale e, se necessario, ritoccare il colore delle extension per un match perfetto.',

  },  },

  {  {

    question: 'Posso fare shampoo, piscina e mare con le extension?',    question: 'Posso fare shampoo, piscina e mare con le extension?',

    answer:    answer:

      'Sì! Puoi lavare normalmente i capelli (evitando prodotti oleosi vicino all\'attaccatura), fare il bagno in mare e piscina. Ti consigliamo di proteggere le extension con oli specifici e di risciacquare sempre dopo mare/piscina. Evitiamo fonti di calore eccessivo diretto sulle attaccature.',      'Sì! Puoi lavare normalmente i capelli (evitando prodotti oleosi vicino all\'attaccatura), fare il bagno in mare e piscina. Ti consigliamo di proteggere le extension con oli specifici e di risciacquare sempre dopo mare/piscina. Evitiamo fonti di calore eccessivo diretto sulle giunture.',

  },  },

];];



export default function HairExtensionsPage() {export default function HairExtensionsPage() {

  return (  return (

    <>    <>

      {/* Hero */}      {/* Hero */}

      <Section background="gradient" padding="xl">      <Section background="gradient" padding="xl">

        <Container>        <Container>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

            <div className="flex flex-col justify-center">            <div className="flex flex-col justify-center">

              <div className="mb-4 inline-flex w-fit items-center rounded-full bg-gold-500 px-4 py-2 text-sm font-medium text-white">              <div className="mb-4 inline-flex w-fit items-center rounded-full bg-gold-500 px-4 py-2 text-sm font-medium text-white">

                <span className="mr-2">💁‍♀️</span>                <span className="mr-2">💁‍♀️</span>

                100% Capelli Vergini da Singolo Donatore                100% Capelli Naturali

              </div>              </div>



              <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-gray-900 md:text-5xl">              <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-gray-900 md:text-5xl">

                Hair Extensions                Hair Extensions

                <br />                <br />

                <span className="text-gold-600">Tape-In Premium</span>                <span className="text-gold-600">Premium Quality</span>

              </h1>              </h1>



              <p className="mb-8 text-xl leading-relaxed text-gray-600">              <p className="mb-8 text-xl leading-relaxed text-gray-600">

                Extension di alta qualità con capelli 100% naturali da singolo donatore. Lunghezza e volume                 Extension di alta qualità con capelli 100% naturali Remy Hair. Lunghezza e volume

                immediati con risultato invisibile e super naturale. Color matching perfetto garantito.                immediati con risultato invisibile e super naturale. Color matching perfetto

              </p>                garantito.

              </p>

              <div className="flex flex-wrap gap-4">

                <Button              <div className="flex flex-wrap gap-4">

                  href={getWhatsAppLink('Vorrei informazioni sulle Hair Extensions Tape-In')}                <Button

                  variant="whatsapp"                  href={getWhatsAppLink('Vorrei informazioni sulle Hair Extensions')}

                  size="lg"                  variant="whatsapp"

                  external                  size="lg"

                >                  external

                  Prenota Consulenza Gratuita                >

                </Button>                  Prenota Consulenza Gratuita

                <Button href="/contatti" variant="outline" size="lg">                </Button>

                  Chiedi Info                <Button href="/contatti" variant="outline" size="lg">

                </Button>                  Chiedi Info

              </div>                </Button>

            </div>              </div>

            </div>

            <div className="relative">

              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 shadow-2xl">            <div className="relative">

                <div className="flex h-full items-center justify-center">              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 shadow-2xl">

                  <div className="text-center">                <div className="flex h-full items-center justify-center">

                    <div className="mb-4 text-8xl">💁‍♀️</div>                  <div className="text-center">

                    <p className="text-2xl font-bold text-gray-700">Hair Extensions</p>                    <div className="mb-4 text-8xl">💁‍♀️</div>

                    <p className="text-gray-600">Trasformazione Tape-In</p>                    <p className="text-2xl font-bold text-gray-700">Hair Extensions</p>

                  </div>                    <p className="text-gray-600">Trasformazione Completa</p>

                </div>                  </div>

              </div>                </div>

            </div>              </div>

          </div>            </div>

        </Container>          </div>

      </Section>        </Container>

      </Section>

      {/* Tecnica Tape-In */}

      <Section background="white" padding="xl">      {/* Tipologie */}

        <Container>      <Section background="white" padding="xl">

          <h2 className="section-heading text-center">La Nostra Tecnica: Tape-In</h2>        <Container>

          <p className="section-subtitle text-center">          <h2 className="section-heading text-center">Tipologie di Extension</h2>

            Sistema adesivo ultra-sottile per un risultato perfetto          <p className="section-subtitle text-center">

          </p>            Scegli il metodo perfetto per le tue esigenze

          </p>

          <div className="mt-12 max-w-4xl mx-auto">

            <div className="rounded-2xl border-2 border-gold-200 bg-gradient-to-br from-white to-gold-50 p-8 shadow-xl">          <div className="mt-12 grid gap-8 md:grid-cols-3">

              <div className="text-center mb-8">            {[

                <div className="mb-4 text-6xl">📦</div>              {

                <h3 className="mb-2 font-display text-3xl font-bold text-gray-900">                title: 'Extension a Cheratina',

                  Extension Tape-In Premium                icon: '🔥',

                </h3>                duration: '4-6 mesi',

                <div className="mb-4 inline-block rounded-full bg-gold-100 px-4 py-2 text-lg font-medium text-gold-700">                description:

                  Durata: 90 minuti di applicazione                  'Le più durature e resistenti. Applicate con microanelli di cheratina termoattivati. Invisibili e comode, perfette per un look a lungo termine.',

                </div>                pros: ['Durata massima', 'Invisibili', 'Resistenti', 'Naturali'],

              </div>              },

              {

              <p className="mb-6 text-lg text-gray-600 text-center max-w-3xl mx-auto">                title: 'Tape-In',

                Extension adesive ultra-sottili, veloci da applicare e rimuovere. Ideali per volumi                 icon: '📦',

                leggeri e per chi vuole cambiare look frequentemente. Sistema riposizionabile e delicato.                duration: '2-3 mesi',

              </p>                description:

                  'Extension adesive ultrasottili, veloci da applicare e rimuovere. Ideali per volumi leggeri e per chi vuole cambiare look frequentemente. Riposizionabili.',

              <div className="grid md:grid-cols-2 gap-8 mt-8">                pros: ['Applicazione rapida', 'Leggerissime', 'Riposizionabili', 'Delicate'],

                <div>              },

                  <h4 className="font-display text-xl font-bold text-gray-900 mb-4">✨ Vantaggi Principali</h4>              {

                  <ul className="space-y-3">                title: 'Weft Cuciti',

                    {[                icon: '🧵',

                      'Applicazione rapida (90 minuti)',                duration: '3-4 mesi',

                      'Sistema ultra-leggero',                description:

                      'Completamente riposizionabili',                  'Ciocche cucite su una treccia sottile dei tuoi capelli. Tecnica tradizionale sicura, confortevole e removibile senza danni.',

                      'Delicate sui capelli naturali',                pros: ['Sicure', 'Confortevoli', 'Tradizionali', 'Versatili'],

                      'Risultato invisibile',              },

                      'Facile manutenzione'            ].map((type, index) => (

                    ].map((pro, i) => (              <div

                      <li key={i} className="flex items-center text-gray-700">                key={index}

                        <svg                className="rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-lg transition-all hover:-translate-y-2 hover:border-gold-200 hover:shadow-xl"

                          className="mr-3 h-5 w-5 text-gold-500 flex-shrink-0"              >

                          fill="currentColor"                <div className="mb-4 text-5xl">{type.icon}</div>

                          viewBox="0 0 20 20"                <h3 className="mb-2 font-display text-2xl font-bold text-gray-900">

                        >                  {type.title}

                          <path                </h3>

                            fillRule="evenodd"                <div className="mb-4 inline-block rounded-full bg-gold-100 px-3 py-1 text-sm font-medium text-gold-700">

                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"                  Durata: {type.duration}

                            clipRule="evenodd"                </div>

                          />                <p className="mb-4 text-gray-600">{type.description}</p>

                        </svg>                <ul className="space-y-2">

                        {pro}                  {type.pros.map((pro, i) => (

                      </li>                    <li key={i} className="flex items-center text-sm text-gray-700">

                    ))}                      <svg

                  </ul>                        className="mr-2 h-4 w-4 text-gold-500"

                </div>                        fill="currentColor"

                        viewBox="0 0 20 20"

                <div>                      >

                  <h4 className="font-display text-xl font-bold text-gray-900 mb-4">🎯 Ideale Per</h4>                        <path

                  <ul className="space-y-3">                          fillRule="evenodd"

                    {[                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"

                      'Chi desidera un cambio look temporaneo',                          clipRule="evenodd"

                      'Volumi leggeri e naturali',                        />

                      'Prima esperienza con le extension',                      </svg>

                      'Capelli fini e delicati',                      {pro}

                      'Chi cambia spesso acconciatura',                    </li>

                      'Risultato discreto e professionale'                  ))}

                    ].map((ideal, i) => (                </ul>

                      <li key={i} className="flex items-center text-gray-700">              </div>

                        <svg            ))}

                          className="mr-3 h-5 w-5 text-gold-500 flex-shrink-0"          </div>

                          fill="currentColor"        </Container>

                          viewBox="0 0 20 20"      </Section>

                        >

                          <path      {/* Perché Sceglierci */}

                            fillRule="evenodd"      <Section background="gradient" padding="xl">

                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"        <Container>

                            clipRule="evenodd"          <h2 className="section-heading text-center">Perché Scegliere le Nostre Extension</h2>

                          />          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        </svg>            {[

                        {ideal}              {

                      </li>                icon: '✨',

                    ))}                title: 'Capelli 100% Naturali',

                  </ul>                desc: 'Solo Remy Hair di altissima qualità, cuticole allineate e zero sintetici',

                </div>              },

              </div>              {

            </div>                icon: '🎨',

          </div>                title: 'Color Matching Perfetto',

        </Container>                desc: 'Studio personalizzato del tuo colore con match preciso al millimetro',

      </Section>              },

              {

      {/* Perché Sceglierci */}                icon: '👩‍🔬',

      <Section background="gradient" padding="xl">                title: 'Applicazione Professionale',

        <Container>                desc: 'Tecnici certificati con anni di esperienza specifica in extension',

          <h2 className="section-heading text-center">Perché Scegliere le Nostre Extension</h2>              },

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">              {

            {[                icon: '🛡️',

              {                title: 'Senza Danni',

                icon: '✨',                desc: 'Tecniche sicure che rispettano la salute dei tuoi capelli naturali',

                title: 'Capelli Vergini Premium',              },

                desc: 'Solo capelli vergini da singolo donatore, cuticole allineate e zero sintetici',              {

              },                icon: '💎',

              {                title: 'Risultato Invisibile',

                icon: '🎨',                desc: 'Attaccature impercettibili per un effetto ultra-naturale',

                title: 'Color Matching Perfetto',              },

                desc: 'Studio personalizzato del tuo colore con match preciso al millimetro',              {

              },                icon: '🔧',

              {                title: 'Manutenzione Inclusa',

                icon: '👩‍🔬',                desc: 'Assistenza e consigli personalizzati per la cura quotidiana',

                title: 'Applicazione Professionale',              },

                desc: 'Tecnici certificati con anni di esperienza specifica in Tape-In',            ].map((item, index) => (

              },              <div

              {                key={index}

                icon: '🛡️',                className="rounded-2xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1"

                title: 'Sistema Delicato',              >

                desc: 'Tecnica Tape-In sicura che rispetta la salute dei tuoi capelli naturali',                <div className="mb-3 text-4xl">{item.icon}</div>

              },                <h3 className="mb-2 font-display text-xl font-bold text-gray-900">{item.title}</h3>

              {                <p className="text-gray-600">{item.desc}</p>

                icon: '💎',              </div>

                title: 'Risultato Invisibile',            ))}

                desc: 'Attaccature impercettibili per un effetto ultra-naturale',          </div>

              },        </Container>

              {      </Section>

                icon: '🔧',

                title: 'Manutenzione Inclusa',      {/* Manutenzione */}

                desc: 'Assistenza e consigli personalizzati per la cura quotidiana',      <Section background="white" padding="xl">

              },        <Container size="md">

            ].map((item, index) => (          <h2 className="section-heading text-center">Come Prenderti Cura delle Extension</h2>

              <div          <div className="mt-12 space-y-6">

                key={index}            {[

                className="rounded-2xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1"              {

              >                title: 'Lavaggio',

                <div className="mb-3 text-4xl">{item.icon}</div>                tips: [

                <h3 className="mb-2 font-display text-xl font-bold text-gray-900">{item.title}</h3>                  'Lava i capelli 2-3 volte a settimana massimo',

                <p className="text-gray-600">{item.desc}</p>                  'Usa shampoo e balsamo senza solfati e siliconi pesanti',

              </div>                  'Evita di applicare balsamo sulle giunture delle extension',

            ))}                  'Tampona delicatamente, non strofinare',

          </div>                ],

        </Container>              },

      </Section>              {

                title: 'Styling',

      {/* Manutenzione */}                tips: [

      <Section background="white" padding="xl">                  'Pettina sempre con spazzola specifica per extension',

        <Container size="md">                  'Inizia dalle punte e sali gradualmente',

          <h2 className="section-heading text-center">Come Prenderti Cura delle Extension Tape-In</h2>                  'Proteggi con termoprotettore prima di phon/piastra',

          <div className="mt-12 space-y-6">                  'Evita temperature superiori a 180°C',

            {[                ],

              {              },

                title: 'Lavaggio',              {

                tips: [                title: 'Notte',

                  'Lava i capelli 2-3 volte a settimana massimo',                tips: [

                  'Usa shampoo e balsamo senza solfati e siliconi pesanti',                  'Fai una treccia morbida o coda bassa prima di dormire',

                  'Evita di applicare balsamo sulle bande adesive',                  'Usa una federa in seta o raso per ridurre l\'attrito',

                  'Tampona delicatamente, non strofinare le attaccature',                  'Non dormire mai con i capelli bagnati',

                ],                ],

              },              },

              {              {

                title: 'Styling',                title: 'Da Evitare',

                tips: [                tips: [

                  'Pettina sempre con spazzola specifica per extension',                  'Oli e maschere pesanti vicino alle attaccature',

                  'Inizia dalle punte e sali gradualmente',                  'Colorazioni/decolorazioni fai-da-te sulle extension',

                  'Proteggi con termoprotettore prima di phon/piastra',                  'Tirare o strattonare durante lo styling',

                  'Evita temperature superiori a 180°C vicino alle bande',                  'Cloro e acqua salata senza protezione',

                ],                ],

              },              },

              {            ].map((section, index) => (

                title: 'Notte',              <div key={index} className="rounded-2xl bg-gray-50 p-6">

                tips: [                <h3 className="mb-4 font-display text-2xl font-bold text-gray-900">

                  'Fai una treccia morbida o coda bassa prima di dormire',                  {section.title}

                  'Usa una federa in seta o raso per ridurre l\'attrito',                </h3>

                  'Non dormire mai con i capelli bagnati',                <ul className="space-y-3">

                  'Evita di tirare le extension durante il sonno',                  {section.tips.map((tip, i) => (

                ],                    <li key={i} className="flex items-start">

              },                      <svg

              {                        className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-gold-500"

                title: 'Da Evitare',                        fill="currentColor"

                tips: [                        viewBox="0 0 20 20"

                  'Oli e maschere pesanti vicino alle bande adesive',                      >

                  'Colorazioni/decolorazioni fai-da-te sulle extension',                        <path

                  'Tirare o strattonare durante lo styling',                          fillRule="evenodd"

                  'Cloro e acqua salata senza protezione specifica',                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"

                ],                          clipRule="evenodd"

              },                        />

            ].map((section, index) => (                      </svg>

              <div key={index} className="rounded-2xl bg-gray-50 p-6">                      <span className="text-gray-700">{tip}</span>

                <h3 className="mb-4 font-display text-2xl font-bold text-gray-900">                    </li>

                  {section.title}                  ))}

                </h3>                </ul>

                <ul className="space-y-3">              </div>

                  {section.tips.map((tip, i) => (            ))}

                    <li key={i} className="flex items-start">          </div>

                      <svg        </Container>

                        className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-gold-500"      </Section>

                        fill="currentColor"

                        viewBox="0 0 20 20"      {/* FAQ */}

                      >      <Section background="gray" padding="xl">

                        <path        <Container size="md">

                          fillRule="evenodd"          <h2 className="section-heading text-center">Domande Frequenti</h2>

                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"          <div className="mt-12 space-y-6">

                          clipRule="evenodd"            {FAQ.map((item, index) => (

                        />              <details

                      </svg>                key={index}

                      <span className="text-gray-700">{tip}</span>                className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-lg"

                    </li>              >

                  ))}                <summary className="flex cursor-pointer items-center justify-between font-display text-xl font-bold text-gray-900">

                </ul>                  {item.question}

              </div>                  <svg

            ))}                    className="h-6 w-6 flex-shrink-0 text-gold-600 transition-transform group-open:rotate-180"

          </div>                    fill="none"

        </Container>                    stroke="currentColor"

      </Section>                    viewBox="0 0 24 24"

                  >

      {/* FAQ */}                    <path

      <Section background="gray" padding="xl">                      strokeLinecap="round"

        <Container size="md">                      strokeLinejoin="round"

          <h2 className="section-heading text-center">Domande Frequenti</h2>                      strokeWidth={2}

          <div className="mt-12 space-y-6">                      d="M19 9l-7 7-7-7"

            {FAQ.map((item, index) => (                    />

              <details                  </svg>

                key={index}                </summary>

                className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-lg"                <p className="mt-4 leading-relaxed text-gray-700">{item.answer}</p>

              >              </details>

                <summary className="flex cursor-pointer items-center justify-between font-display text-xl font-bold text-gray-900">            ))}

                  {item.question}          </div>

                  <svg        </Container>

                    className="h-6 w-6 flex-shrink-0 text-gold-600 transition-transform group-open:rotate-180"      </Section>

                    fill="none"

                    stroke="currentColor"      {/* CTA */}

                    viewBox="0 0 24 24"      <Section background="gradient" padding="xl">

                  >        <Container>

                    <path          <div className="rounded-2xl bg-white p-8 text-center shadow-2xl md:p-12">

                      strokeLinecap="round"            <h2 className="mb-4 font-display text-3xl font-bold text-gray-900 md:text-4xl">

                      strokeLinejoin="round"              Inizia la Tua Trasformazione

                      strokeWidth={2}            </h2>

                      d="M19 9l-7 7-7-7"            <p className="mb-8 text-xl text-gray-600">

                    />              Prenota una consulenza gratuita e scopri quale tipo di extension è perfetta per te.

                  </svg>              Analizzeremo i tuoi capelli e ti mostreremo esempi reali.

                </summary>            </p>

                <p className="mt-4 leading-relaxed text-gray-700">{item.answer}</p>            <div className="flex flex-wrap justify-center gap-4">

              </details>              <Button

            ))}                href={getWhatsAppLink('Ciao, vorrei una consulenza gratuita per le extension!')}

          </div>                variant="whatsapp"

        </Container>                size="lg"

      </Section>                external

              >

      {/* CTA */}                Consulenza Gratuita

      <Section background="gradient" padding="xl">              </Button>

        <Container>              <Button href="/servizi" variant="outline" size="lg">

          <div className="rounded-2xl bg-white p-8 text-center shadow-2xl md:p-12">                Vedi Altri Servizi

            <h2 className="mb-4 font-display text-3xl font-bold text-gray-900 md:text-4xl">              </Button>

              Scopri le Extension Tape-In            </div>

            </h2>            <p className="mt-6 text-sm text-gray-500">

            <p className="mb-8 text-xl text-gray-600">              Consulenza personalizzata • Color matching incluso • Garanzia qualità

              Prenota una consulenza gratuita e scopri se le extension Tape-In sono perfette per te.            </p>

              Analizzeremo i tuoi capelli e ti mostreremo esempi reali.          </div>

            </p>        </Container>

            <div className="flex flex-wrap justify-center gap-4">      </Section>

              <Button    </>

                href={getWhatsAppLink('Ciao, vorrei una consulenza gratuita per le extension Tape-In!')}  );

                variant="whatsapp"}

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