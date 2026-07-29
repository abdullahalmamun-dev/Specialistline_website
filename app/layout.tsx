import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css"

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "peachtreecapitalgroup.xyz";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  return {
    metadataBase: base,
    title: "Peachtree Capital Group | Business Capital Consulting",
    description: "Strategic financial consulting that helps growing businesses understand and pursue the right capital program.",
    openGraph: { title: "Clarity first. Capital second.", description: "Thoughtful capital guidance for growing businesses.", images: [{ url: "/og.png", width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title: "Peachtree Capital Group", description: "Clarity first. Capital second.", images: ["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
