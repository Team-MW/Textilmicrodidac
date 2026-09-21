import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "TRAME — Textile personnalisé",
  description:
    "Atelier d'impression textile. Ton textile, ta marque — imprimé comme une affiche de cinéma.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${syne.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-chalk">{children}</body>
    </html>
  );
}
