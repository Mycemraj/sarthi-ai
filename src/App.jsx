import Footer from "./components/Footer";
import Home from "./pages/Home.tsx";
import About from "./pages/About";
import Sectors from "./pages/Sectors";
import Services from "./pages/Services";
import Technology from "./pages/Technology";
import Sustainability from "./pages/Sustainability";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Home />
      <main className="flex-1">
        <About />
        <Sectors />
        <Services />
        <Technology />
        <Sustainability />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
