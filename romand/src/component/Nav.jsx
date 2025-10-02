import { useState } from "react"
import { CiSearch } from "react-icons/ci"
import { VscAccount } from "react-icons/vsc"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { Link, useLocation } from "react-router-dom"

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Lipsticks", path: "/lipsticks" },
    { name: "Eye", path: "/eye" },
    { name: "Face", path: "/face" },
  ]

  return (
    <nav className="w-full h-[70px] flex items-center justify-between px-4 sm:px-6 bg-pink-200 relative">
      <div className="flex items-center">
        <Link to="/">
          <img
            className="w-[120px] sm:w-[180px] h-[50px] sm:h-[60px]"
            src="https://romandvietnam.com/wp-content/uploads/2024/05/romnd-viet-nam.png"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex flex-1 justify-center">
        <ul className="flex gap-6 text-[14px] sm:text-[18px] font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`cursor-pointer hover:text-pink-500 ${
                  location.pathname === item.path ? "text-pink-500 font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      
      {/* Mobile Menu Toggle */}
      <div className="flex sm:hidden items-center">
        {menuOpen ? (
          <AiOutlineClose
            className="text-[26px] cursor-pointer hover:text-pink-500"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <AiOutlineMenu className="text-[26px] cursor-pointer hover:text-pink-500" onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-pink-100 shadow-md sm:hidden z-50">
          <ul className="flex flex-col items-center gap-4 py-5 text-[16px] font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`cursor-pointer hover:text-pink-500 ${
                    location.pathname === item.path ? "text-pink-500 font-semibold" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
