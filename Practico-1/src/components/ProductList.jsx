import { useCart } from "../hooks/useCart";
import { useTheme } from "../hooks/useTheme";

const PRODUCTS = [
    {
        id: 1,
        name: "Laptop Lenovo IdeaPad 3",
        category: "Computación",
        price: 750000,
        description: "Notebook con procesador Ryzen 5, 8GB RAM y SSD 256GB.",
        image: "../src/assets/productos/ideapad3.png"
    },
    {
        id: 2,
        name: "Auriculares Sony WH-1000XM4",
        category: "Audio",
        price: 320000,
        description: "Auriculares inalámbricos con cancelación de ruido.",
        image: "../src/assets/productos/Sony-WH-1000XM4.png"
    },
    {
        id: 3,
        name: "Mouse Logitech G502",
        category: "Periféricos",
        price: 85000,
        description: "Mouse gamer con sensor de alta precisión.",
        image: "../src/assets/productos/Logitech-G502.png"
    },
    {
        id: 4,
        name: "Teclado Mecánico Redragon Kumara",
        category: "Periféricos",
        price: 95000,
        description: "Teclado mecánico con switches azules y retroiluminación.",
        image: "../src/assets/productos/Redragon-Kumara.png"
    },
    {
        id: 5,
        name: "Monitor Samsung 24\" Full HD",
        category: "Pantallas",
        price: 210000,
        description: "Monitor LED de 24 pulgadas con resolución 1080p.",
        image: "../src/assets/productos/Samsung24-FULL-HD.png"
    },
    {
        id: 6,
        name: "Webcam Logitech C920",
        category: "Accesorios",
        price: 120000,
        description: "Cámara web Full HD ideal para videollamadas.",
        image: "../src/assets/productos/Logitech-C920.png"
    },
    {
        id: 7,
        name: "Micrófono Blue Yeti",
        category: "Audio",
        price: 180000,
        description: "Micrófono profesional USB para streaming.",
        image: "../src/assets/productos/Blue-Yeti.png"
    },
    {
        id: 8,
        name: "Parlantes Edifier R1280DB",
        category: "Audio",
        price: 160000,
        description: "Parlantes estéreo con Bluetooth y gran calidad de sonido.",
        image: "../src/assets/productos/Edifier-R1280DB.png"
    },
    {
        id: 9,
        name: "Disco SSD Kingston 1TB",
        category: "Almacenamiento",
        price: 140000,
        description: "Unidad de estado sólido de alta velocidad.",
        image: "../src/assets/productos/SSD-Kingston-1TB.png"
    },
    {
        id: 10,
        name: "Silla Gamer Corsair T3 Rush",
        category: "Mobiliario",
        price: 450000,
        description: "Silla ergonómica con soporte lumbar.",
        image: "../src/assets/productos/Corsair-T3-Rush.png"
    }
];

function ProductList() {
    const { cart, addToCart } = useCart();
    const { isDark } = useTheme();

    return (
        <section>
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">Productos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PRODUCTS.map((product) => {
            const inCart = cart.find((i) => i.id === product.id);
            return (
                <div key={product.id} className={`rounded-xl p-5 flex flex-col gap-3 border ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
                <img src={product.image} alt={product.name} className="max-h-50 max-w-fit self-center"/>
                <div>
                    <p className="font-medium">{product.name}</p>
                </div>
                <div className="mt-auto">
                    <p className="text-sm text-gray-400">${product.price.toLocaleString()}</p>
                </div>
                <button
                    onClick={() => addToCart(product)}
                    className={` text-sm py-1.5 rounded-lg border transition-colors ${
                        inCart
                        ? isDark
                            ? "border-green-500 text-green-400 bg-green-950"
                            : "border-green-950 text-black bg-green-400"
                        : isDark
                            ? "border-gray-600 hover:bg-gray-800 hover:text-white"
                            : "border-gray-400 hover:bg-gray-200 hover:text-black"
                    }`}
                    >
                    {inCart ? `En carrito (${inCart.quantity})` : "Agregar"}
                    </button>

                </div>
            );
            })}
        </div>
        </section>
    );
}

export default ProductList;