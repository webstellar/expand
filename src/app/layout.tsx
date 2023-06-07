import "./globals.css";
import { Inter, DM_Sans } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const dm_sans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Expand consultational firm",
  description: "Bridging the gap between business and Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
