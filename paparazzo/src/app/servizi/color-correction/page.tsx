import type { Metadata } from 'next';import type { Metadata } from 'next';

import Image from 'next/image';import Container from '@/components/ui/Container';

import Container from '@/components/ui/Container';import Section from '@/components/ui/Section';

import Section from '@/components/ui/Section';import Button from '@/components/ui/Button';

import Button from '@/components/ui/Button';import { getWhatsAppLink } from '@/lib/whatsapp';

import { getWhatsAppLink } from '@/lib/whatsapp';

export const metadata: Metadata = {

export const metadata: Metadata = {  title: 'Color Correction Catanzaro | Correzione Colore Capelli Danneggiati',

  title: 'Color Correction Catanzaro | Correzione Colore Professionale',  description:

  description:    'Specialisti in correzione colore a Catanzaro. Recupero capelli danneggiati, transizione dal nero, rimozione pigmenti indesiderati. Tecnica professionale con prodotti premium performanti.',

    'Specialisti in correzione colore a Catanzaro. Recuperiamo capelli danneggiati, transizioni dal nero, rimozione pigmenti. Tecnica avanzata con prodotti performanti per risultati perfetti.',  keywords: [

  keywords: [    'color correction catanzaro',

    'color correction catanzaro',    'correzione colore capelli catanzaro',

    'correzione colore capelli',    'decolorazione sicura calabria',

    'rimozione pigmenti',    'rimozione colore nero catanzaro',

    'transizione dal nero',    'schiariture graduate catanzaro',

    'biondo perfetto catanzaro',  ],

  ],};

};

