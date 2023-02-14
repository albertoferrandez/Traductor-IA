import "../styles/globals.css";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-gradient-to-r from-blue-200 to-cyan-200 min-h-screen">
        <div className="flex flex-col w-screen md:w-[80vw] lg:w-[65vw] mx-auto p-8">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
