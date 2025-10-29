import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { formatDate } from '@/lib/date-utils';

export default async function BlogSection() {
  // Placeholder blog posts - in production, fetch from CMS or file system
  const latestPosts = [
    {
      slug: 'nanoplastia-vs-cheratina-differenze',
      title: 'Nanoplastia vs Cheratina: Quale Scegliere?',
      excerpt: 'Scopri le differenze tra Nanoplastia e trattamento alla cheratina per capire quale soluzione è migliore per i tuoi capelli.',
      date: new Date('2025-01-15'),
      category: 'Trattamenti',
    },
    {
      slug: 'hair-extensions-guida-completa',
      title: 'Hair Extensions: Guida Completa 2025',
      excerpt: 'Tutto quello che devi sapere sulle extension: tipologie, applicazione, manutenzione e costi.',
      date: new Date('2025-01-13'),
      category: 'Extensions',
    },
    {
      slug: 'color-correction-come-funziona',
      title: 'Color Correction: Come Correggere un Colore Sbagliato',
      excerpt: 'Hai fatto un colore sbagliato? Scopri come la color correction può salvare i tuoi capelli.',
      date: new Date('2025-01-10'),
      category: 'Colorazione',
    },
  ];

  return (
    <Section background="white" padding="xl">
      <Container>
        <div className="text-center">
          <h2 className="section-heading">Dal Nostro Blog</h2>
          <p className="section-subtitle">
            Consigli, guide e novità dal mondo dell'hair styling
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="h-full rounded-2xl bg-gray-50 p-6 shadow-md transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-3 flex items-center gap-3 text-sm">
                  <span className="rounded-full bg-gold-100 px-3 py-1 font-medium text-gold-700">
                    {post.category}
                  </span>
                  <span className="text-gray-500">{formatDate(post.date, 'dd MMM yyyy')}</span>
                </div>

                <h3 className="mb-3 font-display text-xl font-bold text-gray-900 group-hover:text-gold-600">
                  {post.title}
                </h3>

                <p className="mb-4 leading-relaxed text-gray-600">{post.excerpt}</p>

                <div className="flex items-center font-medium text-gold-600 group-hover:text-gold-700">
                  Leggi di più
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/blog" variant="outline" size="lg">
            Vedi Tutti gli Articoli
          </Button>
        </div>
      </Container>
    </Section>
  );
}
