import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  keywords: [
    "blind assistance",
    "responsive assistant",
    "V.E.R.A",
    "virtual assistant",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={webFont.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
