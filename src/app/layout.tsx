import "./globals.css";
import { DM_Sans } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
