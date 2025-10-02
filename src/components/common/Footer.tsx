import { Link } from "react-router-dom";

const FooterLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-600 text-sm">

        {/* Links */}
        <nav className="flex gap-6 flex-wrap justify-center md:justify-start">
          {FooterLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative group hover:text-gray-900 transition-colors duration-200"
            >
              {link.label}
              {/* underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-center md:text-right text-gray-500">
          © {new Date().getFullYear()} <span className="font-medium text-gray-700">MyStore</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
