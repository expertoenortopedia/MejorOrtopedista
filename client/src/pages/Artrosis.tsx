import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CheckCircle2, AlertTriangle, Stethoscope, Heart, Shield, Award, UserCheck, Search } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/525514961386?text=Hola%20Dr.%20Jorge,%20vengo%20de%20su%20p%C3%A1gina%20de%20artrosis%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita.";

const sintomas = [
  "Dolor al caminar, especialmente en trayectos largos",
  "Dolor al levantarse después de estar sentado",
  "Rigidez articular, sobre todo por las mañanas",
  "Inflamación visible en la rodilla o cadera",
  "Limitación progresiva del movimiento",
  "Dificultad para caminar o subir escaleras",
  "Dolor en la ingle o parte lateral de la cadera",
  "Dolor en la rodilla al subir o bajar escaleras",
];

const alertas = [
  "Dolor persistente que no cede con reposo ni medicamentos",
  "Limitación funcional que afecta tus actividades diarias",
  "Dolor que aumenta progresivamente con el tiempo",
  "Dificultad para realizar actividades cotidianas como vestirse o caminar",
  "Pérdida de calidad de vida por el dolor articular",
];

const tratamientos = [
  { title: "Medicamentos", desc: "Antiinflamatorios y analgésicos específicos para controlar el dolor y la inflamación articular." },
  { title: "Terapia física", desc: "Programa de ejercicios para fortalecer los músculos que protegen la articulación y mejorar la movilidad." },
  { title: "Infiltraciones", desc: "Inyecciones de ácido hialurónico o corticoides para lubricar la articulación y reducir el dolor." },
  { title: "Cambios en estilo de vida", desc: "Control de peso, actividad física adecuada y modificaciones para reducir la carga sobre las articulaciones." },
  { title: "Prótesis de rodilla", desc: "En casos avanzados, reemplazo articular para restaurar la función y eliminar el dolor de forma definitiva." },
  { title: "Prótesis de cadera", desc: "Cirugía de reemplazo de cadera cuando el desgaste es severo y limita significativamente la calidad de vida." },
];

