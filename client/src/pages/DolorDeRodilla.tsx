import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CheckCircle2, AlertTriangle, Stethoscope, Heart, Shield, Award, UserCheck } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/525514961386?text=Hola%20Dr.%20Jorge,%20vengo%20de%20su%20p%C3%A1gina%20de%20dolor%20de%20rodilla%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita.";

const sintomas = [
  "Dolor al caminar",
  "Dolor al subir o bajar escaleras",
  "Inflamación",
  "Rigidez",
  "Sensación de desgaste",
  "Inestabilidad",
];

const alertas = [
  "Dolor persistente que no cede con reposo",
  "Inflamación frecuente o recurrente",
  "Limitación para caminar o hacer actividades diarias",
  "Lesión previa que no fue tratada correctamente",
  "Dolor que no mejora con medicamentos",
];

const tratamientos = [
  { title: "Medicamentos", desc: "Antiinflamatorios y analgésicos específicos para controlar el dolor y la inflamación de forma segura." },
  { title: "Terapia física", desc: "Programa de rehabilitación personalizado para fortalecer los músculos y recuperar movilidad." },
  { title: "Infiltraciones", desc: "Inyecciones de ácido hialurónico o corticoides directamente en la articulación para alivio rápido." },
  { title: "Cirugía", desc: "Solo en casos necesarios: artroscopia o reemplazo articular con técnicas mínimamente invasivas." },
];

