import { useCart } from "../hooks/useCart";
import { useTheme } from "../hooks/useTheme";

function Cart({ onClose }) {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-end" onClick={onClose}>
      <div
        className={`w-96 h-full flex flex-col border-l ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-800">
          <h2 className="font-semibold">Tu carrito</h2>
          <button onClick={onClose} className={` ${isDark ? "text-gray-400 hover:text-white" : "text-gray-700 hover:text-red-500"} text-xl leading-none`}>×</button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cart.length === 0 ? (
            <p className="text-gray-400 text-sm text-center mt-10">Tu carrito está vacío.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center gap-3 py-3 border-b border-gray-800">
                <img src={item.image} alt={item.name} className="max-h-12 max-w-12 self-center"/>
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-400">${(item.price * item.quantity).toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => updateQuantity(item.id, -1)} className={`w-6 h-6 rounded ${isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-200"} text-sm`}>−</button>
                  <span className="text-sm w-5 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, +1)} className={`w-6 h-6 rounded ${isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-200"} text-sm`}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-400 text-sm ml-1">✕</button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-800">
            <div className="flex justify-between font-medium mb-3">
              <span>Total</span>
              <span>${totalPrice.toLocaleString()}</span>
            </div>
            <button onClick={() => clearCart()} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg text-sm">
              Finalizar compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;