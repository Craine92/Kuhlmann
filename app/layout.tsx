import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/src/components/layout/site-header";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { company } from "@/src/content/company";
import { localBusinessSchema } from "@/src/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${company.domain}`),
  title: {
    default: `${company.name} | Garten- und Landschaftsbau in der Region Hannover`,
    template: `%s | ${company.name}`,
  },
  description:
    "Professioneller Garten- und Landschaftsbau in Poggenhagen, Neustadt am Rübenberge und der Region Hannover.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = localBusinessSchema();

  return (
    <html lang="de">
      <body className={`${inter.variable} flex min-h-screen flex-col bg-brand-sand text-brand-charcoal antialiased`}>
        <SiteHeader />
        <main className="min-h-screen flex-1 bg-brand-sand">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}

