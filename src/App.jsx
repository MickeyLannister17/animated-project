import { Header } from "./components/header";
import { Hero } from "./components/Hero";
import { Features } from "./components/features";
import { Footer } from "./components/Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
