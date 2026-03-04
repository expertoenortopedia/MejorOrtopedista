import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CheckCircle2, AlertTriangle, Stethoscope, Heart, Shield, Award, UserCheck, Search, HelpCircle, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const faqs = [
  {
    question: "¿Cuánto tiempo tarda en sanar una lesión del manguito rotador?",
    answer: "El tiempo de recuperación varía según la gravedad. Una inflamación leve (tendinitis) puede mejorar en 4 a 6 semanas con fisioterapia. Un desgarro completo que requiere cirugía puede necesitar de 4 a 6 meses de rehabilitación postoperatoria para recuperar la fuerza total."
  },
  {
    question: "¿Es necesaria la cirugía para todos los desgarros del manguito rotador?",
    answer: "No siempre. Muchos pacientes mejoran significativamente con tratamiento conservador, que incluye reposo, medicamentos e infiltraciones. Sin embargo, en pacientes jóvenes, deportistas o ante desgarros completos y debilidad severa, la cirugía suele ser la mejor opción para evitar daños permanentes."
  },
  {
    question: "¿Qué pasa si no me opero una luxación de hombro?",
    answer: "Una luxación de hombro mal tratada aumenta el riesgo de luxaciones recurrentes (inestabilidad crónica). Cada vez que el hombro se sale de su lugar, se daña el cartílago y los ligamentos, lo que puede llevar a una artrosis temprana de la articulación."
  },
  {
    question: "¿Qué actividades debo evitar si tengo dolor de hombro?",
    answer: "Debe evitar levantar objetos pesados, realizar movimientos por encima de la cabeza (como alcanzar estantes altos) y deportes de impacto o lanzamiento hasta ser evaluado por un traumatólogo en Cuautitlán Izcalli."
  }
];

