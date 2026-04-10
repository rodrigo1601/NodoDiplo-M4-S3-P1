import { useTheme } from "../hooks/useTheme";

function Footer(){
    const { isDark } = useTheme();

    return(
        <footer className={`mt-10 border-t ${
            isDark 
            ? "bg-gray-900 border-gray-800 text-gray-400" 
            : "bg-white border-gray-200 text-gray-600"
        }`}>
            <div className="max-w-6xl mx-auto px-6 py-6 text-center">
                <p>&copy; 2026 Mi Aplicación React</p>
                <p className="text-sm mt-2">
                    Hecho con React por Roberto Rodrigo Ibañez
                </p>
            </div>
        </footer>
    );
}

export default Footer;
