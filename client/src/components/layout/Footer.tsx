import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-xl text-white">
              Dr. Jorge L. Córdova Fonseca
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Especialista en Ortopedia y Traumatología. Subespecialidad en rodilla, hombro, lesiones deportivas y artroscopia. Recupera tu movilidad con atención médica de excelencia.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-sm">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Hospital Star Médica Luna Parc</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+52 (55) 5881-8743</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>Martes, Jueves, Sábado, previa cita</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-sm">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#especialidad" className="text-sm hover:text-white transition-colors">Problemas que atiendo</a></li>
              <li><a href="#tratamientos" className="text-sm hover:text-white transition-colors">Tratamientos</a></li>
              <li><a href="#testimonios" className="text-sm hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#doctor" className="text-sm hover:text-white transition-colors">Sobre el Doctor</a></li>
              <li><a href="https://www.expertoenortopedia.com/blank" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors" data-testid="link-triptico">Info para pacientes</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-sm">Legal & Aviso</h4>
            <p className="text-xs leading-relaxed text-slate-400">
              La información contenida en este sitio web es exclusivamente de carácter informativo y no sustituye la consulta médica presencial. Los resultados de los tratamientos pueden variar según cada paciente.
            </p>
            <div className="pt-2">
              <a href="/aviso-de-privacidad" className="text-sm text-primary hover:text-white transition-colors underline underline-offset-2" data-testid="link-aviso-privacidad">
                Aviso de Privacidad
              </a>
            </div>
            <div className="pt-1">
              <span className="text-xs text-slate-500">
                Cédula Profesional: 2814883<br/>
                Cédula Especialidad: 4255209
              </span>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dr. Jorge Luis Córdova Fonseca. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Diseño y Estrategia de Marketing Médico</p>
        </div>
      </div>
    </footer>
  );
}
