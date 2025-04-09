import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title: 'Ashvin Panicker | UX-Focused Full-Stack Web & App Developer',
  description:
    'Senior frontend engineer with 8+ years experience in designing and building apps. I help startups and businesses build fast, beautiful, and user-friendly products across web and mobile.',
  metadataBase: new URL('https://ashvinpanicker.com'),
  openGraph: {
    title: 'Ashvin Panicker | UX-Focused Full-Stack Web & App Developer',
    description:
      'I specialize in frontend and full-stack development using React, Next.js, and React Native. With a sharp eye for design and performance, I help startups launch better products—faster.',
    url: 'https://ashvinpanicker.com',
    siteName: 'Ashvin Panicker',
    images: [
      {
        url: 'https://ashvinpanicker.com/AP2.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashvin Panicker | UX-Focused Full-Stack Developer',
    description:
      'Frontend-first full-stack developer with expertise in React, Next.js, and UI/UX. Helping startups build high-quality web and mobile apps that users love.',
    images: ['https://ashvinpanicker.com/AP2.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        {/* Vercel Analytics */}
        <Analytics />
        <SpeedInsights />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
