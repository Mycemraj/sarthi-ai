import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.tsx";
import About from "./pages/About";
import Services from "./pages/Services";
import Technology from "./pages/Technology";
import Sustainability from "./pages/Sustainability";
import Sectors from "./pages/Sectors";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Home />
      <Navbar />
      <main className="flex-1">
        <About />
        <Services />
        <Technology />
        <Sustainability />
        <Sectors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
