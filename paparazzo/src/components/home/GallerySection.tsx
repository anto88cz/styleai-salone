import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function GallerySection() {
  // Placeholder images - sostituire con immagini reali
  const images = [
    { id: 1, alt: 'Nanoplastia risultato', category: 'Nanoplastia' },
    { id: 2, alt: 'Hair Extensions prima e dopo', category: 'Extensions' },
    { id: 3, alt: 'Color Correction biondo', category: 'Color Correction' },
    { id: 4, alt: 'Nanoplastia capelli lisci', category: 'Nanoplastia' },
    { id: 5, alt: 'Extensions volume', category: 'Extensions' },
    { id: 6, alt: 'Biondo perfetto', category: 'Color Correction' },
  ];

  return (
    <Section background="white" padding="xl">
      <Container>
        <div className="text-center">
          <h2 className="section-heading">I Nostri Lavori</h2>
          <p className="section-subtitle">
            Trasformazioni reali che parlano da sole
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-200 shadow-lg transition-transform hover:-translate-y-2"
            >
              {/* Placeholder - sostituire con Image component e immagini reali */}
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-gold-100 to-gold-200">
                <div className="text-center">
                  <div className="mb-2 text-4xl">📸</div>
                  <p className="font-medium text-gray-700">{image.category}</p>
                  <p className="text-sm text-gray-600">{image.alt}</p>
                </div>
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-lg font-bold text-white">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Vuoi vedere più trasformazioni? Seguici su{' '}
            <a
              href="https://instagram.com/paparazzo_parrucchieri"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold-600 hover:text-gold-700"
            >
              Instagram
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
