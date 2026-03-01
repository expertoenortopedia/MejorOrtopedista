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
                <span>Estado de México, México<br/>(Consultorio Privado)</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+52 (55) 0000-0000</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>Lunes a Sábado, previa cita</span>
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
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider text-sm">Legal & Aviso</h4>
            <p className="text-xs leading-relaxed text-slate-400">
              La información contenida en este sitio web es exclusivamente de carácter informativo y no sustituye la consulta médica presencial. Los resultados de los tratamientos pueden variar según cada paciente.
            </p>
            <div className="pt-2">
              <span className="text-xs text-slate-500">
                Cédula Profesional: XXXXXXX<br/>
                Cédula Especialidad: XXXXXXX
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
