import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FutureVision India — See Your Future Self",
  description:
    "Upload your photo, choose your dream career, and see yourself as a future professional in India.",
  keywords: ["career", "India", "AI", "future", "education", "students"],
  openGraph: {
    title: "FutureVision India",
    description: "See yourself in your dream career — powered by AI.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0F3D6B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
