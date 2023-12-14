import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function LandingLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
