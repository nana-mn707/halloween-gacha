import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ハロウィン ガチャガチャ",
  description: "お菓子を食べて太り、運動してコインを稼ぐ自給自足ゲーム！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
