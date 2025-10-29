import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { getWhatsAppLink } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Hair Extensions Catanzaro | Extension Capelli Veri Tape-In',
  description: 'Extension capelli naturali Tape-In con capelli vergini da singolo donatore.',
}

const whatsappLink = getWhatsAppLink('Vorrei informazioni sulle Hair Extensions Tape-In.')

export default function HairExtensionsPage() {
  return (
    <Section className="pt-32 pb-20">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Hair Extensions Tape-In Premium
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Extension con capelli vergini da singolo donatore. Solo tecnica Tape-In.
          </p>
          <Button href={whatsappLink} className="bg-green-500 text-white">
            Consulenza Gratuita
          </Button>
        </div>
      </Container>
    </Section>
  )
}
