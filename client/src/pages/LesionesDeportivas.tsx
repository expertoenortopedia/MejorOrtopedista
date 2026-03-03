import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CheckCircle2, AlertTriangle, Stethoscope, Heart, Shield, Award, UserCheck, Search, Activity } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/525514961386?text=Hola%20Dr.%20Jorge,%20vengo%20de%20su%20p%C3%A1gina%20de%20lesiones%20deportivas%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita.";

const lesionesComunes = [
  { title: "Lesión de ligamento cruzado anterior", desc: "Rotura o distensión del LCA, frecuente en deportes con cambios bruscos de dirección como fútbol y basquetbol." },
  { title: "Lesión de menisco", desc: "Desgarro del cartílago de la rodilla por giros forzados o impactos, causando dolor y bloqueo articular." },
  { title: "Esguince de tobillo", desc: "Distensión o desgarro de los ligamentos del tobillo, común al pisar mal o al aterrizar de un salto." },
  { title: "Desgarro muscular", desc: "Rotura parcial o total de fibras musculares por esfuerzo excesivo, falta de calentamiento o fatiga." },
  { title: "Lesión del manguito rotador", desc: "Inflamación o desgarro de los tendones del hombro, frecuente en deportes de lanzamiento o contacto." },
  { title: "Tendinitis", desc: "Inflamación de los tendones por uso repetitivo, causando dolor progresivo y limitación funcional." },
];

const sintomas = [
  "Dolor agudo o progresivo en la zona lesionada",
  "Inflamación visible después del esfuerzo físico",
  "Limitación de movimiento en la articulación afectada",
  "Debilidad al intentar usar la extremidad lesionada",
  "Inestabilidad articular o sensación de fallo",
  "Dificultad para continuar con la actividad deportiva",
];

const alertas = [
  "Dolor persistente que no mejora con reposo",
  "Inflamación que no cede después de varios días",
  "Dificultad para caminar o apoyar la extremidad",
  "Lesión ocurrida durante la práctica deportiva",
  "Limitación funcional que impide actividades cotidianas",
  "Dolor que regresa cada vez que intentas hacer ejercicio",
];

const tratamientos = [
  { title: "Medicamentos", desc: "Antiinflamatorios y analgésicos específicos para controlar el dolor y la inflamación de la lesión." },
  { title: "Terapia física", desc: "Ejercicios dirigidos para recuperar fuerza, flexibilidad y estabilidad de forma progresiva." },
  { title: "Rehabilitación", desc: "Programa integral para restaurar la función completa y preparar el regreso seguro al deporte." },
  { title: "Tratamiento personalizado", desc: "Plan adaptado al tipo de lesión, deporte practicado y metas de recuperación de cada paciente." },
  { title: "Cirugía artroscópica", desc: "En casos que lo requieran, intervención mínimamente invasiva para reparar estructuras dañadas." },
];

