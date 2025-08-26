import type { Metadata } from "next";
import { Roboto, Fjalla_One } from "next/font/google";
import "./globals.css";
import { wrap } from "module";
import Cabecalho from "@/components/Cabecalho";
import Menu from "@/components/Menu";

// Configura varíaveis para as fontes
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const fjallaOne = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fjalla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PetShop",
  description: "Mini portal do PetShop com notícias, produtos e muito mais",
  keywords: ["petshop", "cachorro", "gato", "banho", "tosa"],
  authors: [{ name: "Heloisa", url: "https://github.com/heloisa0804" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "petshop",
    // Se tivesse ícones específicos para dispositivos Apples, você tambem colocaria aqui.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${fjallaOne.variable}`}>
        <Cabecalho />

        <main className="limitador">{children}</main>
      </body>
    </html>
  );
}
