import type { Metadata } from "next";
import "./globals.css";
import { Saira } from "next/font/google";

import { FilterContextProvider } from './contexts/filterContext';

import { Header } from "./components/Header";

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capputeeno",
  description: "Rocket Seat Front end challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${saira.className}`}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  );
}
