import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CheckCircle2, AlertTriangle, Stethoscope, Heart, Shield, Award, UserCheck, Search, HelpCircle, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_LINK = "https://wa.me/525514961386?text=Hola%20Dr.%20Jorge,%20vengo%20de%20su%20p%C3%A1gina%20de%20artrosis%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita.";

const sintomas = [
  "Dolor al caminar, especialmente en trayectos largos o terrenos irregulares",
  "Dolor al levantarse después de estar sentado por tiempo prolongado",
  "Rigidez articular persistente, sobre todo por las mañanas (rigidez matutina)",
  "Inflamación visible o sensación de calor en la rodilla o cadera",
  "Limitación progresiva del rango de movimiento de la articulación",
  "Dificultad para caminar distancias que antes eran sencillas",
  "Dolor en la ingle o parte lateral de la cadera que se irradia hacia el muslo",
  "Dolor en la rodilla al subir o bajar escaleras, indicativo de desgaste",
];

const alertas = [
  "Dolor articular persistente que no cede con el reposo básico ni analgésicos comunes",
  "Limitación funcional severa que afecta directamente tus actividades diarias y laborales",
  "Dolor que aumenta progresivamente en intensidad y frecuencia con el paso del tiempo",
  "Dificultad marcada para realizar actividades cotidianas como vestirse, calzarse o caminar",
  "Pérdida notable de la calidad de vida y autonomía debido al dolor articular constante",
];

const faqArtrosis = [
  {
    question: "¿La artrosis tiene cura definitiva?",
    answer: "Aunque la artrosis es una enfermedad degenerativa crónica, existen múltiples tratamientos para controlar los síntomas, frenar su avance y, en casos severos, restaurar la función mediante cirugía de reemplazo articular (prótesis)."
  },
  {
    question: "¿Cuál es la diferencia entre artritis y artrosis?",
    answer: "La artrosis es el desgaste del cartílago por uso o edad, mientras que la artritis es una inflamación de la articulación que puede ser causada por enfermedades autoinmunes, infecciones u otros factores. Un ortopedista en Cuautitlán Izcalli puede realizar el diagnóstico diferencial preciso."
  },
  {
    question: "¿Es necesaria la cirugía de prótesis en todos los casos?",
    answer: "No. La cirugía es el último recurso. Muchos pacientes encuentran alivio significativo con tratamientos conservadores como infiltraciones de ácido hialurónico, fisioterapia y control de peso, especialmente si se detecta a tiempo."
  },
  {
    question: "¿Qué actividades debo evitar si tengo artrosis de rodilla?",
    answer: "Se recomienda evitar ejercicios de alto impacto como correr o saltar sobre superficies duras. En su lugar, actividades como natación, ciclismo o caminatas controladas son ideales para mantener la movilidad sin dañar más el cartílago."
  },
  {
    question: "¿Las infiltraciones de rodilla duelen?",
    answer: "El procedimiento es mínimamente invasivo y se realiza con anestesia local o técnica cuidadosa para minimizar la molestia. En nuestra consulta en Cuautitlán Izcalli, a menudo utilizamos guía por ultrasonido para mayor precisión y confort."
  }
];

const tratamientos = [
  { title: "Medicamentos Especializados", desc: "Uso de antiinflamatorios no esteroideos (AINEs), analgésicos y protectores de cartílago (condroprotectores) para manejar el dolor crónico." },
  { title: "Fisioterapia y Rehabilitación", desc: "Programas personalizados para fortalecer la musculatura de soporte, mejorar el equilibrio y mantener la flexibilidad articular." },
  { title: "Infiltraciones Articulares", desc: "Aplicación de ácido hialurónico (viscosuplementación) o plasma rico en plaquetas para mejorar la lubricación y reducir el roce óseo." },
  { title: "Higiene de Columna y Articular", desc: "Educación sobre posturas correctas, control de peso saludable y uso de calzado adecuado para disminuir la carga mecánica." },
  { title: "Prótesis Total de Rodilla", desc: "Intervención quirúrgica para sustituir las superficies dañadas por componentes artificiales de alta durabilidad, eliminando el dolor." },
  { title: "Prótesis Total de Cadera", desc: "Reemplazo de la articulación coxofemoral indicado cuando el desgaste impide caminar o dormir adecuadamente por el dolor." },
];