export default function LesionesDeportivas() {
  useEffect(() => {
    document.title = "Lesiones Deportivas en Cuautitlán Izcalli | Ortopedista Especialista";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Tratamiento de lesiones deportivas en Cuautitlán Izcalli. Conoce las lesiones más comunes, síntomas y cuándo acudir al ortopedista especialista.");
    }
  }, []);

  return (
    <div className="w-full bg-background overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Lesiones Deportivas: síntomas, tratamiento y atención especializada",
            "description": "Tratamiento de lesiones deportivas en Cuautitlán Izcalli. Conoce las lesiones más comunes, síntomas y cuándo acudir al ortopedista especialista.",
            "url": "https://expertoenortopedia.com.mx/lesiones-deportivas-cuautitlan-izcalli",
            "about": {
              "@type": "MedicalCondition",
              "name": "Lesiones Deportivas",
              "alternateName": "Traumatología deportiva"
            },
            "author": {
              "@type": "Physician",
              "name": "Dr. Jorge Luis Córdova Fonseca",
              "medicalSpecialty": "Ortopedia y Traumatología",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cuautitlán Izcalli",
                "addressRegion": "Estado de México",
                "addressCountry": "MX"
              },
              "telephone": "+525514961386"
            },
            "specialty": "Orthopedics"
          }),
        }}
      />

      {/* SECCIÓN 1 — HERO */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28" data-testid="section-hero-deportivas">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Activity className="w-4 h-4" />
                Ortopedista Especialista en Lesiones Deportivas
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                Lesiones Deportivas: síntomas, tratamiento y atención especializada
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Las lesiones deportivas son daños que ocurren en músculos, tendones, ligamentos, huesos o articulaciones durante la práctica de actividad física o deportiva. Pueden presentarse por un impacto repentino, un movimiento brusco, falta de calentamiento o por el uso repetitivo de una articulación.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cualquier persona que practique deporte —desde atletas profesionales hasta quienes hacen ejercicio recreativo— puede sufrir una lesión deportiva. Un diagnóstico oportuno y un tratamiento adecuado son esenciales para una recuperación completa y un regreso seguro a la actividad.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-hero-deportivas">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:-translate-y-1 transition-transform mt-2">
                  <WhatsAppIcon className="w-6 h-6 mr-2" />
                  Agendar cita por WhatsApp
                </Button>
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
                alt="Atención especializada en lesiones deportivas en Cuautitlán Izcalli"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                loading="eager"
                data-testid="img-hero-deportivas"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden md:block">
                <p className="text-sm font-bold text-primary">+25 años</p>
                <p className="text-xs text-muted-foreground">de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — LESIONES COMUNES */}
      <section className="py-20 bg-white" data-testid="section-lesiones-comunes">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Lesiones deportivas más comunes
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Estas son las lesiones que vemos con mayor frecuencia en pacientes deportistas. Cada una requiere un enfoque de diagnóstico y tratamiento específico.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="grid sm:grid-cols-2 gap-6">
              {lesionesComunes.map((lesion, idx) => (
                <Card key={idx} className="border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-md transition-all" data-testid={`card-lesion-comun-${idx}`}>
                  <CardContent className="p-6">
                    <h3 className="text-base font-bold mb-2 text-slate-900">{lesion.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{lesion.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                alt="Deportista con lesión deportiva común de rodilla o tobillo"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                data-testid="img-lesiones-comunes"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — SÍNTOMAS */}
      <section className="py-20 bg-slate-50" data-testid="section-sintomas-deportivas">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772560260/ChatGPT_Image_4_mar_2026_11_51_31_a.m._huc1cq.png"
                  alt="Paciente realizando rehabilitación de rodilla con equipo robótico asistido y supervisión de fisioterapeuta en clínica de ortopedia en Estado de México"
                  title="Rehabilitación de rodilla con tecnología robótica en Estado de México"
                  width={1200}
                  height={900}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-sintomas-deportivas"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  Recuperación de rodilla con tecnología de vanguardia y supervisión especializada para volver a moverte con seguridad y confianza
                </figcaption>
              </figure>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                Síntomas frecuentes de lesiones deportivas
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Las lesiones deportivas pueden manifestarse de forma inmediata o desarrollarse gradualmente. Si reconoces varios de estos síntomas, es importante buscar atención especializada.
              </p>
              <div className="space-y-4">
                {sintomas.map((sintoma, idx) => (
                  <div key={idx} className="flex items-start gap-3" data-testid={`text-sintoma-deportiva-${idx}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{sintoma}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 — CUÁNDO ACUDIR AL ESPECIALISTA */}
      <section className="py-20 bg-white" data-testid="section-alertas-deportivas">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                ¿Cuándo acudir con un ortopedista?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ignorar una lesión deportiva puede convertirla en un problema crónico que afecte permanentemente tu rendimiento y calidad de vida. Busca atención especializada si presentas:
              </p>
              <div className="space-y-4">
                {alertas.map((alerta, idx) => (
                  <div key={idx} className="flex items-start gap-3" data-testid={`text-alerta-deportiva-${idx}`}>
                    <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{alerta}</span>
                  </div>
                ))}
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-alertas-deportivas">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-5 text-base shadow-lg hover:-translate-y-1 transition-transform mt-8">
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Solicitar valoración médica
                </Button>
              </a>
            </div>
            <div>
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772560356/ChatGPT_Image_4_mar_2026_11_53_16_a.m._qxwplf.png"
                  alt="Paciente deportista con vendaje neuromuscular en hombro para tratamiento de dolor y rehabilitación deportiva en Estado de México"
                  title="Vendaje neuromuscular en hombro | Tratamiento ortopédico deportivo en Estado de México"
                  width={1200}
                  height={900}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-alertas-deportivas"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  Recupera la estabilidad y movilidad de tu hombro con técnicas avanzadas de vendaje neuromuscular aplicadas por especialista en ortopedia deportiva
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — TRATAMIENTOS */}
      <section className="py-20 bg-slate-50" data-testid="section-tratamientos-deportivas">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Tratamiento especializado en lesiones deportivas
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Cada lesión deportiva es diferente. El Dr. Córdova evalúa tu caso de forma individual para ofrecerte el tratamiento más efectivo y seguro para tu recuperación.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="grid sm:grid-cols-2 gap-6">
              {tratamientos.map((trat, idx) => (
                <Card key={idx} className="border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-md transition-all" data-testid={`card-tratamiento-deportiva-${idx}`}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-slate-900">{trat.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{trat.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="space-y-6">
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772567058/ChatGPT_Image_4_mar_2026_12_24_09_p.m._bwyzpg.png"
                  alt="Ortopedista evaluando rodilla de deportista en consulta médica especializada en lesiones deportivas en Cuautitlán Izcalli"
                  title="Evaluación de dolor de rodilla en deportista | Ortopedista en Cuautitlán Izcalli"
                  width={1200}
                  height={900}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-tratamientos-deportivas"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  ¿Dolor de rodilla al hacer deporte? Una valoración ortopédica oportuna permite un diagnóstico preciso y un plan de tratamiento personalizado
                </figcaption>
              </figure>
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
                <p className="text-slate-700 text-base leading-relaxed italic">
                  "Trabajamos con rehabilitadores profesionales para lograr una recuperación segura, completa y un regreso adecuado a las actividades deportivas."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 — ESPECIALISTA */}
      <section className="py-20 bg-white" data-testid="section-doctor-deportivas">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Especialista en lesiones deportivas en Cuautitlán Izcalli
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              El Dr. Jorge Luis Córdova ofrece atención integral para deportistas y personas activas, desde el diagnóstico inicial hasta la recuperación completa y el regreso seguro al deporte.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Search, title: "Valoración completa", desc: "Exploración física detallada y estudios de imagen para identificar con precisión la lesión." },
              { icon: Shield, title: "Diagnóstico preciso", desc: "Identificación exacta del tipo y grado de lesión para definir el mejor plan de tratamiento." },
              { icon: UserCheck, title: "Tratamiento personalizado", desc: "Plan de recuperación adaptado a tu deporte, nivel de actividad y metas de rendimiento." },
              { icon: Award, title: "Experiencia deportiva", desc: "Más de 25 años tratando lesiones deportivas en atletas y personas activas de todas las edades." },
            ].map((item, idx) => (
              <Card key={idx} className="text-center border-0 shadow-md" data-testid={`card-especialista-deportiva-${idx}`}>
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-2xl w-14 h-14 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 7 — CTA FINAL */}
      <section className="py-20 bg-primary" data-testid="section-cta-final-deportivas">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Heart className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Regresa a tu deporte con confianza
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            No permitas que una lesión deportiva te detenga. Agenda tu cita con el Dr. Jorge Córdova, ortopedista especialista en lesiones deportivas en Cuautitlán Izcalli. Tu recuperación comienza con una evaluación profesional.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-cta-final-deportivas">
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-10 py-7 text-xl shadow-2xl hover:-translate-y-1 transition-transform font-bold">
              <WhatsAppIcon className="w-7 h-7 mr-3" />
              AGENDAR CITA POR WHATSAPP
            </Button>
          </a>
          <p className="text-white/60 text-sm mt-6">Hospital Star Médica Luna Parc · Martes, Jueves y Sábado</p>
        </div>
      </section>
    </div>
  );
}
