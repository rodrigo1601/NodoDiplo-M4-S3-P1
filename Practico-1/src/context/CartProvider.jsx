import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("cart") || "[]");
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((cartActual) => {
            const exists = cartActual.find((i) => i.id === product.id);
            if (exists) {
                return cartActual.map((i) => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...cartActual, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((cartActual) => cartActual.filter((i) => i.id !== id));
    };

    const updateQuantity = (id, cantidadACambiar) => {
        setCart((cartActual) =>
            cartActual.map((i) => i.id === id ? { ...i, quantity: Math.max(1, i.quantity + cantidadACambiar) } : i)
        );
    };

    const clearCart = () => setCart([]);

    const totalPrice = cart.reduce((acumulado, i) => acumulado + i.price * i.quantity, 0);
    const totalItems = cart.reduce((acumulado, i) => acumulado + i.quantity, 0);

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice, totalItems,}}>
        {children}
        </CartContext.Provider>
    );
}
