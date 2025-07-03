import { useState, useEffect } from "react";
import { Menu, X, Home, Image, Phone, Sparkles } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const [activeLink, setActiveLink] = useState("/");

  const links = [
    { name: "Home", path: "/", icon: Home },
    { name: "Gallery", path: "/gallery", icon: Image },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full text-gray-700 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/40 backdrop-blur-2xl shadow-lg border-b border-gray-200"
            : "bg-white/40 backdrop-blur-2xl shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div
              className="flex items-center group cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-red-500 to-red-500 rounded-full animate-ping" />
              </div>
              <div className="ml-3">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r text-gray-700 bg-clip-text ">
                  MaaChamundaCraft
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {links?.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;

                return (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.path)}
                    className={`relative group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-orange-600 bg-orange-50"
                        : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-lg">{link.name}</span>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full" />
                    )}

                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all duration-300" />
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative group p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute inset-0 w-6 h-6 text-gray-700 transform transition-all duration-300 ${
                      isOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
                    }`}
                  />
                  <X
                    className={`absolute inset-0 w-6 h-6 text-gray-700 transform transition-all duration-300 ${
                      isOpen ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/50">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="space-y-1">
                {links?.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;

                  return (
                    <button
                      key={link.name}
                      onClick={() => handleLinkClick(link.path)}
                      className={`w-full group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                        isActive
                          ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 shadow-sm"
                          : "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div
                        className={`p-2 rounded-lg transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg"
                            : "bg-gray-100 group-hover:bg-orange-100 text-gray-600 group-hover:text-orange-600"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{link.name}</span>

                      {isActive && (
                        <div className="ml-auto">
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