export default function DolorHombro() {
  useEffect(() => {
    document.title = "Dolor de Hombro y Manguito Rotador | Ortopedista en Cuautitlán Izcalli | Dr. Jorge L. Córdova";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Especialista en dolor de hombro ortopedista y manguito rotador tratamiento en Cuautitlán Izcalli. Atención experta en luxación de hombro tratamiento y lesiones articulares.");
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
                Ortopedista en Cuautitlán Izcalli
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                Dolor de Hombro y Lesión del Manguito Rotador: Tratamiento Especializado
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Si buscas un <strong>dolor de hombro ortopedista</strong> con experiencia, el Dr. Jorge Córdova ofrece soluciones avanzadas para recuperar tu movilidad. El manguito rotador es fundamental para la estabilidad y el movimiento del brazo, y su lesión requiere un diagnóstico preciso.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Como <strong>traumatólogo en Cuautitlán Izcalli</strong>, el Dr. Córdova se especializa en el abordaje integral de patologías del hombro, utilizando técnicas de vanguardia como la artroscopia para garantizar una recuperación óptima y menos dolorosa.
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

      {/* SECCIÓN — CONTENIDO EXPANDIDO 1 */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-slate-900">¿Qué es el manguito rotador y por qué causa tanto dolor?</h2>
              <div className="prose prose-slate max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>
                  El manguito rotador es una estructura anatómica compleja compuesta por cuatro tendones: el supraespinoso, infraespinoso, redondo menor y subescapular. Estos tendones trabajan en conjunto para proporcionar fuerza a los movimientos del brazo y mantener la articulación glenohumeral estable. El <strong>manguito rotador tratamiento</strong> depende directamente del tipo de daño que estos tejidos hayan sufrido.
                </p>
                <p>
                  El dolor de hombro suele originarse por un proceso inflamatorio (tendinitis) o por un pinzamiento (síndrome de pinzamiento subacromial). Con el tiempo, si no se recibe atención por un <strong>ortopedista en Cuautitlán Izcalli</strong>, estas microlesiones pueden progresar hasta convertirse en desgarros parciales o totales. El dolor característico suele ser sordo y profundo, intensificándose al intentar dormir de lado o al realizar movimientos por encima de la cabeza.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-slate-900">Luxación de hombro: Tratamiento y prevención de inestabilidad</h2>
              <div className="prose prose-slate max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>
                  La luxación ocurre cuando la cabeza del húmero se sale de su cavidad en el omóplato. Este evento suele ser traumático y extremadamente doloroso. El <strong>luxación de hombro tratamiento</strong> inicial consiste en la reducción de la articulación, pero el manejo a largo plazo es crucial para evitar que el hombro se vuelva "inestable".
                </p>
                <p>
                  Cuando un paciente sufre luxaciones repetidas, los ligamentos y el rodete (labrum) quedan debilitados. Un <strong>traumatólogo en Cuautitlán Izcalli</strong> evaluará si es necesario un procedimiento quirúrgico para reestabilizar la articulación y prevenir el desgaste prematuro del cartílago, lo cual podría derivar en artrosis en el futuro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — SÍNTOMAS */}
      <section className="py-20 bg-slate-50" data-testid="section-sintomas-hombro">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                Síntomas comunes de las lesiones de hombro
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Reconocer los signos tempranos de una lesión puede marcar la diferencia en el pronóstico. Si experimentas cualquiera de los siguientes, es recomendable una valoración por un especialista en <strong>dolor de hombro ortopedista</strong>.
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
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772559209/ChatGPT_Image_4_mar_2026_11_34_13_a.m._ach5nt.png"
                  alt="Síntomas de lesión del manguito rotador y dolor de hombro diagnosticados por ortopedista especialista en Cuautitlán Izcalli"
                  title="Síntomas de dolor de hombro y manguito rotador - Ortopedista en Cuautitlán Izcalli"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-sintomas-hombro"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  Diagnóstico especializado de lesiones del manguito rotador y dolor de hombro
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN — CONTENIDO EXPANDIDO 2 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-4 text-slate-900">Diagnóstico especializado</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para determinar el mejor <strong>manguito rotador tratamiento</strong>, el Dr. Jorge Córdova realiza una evaluación clínica exhaustiva. Esto incluye pruebas de fuerza, rangos de movilidad y maniobras específicas que orientan el diagnóstico. En muchos casos, se complementa con estudios como ultrasonido o resonancia magnética para observar con detalle la extensión de la lesión y planificar el abordaje terapéutico más efectivo en Cuautitlán Izcalli.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold mb-4 text-slate-900">Tratamiento Conservador</h2>
              <p className="text-muted-foreground leading-relaxed">
                No todas las lesiones requieren cirugía. Un enfoque conservador bien guiado por un <strong>ortopedista en Cuautitlán Izcalli</strong> puede incluir terapia física especializada, modificación de actividades, fármacos antiinflamatorios y técnicas avanzadas de infiltración. Estas opciones buscan reducir la inflamación y permitir que los tejidos cicatricen o se fortalezcan para compensar el daño existente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — CUÁNDO ACUDIR AL ESPECIALISTA */}
      <section className="py-20 bg-slate-50" data-testid="section-alertas-hombro">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772559314/ChatGPT_Image_4_mar_2026_11_35_47_a.m._ukr5vs.png"
                  alt="Ortopedista realizando infiltración de hombro guiada por ultrasonido para tratamiento de dolor y lesión del manguito rotador en consultorio"
                  title="Infiltración de hombro guiada por ultrasonido en CDMX | Especialista en Ortopedia"
                  width={1200}
                  height={900}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-alertas-hombro"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  Alivio preciso del dolor de hombro con infiltración guiada por ultrasonido. Mayor exactitud, menor riesgo y recuperación más rápida
                </figcaption>
              </figure>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                ¿Cuándo acudir con un especialista en hombro?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ignorar un dolor persistente puede llevar a la atrofia muscular y rigidez articular (hombro congelado). El Dr. Córdova, <strong>traumatólogo en Cuautitlán Izcalli</strong>, recomienda consultar ante:
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

      {/* SECCIÓN — CONTENIDO EXPANDIDO 3 (CIRUGÍA Y RECUPERACIÓN) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-slate-900">Tratamiento Quirúrgico: Artroscopia de Hombro</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cuando el <strong>manguito rotador tratamiento</strong> conservador no es suficiente, la cirugía artroscópica representa la mejor opción. Es una técnica mínimamente invasiva donde, a través de pequeñas incisiones, el cirujano utiliza una cámara y herramientas diminutas para reparar los tendones desgarrados o fijar el labrum después de una <strong>luxación de hombro tratamiento</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Las ventajas de la artroscopia incluyen menos dolor postoperatorio, menor riesgo de infección y una recuperación estética y funcional superior a la cirugía abierta tradicional. Como <strong>traumatólogo en Cuautitlán Izcalli</strong>, el Dr. Jorge Córdova ha perfeccionado esta técnica para devolver a los pacientes su calidad de vida en el menor tiempo posible.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-slate-900">Proceso de Recuperación y Rehabilitación</h2>
              <p className="text-muted-foreground leading-relaxed">
                La recuperación es una fase tan importante como el diagnóstico. Después de un tratamiento para dolor de hombro, es vital seguir un programa de rehabilitación. Este se divide en etapas: protección inicial del tejido reparado, recuperación paulatina de la movilidad pasiva y, finalmente, ejercicios de fortalecimiento activo. El acompañamiento constante de tu <strong>ortopedista en Cuautitlán Izcalli</strong> asegura que cada etapa se cumpla sin riesgos de recaída.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 — TRATAMIENTOS */}
      <section className="py-20 bg-slate-50" data-testid="section-tratamientos-hombro">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Opciones de tratamiento en Cuautitlán Izcalli
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              El abordaje terapéutico es personalizado. Buscamos restaurar la función del hombro con la técnica más adecuada para tu caso particular.
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
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772559455/ChatGPT_Image_4_mar_2026_11_38_30_a.m._j40bqw.png"
                  alt="Cirugía artroscópica de hombro con reparación del manguito rotador en quirófano realizada por ortopedista especialista en Estado de México"
                  title="Artroscopia de hombro y reparación de manguito rotador - Ortopedista en Estado de México"
                  width={1200}
                  height={900}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-tratamientos-hombro"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  Cirugía artroscópica de hombro: tratamiento preciso y mínimamente invasivo para aliviar el dolor y recuperar la movilidad
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN — ENLACES INTERNOS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <h2 className="font-serif text-2xl font-bold mb-6 text-slate-900 text-center">Otros servicios relacionados</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link href="/lesiones-deportivas-cuautitlan-izcalli">
                <a className="group flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary/20">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Lesiones Deportivas</h3>
                    <p className="text-xs text-muted-foreground">Especialista en medicina del deporte</p>
                  </div>
                </a>
              </Link>
              <Link href="/artrosis-rodilla-cadera-cuautitlan-izcalli">
                <a className="group flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary/20">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Artrosis y Desgaste</h3>
                    <p className="text-xs text-muted-foreground">Tratamiento de desgaste articular</p>
                  </div>
                </a>
              </Link>
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

      {/* SECCIÓN FAQ */}
      <section className="py-20 bg-white" data-testid="section-faq-hombro">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">Preguntas Frecuentes sobre Lesiones de Hombro</h2>
              <p className="text-muted-foreground">Resolvemos tus dudas sobre el manguito rotador y otros problemas de hombro.</p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} data-testid={`faq-item-${index}`}>
                  <AccordionTrigger className="text-left font-bold text-slate-800 text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
