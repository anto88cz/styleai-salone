#!/usr/bin/env node

/**
 * Automated Blog Post Generator
 * Generates SEO-optimized blog posts using DeepSeek AI
 * Run manually: node scripts/cron-blog-generator.js
 * Or via cron: see scripts/setup-cron-ubuntu.sh
 */

require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');

// Blog topics related to hair styling and salon services
const BLOG_TOPICS = [
  'Tendenze tagli capelli 2025',
  'Come mantenere i capelli colorati brillanti',
  'Differenza tra balayage e ombré',
  'Capelli danneggiati: cause e rimedi',
  'Come scegliere il taglio giusto per il tuo viso',
  'Extension capelli: tutto quello che devi sapere',
  'Trattamenti liscianti: quale scegliere',
  'Cura dei capelli ricci: consigli professionali',
  'Come preparare i capelli prima della colorazione',
  'Prodotti professionali vs prodotti da supermercato',
  'Capelli grassi: cause e soluzioni',
  'Come far durare la piega più a lungo',
  'Taglio scalato vs taglio pari: quale scegliere',
  'Colore naturale vs highlights: differenze',
  'Come proteggere i capelli dal calore',
  'Trattamenti ricostruttivi per capelli danneggiati',
  'Acconciature per eventi speciali',
  'Come scegliere il colore di capelli giusto',
  'Capelli fini: consigli per dare volume',
  'Cura del cuoio capelluto: l\'importanza spesso trascurata',
];

const CATEGORIES = [
  'Trattamenti',
  'Colorazione',
  'Tagli',
  'Extensions',
  'Cura Capelli',
  'Tendenze',
  'Tutorial',
  'Consigli',
];

/**
 * Call DeepSeek API to generate blog post content
 */
async function generateBlogPost(topic) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  const baseUrl = process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com';
  const model = process.env.DEEPSEEK_MODEL_TEXT || 'deepseek-chat';
  const maxTokens = parseInt(process.env.DEEPSEEK_MAX_TOKENS || '3500', 10);
  const temperature = parseFloat(process.env.DEEPSEEK_TEMPERATURE || '0.7');

  if (!apiKey) {
    throw new Error('DEEPSEEK_API_KEY not found in environment variables');
  }

  const prompt = `Sei un esperto hair stylist e content writer per un salone di parrucchieri di lusso chiamato "Paparazzo Parrucchieri" a Catanzaro, Italia.

Scrivi un articolo di blog completo e professionale su: "${topic}"

L'articolo deve:
- Essere lungo almeno 800-1200 parole
- Avere un tono professionale ma accessibile
- Includere consigli pratici e professionali
- Essere ottimizzato per SEO con parole chiave naturali
- Menzionare occasionalmente i servizi del salone (Nanoplastia, Hair Extensions, Color Correction)
- Includere una call-to-action alla fine per prenotare una consulenza
- Essere scritto in italiano corretto e fluente

Formatta l'articolo in markdown con:
- Titolo principale (# H1)
- Sottotitoli (## H2 e ### H3)
- Paragrafi ben strutturati
- Liste puntate dove appropriato
- Grassetto per concetti chiave

NON includere il frontmatter YAML, solo il contenuto markdown dell'articolo.`;

  try {
    const response = await fetch(`${baseUrl}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: 'system',
            content:
              'Sei un esperto hair stylist e content writer specializzato in articoli di blog per saloni di parrucchieri di lusso.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: maxTokens,
        temperature,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`DeepSeek API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling DeepSeek API:', error);
    throw error;
  }
}

/**
 * Generate slug from title
 */
function generateSlug(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/-+/g, '-') // Replace multiple - with single -
    .replace(/^-|-$/g, ''); // Remove leading/trailing -
}

/**
 * Extract title from markdown content
 */
function extractTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : 'Articolo dal Blog';
}

/**
 * Generate excerpt from content
 */
function generateExcerpt(content) {
  // Remove title and get first paragraph
  const withoutTitle = content.replace(/^#\s+.+$/m, '').trim();
  const firstParagraph = withoutTitle.split('\n\n')[0];
  const cleaned = firstParagraph.replace(/[#*\[\]]/g, '').trim();
  return cleaned.length > 200 ? cleaned.substring(0, 197) + '...' : cleaned;
}

/**
 * Calculate reading time
 */
function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min di lettura`;
}

/**
 * Create blog post file
 */
function createBlogPost(content, category) {
  const contentDir = path.join(process.cwd(), 'content', 'blog');

  // Create directory if it doesn't exist
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  const title = extractTitle(content);
  const slug = generateSlug(title);
  const excerpt = generateExcerpt(content);
  const readTime = calculateReadTime(content);
  const date = new Date().toISOString();

  // Create frontmatter
  const frontmatter = `---
title: "${title}"
excerpt: "${excerpt}"
date: ${date}
author: "Paparazzo Team"
category: "${category}"
tags: []
readTime: "${readTime}"
---

`;

  const fullContent = frontmatter + content;
  const filePath = path.join(contentDir, `${slug}.md`);

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`⚠️  Article already exists: ${filePath}`);
    return null;
  }

  fs.writeFileSync(filePath, fullContent, 'utf8');
  console.log(`✅ Blog post created: ${filePath}`);
  console.log(`   Title: ${title}`);
  console.log(`   Category: ${category}`);
  console.log(`   Slug: ${slug}`);

  return filePath;
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Starting blog post generation...');
  console.log(`📅 Date: ${new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' })}`);

  try {
    // Select random topic and category
    const topic = BLOG_TOPICS[Math.floor(Math.random() * BLOG_TOPICS.length)];
    const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];

    console.log(`📝 Topic: ${topic}`);
    console.log(`🏷️  Category: ${category}`);
    console.log('⏳ Generating content with DeepSeek AI...');

    const content = await generateBlogPost(topic);

    console.log('✍️  Content generated successfully!');
    console.log(`📏 Length: ${content.length} characters`);

    const filePath = createBlogPost(content, category);

    if (filePath) {
      console.log('\n✨ Blog post generation completed successfully!');
      console.log('🔄 Remember to rebuild your Next.js app to see the new post.');
      console.log('   Run: npm run build && pm2 restart paparazzo');
    } else {
      console.log('\n⚠️  Article was not created (may already exist).');
    }
  } catch (error) {
    console.error('\n❌ Error generating blog post:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateBlogPost, createBlogPost };
