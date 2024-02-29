"use client";

import About from "../../components/landing/About";
import FAQ from "../../components/landing/FAQ";
import Home from "../../components/landing/Home";
import Service from "../../components/landing/Service";

export default function Landing() {
  return (
    <main className="container mx-auto min-h-max px-4 pt-10 [&_section]:pt-20">
      <Home />
      <About />
      <Service />
      <FAQ />
    </main>
  );
}
