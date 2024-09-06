import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const webFont = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "V.E.R.A - Virtual Entity For Responsive Assistant",
  description: "A Tool That Serves To Help Blind People",
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
