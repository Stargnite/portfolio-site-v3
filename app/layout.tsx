import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://i.ibb.co/d4PmMsV7/favicon.png"
          sizes="any"
        />
      </head>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://codewithty.dev"),
  title: {
    default: "Shobam Portfolio",
    template: "sobayo oluwatobi",
  },
  description:
    "Professional portfolio - expertise in web development, blockchain.",
  keywords: [
    "shobam",
    "portfolio template",
    "web development",
    "cybersecurity",
    "blockchain development",
    "mobile app development",
    "data analysis",
    "tech consulting",
    "developer portfolio",
    "Next.js portfolio",
    "React portfolio",
    "tech education",
    "coding bootcamp",
  ],
  icons: {
    icon: "./favicon.png",
    apple: "./apple-touch-icon.png",
  },
  applicationName: "Sobayo Oluwatobi Portfolio",
  authors: [
    {
      name: "Oluwatobi Sobayo",
      url: "",
    },
  ],
  generator: "Next.js",
  referrer: "origin",
  creator: "Shobam",
  publisher: "Shobam",
  category: "technology",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    siteName: "Oluwatobi Sobayo",
    title: "Oluwatobi Sobayo",
    description:
      "",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Sobayo Oluwatobi Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@codewithty",
    creator: "@codewithty",
    title: "CodeWithTy - Tech Development Portfolio Template",
    description:
      "Modern portfolio template for tech professionals and developers",
    images: ["/twitter-image.png"],
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

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  manifest: "/manifest.json",

  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "CodeWithTy",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#0f172a",
    "msapplication-config": "/browserconfig.xml",
  },
};
