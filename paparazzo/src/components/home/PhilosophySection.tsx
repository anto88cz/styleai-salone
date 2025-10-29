import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { BRAND_VALUES } from '@/config/constants';

export default function PhilosophySection() {
  return (
    <Section background="white" padding="xl">
      <Container>
        <div className="text-center">
          <h2 className="section-heading">La Nostra Filosofia</h2>
          <p className="section-subtitle">
            Crediamo nel lusso accessibile, nella personalizzazione e nell'innovazione tecnica
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {BRAND_VALUES.map((value, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gradient-to-br from-gold-50 to-white p-8 shadow-lg transition-transform hover:-translate-y-2"
            >
              <div className="mb-4 text-5xl">{value.icon}</div>
              <h3 className="mb-3 font-display text-2xl font-bold text-gray-900">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
