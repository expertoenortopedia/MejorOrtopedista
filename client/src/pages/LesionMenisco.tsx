import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CheckCircle2, AlertTriangle, Stethoscope, Heart, Shield, Award, UserCheck, ClipboardCheck } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/525514961386?text=Hola%20Dr.%20Jorge,%20vengo%20de%20su%20p%C3%A1gina%20de%20lesi%C3%B3n%20de%20menisco%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita.";

const sintomas = [
  "Dolor en la rodilla al moverla o cargar peso",
  "Inflamación que aparece horas después de la lesión",
  "Sensación de bloqueo o que la rodilla se traba",
  "Dificultad para doblar o estirar la rodilla completamente",
  "Dolor al caminar, especialmente en superficies irregulares",
  "Sensación de inestabilidad o que la rodilla falla",
];

const alertas = [
  "Dolor persistente que no mejora con reposo",
  "Inflamación recurrente después de actividad física",
  "Dificultad para caminar o realizar actividades diarias",
  "Lesión deportiva con dolor intenso e inflamación inmediata",
  "Sensación de que la rodilla se atora o bloquea al moverse",
];

const tratamientos = [
  { title: "Medicamentos", desc: "Antiinflamatorios y analgésicos para controlar el dolor agudo y reducir la inflamación de la rodilla." },
  { title: "Terapia física", desc: "Ejercicios dirigidos para fortalecer los músculos que rodean la rodilla y recuperar estabilidad." },
  { title: "Rehabilitación", desc: "Programa integral de recuperación funcional para regresar a tus actividades con seguridad." },
  { title: "Artroscopia", desc: "Cirugía mínimamente invasiva para reparar o retirar la parte dañada del menisco cuando es necesario." },
];

