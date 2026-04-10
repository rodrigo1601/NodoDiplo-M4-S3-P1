import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const { isDark } = useTheme();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className={isDark ? "min-h-screen flex flex-col bg-gray-950 text-gray-100" : "min-h-screen flex flex-col bg-gray-100 text-gray-900"}>
      <Header onOpenCart={() => setCartOpen(true)} />
      <main className="max-w-5xl mx-[20%] px-6 py-10 grow">
        <ProductList />
      </main>
      {cartOpen && <Cart onClose={() => setCartOpen(false)} />}
      <Footer />
    </div>
  );
}

export default App;