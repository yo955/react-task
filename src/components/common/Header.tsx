import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";

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
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg font-medium transition-all duration-200 ${isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg font-medium transition-all duration-200 ${isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg font-medium transition-all duration-200 ${isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`
            }
          >
            Products
          </NavLink>
        </nav>
        
        {/* Mobile Menu Button */}
        <MobileMenu />

      </div>
    </header>
  );
};

export default Header;