import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const webFont = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vera-ai.my.id"),
  title: {
    default: "V.E.R.A - Virtual Entity For Responsive Assistant",
    template: "%s - V.E.R.A",
  },
  description: "A Tool That Serves To Help Blind People",
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://vera-ai.my.id",
    title: "V.E.R.A - Virtual Entity For Responsive Assistant",
    siteName: "V.E.R.A",
    description: "A Tool That Serves To Help Blind People",
    images: [
      {
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "V.E.R.A Logo",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-light.ico", media: "(prefers-color-scheme: light)" },
      { url: "/favicon.ico", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png?v=4",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/apple-touch-icon-light.png?v=4",
        media: "(prefers-color-scheme: light)",
      },
    ],
    shortcut: [
      { url: "/apple-touch-icon.png", media: "(prefers-color-scheme: dark)" },
      {
        url: "/apple-touch-icon-light.png",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
  keywords: [
    "blind assistance",
    "responsive assistant",
    "V.E.R.A",
    "virtual assistant",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={webFont.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
