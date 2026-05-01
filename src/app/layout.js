import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const metadata = {
  title: "QurbaniHat",
  description: "Livestock Booking Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${ubuntu.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}