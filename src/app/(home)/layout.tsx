import Footer from "@/components/footer/Footer";
import Navbar from "@/components/home/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
  description: "hello i am home page",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
