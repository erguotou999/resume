import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppSettingData } from "../config/app-data/appSetting";
import { UserInfoData } from "../config/user-data/userInfo";
import { resolve } from "../config/i18n/dictionary";
import { Toaster } from "sonner";
import { LocaleProvider } from "../config/i18n/locale-provider";

const name = UserInfoData.fullName;
const tagline = resolve(UserInfoData.tagLine, "en");
const description = resolve(UserInfoData.miniBio, "en");
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${name} — ${tagline}`,
    template: `%s | ${name}`,
  },
  description,
  keywords: [
    name,
    tagline,
    "software engineer",
    "backend developer",
    "node.js",
    "typescript",
    "portfolio",
    "resume",
    "open source",
  ],
  authors: [{ name }],
  creator: name,
  publisher: AppSettingData.appName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${name} — ${tagline}`,
    description,
    siteName: name,
    images: [
      {
        url: "/images/jc_img_1.png",
        width: 1200,
        height: 630,
        alt: `${name} — ${tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${name} — ${tagline}`,
    description,
    images: ["/images/jc_img_1.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Toaster />
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
