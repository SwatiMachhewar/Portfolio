import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swati Machhewar - Salesforce Developer Portfolio",
  description: "Experienced Salesforce Developer specializing in platform development, integrations, and cloud solutions. View my projects, certifications, and experience.",
  keywords: ["Salesforce", "Developer", "Platform Developer", "Integration", "Cloud Solutions", "Apex", "Lightning Web Components"],
  authors: [{ name: "Swati Machhewar" }],
  creator: "Swati Machhewar",
  icons: {
    icon: "/icon_circular.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://swati-machhewar.dev",
    title: "Swati Machhewar - Salesforce Developer Portfolio",
    description: "Experienced Salesforce Developer specializing in platform development, integrations, and cloud solutions.",
    siteName: "Swati Machhewar Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Swati Machhewar - Salesforce Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swati Machhewar - Salesforce Developer Portfolio",
    description: "Experienced Salesforce Developer specializing in platform development, integrations, and cloud solutions.",
    images: ["/og-image.jpg"],
    creator: "@swatimachhewar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-16 min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
