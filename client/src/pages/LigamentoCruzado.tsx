import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CheckCircle2, AlertTriangle, Stethoscope, Heart, Shield, Award, UserCheck, Search } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/525514961386?text=Hola%20Dr.%20Jorge,%20vengo%20de%20su%20p%C3%A1gina%20de%20ligamento%20cruzado%20anterior%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita.";

const sintomas = [
  "Dolor intenso al momento de la lesión, a veces con un \"tronido\"",
  "Sensación de que la rodilla falla o se va al caminar",
  "Inflamación rápida en las primeras horas",
  "Dificultad para caminar o apoyar la pierna",
  "Inestabilidad al intentar cambiar de dirección",
  "Dificultad para retomar actividades deportivas",
];

const alertas = [
  "Rodilla inestable que se siente insegura al caminar",
  "Inflamación persistente que no cede con reposo",
  "Limitación funcional para actividades cotidianas",
  "Lesión deportiva con dolor e inflamación inmediata",
  "Sensación de inseguridad al subir escaleras o girar",
];

const tratamientos = [
  { title: "Tratamiento conservador", desc: "En lesiones parciales o pacientes de baja demanda, se puede manejar con reposo, antiinflamatorios y modificación de actividad." },
  { title: "Rehabilitación", desc: "Programa de fortalecimiento muscular progresivo para recuperar estabilidad y función de la rodilla." },
  { title: "Terapia física", desc: "Ejercicios especializados para restaurar el rango de movimiento, fuerza y propiocepción de la articulación." },
  { title: "Reconstrucción quirúrgica", desc: "En pacientes activos o con inestabilidad significativa, se realiza cirugía artroscópica para reconstruir el ligamento." },
];