export default function LesionMenisco() {
  useEffect(() => {
    document.title = "Lesión de Menisco en Cuautitlán Izcalli | Especialista en Rodilla";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Conoce los síntomas de la lesión de menisco, causas y cuándo acudir al especialista en rodilla en Cuautitlán Izcalli. Atención por el Dr Jorge Córdova.");
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
            "name": "Lesión de Menisco: síntomas, causas y tratamiento en Cuautitlán Izcalli",
            "description": "Conoce los síntomas de la lesión de menisco, causas y cuándo acudir al especialista en rodilla en Cuautitlán Izcalli.",
            "url": "https://expertoenortopedia.com.mx/lesion-menisco-cuautitlan-izcalli",
            "about": {
              "@type": "MedicalCondition",
              "name": "Lesión de Menisco",
              "alternateName": "Rotura de Menisco"
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
              }
            },
            "specialty": "Orthopedics"
          }),
        }}
      />

      {/* SECCIÓN 1 — HERO */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28" data-testid="section-hero-menisco">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Stethoscope className="w-4 h-4" />
                Especialista en Rodilla
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                Lesión de Menisco: síntomas, causas y tratamiento en Cuautitlán Izcalli
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Los meniscos son dos discos de cartílago en forma de media luna que se encuentran dentro de la rodilla. Funcionan como amortiguadores entre el fémur y la tibia, protegiendo la articulación y ayudando a distribuir el peso corporal de manera uniforme.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Una lesión de menisco ocurre cuando este cartílago se rompe o se desgarra, generalmente por un movimiento brusco de rotación, una lesión deportiva o por el desgaste natural con la edad. Es una de las lesiones de rodilla más comunes y, si no se trata a tiempo, puede provocar daño articular progresivo.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-hero-menisco">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:-translate-y-1 transition-transform mt-2">
                  <WhatsAppIcon className="w-6 h-6 mr-2" />
                  Agendar cita por WhatsApp
                </Button>
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80"
                alt="Evaluación médica de rodilla por especialista en lesión de menisco"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                loading="eager"
                data-testid="img-hero-menisco"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden md:block">
                <p className="text-sm font-bold text-primary">+25 años</p>
                <p className="text-xs text-muted-foreground">de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — SÍNTOMAS */}
      <section className="py-20 bg-white" data-testid="section-sintomas-menisco">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                Síntomas de una lesión de menisco
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Los síntomas pueden aparecer de forma inmediata tras una lesión aguda o desarrollarse gradualmente con el tiempo. Si reconoces alguno de estos síntomas, es importante buscar una evaluación profesional.
              </p>
              <div className="space-y-4">
                {sintomas.map((sintoma, idx) => (
                  <div key={idx} className="flex items-start gap-3" data-testid={`text-sintoma-menisco-${idx}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{sintoma}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1580281657527-47d97f3b7f0d?w=800&q=80"
                alt="Paciente con síntomas de lesión de menisco en consulta ortopédica"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                data-testid="img-sintomas-menisco"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — CUÁNDO ACUDIR AL ESPECIALISTA */}
      <section className="py-20 bg-slate-50" data-testid="section-alertas-menisco">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                alt="Consulta con especialista en rodilla para diagnóstico de lesión de menisco"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                data-testid="img-alertas-menisco"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                ¿Cuándo acudir al especialista en rodilla?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Una lesión de menisco no tratada puede empeorar con el tiempo, provocando desgaste articular, dolor crónico y limitación de movimiento. Estas son las señales de que necesitas una valoración urgente:
              </p>
              <div className="space-y-4">
                {alertas.map((alerta, idx) => (
                  <div key={idx} className="flex items-start gap-3" data-testid={`text-alerta-menisco-${idx}`}>
                    <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{alerta}</span>
                  </div>
                ))}
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-alertas-menisco">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-5 text-base shadow-lg hover:-translate-y-1 transition-transform mt-8">
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Solicitar valoración médica
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 — TRATAMIENTOS */}
      <section className="py-20 bg-white" data-testid="section-tratamientos-menisco">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Tratamiento de la lesión de menisco
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              El tratamiento depende del tipo de lesión, su ubicación y tu nivel de actividad. Siempre buscamos la opción que te permita recuperarte de forma segura y efectiva.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="grid sm:grid-cols-2 gap-6">
              {tratamientos.map((trat, idx) => (
                <Card key={idx} className="border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-md transition-all" data-testid={`card-tratamiento-menisco-${idx}`}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-slate-900">{trat.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{trat.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772555537/ChatGPT_Image_4_mar_2026_10_16_49_a.m._1_fnmjd0.png"
                alt="Artroscopia de rodilla para tratamiento de lesión de menisco en Cuautitlán Izcalli"
                title="Cirugía artroscópica de menisco - Ortopedista especialista en rodilla"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                decoding="async"
                data-testid="img-tratamientos-menisco"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — ESPECIALISTA EN RODILLA */}
      <section className="py-20 bg-slate-50" data-testid="section-doctor-menisco">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Especialista en rodilla en Cuautitlán Izcalli
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              El Dr. Jorge Luis Córdova cuenta con la experiencia y el compromiso necesarios para brindarte la mejor atención en lesiones de menisco y padecimientos de rodilla.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "Atención especializada", desc: "Enfoque exclusivo en diagnóstico y tratamiento de lesiones de rodilla." },
              { icon: Award, title: "Experiencia comprobada", desc: "Más de 25 años atendiendo pacientes con lesiones de menisco y rodilla." },
              { icon: UserCheck, title: "Tratamiento personalizado", desc: "Plan de recuperación adaptado a tu edad, actividad y estilo de vida." },
              { icon: ClipboardCheck, title: "Evaluación completa", desc: "Diagnóstico integral con exploración física y estudios de imagen." },
            ].map((item, idx) => (
              <Card key={idx} className="text-center border-0 shadow-md" data-testid={`card-especialista-menisco-${idx}`}>
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

      {/* SECCIÓN 6 — CTA FINAL */}
      <section className="py-20 bg-primary" data-testid="section-cta-final-menisco">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Heart className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Recupera la movilidad de tu rodilla
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            No dejes que una lesión de menisco limite tu vida. Agenda tu cita con el Dr. Jorge Córdova, especialista en rodilla en Cuautitlán Izcalli. La atención oportuna marca la diferencia en tu recuperación.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-cta-final-menisco">
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
