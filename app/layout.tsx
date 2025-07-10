import { plusJakarta } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.className} bg-gradient-to-br text-white from-[#102333] to-[#1A112E] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