export default function LigamentoCruzado() {
  useEffect(() => {
    document.title = "Lesión del Ligamento Cruzado Anterior en Cuautitlán Izcalli | Especialista en Rodilla";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Conoce los síntomas de la lesión del ligamento cruzado anterior, causas y cuándo acudir al especialista en rodilla en Cuautitlán Izcalli. Agenda tu cita.");
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
            "name": "Lesión del Ligamento Cruzado Anterior de la Rodilla: síntomas, diagnóstico y tratamiento",
            "description": "Conoce los síntomas de la lesión del ligamento cruzado anterior, causas y cuándo acudir al especialista en rodilla en Cuautitlán Izcalli.",
            "url": "https://expertoenortopedia.com.mx/ligamento-cruzado-anterior-cuautitlan-izcalli",
            "about": {
              "@type": "MedicalCondition",
              "name": "Lesión del Ligamento Cruzado Anterior",
              "alternateName": "Rotura de LCA"
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
            "specialty": "Orthopedics",
            "mainEntity": {
              "@type": "MedicalBusiness",
              "name": "Dr. Jorge Luis Córdova Fonseca - Ortopedia y Traumatología",
              "medicalSpecialty": "Orthopedics",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cuautitlán Izcalli",
                "addressRegion": "Estado de México",
                "addressCountry": "MX"
              },
              "telephone": "+525514961386"
            }
          }),
        }}
      />

      {/* SECCIÓN 1 — HERO */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28" data-testid="section-hero-lca">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Stethoscope className="w-4 h-4" />
                Especialista en Rodilla
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                Lesión del Ligamento Cruzado Anterior de la Rodilla: síntomas, diagnóstico y tratamiento
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                El ligamento cruzado anterior (LCA) es una estructura fundamental dentro de la rodilla. Su función principal es dar estabilidad a la articulación, impidiendo que la tibia se desplace hacia adelante respecto al fémur. Sin el LCA, la rodilla pierde firmeza y se vuelve inestable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La lesión del LCA ocurre frecuentemente durante actividades deportivas que implican cambios bruscos de dirección, saltos o impactos directos en la rodilla. Es especialmente común en futbolistas, basquetbolistas y personas que practican deportes de contacto, aunque también puede ocurrir en accidentes cotidianos.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-hero-lca">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:-translate-y-1 transition-transform mt-2">
                  <WhatsAppIcon className="w-6 h-6 mr-2" />
                  Agendar cita por WhatsApp
                </Button>
              </a>
            </div>
            <div className="relative">
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772556485/ChatGPT_Image_4_mar_2026_10_48_21_a.m._sshj7m.png"
                  alt="Paciente en cirugía de reconstrucción de ligamento cruzado anterior (LCA) de rodilla realizada por ortopedista especialista en lesión de LCA"
                  title="Lesión del ligamento cruzado anterior - Especialista en reconstrucción de LCA"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                  loading="eager"
                  decoding="async"
                  data-testid="img-hero-lca"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  Especialista en tratamiento quirúrgico y conservador del ligamento cruzado anterior (LCA) y lesiones deportivas de rodilla
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
      <section className="py-20 bg-white" data-testid="section-sintomas-lca">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                Síntomas de la lesión del ligamento cruzado anterior
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                La lesión del LCA suele producirse de forma repentina. Muchos pacientes reportan haber escuchado un "tronido" en la rodilla al momento de la lesión, seguido de dolor intenso e inflamación rápida.
              </p>
              <div className="space-y-4">
                {sintomas.map((sintoma, idx) => (
                  <div key={idx} className="flex items-start gap-3" data-testid={`text-sintoma-lca-${idx}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{sintoma}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772562537/ChatGPT_Image_4_mar_2026_12_29_50_p.m._ex2obt.png"
                  alt="Futbolista con lesión del ligamento cruzado anterior en la rodilla durante partido mostrando dolor agudo tras mecanismo de torsión"
                  title="Lesión de Ligamento Cruzado Anterior en Futbolista | Ortopedista Deportivo en Estado de México"
                  width={1200}
                  height={900}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-sintomas-lca"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  ¿Dolor intenso en la rodilla después de un giro o cambio brusco de dirección? La valoración temprana mejora el pronóstico y el retorno al deporte
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — CUÁNDO ACUDIR AL ESPECIALISTA */}
      <section className="py-20 bg-slate-50" data-testid="section-alertas-lca">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&q=80"
                alt="Diagnóstico especializado de ligamento cruzado anterior en Cuautitlán Izcalli"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                data-testid="img-alertas-lca"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                ¿Cuándo debes acudir con un especialista en rodilla?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Una lesión del ligamento cruzado anterior no tratada puede provocar inestabilidad crónica, lesiones adicionales en meniscos y desgaste articular acelerado. Busca atención si presentas:
              </p>
              <div className="space-y-4">
                {alertas.map((alerta, idx) => (
                  <div key={idx} className="flex items-start gap-3" data-testid={`text-alerta-lca-${idx}`}>
                    <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{alerta}</span>
                  </div>
                ))}
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-alertas-lca">
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
      <section className="py-20 bg-white" data-testid="section-tratamientos-lca">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Tratamientos disponibles para la lesión del LCA
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              El tratamiento depende de la gravedad de la lesión, tu nivel de actividad y tus metas de recuperación. El Dr. Córdova evalúa cada caso de forma individual para recomendarte la mejor opción.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="grid sm:grid-cols-2 gap-6">
              {tratamientos.map((trat, idx) => (
                <Card key={idx} className="border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-md transition-all" data-testid={`card-tratamiento-lca-${idx}`}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-slate-900">{trat.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{trat.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80"
                alt="Tratamiento y rehabilitación de ligamento cruzado anterior por especialista"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                data-testid="img-tratamientos-lca"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — ATENCIÓN ESPECIALIZADA */}
      <section className="py-20 bg-slate-50" data-testid="section-doctor-lca">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Atención especializada en rodilla en Cuautitlán Izcalli
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              El Dr. Jorge Luis Córdova brinda atención integral para lesiones del ligamento cruzado anterior, desde el diagnóstico hasta la recuperación completa.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Search, title: "Evaluación completa", desc: "Exploración física detallada y estudios de imagen para un diagnóstico preciso." },
              { icon: Shield, title: "Diagnóstico preciso", desc: "Identificación exacta del tipo y grado de lesión para definir el mejor tratamiento." },
              { icon: UserCheck, title: "Tratamiento personalizado", desc: "Plan de recuperación adaptado a tu edad, nivel de actividad y expectativas." },
              { icon: Award, title: "Especialista en rodilla", desc: "Más de 25 años de experiencia en lesiones de rodilla y cirugía artroscópica." },
            ].map((item, idx) => (
              <Card key={idx} className="text-center border-0 shadow-md" data-testid={`card-especialista-lca-${idx}`}>
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
      <section className="py-20 bg-primary" data-testid="section-cta-final-lca">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Heart className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Recupera la estabilidad de tu rodilla
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            No permitas que una lesión del ligamento cruzado anterior limite tu vida. Agenda tu cita con el Dr. Jorge Córdova, especialista en rodilla en Cuautitlán Izcalli. Una evaluación oportuna es el primer paso hacia tu recuperación.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-cta-final-lca">
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
