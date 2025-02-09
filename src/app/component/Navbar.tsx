"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'


function Navbar() {
  const  pathname = usePathname()
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },

  ]

  return (
    <nav  className="sticky p-4 text-white w-full top-0 bg-[#090c2c]">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        <div>Logo</div>
        {/* Navigation */}
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.name}
                className={`relative px-2 transition duration-300 ${
                  pathname === item.path
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.name}
                {pathname === item.name && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-white" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-1rem)] h-3 bg-[#e9e9e9] rounded-t-lg"></div>

    </nav>
  )
}

export default Navbar