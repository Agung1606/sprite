import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";

function App() {
  return (
    <div className="relative overflow-hidden bg-slate-100 flex flex-col justify-center items-center">
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