export default function Artrosis() {
  useEffect(() => {
    document.title = "Artrosis de Rodilla y Cadera en Cuautitlán Izcalli | Ortopedista Especialista";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Tratamiento del desgaste articular de rodilla y cadera en Cuautitlán Izcalli. Conoce síntomas, causas y cuándo acudir al ortopedista especialista.");
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
            "name": "Desgaste Articular (Artrosis) de Rodilla y Cadera: síntomas y tratamiento",
            "description": "Tratamiento del desgaste articular de rodilla y cadera en Cuautitlán Izcalli. Conoce síntomas, causas y cuándo acudir al ortopedista especialista.",
            "url": "https://expertoenortopedia.com.mx/artrosis-rodilla-cadera-cuautitlan-izcalli",
            "about": {
              "@type": "MedicalCondition",
              "name": "Artrosis",
              "alternateName": "Osteoartritis"
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
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28" data-testid="section-hero-artrosis">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Stethoscope className="w-4 h-4" />
                Ortopedista Especialista en Rodilla y Cadera
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                Desgaste Articular (Artrosis) de Rodilla y Cadera: síntomas y tratamiento
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                El desgaste articular, también conocido como artrosis u osteoartritis, es una condición en la que el cartílago que recubre las articulaciones se va deteriorando gradualmente. Este cartílago funciona como un amortiguador que permite el movimiento suave de los huesos. Cuando se desgasta, los huesos rozan entre sí, provocando dolor, inflamación y rigidez.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La rodilla y la cadera son las articulaciones más afectadas porque soportan el peso del cuerpo durante toda la vida. El desgaste progresa con el tiempo, por lo que una evaluación oportuna permite frenar su avance y mejorar significativamente la calidad de vida del paciente.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-hero-artrosis">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:-translate-y-1 transition-transform mt-2">
                  <WhatsAppIcon className="w-6 h-6 mr-2" />
                  Agendar cita por WhatsApp
                </Button>
              </a>
            </div>
            <div className="relative">
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772557153/ChatGPT_Image_4_mar_2026_10_59_11_a.m._1_ld3ydv.png"
                  alt="Imagen clínica de desgaste de cartílago en rodilla (artrosis) causando dolor y limitación funcional tratada por ortopedista especialista en rodilla"
                  title="Desgaste articular y artrosis de rodilla - Ortopedista especialista en cartílago de rodilla"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                  loading="eager"
                  decoding="async"
                  data-testid="img-hero-artrosis"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  Tratamiento especializado para desgaste de cartílago y artrosis de rodilla con opciones conservadoras y quirúrgicas
                </figcaption>
              </figure>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden md:block">
                <p className="text-sm font-bold text-primary">+25 años</p>
                <p className="text-xs text-muted-foreground">de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — SÍNTOMAS */}
      <section className="py-20 bg-white" data-testid="section-sintomas-artrosis">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                Síntomas de desgaste articular en rodilla y cadera
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Los síntomas del desgaste articular aparecen gradualmente y tienden a empeorar con el tiempo. Si reconoces varios de estos síntomas, es importante buscar atención especializada.
              </p>
              <div className="space-y-4">
                {sintomas.map((sintoma, idx) => (
                  <div key={idx} className="flex items-start gap-3" data-testid={`text-sintoma-artrosis-${idx}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{sintoma}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772557286/ChatGPT_Image_4_mar_2026_11_02_19_a.m._1_aid1dt.png"
                  alt="Hombre con dolor intenso en rodilla derecha sujetándose la articulación en casa, imagen representativa de dolor de rodilla tratada por ortopedista en CDMX"
                  title="Dolor de rodilla en CDMX | Ortopedista especialista en rodilla"
                  width={1200}
                  height={900}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-sintomas-artrosis"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  ¿Dolor de rodilla al caminar o levantarte? Una valoración oportuna puede evitar complicaciones mayores
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — CUÁNDO ACUDIR AL ESPECIALISTA */}
      <section className="py-20 bg-slate-50" data-testid="section-alertas-artrosis">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1580281657527-47d97f3b7f0d?w=800&q=80"
                alt="Especialista en ortopedia evaluando desgaste articular de rodilla y cadera"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                data-testid="img-alertas-artrosis"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                ¿Cuándo acudir con un especialista?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                El desgaste articular no se cura por sí solo y tiende a empeorar con el tiempo. Sin embargo, con el tratamiento adecuado es posible frenar su avance, controlar el dolor y mantener una vida activa. Busca atención especializada si presentas:
              </p>
              <div className="space-y-4">
                {alertas.map((alerta, idx) => (
                  <div key={idx} className="flex items-start gap-3" data-testid={`text-alerta-artrosis-${idx}`}>
                    <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{alerta}</span>
                  </div>
                ))}
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-alertas-artrosis">
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
      <section className="py-20 bg-white" data-testid="section-tratamientos-artrosis">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Tratamientos disponibles para el desgaste articular
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              El tratamiento se adapta al grado de desgaste, la articulación afectada y las necesidades de cada paciente. Siempre buscamos la opción menos invasiva que ofrezca los mejores resultados.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="grid sm:grid-cols-2 gap-6">
              {tratamientos.map((trat, idx) => (
                <Card key={idx} className="border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-md transition-all" data-testid={`card-tratamiento-artrosis-${idx}`}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-slate-900">{trat.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{trat.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div>
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772557460/ChatGPT_Image_4_mar_2026_11_05_10_a.m._gwndwj.png"
                  alt="Paciente realizando rehabilitación de rodilla con banda elástica supervisado por ortopedista en CDMX para tratamiento de dolor de rodilla"
                  title="Rehabilitación de rodilla en CDMX | Tratamiento especializado por ortopedista"
                  width={1200}
                  height={900}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-tratamientos-artrosis"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  Recupera la movilidad de tu rodilla con un programa de rehabilitación personalizado y supervisado por especialista en ortopedia
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — ESPECIALISTA */}
      <section className="py-20 bg-slate-50" data-testid="section-doctor-artrosis">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Especialista en rodilla y cadera en Cuautitlán Izcalli
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              El Dr. Jorge Luis Córdova ofrece atención integral para pacientes con desgaste articular, desde el diagnóstico temprano hasta tratamientos avanzados como prótesis articulares.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Search, title: "Valoración completa", desc: "Evaluación detallada con exploración física y estudios de imagen para determinar el grado de desgaste." },
              { icon: Shield, title: "Diagnóstico preciso", desc: "Identificación exacta de la articulación afectada y el nivel de deterioro para planificar el tratamiento." },
              { icon: UserCheck, title: "Tratamiento personalizado", desc: "Plan terapéutico adaptado a tu edad, nivel de actividad y severidad del desgaste articular." },
              { icon: Award, title: "Especialista articular", desc: "Más de 25 años de experiencia tratando enfermedades articulares degenerativas de rodilla y cadera." },
            ].map((item, idx) => (
              <Card key={idx} className="text-center border-0 shadow-md" data-testid={`card-especialista-artrosis-${idx}`}>
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
      <section className="py-20 bg-primary" data-testid="section-cta-final-artrosis">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Heart className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            No dejes que el desgaste limite tu vida
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            El desgaste articular se puede tratar. Agenda tu cita con el Dr. Jorge Córdova, ortopedista especialista en rodilla y cadera en Cuautitlán Izcalli. La atención temprana marca la diferencia en tu calidad de vida.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-cta-final-artrosis">
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
