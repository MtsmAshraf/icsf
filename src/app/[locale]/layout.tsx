import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import icon from "./favicon.ico"
// import FloatContact from "@/components/FloatContact/FloatContact";


export const metadata: Metadata = {
  title: "ICSF - International Center for Safety & Fire",
  description: "ICSF المركز الدولي للسلامة ومكافحة الحرائق - ICSF - International Center for Safety & Fire",
  icons: icon.src,
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>
}>) {

  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body >
        <NextIntlClientProvider messages={messages}>
          <Header lo={locale}></Header>
          {children}
          {/* <FloatContact></FloatContact> */}
          <Footer lo={locale}></Footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
