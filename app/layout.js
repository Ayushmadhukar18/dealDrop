import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  title: "Deal Drop",
  description: "The Deal is dropped People",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
        <Toaster richColors />
      </body>
    </html>
  );
}
