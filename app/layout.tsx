// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/componentes/topBar";
import { Navbar } from "@/componentes/menu";
import { Footer } from "@/componentes/footer";
import { GoogleAnalytics } from '@next/third-parties/google'; // Importação oficial

// Configuração da fonte Roboto Global
const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://apiceportaria.com.br/'),
  title: {
    default: "Ápice | Administração de Condomínios e Serviços",
    template: "%s | Ápice"
  },
  description: "Especialista em administração de condomínios, portaria remota e presencial. Segurança e eficiência para seu patrimônio.",
  keywords: ["administração de condomínios", "portaria remota", "serviços prediais", "Ápice"],
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD para SEO Local
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ápice Portaria Remota e Prestadora de Serviços",
    "image": "https://apiceportaria.com.br/logo.png", 
    "url": "https://apiceportaria.com.br/",
    "telephone": "+55 11 2338-9008",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Dr. João Guimarães, 440",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "05741-190",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.6095429,
      "longitude": -46.7486909
    },
    "areaServed": ["São Paulo", "Grande SP"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${roboto.className} antialiased`} suppressHydrationWarning>
        <TopBar />
        
        <header className="fixed top-0 left-0 w-full z-[100]">
          <Navbar />
        </header>
        
        <main>
          {children}
        </main>

        <Footer />
        
        {/* Google Analytics inserido aqui com seu ID G-L2WDTQCC6Y */}
        <GoogleAnalytics gaId="G-L2WDTQCC6Y" />
      </body>
    </html>
  );
}