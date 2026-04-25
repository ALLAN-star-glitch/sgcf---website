import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopHeader } from "@/components/header/TopHeader";
import { MainHeader } from "@/components/header/MainHeader";
import { Footer } from "@/components/footer/Footer";
import Script from "next/script";
import { MainHeaderWrapper } from "@/components/MainHeaderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Africana College of Professionals | Professional Courses & Learning",
  description:
    "Join Africana College of Professionals to access top-tier professional courses, scholarships, and career development resources.",
  keywords: [
    "Africana College",
    "professional courses",
    "career development",
    "scholarships",
    "online learning",
    "Kenya",
  ].join(", "),
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",

  //  Canonical URL
  alternates: {
    canonical: "https://www.acop.co.ke/",
  },

  openGraph: {
    title: "Africana College of Professionals",
    description:
      "Access professional courses, scholarships, and career growth resources at Africana College of Professionals.",
    url: "https://www.acop.co.ke/",
    siteName: "Africana College of Professionals",
    type: "website",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?w=900&auto=format&fit=crop&q=60",
        width: 1200,
        height: 630,
        alt: "Africana College of Professionals - Featured Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TopHeader />
        <MainHeaderWrapper /> {/* Server component fetches data */}
        <main>{children}</main>
        <Footer />

        {/* Google Tag Manager */}
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

        {/* Tawk.to Script */}
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
