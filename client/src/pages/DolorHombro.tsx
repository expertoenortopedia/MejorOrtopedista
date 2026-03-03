import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CheckCircle2, AlertTriangle, Stethoscope, Heart, Shield, Award, UserCheck, Search } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/525514961386?text=Hola%20Dr.%20Jorge,%20vengo%20de%20su%20p%C3%A1gina%20de%20dolor%20de%20hombro%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita.";

const sintomas = [
  "Dolor al levantar el brazo por encima del hombro",
  "Dolor nocturno que dificulta dormir sobre el hombro afectado",
  "Debilidad al intentar cargar o sostener objetos",
  "Dolor al cargar objetos pesados o realizar movimientos repetitivos",
  "Limitación progresiva del movimiento del hombro",
  "Dolor que aumenta gradualmente con el tiempo",
];

const alertas = [
  "Dolor persistente que no mejora con reposo ni medicamentos",
  "Dolor que limita actividades cotidianas como vestirse o peinarse",
  "Debilidad progresiva en el brazo afectado",
  "Dolor nocturno frecuente que interrumpe el sueño",
  "Antecedente de lesión previa o caída sobre el hombro",
];

const tratamientos = [
  { title: "Medicamentos", desc: "Antiinflamatorios y analgésicos para controlar el dolor y reducir la inflamación del hombro." },
  { title: "Terapia física", desc: "Ejercicios específicos para recuperar fuerza y movilidad del hombro de forma progresiva y segura." },
  { title: "Rehabilitación", desc: "Programa integral para restaurar la función completa del hombro y prevenir recaídas." },
  { title: "Infiltraciones", desc: "Inyecciones guiadas para reducir la inflamación y el dolor de forma localizada y efectiva." },
  { title: "Cirugía artroscópica", desc: "En casos que lo requieran, reparación mínimamente invasiva del manguito rotador para restaurar la función." },
];

