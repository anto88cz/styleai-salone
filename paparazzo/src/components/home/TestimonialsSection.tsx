import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function TestimonialsSection() {
  // Placeholder testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Maria R.',
      rating: 5,
      text: 'La nanoplastia è stata una rivelazione! Capelli lisci e luminosi senza danneggiarli. Paparazzo è il top a Catanzaro!',
    },
    {
      id: 2,
      name: 'Francesca T.',
      rating: 5,
      text: 'Extensions invisibili e perfettamente abbinate al mio colore. Professionalità e attenzione ai dettagli impeccabili.',
    },
    {
      id: 3,
      name: 'Giulia M.',
      rating: 5,
      text: 'Hanno salvato i miei capelli dopo un disastro di color correction. Ora ho il biondo perfetto che sognavo!',
    },
  ];

  return (
    <Section background="gray" padding="xl">
      <Container>
        <div className="text-center">
          <h2 className="section-heading">Cosa Dicono di Noi</h2>
          <p className="section-subtitle">
            La soddisfazione dei nostri clienti è la nostra priorità
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1 text-gold-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="mb-4 leading-relaxed text-gray-700">"{testimonial.text}"</p>

              <p className="font-semibold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Leggi tutte le recensioni su{' '}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold-600 hover:text-gold-700"
            >
              Google Maps
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
