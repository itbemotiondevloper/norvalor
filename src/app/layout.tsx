import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "NORVALOR — Class I Medical Device Quality, Regulatory & Engineering",
  description:
    "Fixed-fee quality systems, FDA QMSR, EU MDR 2017/745 technical files, and UDI direct marking validation for surgical instrument makers, startups, and OEMs.",
  keywords: [
    "Class I medical device",
    "FDA QMSR",
    "ISO 13485",
    "EU MDR 2017/745",
    "UDI direct marking",
    "Surgical instrument quality",
    "Process validation",
    "Medical device consulting",
  ],
  authors: [{ name: "Norvalor" }],
  openGraph: {
    title: "NORVALOR® — Precision in Every Requirement",
    description:
      "Low risk. Not low effort. Fixed-fee quality, regulatory and engineering support connecting the standard to the shop floor.",
    siteName: "NORVALOR",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%2306090e'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' fill='%23FF9933' font-family='Montserrat, sans-serif' font-weight='800' font-style='italic' font-size='20'>N</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=JetBrains+Mono:wght@400..700&family=Manrope:wght@400..800&family=Montserrat:ital,wght@0,700;0,800;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-[#F5F7FA] text-[#121212] dark:bg-[#06090e] dark:text-[#f1f4f9] antialiased transition-colors duration-300 selection:bg-brand-500/30 selection:text-brand-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
