import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#191A23] w-5/6 text-white py-8 mx-auto mt-12 rounded-t-[32px]">
      <div className="container mx-auto px-4">
        {/* Logo, NavLinks y Redes Sociales */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1723010341/Dise%C3%B1o_sin_t%C3%ADtulo_eqlcqj.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>
          <nav className="flex space-x-6 mb-4 md:mb-0">
            <a href="#home" className="hover:underline">
              Documentación
            </a>
            <a href="#about" className="hover:underline">
              Ejemplos
            </a>
            <a href="#services" className="hover:underline">
              Motor
            </a>
            <a href="#contact" className="hover:underline">
              Precios
            </a>
          </nav>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Contacto y Newsletter */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-8">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-lg text-black w-40 text-center font-bold mb-2 rounded-md bg-[#B9FF66]">
              Contactanos
            </h2>
            <p>Email: info@ejemplo.com</p>
            <p>Teléfono: 555-555-5555</p>
            <br />
            <p>
              Otro dato: 1234 Main
              <br />
              Example City, Street State 12345
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-lg font-bold mb-2">
              Enterate de las novedades
            </h2>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 flex-grow rounded-l-lg border border-gray-600 bg-gray-700 text-white"
                required
              />
              <button
                type="submit"
                className="p-2 bg-blue-600 rounded-r-lg text-white hover:bg-blue-700"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 mb-4"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dazlabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