export default function DolorDeRodilla() {
  useEffect(() => {
    document.title = "Dolor de Rodilla en Cuautitlán Izcalli | Ortopedista Especialista en Rodilla";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Tratamiento del dolor de rodilla en Cuautitlán Izcalli. Conoce causas, síntomas y cuándo acudir al ortopedista especialista en rodilla. Agenda tu cita.");
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
            "name": "Dolor de Rodilla: causas, síntomas y tratamiento en Cuautitlán Izcalli",
            "description": "Tratamiento del dolor de rodilla en Cuautitlán Izcalli. Conoce causas, síntomas y cuándo acudir al ortopedista especialista en rodilla.",
            "url": "https://expertoenortopedia.com.mx/dolor-de-rodilla-cuautitlan-izcalli",
            "about": {
              "@type": "MedicalCondition",
              "name": "Dolor de Rodilla",
              "alternateName": "Gonalgia"
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
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28" data-testid="section-hero-rodilla">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Stethoscope className="w-4 h-4" />
                Ortopedista Especialista en Rodilla
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                Dolor de Rodilla: causas, síntomas y tratamiento en Cuautitlán Izcalli
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                El dolor de rodilla es una de las molestias más comunes y puede afectar personas de todas las edades. Puede deberse al desgaste natural, una lesión deportiva, sobrepeso o problemas posturales. Si no se atiende a tiempo, puede limitar tu capacidad para caminar, subir escaleras o realizar tus actividades diarias con normalidad.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                El Dr. Jorge Luis Córdova es ortopedista especialista en rodilla en Cuautitlán Izcalli, con más de 25 años de experiencia tratando este tipo de padecimientos con resultados comprobados.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-hero">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:-translate-y-1 transition-transform mt-2">
                  <WhatsAppIcon className="w-6 h-6 mr-2" />
                  Agendar cita por WhatsApp
                </Button>
              </a>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772492074/ChatGPT_Image_2_mar_2026_04_46_07_p.m._mglgrw.png"
                alt="Dolor de rodilla ortopedia especialista en Cuautitlán Izcalli"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                loading="eager"
                decoding="async"
                data-testid="img-hero-rodilla"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden md:block">
                <p className="text-sm font-bold text-primary">+25 años</p>
                <p className="text-xs text-muted-foreground">de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — SÍNTOMAS FRECUENTES */}
      <section className="py-20 bg-white" data-testid="section-sintomas">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                Síntomas frecuentes del dolor de rodilla
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Si experimentas alguno de estos síntomas de forma frecuente, es importante acudir con un especialista para recibir un diagnóstico adecuado y evitar que el problema avance.
              </p>
              <div className="space-y-4">
                {sintomas.map((sintoma, idx) => (
                  <div key={idx} className="flex items-start gap-3" data-testid={`text-sintoma-${idx}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{sintoma}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
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
                  data-testid="img-sintomas"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  Recuperación de rodilla con tecnología de vanguardia y supervisión especializada para volver a moverte con seguridad y confianza
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — CUÁNDO ACUDIR AL ORTOPEDISTA */}
      <section className="py-20 bg-slate-50" data-testid="section-alertas">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772492995/ChatGPT_Image_2_mar_2026_05_09_46_p.m._xkrkbn.png"
                alt="Dolor de rodilla por desgaste articular tratado con cirugía especializada"
                title="Especialista en cirugía de rodilla y desgaste articular"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                decoding="async"
                data-testid="img-alertas"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                ¿Cuándo debes acudir con un ortopedista?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Muchas personas esperan demasiado tiempo antes de buscar ayuda profesional. Estas son las señales de alerta que indican que necesitas una valoración médica especializada:
              </p>
              <div className="space-y-4">
                {alertas.map((alerta, idx) => (
                  <div key={idx} className="flex items-start gap-3" data-testid={`text-alerta-${idx}`}>
                    <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{alerta}</span>
                  </div>
                ))}
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-alertas">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-5 text-base shadow-lg hover:-translate-y-1 transition-transform mt-8">
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Solicitar valoración médica
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 — TRATAMIENTOS DISPONIBLES */}
      <section className="py-20 bg-white" data-testid="section-tratamientos">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Tratamientos disponibles para el dolor de rodilla
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              El tratamiento depende de la causa y la gravedad del dolor. Siempre buscamos la opción menos invasiva que te dé los mejores resultados.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="grid sm:grid-cols-2 gap-6">
              {tratamientos.map((trat, idx) => (
                <Card key={idx} className="border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-md transition-all" data-testid={`card-tratamiento-${idx}`}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-slate-900">{trat.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{trat.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772501060/ChatGPT_Image_2_mar_2026_07_23_45_p.m._el9k5x.png"
                alt="Tratamiento para dolor de rodilla por desgaste articular con cirugía especializada en Cuautitlán Izcalli"
                title="Tratamientos disponibles para dolor de rodilla - Ortopedista especialista en Cuautitlán Izcalli"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                decoding="async"
                data-testid="img-tratamientos"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — POR QUÉ ELEGIR AL DR. CÓRDOVA */}
      <section className="py-20 bg-slate-50" data-testid="section-doctor">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              ¿Por qué elegir al Dr. Jorge Córdova?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Tu rodilla merece la atención de un especialista comprometido con tu recuperación y bienestar.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: "Especialista en rodilla", desc: "Subespecialidad enfocada en diagnóstico y tratamiento de padecimientos de rodilla con las técnicas más actuales." },
              { icon: Award, title: "Más de 25 años de experiencia", desc: "Trayectoria sólida atendiendo pacientes en el Estado de México con resultados comprobados." },
              { icon: UserCheck, title: "Atención personalizada", desc: "Cada paciente recibe un plan de tratamiento individual, con explicación clara y acompañamiento en cada paso." },
            ].map((item, idx) => (
              <Card key={idx} className="text-center border-0 shadow-md" data-testid={`card-doctor-${idx}`}>
                <CardContent className="p-8">
                  <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-2xl w-16 h-16 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 — CTA FINAL WHATSAPP */}
      <section className="py-20 bg-primary" data-testid="section-cta-final">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Heart className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            No dejes que el dolor limite tu vida
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Agenda tu cita con el Dr. Jorge Córdova, ortopedista especialista en rodilla en Cuautitlán Izcalli. La valoración oportuna mejora el resultado del tratamiento.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-cta-final">
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