export default function Artrosis() {
  useEffect(() => {
    document.title = "Artrosis de Rodilla y Cadera | Ortopedista en Cuautitlán Izcalli | Dr. Jorge L. Córdova";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Tratamiento experto para el desgaste articular y artrosis de rodilla o cadera en Cuautitlán Izcalli. Especialista en rodilla con opciones de tratamiento conservador y prótesis.");
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
            "name": "Artrosis de Rodilla y Cadera: Tratamiento en Cuautitlán Izcalli",
            "description": "Tratamiento del desgaste articular de rodilla y cadera en Cuautitlán Izcalli por el Dr. Jorge Luis Córdova. Especialista en ortopedia y traumatología.",
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
                Ortopedista en Cuautitlán Izcalli
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                Artrosis de Rodilla y Cadera: Especialista en Desgaste Articular
              </h1>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  El desgaste articular, científicamente conocido como artrosis u osteoartritis, es una de las condiciones más frecuentes atendidas por el <strong>ortopedista en Cuautitlán Izcalli</strong>. Consiste en la degradación progresiva del cartílago hialino, el tejido que permite que los huesos se deslicen suavemente entre sí dentro de la articulación.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Cuando este cartílago se adelgaza o desaparece, se produce un roce directo entre los huesos, lo que genera <strong>dolor de rodilla al caminar</strong>, rigidez y una disminución notable en la movilidad. Como <strong>especialista en rodilla Cuautitlán Izcalli</strong>, mi objetivo es ofrecer soluciones integrales que devuelvan la funcionalidad y eliminen el dolor constante que afecta la vida de mis pacientes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  La artrosis no solo afecta a personas de edad avanzada; factores como lesiones previas, sobrepeso o predisposición genética pueden acelerar este proceso, convirtiéndolo en un problema de salud pública en el <strong>Estado de México</strong>.
                </p>
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-hero-artrosis">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:-translate-y-1 transition-transform mt-2">
                  <WhatsAppIcon className="w-6 h-6 mr-2" />
                  Agendar consulta de valoración
                </Button>
              </a>
            </div>
            <div className="relative">
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772557153/ChatGPT_Image_4_mar_2026_10_59_11_a.m._1_ld3ydv.png"
                  alt="Imagen clínica de desgaste de cartílago en rodilla (artrosis) atendida por ortopedista en Cuautitlán Izcalli"
                  title="Artrosis de rodilla y cadera - Ortopedista en Cuautitlán Izcalli"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                  loading="eager"
                  decoding="async"
                  data-testid="img-hero-artrosis"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  Tratamiento avanzado para la artrosis de rodilla y cadera con el Dr. Jorge L. Córdova
                </figcaption>
              </figure>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden md:block border border-slate-100">
                <p className="text-sm font-bold text-primary">+25 años</p>
                <p className="text-xs text-muted-foreground">de experiencia médica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN NUEVA — ¿QUÉ ES LA ARTROSIS? */}
      <section className="py-20 bg-slate-50" data-testid="section-que-es-artrosis">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-slate-900 text-center">
              ¿Qué es la Artrosis y cómo afecta tu vida?
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                La artrosis es una enfermedad degenerativa que afecta a millones de personas en todo el mundo. A diferencia de otras formas de artritis que son inflamatorias o autoinmunes, la artrosis es fundamentalmente un proceso de "desgaste" mecánico. En el <strong>Estado de México</strong>, vemos una alta incidencia de pacientes que buscan un <strong>traumatólogo en Cuautitlán Izcalli</strong> debido a que el dolor articular les impide realizar tareas cotidianas como ir al supermercado o jugar con sus nietos.
              </p>
              <div className="grid md:grid-cols-2 gap-8 my-10">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-3 text-primary">Artrosis de Rodilla (Gonartrosis)</h3>
                  <p className="text-muted-foreground">Es la más común. Se manifiesta como un dolor profundo en la rodilla que aumenta al subir escaleras o después de estar sentado mucho tiempo. Puede provocar una deformidad visible en las piernas ("piernas arqueadas").</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-3 text-primary">Artrosis de Cadera (Coxartrosis)</h3>
                  <p className="text-muted-foreground">El dolor suele localizarse en la ingle o en el glúteo. Muchos pacientes confunden este dolor con problemas de espalda, pero un <strong>ortopedista especialista</strong> puede identificar el origen articular real.</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                El diagnóstico temprano es crucial. Cuando el cartílago comienza a dañarse, existen terapias para preservar lo que queda. Si se deja avanzar sin tratamiento, la articulación puede llegar a un estado de "hueso contra hueso", donde la única solución definitiva es la cirugía.
              </p>
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
                Síntomas comunes del desgaste articular
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                Identificar los síntomas a tiempo es el primer paso para evitar la discapacidad funcional. Si experimentas alguno de los siguientes, es recomendable agendar una cita con un <strong>especialista en rodilla Cuautitlán Izcalli</strong>:
              </p>
              <div className="space-y-4">
                {sintomas.map((sintoma, idx) => (
                  <div key={idx} className="flex items-start gap-3" data-testid={`text-sintoma-artrosis-${idx}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-lg leading-tight">{sintoma}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <p className="text-sm italic text-slate-600">
                  Nota: El <strong>dolor de rodilla al caminar</strong> no siempre significa artrosis, pero en pacientes mayores de 50 años es la causa principal de consulta ortopédica.
                </p>
              </div>
            </div>
            <div>
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772557286/ChatGPT_Image_4_mar_2026_11_02_19_a.m._1_aid1dt.png"
                  alt="Paciente con dolor de rodilla buscando ayuda de un ortopedista en Cuautitlán Izcalli"
                  title="Diagnóstico de dolor de rodilla - Ortopedista en Cuautitlán Izcalli"
                  width={1200}
                  height={900}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-sintomas-artrosis"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  El dolor persistente es una señal de que tu cartílago necesita atención especializada
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN NUEVA — DIAGNÓSTICO */}
      <section className="py-20 bg-slate-900 text-white" data-testid="section-diagnostico-artrosis">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-8">
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm h-40 flex flex-col justify-end">
                    <p className="text-2xl font-bold">Rayos X</p>
                    <p className="text-white/60 text-sm">Prueba básica inicial</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm h-48 flex flex-col justify-end">
                    <p className="text-2xl font-bold">Resonancia</p>
                    <p className="text-white/60 text-sm">Detalle de tejidos blandos</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm h-48 flex flex-col justify-end">
                    <p className="text-2xl font-bold">Exploración</p>
                    <p className="text-white/60 text-sm">Valoración clínica manual</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm h-40 flex flex-col justify-end">
                    <p className="text-2xl font-bold">Ultrasonido</p>
                    <p className="text-white/60 text-sm">Guía para tratamientos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Diagnóstico por Especialista en Ortopedia</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Para un correcto diagnóstico de la artrosis, no basta con una radiografía. En mi consulta en <strong>Cuautitlán Izcalli</strong>, realizamos una evaluación integral que incluye:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/90">
                  <ChevronRight className="text-primary w-5 h-5 flex-shrink-0 mt-1" />
                  <span><strong>Historia Clínica:</strong> Analizamos tus antecedentes, nivel de actividad y cuándo comenzó el dolor.</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <ChevronRight className="text-primary w-5 h-5 flex-shrink-0 mt-1" />
                  <span><strong>Exploración Física:</strong> Evaluamos la fuerza, estabilidad y rangos de movimiento de la rodilla o cadera.</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <ChevronRight className="text-primary w-5 h-5 flex-shrink-0 mt-1" />
                  <span><strong>Estudios de Imagen:</strong> Solicitamos estudios específicos para ver el espacio articular y descartar otras lesiones como fracturas ocultas o problemas de meniscos.</span>
                </li>
              </ul>
              <p className="text-white/60 text-sm italic">
                Un diagnóstico preciso por parte de un <strong>ortopedista en el Estado de México</strong> evita tratamientos innecesarios y gastos excesivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — CUÁNDO ACUDIR AL ESPECIALISTA */}
      <section className="py-20 bg-slate-50" data-testid="section-alertas-artrosis">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772557368/ChatGPT_Image_4_mar_2026_11_03_32_a.m._axngje.png"
                  alt="Tratamiento de infiltración para artrosis realizado por ortopedista en Cuautitlán Izcalli"
                  title="Infiltración de rodilla en Cuautitlán Izcalli"
                  width={1200}
                  height={900}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-alertas-artrosis"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  Las infiltraciones pueden posponer la necesidad de cirugía por años si se aplican correctamente
                </figcaption>
              </figure>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                ¿Cuándo acudir con un especialista?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                La artrosis es una condición que no se cura sola, pero su manejo adecuado cambia radicalmente el pronóstico. No esperes a perder la movilidad total. Busca a un <strong>ortopedista en Cuautitlán Izcalli</strong> si presentas:
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
                  Solicitar valoración especializada
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
              Tratamiento Integral de la Artrosis
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Ofrecemos desde <strong>tratamiento conservador</strong> enfocado en aliviar el dolor sin cirugía, hasta procedimientos quirúrgicos de alta complejidad como la <strong>artroscopia de rodilla</strong> para limpieza articular o prótesis totales.
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
            <div className="space-y-8">
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772557460/ChatGPT_Image_4_mar_2026_11_05_10_a.m._gwndwj.png"
                  alt="Rehabilitación guiada por ortopedista especialista en rodilla"
                  title="Rehabilitación articular en Cuautitlán Izcalli"
                  width={1200}
                  height={900}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-tratamientos-artrosis"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  La terapia física es un pilar fundamental en el tratamiento conservador de la artrosis
                </figcaption>
              </figure>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Tratamiento Quirúrgico: Prótesis Articular</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cuando el desgaste es Grado IV (severo), la cirugía de prótesis es la mejor opción. Como <strong>especialista en rodilla en Cuautitlán Izcalli</strong>, utilizo implantes de última generación que permiten al paciente caminar al día siguiente de la cirugía, recuperando su independencia rápidamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN NUEVA — RECUPERACIÓN */}
      <section className="py-20 bg-primary/5" data-testid="section-recuperacion-artrosis">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="font-serif text-3xl font-bold mb-6 text-slate-900">Recuperación y Calidad de Vida</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            El éxito del tratamiento de la artrosis no termina en el consultorio o en el quirófano. La recuperación es un proceso colaborativo. Los pacientes que siguen su programa de ejercicios y mantienen un peso saludable logran resultados excepcionales, eliminando el <strong>dolor de rodilla al caminar</strong> casi por completo.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-primary font-bold text-2xl mb-1">95%</p>
              <p className="text-sm text-slate-600">Satisfacción en prótesis</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-primary font-bold text-2xl mb-1">2-4 sem</p>
              <p className="text-sm text-slate-600">Regreso a caminatas suaves</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-primary font-bold text-2xl mb-1">Ilimitada</p>
              <p className="text-sm text-slate-600">Mejora en movilidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — ESPECIALISTA */}
      <section className="py-20 bg-white" data-testid="section-doctor-artrosis">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Especialista en rodilla y cadera en Cuautitlán Izcalli
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              El Dr. Jorge Luis Córdova es un referente en el <strong>Estado de México</strong> para el manejo de enfermedades degenerativas. Su enfoque combina la calidez humana con la tecnología médica más avanzada.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Search, title: "Valoración completa", desc: "Evaluación clínica exhaustiva para determinar el grado exacto de desgaste articular." },
              { icon: Shield, title: "Diagnóstico preciso", desc: "Uso de tecnología de punta para diferenciar entre diversos tipos de lesiones articulares." },
              { icon: UserCheck, title: "Tratamiento a medida", desc: "No operamos radiografías, tratamos pacientes. Cada plan es único y personalizado." },
              { icon: Award, title: "Amplia Experiencia", desc: "Miles de procedimientos exitosos avalan nuestra práctica en ortopedia y traumatología." },
            ].map((item, idx) => (
              <Card key={idx} className="text-center border-0 shadow-md bg-slate-50" data-testid={`card-especialista-artrosis-${idx}`}>
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

      {/* NUEVA SECCIÓN — FAQ */}
      <section className="py-20 bg-slate-50" data-testid="section-faq-artrosis">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="flex items-center justify-center gap-3 mb-10">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="font-serif text-3xl font-bold text-slate-900 text-center">Preguntas Frecuentes sobre Artrosis</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqArtrosis.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} data-testid={`faq-item-artrosis-${idx}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* NUEVA SECCIÓN — LINKS INTERNOS */}
      <section className="py-12 bg-white border-t border-slate-100" data-testid="section-internal-links-artrosis">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-center text-slate-900 font-bold mb-8">Otros servicios especializados:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dolor-de-rodilla-cuautitlan-izcalli">
              <a className="bg-slate-50 hover:bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium transition-colors border border-slate-200">
                Dolor de Rodilla
              </a>
            </Link>
            <Link href="/dolor-hombro-manguito-rotador-cuautitlan-izcalli">
              <a className="bg-slate-50 hover:bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium transition-colors border border-slate-200">
                Dolor de Hombro
              </a>
            </Link>
            <Link href="/lesion-menisco-cuautitlan-izcalli">
              <a className="bg-slate-50 hover:bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium transition-colors border border-slate-200">
                Lesión de Meniscos
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 — CTA FINAL */}
      <section className="py-20 bg-primary" data-testid="section-cta-final-artrosis">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Heart className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Recupera tu movilidad y vive sin dolor articular
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            El desgaste articular es tratable. Agenda hoy mismo tu cita con el Dr. Jorge Córdova, <strong>ortopedista en Cuautitlán Izcalli</strong>, y da el primer paso hacia una vida activa y plena en el <strong>Estado de México</strong>.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-cta-final-artrosis">
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-10 py-7 text-xl shadow-2xl hover:-translate-y-1 transition-transform font-bold">
              <WhatsAppIcon className="w-7 h-7 mr-3" />
              AGENDAR CITA POR WHATSAPP
            </Button>
          </a>
          <p className="text-white/60 text-sm mt-6 font-medium">Hospital Star Médica Luna Parc · Martes, Jueves y Sábado</p>
        </div>
      </section>
    </div>
  );
}
