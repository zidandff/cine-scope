import Header from "@/app/ui/header";
import "@/app/ui/global.css";
// import { plusJakarta } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` bg-gradient-to-br text-white from-[#102333] to-[#1A112E] bg-no-repeat antialiased min-h-screen`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