export default function DolorHombro() {
  useEffect(() => {
    document.title = "Dolor de Hombro y Manguito Rotador en Cuautitlán Izcalli | Ortopedista Especialista";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Tratamiento del dolor de hombro y lesiones del manguito rotador en Cuautitlán Izcalli. Conoce síntomas y cuándo acudir al ortopedista especialista.");
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
            "name": "Dolor de Hombro y Lesión del Manguito Rotador: síntomas y tratamiento",
            "description": "Tratamiento del dolor de hombro y lesiones del manguito rotador en Cuautitlán Izcalli. Conoce síntomas y cuándo acudir al ortopedista especialista.",
            "url": "https://expertoenortopedia.com.mx/dolor-hombro-manguito-rotador-cuautitlan-izcalli",
            "about": {
              "@type": "MedicalCondition",
              "name": "Lesión del Manguito Rotador",
              "alternateName": "Síndrome de manguito rotador"
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
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28" data-testid="section-hero-hombro">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Stethoscope className="w-4 h-4" />
                Ortopedista Especialista en Hombro
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                Dolor de Hombro y Lesión del Manguito Rotador: síntomas y tratamiento
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                El manguito rotador es un grupo de cuatro músculos y tendones que rodean la articulación del hombro. Su función es mantener la cabeza del húmero (hueso del brazo) firmemente en su lugar y permitir los movimientos de rotación y elevación del brazo.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cuando estos tendones se inflaman, se desgarran o se desgastan, aparece dolor que puede volverse muy limitante. Las causas más comunes son el uso repetitivo del brazo, caídas, levantamiento de objetos pesados y el desgaste natural con la edad. Sin tratamiento, la lesión puede empeorar progresivamente.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-hero-hombro">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:-translate-y-1 transition-transform mt-2">
                  <WhatsAppIcon className="w-6 h-6 mr-2" />
                  Agendar cita por WhatsApp
                </Button>
              </a>
            </div>
            <div className="relative">
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772559093/ChatGPT_Image_4_mar_2026_11_32_08_a.m._nqycfl.png"
                  alt="Dolor de hombro y lesión del manguito rotador evaluado por ortopedista especialista en Cuautitlán Izcalli"
                  title="Dolor de hombro y lesión de manguito rotador - Ortopedista en Cuautitlán Izcalli"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                  loading="eager"
                  decoding="async"
                  data-testid="img-hero-hombro"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  Especialista en dolor de hombro y lesiones del manguito rotador en Cuautitlán Izcalli
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
      <section className="py-20 bg-white" data-testid="section-sintomas-hombro">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                Síntomas de la lesión del manguito rotador
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Los síntomas del manguito rotador pueden aparecer de forma repentina después de una lesión, o desarrollarse gradualmente por desgaste. Si reconoces varios de estos síntomas, es importante buscar atención especializada.
              </p>
              <div className="space-y-4">
                {sintomas.map((sintoma, idx) => (
                  <div key={idx} className="flex items-start gap-3" data-testid={`text-sintoma-hombro-${idx}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{sintoma}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1580281657527-47d97f3b7f0d?w=800&q=80"
                alt="Paciente con dolor de hombro por lesión del manguito rotador"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                data-testid="img-sintomas-hombro"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — CUÁNDO ACUDIR AL ESPECIALISTA */}
      <section className="py-20 bg-slate-50" data-testid="section-alertas-hombro">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80"
                alt="Diagnóstico de dolor de hombro por especialista en Cuautitlán Izcalli"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                data-testid="img-alertas-hombro"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                ¿Cuándo acudir con un especialista en hombro?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Una lesión del manguito rotador no tratada puede provocar debilidad permanente, pérdida de movilidad y dolor crónico. La atención temprana es clave para evitar complicaciones. Busca atención si presentas:
              </p>
              <div className="space-y-4">
                {alertas.map((alerta, idx) => (
                  <div key={idx} className="flex items-start gap-3" data-testid={`text-alerta-hombro-${idx}`}>
                    <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{alerta}</span>
                  </div>
                ))}
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-alertas-hombro">
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
      <section className="py-20 bg-white" data-testid="section-tratamientos-hombro">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Tratamientos disponibles para el dolor de hombro
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              El tratamiento se adapta al tipo de lesión, su severidad y las necesidades de cada paciente. Siempre buscamos la opción menos invasiva que ofrezca los mejores resultados.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="grid sm:grid-cols-2 gap-6">
              {tratamientos.map((trat, idx) => (
                <Card key={idx} className="border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-md transition-all" data-testid={`card-tratamiento-hombro-${idx}`}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-slate-900">{trat.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{trat.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&q=80"
                alt="Tratamiento especializado para lesión del manguito rotador"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                data-testid="img-tratamientos-hombro"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — ESPECIALISTA */}
      <section className="py-20 bg-slate-50" data-testid="section-doctor-hombro">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Especialista en hombro en Cuautitlán Izcalli
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              El Dr. Jorge Luis Córdova ofrece atención integral para pacientes con dolor de hombro y lesiones del manguito rotador, desde el diagnóstico hasta la recuperación completa.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Search, title: "Valoración completa", desc: "Exploración física detallada y estudios de imagen para identificar la causa exacta del dolor." },
              { icon: Shield, title: "Diagnóstico preciso", desc: "Identificación del tipo y grado de lesión del manguito rotador para definir el mejor tratamiento." },
              { icon: UserCheck, title: "Tratamiento personalizado", desc: "Plan terapéutico adaptado a tu edad, nivel de actividad y severidad de la lesión." },
              { icon: Award, title: "Especialista en hombro", desc: "Más de 25 años de experiencia en diagnóstico y tratamiento de lesiones de hombro." },
            ].map((item, idx) => (
              <Card key={idx} className="text-center border-0 shadow-md" data-testid={`card-especialista-hombro-${idx}`}>
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
      <section className="py-20 bg-primary" data-testid="section-cta-final-hombro">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Heart className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Recupera la movilidad de tu hombro
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            No permitas que el dolor de hombro limite tu vida diaria. Agenda tu cita con el Dr. Jorge Córdova, ortopedista especialista en hombro en Cuautitlán Izcalli. Una evaluación oportuna es el primer paso hacia tu recuperación.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-cta-final-hombro">
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
