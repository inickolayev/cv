import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const interTight = Inter_Tight({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter-tight",
  preload: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090A" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://inikolaev.tech"),
  title: "Igor Nikolaev — CTO · VP of Engineering · Head of Engineering",
  description:
    "Engineering leader with 8+ years of experience. Building organizations, platforms, and processes for scale through AI, no-code/low-code, and standardization.",
  alternates: {
    canonical: "/",
    languages: { en: "/", ru: "/ru/" },
  },
  openGraph: {
    type: "profile",
    title: "Igor Nikolaev — CTO · VP of Engineering",
    description:
      "Engineering leader. 0→1→Scale, AI-driven SDLC, resource-constrained delivery.",
    url: "https://inikolaev.tech",
    siteName: "Igor Nikolaev",
  },
  robots: { index: true, follow: true },
};

const noFlashScript = `
(function(){try{
  var k='cv-theme';
  var t=localStorage.getItem(k);
  if(!t){t='dark';}
  var de=document.documentElement;
  de.setAttribute('data-theme', t);
  de.style.colorScheme = t;
  var p=location.pathname||'';
  de.setAttribute('lang', p.indexOf('/ru')===0?'ru':'en');
}catch(e){}})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body
        className={`${inter.variable} ${interTight.variable} ${jetbrains.variable}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
