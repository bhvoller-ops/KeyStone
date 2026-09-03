import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VibeLabs Agency",
  description:
    "A fully branded, white-label AI-powered agency in your name — with the tools to land your first client, guaranteed.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