const FAQ = [

const FAQ = [  {

  {    question: 'Cos\'Ã¨ la color correction e quando serve?',

    question: 'Cos\'è la Color Correction?',    answer:

    answer:      'La color correction Ã¨ un trattamento professionale avanzato per correggere colorazioni sbagliate, rimuovere pigmenti indesiderati (verde, arancione, giallo ottone) o recuperare capelli danneggiati da trattamenti fai-da-te. Serve quando il colore attuale non corrisponde al risultato desiderato o quando i capelli presentano piÃ¹ tonalitÃ  disomogenee.',

      'La color correction è un servizio professionale specializzato nel correggere colorazioni sbagliate o indesiderate. Recuperiamo capelli con toni sbagliati, rimuoviamo pigmenti artificiali accumulati, correggiamo transizioni dal nero e creiamo il biondo perfetto anche da basi scure.',  },

  },  {

  {    question: 'Quanto tempo richiede una correzione colore?',

    question: 'Quanto tempo richiede una color correction?',    answer:

    answer:      'Dipende dalla condizione di partenza e dall\'obiettivo finale. Una correzione semplice richiede 3-5 ore, mentre casi complessi (es. transizione da nero a biondo) possono richiedere 6-8 ore o essere suddivisi in piÃ¹ sessioni per preservare la salute dei capelli. Durante la consulenza valutiamo insieme i tempi necessari.',

      'Dipende dalla situazione di partenza. Una correzione semplice può richiedere 3-4 ore, mentre casi complessi (come transizioni dal nero o rimozioni di pigmenti stratificati) possono richiedere 6-8 ore o più sedute. Durante la consulenza valutiamo tempi e fasi necessarie.',  },

  },  {

  {    question: 'La color correction danneggia i capelli?',

    question: 'La color correction danneggia i capelli?',    answer:

    answer:      'Con la tecnica professionale corretta, prodotti premium performanti e un colorista esperto, i danni sono minimizzati. Lavoriamo con protocolli specifici che proteggono la fibra capillare durante il processo. Ãˆ fondamentale evitare decolorazioni aggressive fai-da-te che possono compromettere irreparabilmente i capelli.',

      'Con tecnica professionale corretta e prodotti performanti premium, i danni sono minimizzati. Lavoriamo con protocolli specifici che proteggono la fibra capillare durante il processo. È fondamentale evitare decolorazioni aggressive fai-da-te.',  },

  },  {

  {    question: 'Posso passare dal nero al biondo in una seduta?',

    question: 'Posso passare dal nero al biondo in una seduta?',    answer:

    answer:      'Dipende dallo stato di salute dei capelli e dal tipo di nero (naturale, tintura, hennÃ¨). In molti casi Ã¨ necessario procedere gradualmente in 2-3 sessioni distanziate per preservare l\'integritÃ  del capello. Una transizione forzata in una sola seduta rischia di causare danni irreversibili. Valutiamo la strategia migliore durante la consulenza.',

      'Dipende dallo stato dei capelli e dal tipo di nero. Spesso sono necessarie 2-3 sedute progressive per preservare la salute del capello e ottenere un biondo perfetto, luminoso e duraturo. La gradualità garantisce risultati migliori.',  },

  },  {

  {    question: 'Quanto costa una color correction?',

    question: 'Quanto costa una color correction?',    answer:

    answer:      'Il costo varia in base alla complessitÃ  del caso, lunghezza dei capelli, prodotti necessari e numero di sessioni. Parte da â‚¬150 per correzioni semplici fino a â‚¬400+ per transizioni complete. Durante la consulenza gratuita ti forniamo un preventivo dettagliato e personalizzato senza impegno.',

      'Il costo varia in base alla complessità del lavoro, alla lunghezza dei capelli e ai prodotti necessari. Durante la consulenza gratuita forniamo un preventivo dettagliato e trasparente, spiegando tutte le fasi del processo.',  },

  },  {

];    question: 'Come mantenere il risultato dopo la correzione?',

    answer:

export default function ColorCorrectionPage() {      'Essenziale usare shampoo e balsamo specifici per capelli trattati (senza solfati), applicare maschere ricostruttive settimanali, protettori di colore e limitare fonti di calore. Ti forniamo un piano di manutenzione personalizzato con prodotti professionali e indicazioni precise per far durare il colore 8-12 settimane.',

  return (  },

    <>];

      {/* Hero */}

      <Section background="gradient" padding="xl">export default function ColorCorrectionPage() {

        <Container>  return (

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">    <>

            <div className="flex flex-col justify-center">      {/* Hero */}

              <div className="mb-4 inline-flex w-fit items-center rounded-full bg-gold-500 px-4 py-2 text-sm font-medium text-white">      <Section background="gradient" padding="xl">

                <span className="mr-2">🎨</span>        <Container>

                Specialisti Correzione Colore          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

              </div>            <div className="flex flex-col justify-center">

              <div className="mb-4 inline-flex w-fit items-center rounded-full bg-gold-500 px-4 py-2 text-sm font-medium text-white">

              <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-gray-900 md:text-5xl">                <span className="mr-2">ðŸŽ¨</span>

                Color Correction                Specialisti Correzione Colore

                <br />              </div>

                <span className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">

                  Professionale              <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-gray-900 md:text-5xl">

                </span>                Color Correction

              </h1>                <br />

                <span className="text-gold-600">Professionale</span>

              <p className="mb-8 text-xl leading-relaxed text-gray-600">              </h1>

                Recuperiamo anche i casi più complessi: colorazioni sbagliate, capelli danneggiati,

                transizioni dal nero, rimozione pigmenti indesiderati. Tecnica avanzata con prodotti performanti                <p className="mb-8 text-xl leading-relaxed text-gray-600">

                per risultati perfetti senza compromettere la salute dei capelli.                  Recuperiamo anche i casi piÃ¹ complessi: colorazioni sbagliate, capelli danneggiati,

              </p>                  transizioni dal nero, rimozione pigmenti indesiderati. Tecnica avanzata con prodotti performanti

                  per risultati perfetti senza compromettere la salute dei capelli.

              <div className="flex flex-wrap gap-4">                </p>              <div className="flex flex-wrap gap-4">

                <Button                <Button

                  href={getWhatsAppLink(                  href={getWhatsAppLink('Vorrei una consulenza per la Color Correction')}

                    'Ciao! Vorrei una consulenza per Color Correction'                  variant="whatsapp"

                  )}                  size="lg"

                  variant="whatsapp"                  external

                  size="lg"                >

                  external                  Consulenza Gratuita

                >                </Button>

                  Consulenza Gratuita                <Button href="/contatti" variant="outline" size="lg">

                </Button>                  Invia Foto Capelli

                <Button href="/contatti" variant="outline" size="lg">                </Button>

                  Invia Foto Capelli              </div>

                </Button>            </div>

              </div>

            </div>            <div className="relative">

              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 shadow-2xl">

            <div className="relative">                <div className="flex h-full items-center justify-center">

              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 shadow-2xl">                  <div className="text-center">

                <Image                    <div className="mb-4 text-8xl">ðŸŽ¨</div>

                  src="/images/services/color-correction-3.jpg"                    <p className="text-2xl font-bold text-gray-700">Color Correction</p>

                  alt="Color Correction Professionale - Prima e Dopo"                    <p className="text-gray-600">Recupero Colore Professionale</p>

                  fill                  </div>

                  className="object-cover"                </div>

                  priority              </div>

                />            </div>

              </div>          </div>

              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-6 shadow-2xl">        </Container>

                <div className="text-center">      </Section>

                  <div className="mb-1 text-3xl font-bold text-gold-600">15+</div>

                  <div className="text-sm text-gray-600">Anni Esperienza</div>      {/* Casi che Trattiamo */}

                </div>      <Section background="white" padding="xl">

              </div>        <Container>

            </div>          <h2 className="section-heading text-center">Situazioni che Risolviamo</h2>

          </div>          <p className="section-subtitle text-center">

        </Container>            Specializzati nel recupero di qualsiasi problema di colore

      </Section>          </p>



      {/* Cos'è la Color Correction */}          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <Section background="white" padding="xl">            {[

        <Container size="md">              {

          <div className="text-center">                icon: 'ðŸŸ¤âž¡ï¸ðŸ‘±â€â™€ï¸',

            <h2 className="section-heading">Cos'è la Color Correction</h2>                title: 'Transizione dal Nero',

            <p className="section-subtitle">                desc: 'Da bruno scuro/nero a biondo, caramello o balayage con tecnica graduale sicura',

              L'arte di riparare, correggere e trasformare              },

            </p>              {

          </div>                icon: 'ðŸŸ§',

                title: 'Rimozione Riflessi Arancioni',

          <div className="mt-12 space-y-6 text-lg leading-relaxed text-gray-700">                desc: 'Eliminazione toni ottoni indesiderati e neutralizzazione pigmenti caldi',

            <p>              },

              La <strong>color correction</strong> è una disciplina specializzata della colorimetria              {

              che richiede esperienza, tecnica e conoscenza approfondita della teoria del colore.                icon: 'ðŸŸ¢',

              Non è una semplice colorazione, ma un processo di <strong>correzione e recupero</strong> che                title: 'Correzione Riflessi Verdi',

              può trasformare completamente capelli con problematiche cromatiche.                desc: 'Rimozione pigmenti verdi da decolorazioni o colorazioni su cenere',

            </p>              },

              {

            <p>                icon: 'ðŸŽ­',

              Interveniamo quando una colorazione precedente ha dato risultati indesiderati: toni                title: 'Colori Disomogenei',

              sbagliati (arancioni, verdi, gialli), accumulo di pigmenti scuri, transizioni dal nero                desc: 'Uniformazione di capelli con piÃ¹ tonalitÃ , ricrescite evidenti, chiazze',

              non riuscite, capelli danneggiati da decolorazioni aggressive. Ogni caso è unico e              },

              richiede un <strong>approccio personalizzato</strong>.              {

            </p>                icon: 'ðŸ’”',

                title: 'Capelli Danneggiati',

            <p>                desc: 'Recupero struttura dopo trattamenti aggressivi, decolorazioni fai-da-te',

              Utilizziamo tecniche avanzate come decapaggio mirato, decolorazione controllata,              },

              tonalizzazione professionale e trattamenti ricostruttivi per garantire non solo il              {

              colore desiderato, ma anche la <strong>salute e la bellezza dei capelli</strong>.                icon: 'âŒ',

            </p>                title: 'Colorazioni Sbagliate',

          </div>                desc: 'Correzione tinta troppo scura, troppo chiara, tono sbagliato',

        </Container>              },

      </Section>            ].map((situation, index) => (

              <div

      {/* Situazioni che Risolviamo */}                key={index}

      <Section background="gray" padding="xl">                className="rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-lg transition-all hover:-translate-y-2 hover:border-gold-200 hover:shadow-xl"

        <Container>              >

          <h2 className="section-heading text-center">Situazioni che Risolviamo</h2>                <div className="mb-4 text-4xl">{situation.icon}</div>

          <p className="section-subtitle text-center">                <h3 className="mb-2 font-display text-xl font-bold text-gray-900">

            Specializzati nel recupero di qualsiasi problema di colore                  {situation.title}

          </p>                </h3>

                <p className="text-gray-600">{situation.desc}</p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">              </div>

            {[            ))}

              {          </div>

                icon: '🌑',        </Container>

                title: 'Transizione dal Nero',      </Section>

                desc: 'Da bruno scuro/nero a biondo, caramello o balayage con tecnica graduale sicura',

              },      {/* Processo */}

              {      <Section background="gradient" padding="xl">

                icon: '🟠',        <Container>

                title: 'Rimozione Riflessi Arancioni',          <h2 className="section-heading text-center">Il Nostro Processo in 5 Fasi</h2>

                desc: 'Eliminazione toni ottoni indesiderati e neutralizzazione pigmenti caldi',          <p className="section-subtitle text-center">

              },            Metodologia professionale per risultati garantiti

              {          </p>

                icon: '🟢',

                title: 'Correzione Riflessi Verdi',          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                desc: 'Rimozione pigmenti verdi da decolorazioni o colorazioni su cenere',            {[

              },              {

              {                number: '01',

                icon: '🎨',                title: 'Diagnosi Completa',

                title: 'Colori Disomogenei',                desc: 'Analizziamo la condizione attuale: porositÃ , elasticitÃ , storia colorazioni precedenti, pigmenti presenti. Valutiamo la fattibilitÃ  e definiamo il piano d\'azione.',

                desc: 'Uniformazione di capelli con più tonalità, ricrescite evidenti, chiazze',                icon: 'ðŸ”¬',

              },              },

              {              {

                icon: '💔',                number: '02',

                title: 'Capelli Danneggiati',                title: 'Test di Prova',

                desc: 'Recupero struttura dopo trattamenti aggressivi, decolorazioni fai-da-te',                desc: 'Eseguiamo test su ciocche campione per prevedere la reazione e aggiustare la formula. Verifichiamo tempi di posa e concentrazione prodotti.',

              },                icon: 'ðŸ§ª',

              {              },

                icon: '⚡',              {

                title: 'Colorazioni Sbagliate',                number: '03',

                desc: 'Correzione tinta troppo scura, troppo chiara, tono sbagliato',                title: 'Preparazione Capelli',

              },                desc: 'Applicazione trattamenti pre-decolorazione con prodotti performanti per proteggere i legami della cheratina durante il processo chimico.',

            ].map((item, index) => (                icon: 'ðŸ›¡ï¸',

              <div              },

                key={index}              {

                className="rounded-2xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1"                number: '04',

              >                title: 'Correzione Graduale',

                <div className="mb-3 text-5xl">{item.icon}</div>                desc: 'Rimozione pigmenti indesiderati con tecniche mirate (decapaggio, decolorazione controllata, toner specifici). Procediamo per gradi rispettando i capelli.',

                <h3 className="mb-2 font-display text-xl font-bold text-gray-900">{item.title}</h3>                icon: 'ðŸŽ¨',

                <p className="text-gray-600">{item.desc}</p>              },

              </div>              {

            ))}                number: '05',

          </div>                title: 'Tonalizzazione Finale',

        </Container>                desc: 'Applicazione del colore definitivo con toner professionali per neutralizzare sottotoni e ottenere la nuance desiderata. Sigillatura con trattamenti ricostruttivi.',

      </Section>                icon: 'âœ¨',

              },

      {/* Il Nostro Processo in 5 Fasi */}              {

      <Section background="white" padding="xl">                number: '06',

        <Container>                title: 'Piano Mantenimento',

          <h2 className="section-heading text-center">Il Nostro Processo in 5 Fasi</h2>                desc: 'Forniamo schema di manutenzione personalizzato: prodotti specifici, frequenza ritocchi, protezione colore. Follow-up incluso.',

          <p className="section-subtitle text-center">                icon: 'ðŸ“‹',

            Metodologia professionale per risultati garantiti              },

          </p>            ].map((step, index) => (

              <div

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">                key={index}

            {[                className="relative rounded-2xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1"

              {              >

                number: '01',                <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 font-display text-xl font-bold text-white shadow-md">

                title: 'Diagnosi Completa',                  {step.number}

                desc: 'Analizziamo la condizione attuale: porosità, elasticità, storia colorazioni precedenti, pigmenti presenti. Valutiamo la fattibilità e definiamo il piano d\'azione.',                </div>

                icon: '🔍',                <div className="mb-3 text-4xl">{step.icon}</div>

              },                <h3 className="mb-2 font-display text-xl font-bold text-gray-900">{step.title}</h3>

              {                <p className="text-sm leading-relaxed text-gray-600">{step.desc}</p>

                number: '02',              </div>

                title: 'Test di Prova',            ))}

                desc: 'Eseguiamo test su ciocche campione per prevedere la reazione e aggiustare la formula. Verifichiamo tempi di posa e concentrazione prodotti.',          </div>

                icon: '🧪',        </Container>

              },      </Section>

              {

                number: '03',      {/* Prodotti Premium */}

                title: 'Preparazione Capelli',      <Section background="white" padding="xl">

                desc: 'Applicazione trattamenti pre-decolorazione con prodotti performanti per proteggere i legami della cheratina durante il processo chimico.',        <Container size="md">

                icon: '🛡️',          <h2 className="section-heading text-center">Prodotti Premium che Utilizziamo</h2>

              },          <div className="mt-12 space-y-6">

              {            {[

                number: '04',              {

                title: 'Correzione Graduale',                name: 'Prodotti Performanti Premium',

                desc: 'Rimozione pigmenti indesiderati con tecniche mirate (decapaggio, decolorazione controllata, schiariture progressive). Monitoriamo costantemente la reazione.',                desc: 'Sistema di protezione dei legami della cheratina in 3 fasi. Previene rotture e danni durante decolorazioni e colorazioni aggressive. Ricostruisce la struttura dall\'interno.',

                icon: '⚗️',              },

              },              {

              {                name: 'Tecnologia Bond-Building',

                number: '05',                desc: 'Tecnologia bond-building per capelli piÃ¹ forti e sani. Riduce i danni chimici fino al 94%. Ideale per transizioni complesse e capelli fragili.',

                title: 'Tonalizzazione Finale',              },

                desc: 'Applicazione del colore definitivo con toner professionali per neutralizzare sottotoni e ottenere la nuance desiderata. Trattamenti ricostruttivi finali.',              {

                icon: '✨',                name: 'Redken Shades EQ',

              },                desc: 'Toner acidi ad alte prestazioni per tonalizzazioni perfette senza danneggiare. Gamma cromatica vastissima per neutralizzazioni precise.',

              {              },

                number: '06',              {

                title: 'Piano Mantenimento',                name: 'Wella Blondor',

                desc: 'Forniamo schema di manutenzione personalizzato: prodotti specifici, frequenza ritocchi, protezione colore, trattamenti domiciliari.',                desc: 'Decolorante professionale di ultima generazione con tecnologia anti-giallo. Schiarisce fino a 7 toni preservando la qualitÃ  del capello.',

                icon: '📋',              },

              },            ].map((product, index) => (

            ].map((step, index) => (              <div

              <div key={index} className="relative rounded-2xl bg-gray-50 p-6">                key={index}

                <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 font-display text-xl font-bold text-white shadow-lg">                className="flex items-start rounded-2xl bg-gradient-to-r from-gold-50 to-white p-6 shadow-md"

                  {step.number}              >

                </div>                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-500 text-2xl text-white">

                <div className="mb-3 text-4xl">{step.icon}</div>                  ðŸ’Ž

                <h3 className="mb-2 font-display text-xl font-bold text-gray-900">{step.title}</h3>                </div>

                <p className="text-sm text-gray-600">{step.desc}</p>                <div>

              </div>                  <h3 className="mb-2 font-display text-xl font-bold text-gray-900">

            ))}                    {product.name}

          </div>                  </h3>

        </Container>                  <p className="text-gray-700">{product.desc}</p>

      </Section>                </div>

              </div>

      {/* Esempio Prima/Dopo */}            ))}

      <Section background="gradient" padding="xl">          </div>

        <Container>

          <h2 className="section-heading text-center text-white">          <div className="mt-12 rounded-2xl bg-gold-50 p-6 text-center">

            Esempi di Trasformazioni            <p className="text-lg font-medium text-gray-800">

          </h2>              <span className="text-gold-600">âœ“</span> Solo prodotti professionali originali

          <p className="mx-auto max-w-2xl text-center text-lg text-white/90">              <br />

            Recuperiamo anche le situazioni più complesse con tecnica, pazienza e prodotti professionali              <span className="text-gold-600">âœ“</span> Nessun prodotto da supermercato o fai-da-te

          </p>              <br />

              <span className="text-gold-600">âœ“</span> Formule personalizzate per ogni caso

          <div className="mt-12 grid gap-8 md:grid-cols-3">            </p>

            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">          </div>

              <div className="relative aspect-[4/5]">        </Container>

                <Image      </Section>

                  src="/images/services/color-correction-1.jpg"

                  alt="Color Correction - Esempio 1"      {/* Specializzazione Biondo */}

                  fill      <Section background="gradient" padding="xl">

                  className="object-cover"        <Container>

                />          <div className="rounded-2xl bg-white p-8 md:p-12">

              </div>            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

              <div className="p-6">              <div>

                <h3 className="mb-2 font-display text-xl font-bold text-gray-900">                <h2 className="mb-4 font-display text-3xl font-bold text-gray-900">

                  Transizione dal Nero                  Specialisti del Biondo Perfetto

                </h3>                </h2>

                <p className="text-gray-600">                <p className="mb-6 text-lg leading-relaxed text-gray-700">

                  Da nero intenso a biondo caramello in 3 sedute progressive                  La transizione verso tonalitÃ  bionde richiede competenze tecniche avanzate.

                </p>                  Siamo specializzati in:

              </div>                </p>

            </div>                <ul className="space-y-4">

                  {[

            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">                    'Biondo platino ghiaccio senza danni',

              <div className="relative aspect-[4/5]">                    'Balayage naturale con schiariture graduate',

                <Image                    'Biondo cenere e biondo beige senza riflessi gialli',

                  src="/images/services/color-correction-2.jpg"                    'Biondo dorato caldo luminoso',

                  alt="Color Correction - Esempio 2"                    'Manutenzione biondo con toner personalizzati',

                  fill                  ].map((item, index) => (

                  className="object-cover"                    <li key={index} className="flex items-start">

                />                      <svg

              </div>                        className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-gold-500"

              <div className="p-6">                        fill="currentColor"

                <h3 className="mb-2 font-display text-xl font-bold text-gray-900">                        viewBox="0 0 20 20"

                  Correzione Toni Arancioni                      >

                </h3>                        <path

                <p className="text-gray-600">                          fillRule="evenodd"

                  Neutralizzazione riflessi caldi e tonalizzazione biondo freddo                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"

                </p>                          clipRule="evenodd"

              </div>                        />

            </div>                      </svg>

                      <span className="font-medium text-gray-800">{item}</span>

            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">                    </li>

              <div className="relative aspect-[4/5]">                  ))}

                <Image                </ul>

                  src="/images/services/color-correction-3.jpg"              </div>

                  alt="Color Correction - Esempio 3"

                  fill              <div className="flex items-center justify-center">

                  className="object-cover"                <div className="relative">

                />                  <div className="aspect-square w-64 overflow-hidden rounded-full bg-gradient-to-br from-gold-200 via-gold-100 to-white shadow-2xl">

              </div>                    <div className="flex h-full items-center justify-center">

              <div className="p-6">                      <div className="text-center">

                <h3 className="mb-2 font-display text-xl font-bold text-gray-900">                        <div className="mb-2 text-6xl">ðŸ‘±â€â™€ï¸</div>

                  Recupero Capelli Danneggiati                        <p className="font-display text-2xl font-bold text-gray-800">

                </h3>                          Biondo Perfetto

                <p className="text-gray-600">                        </p>

                  Ricostruzione e correzione colore dopo decolorazione aggressiva                      </div>

                </p>                    </div>

              </div>                  </div>

            </div>                  <div className="absolute -bottom-4 -right-4 rounded-full bg-gold-500 px-6 py-3 font-bold text-white shadow-lg">

          </div>                    Esperti

        </Container>                  </div>

      </Section>                </div>

              </div>

      {/* FAQ */}            </div>

      <Section background="white" padding="xl">          </div>

        <Container size="md">        </Container>

          <h2 className="section-heading text-center">Domande Frequenti</h2>      </Section>

          <div className="mt-12 space-y-6">

            {FAQ.map((item, index) => (      {/* FAQ */}

              <details      <Section background="white" padding="xl">

                key={index}        <Container size="md">

                className="group rounded-2xl bg-gray-50 p-6 shadow-md transition-all hover:shadow-lg"          <h2 className="section-heading text-center">Domande Frequenti</h2>

              >          <div className="mt-12 space-y-6">

                <summary className="flex cursor-pointer items-center justify-between font-display text-xl font-bold text-gray-900">            {FAQ.map((item, index) => (

                  {item.question}              <details

                  <svg                key={index}

                    className="h-6 w-6 flex-shrink-0 text-gold-600 transition-transform group-open:rotate-180"                className="group rounded-2xl bg-gray-50 p-6 shadow-md transition-all hover:shadow-lg"

                    fill="none"              >

                    stroke="currentColor"                <summary className="flex cursor-pointer items-center justify-between font-display text-xl font-bold text-gray-900">

                    viewBox="0 0 24 24"                  {item.question}

                  >                  <svg

                    <path                    className="h-6 w-6 flex-shrink-0 text-gold-600 transition-transform group-open:rotate-180"

                      strokeLinecap="round"                    fill="none"

                      strokeLinejoin="round"                    stroke="currentColor"

                      strokeWidth={2}                    viewBox="0 0 24 24"

                      d="M19 9l-7 7-7-7"                  >

                    />                    <path

                  </svg>                      strokeLinecap="round"

                </summary>                      strokeLinejoin="round"

                <p className="mt-4 leading-relaxed text-gray-700">{item.answer}</p>                      strokeWidth={2}

              </details>                      d="M19 9l-7 7-7-7"

            ))}                    />

          </div>                  </svg>

        </Container>                </summary>

      </Section>                <p className="mt-4 leading-relaxed text-gray-700">{item.answer}</p>

              </details>

      {/* CTA Finale */}            ))}

      <Section background="gradient" padding="xl">          </div>

        <Container>        </Container>

          <div className="rounded-2xl bg-white p-8 text-center shadow-2xl md:p-12">      </Section>

            <div className="mb-6 text-6xl">🎨</div>

            <h2 className="mb-4 font-display text-3xl font-bold text-gray-900 md:text-4xl">      {/* CTA */}

              Hai Bisogno di una Color Correction?      <Section background="gradient" padding="xl">

            </h2>        <Container>

            <p className="mb-8 text-xl text-gray-600">          <div className="rounded-2xl bg-white p-8 text-center shadow-2xl md:p-12">

              Inviaci foto dei tuoi capelli su WhatsApp per una valutazione gratuita.            <h2 className="mb-4 font-display text-3xl font-bold text-gray-900 md:text-4xl">

              Ti diremo cosa è possibile fare, i tempi necessari e il preventivo.              Recuperiamo Anche il Tuo Colore

            </p>            </h2>

            <div className="flex flex-wrap justify-center gap-4">            <p className="mb-8 text-xl text-gray-600">

              <Button              Consulenza gratuita senza impegno. Inviaci foto dei tuoi capelli su WhatsApp e ti

                href={getWhatsAppLink(              diremo subito se possiamo aiutarti, tempi necessari e costo stimato.

                  'Ciao! Vorrei una valutazione gratuita per Color Correction. Ti invio le foto dei miei capelli.'            </p>

                )}            <div className="flex flex-wrap justify-center gap-4">

                variant="whatsapp"              <Button

                size="lg"                href={getWhatsAppLink('Ciao, vorrei una consulenza per color correction. Invio foto dei miei capelli.')}

                external                variant="whatsapp"

              >                size="lg"

                Invia Foto su WhatsApp                external

              </Button>              >

              <Button href="/servizi" variant="outline" size="lg">                Invia Foto su WhatsApp

                Vedi Altri Servizi              </Button>

              </Button>              <Button href="/servizi" variant="outline" size="lg">

            </div>                Vedi Altri Servizi

            <p className="mt-6 text-sm text-gray-500">              </Button>

              Consulenza gratuita • Preventivo trasparente • Risultati garantiti            </div>

            </p>            <p className="mt-6 text-sm text-gray-500">

          </div>              Valutazione gratuita â€¢ Preventivo personalizzato â€¢ Garanzia risultato

        </Container>            </p>

      </Section>          </div>

    </>        </Container>

  );      </Section>

}    </>

  );
}

