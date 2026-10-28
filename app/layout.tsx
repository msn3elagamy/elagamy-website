import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata = {
  title: "مصنع العجمي للمراتب",
  description: "أحدث المراتب السوست والطبية بأسعار المصنع مباشرة.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
