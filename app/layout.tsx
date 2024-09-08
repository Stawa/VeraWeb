import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const webFont = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vera-ai.my.id"),
  title: "V.E.R.A - Virtual Entity For Responsive Assistant",
  description: "A Tool That Serves To Help Blind People",
  openGraph: {
    type: "website",
    url: "https://vera-ai.my.id",
    title: "V.E.R.A - Virtual Entity For Responsive Assistant",
    siteName: "V.E.R.A",
    description: "A Tool That Serves To Help Blind People",
    images: [
      {
        url: "/export.png",
        width: 800,
        height: 420,
        alt: "V.E.R.A Icon",
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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={webFont.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
