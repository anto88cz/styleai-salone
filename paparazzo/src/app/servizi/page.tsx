import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { SERVICES } from '@/config/constants';

export const metadata: Metadata = {
  title: 'I Nostri Servizi',
  description:
    'Scopri i servizi premium di Paparazzo Parrucchieri: Nanoplastia, Hair Extensions e Color Correction. Tecnica e lusso per i tuoi capelli a Catanzaro.',
  keywords: [
    'servizi parrucchiere catanzaro',
    'nanoplastia catanzaro',
    'hair extensions catanzaro',
    'color correction catanzaro',
  ],
};

export default function ServiziPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="section-heading">I Nostri Servizi</h1>
            <p className="section-subtitle">
              Tecniche avanzate, prodotti premium e attenzione maniacale ai dettagli per risultati
              straordinari
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section background="white" padding="xl">
        <Container>
          <div className="grid gap-12 lg:gap-16">
            {SERVICES.map((service, index) => (
              <article
                key={service.id}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-gold-100 to-gold-200 shadow-xl">
                    {/* Placeholder - sostituire con immagine reale */}
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <div className="mb-4 text-6xl">{service.icon}</div>
                        <p className="text-xl font-semibold text-gray-700">{service.name}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <div className="mb-4 inline-flex items-center rounded-full bg-gold-100 px-4 py-2 text-sm font-medium text-gold-700">
                    <span className="mr-2">{service.icon}</span>
                    {service.name}
                  </div>

                  <h2 className="mb-4 font-display text-3xl font-bold text-gray-900 md:text-4xl">
                    {service.name}
                  </h2>

                  <p className="mb-6 text-lg leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="mb-4 font-semibold text-gray-900">Benefici:</h3>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 4).map((benefit, i) => (
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
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Info */}
                  <div className="mb-6 flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg
                        className="mr-2 h-5 w-5 text-gold-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Durata: {service.duration}</span>
                    </div>
                  </div>

                  <div className="mt-auto"><Button href={`/servizi/${service.slug}`} variant="primary" size="lg">
                    Scopri Tutti i Dettagli</Button></div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="rounded-2xl bg-white p-8 text-center shadow-xl md:p-12">
            <h2 className="mb-4 font-display text-3xl font-bold text-gray-900 md:text-4xl">
              Non Sai Quale Servizio Scegliere?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Contattaci per una consulenza gratuita personalizzata. Ti aiuteremo a scegliere il
              trattamento perfetto per i tuoi capelli.
            </p>
            <Button
              href="https://wa.me/393392399044?text=Ciao,%20vorrei%20una%20consulenza%20gratuita"
              variant="whatsapp"
              size="lg"
              external
            >
              Richiedi Consulenza Gratuita
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}


