import { useCart } from "../hooks/useCart";
import { useTheme } from "../hooks/useTheme";
import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";
import cartIcon from "../assets/cart.svg";

function Header({ onOpenCart }) {
    const { totalItems } = useCart();
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className={`px-6 py-4 flex justify-between items-center border-b ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
        <h1 className="text-xl font-semibold">Electro Store</h1>
        <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className={`text-sm px-3 py-1.5 rounded border flex items-center hover:cursor-pointer ${isDark ? "border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600" : "border-gray-600 hover:bg-gray-200"}`}>
            <img 
                    src={isDark ? sunIcon : moonIcon} 
                    alt="theme icon" 
                    className="w-4 h-4 mr-1"
                />
                {isDark ? "Claro" : "Oscuro"}
            </button>
            <button onClick={onOpenCart} className="relative px-3 py-1.5 rounded gap-1.5 flex items-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm hover:cursor-pointer">
            <img 
                    src={cartIcon} 
                    alt="theme icon" 
                    className="w-4 h-4 mr-1"
                /> Carrito
            {totalItems > 0 && (
                <span className="bg-white text-indigo-600 text-xs font-bold rounded-full px-2 py-0.5">
                {totalItems}
                </span>
            )}
            </button>
        </div>
        </header>
    );
}

export default Header;