// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer/Footer";
import Script from "next/script";
import { SGCFHeader } from "@/components/header/SGCFHeader";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// ✅ Layout metadata - ONLY global stuff, NO openGraph or twitter
export const metadata: Metadata = {
  title: {
    default: "Africana College of Professionals",
    template: "%s | Africana College of Professionals"
  },
  // Optional: generic fallback description (rarely used)
  description: "Professional courses and training in Kenya",
  keywords: [
    "Africana College",
    "professional courses",
    "career development",
    "scholarships",
    "online learning",
    "Kenya",
  ].join(", "),
  robots: "index, follow",
  alternates: {
    canonical: "https://www.acop.co.ke/",
  },
  // ❌ NO openGraph here
  // ❌ NO twitter here
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       <SGCFHeader/>
  
        <main>{children}</main>
        <Footer />

        <Script
          id="poptin-pixel"
          src="https://cdn.popt.in/pixel.js?id=fb66af3503d63"
          strategy="afterInteractive"
          async={true}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DGCXCNRGHE"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DGCXCNRGHE');
          `}
        </Script>

        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/65f9bebda0c6737bd1228acc/1hpbp26fh';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}