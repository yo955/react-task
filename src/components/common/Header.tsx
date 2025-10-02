import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const NavLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
];
const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200"
        >
          MyStore
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          {NavLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-600 transition-colors duration-200 ${isActive ? "font-semibold text-blue-600" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <MobileMenu />

      </div>
    </header>
  );
};

export default Header;