import Footer from "../components/Footer";
import Header from "../components/Header";
import "../global.css";

export const metadata = {
  title: "Home",
  description: "Welcome To Pakar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
