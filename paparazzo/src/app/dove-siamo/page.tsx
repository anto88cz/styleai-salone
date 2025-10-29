import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { BUSINESS } from '@/config/constants';
import { getWhatsAppLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Dove Siamo | Paparazzo Parrucchieri Catanzaro',
  description: `Vieni a trovarci in ${BUSINESS.address.street}, ${BUSINESS.address.city}. Parcheggio disponibile, fermata bus vicina. Orari: Lun-Sab 9:00-19:00.`,
  keywords: [
    'parrucchiere catanzaro indirizzo',
    'dove siamo paparazzo',
    'come arrivare catanzaro',
    'via formia 47 catanzaro',
  ],
};

export default function DoveSiamoPage() {
  return (
    <>
      {/* Hero */}
      <Section background="gradient" padding="xl">
        <Container>
          <div className="text-center">
            <h1 className="mb-6 font-display text-4xl font-bold text-gray-900 md:text-5xl">
              Come <span className="text-gold-600">Raggiungerci</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Siamo nel cuore di Catanzaro, facilmente raggiungibili in auto e con i mezzi
              pubblici. Ti aspettiamo!
            </p>
          </div>
        </Container>
      </Section>

      {/* Location Info */}
      <Section background="white" padding="xl">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Map */}
            <div>
              <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.234!2d${BUSINESS.coordinates.lng}!3d${BUSINESS.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM4jCsDU0JzM1LjMiTiAxNsKwMzUnMTUuOCJF!5e0!3m2!1sit!2sit!4v1234567890123!5m2!1sit!2sit`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Paparazzo Parrucchieri"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 font-display text-3xl font-bold text-gray-900">
                Indirizzo e Contatti
              </h2>

              {/* Address */}
              <div className="mb-6 flex items-start">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                  📍
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-gray-900">Indirizzo</h3>
                  <p className="text-gray-700">
                    {BUSINESS.address.street}
                    <br />
                    {BUSINESS.address.postalCode} {BUSINESS.address.city}, {BUSINESS.address.region}
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.coordinates.lat},${BUSINESS.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-gold-600 hover:underline"
                  >
                    Ottieni Indicazioni →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-6 flex items-start">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                  📞
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-gray-900">Telefono</h3>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="text-lg text-gray-700 hover:text-gold-600"
                  >
                    {BUSINESS.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="mb-6 flex items-start">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                  💬
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-gray-900">WhatsApp</h3>
                  <a
                    href={getWhatsAppLink('Ciao! Vorrei informazioni')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-700 hover:text-gold-600"
                  >
                    {BUSINESS.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8 flex items-start">
                <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600">
                  ✉️
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-gray-900">Email</h3>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-lg text-gray-700 hover:text-gold-600"
                  >
                    {BUSINESS.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-2xl bg-gold-50 p-6">
                <h3 className="mb-4 flex items-center font-display text-xl font-bold text-gray-900">
                  <span className="mr-2 text-2xl">🕐</span>
                  Orari di Apertura
                </h3>
                <div className="space-y-2">
                  {Object.entries(BUSINESS.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-gray-700">
                      <span className="font-medium capitalize">{day}:</span>
                      <span>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How to Reach */}
      <Section background="gray" padding="xl">
        <Container>
          <h2 className="section-heading text-center">Come Arrivare</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: '🚗',
                title: 'In Auto',
                desc: 'Parcheggio disponibile nelle vicinanze. Da Catanzaro centro: 5 minuti. Uscita autostrada Catanzaro Lido: 15 minuti.',
              },
              {
                icon: '🚌',
                title: 'Con i Mezzi Pubblici',
                desc: 'Fermata bus linea 3 e 7 a 100 metri. Dalla stazione centrale: 10 minuti in autobus.',
              },
              {
                icon: '🚶',
                title: 'A Piedi',
                desc: 'Dal centro città: 15 minuti a piedi. Zona pedonale nelle vicinanze con negozi e servizi.',
              },
            ].map((method, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 text-center shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="mb-4 text-5xl">{method.icon}</div>
                <h3 className="mb-3 font-display text-xl font-bold text-gray-900">
                  {method.title}
                </h3>
                <p className="text-gray-600">{method.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="white" padding="xl">
        <Container>
          <div className="rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 p-8 text-center text-white shadow-2xl md:p-12">
            <h2 className="mb-4 font-display text-3xl font-bold">Prenota il Tuo Appuntamento</h2>
            <p className="mb-6 text-lg text-gold-50">
              Contattaci ora per prenotare o ricevere maggiori informazioni sui nostri servizi.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href={getWhatsAppLink('Ciao! Vorrei prenotare un appuntamento')}
                variant="whatsapp"
                size="lg"
                external
              >
                Prenota su WhatsApp
              </Button>
              <Button href="/servizi" variant="outline" size="lg">
                Vedi i Servizi
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
