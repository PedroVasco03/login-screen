import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapClient from "./components/utils/BootstrapClient";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "loginScreen",
  description: "Generated by create next app",
  authors: [{name:"Pedro Vasco", url:"https://www.linkedin.com/in/pedro-vasco-939342287/"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
      <BootstrapClient />
    </html>
  );
}
