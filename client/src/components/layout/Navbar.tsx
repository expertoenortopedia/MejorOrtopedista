import { Link } from "wouter";
import { Phone, Calendar, Stethoscope, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Especialidad", href: "#especialidad" },
    { name: "Tratamientos", href: "#tratamientos" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "El Doctor", href: "#doctor" },
    { name: "Material Marketing", href: "/marketing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <Stethoscope className="h-6 w-6" />
              </div>
              <div>
                <h1 className="font-serif font-bold text-lg leading-tight text-foreground">
                  Dr. Jorge L. Córdova
                </h1>
                <p className="text-xs text-muted-foreground font-medium tracking-wider">
                  ORTOPEDIA Y TRAUMATOLOGÍA
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") ? (
                    <Link href={link.href}>
                      <span className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                        {link.name}
                      </span>
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/5215500000000" // Replace with real number
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md shadow-green-600/20 hover:shadow-lg hover:shadow-green-600/30 hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Agendar Cita
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full pb-6 shadow-xl">
          <ul className="flex flex-col px-4 pt-4 pb-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith("/") ? (
                  <Link href={link.href}>
                    <span 
                      className="block text-base font-medium text-foreground py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </span>
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="block text-base font-medium text-foreground py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="px-4">
            <a
              href="https://wa.me/5215500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl text-base font-semibold w-full"
            >
              <Phone className="h-5 w-5" />
              Agendar Cita por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
