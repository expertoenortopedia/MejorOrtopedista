import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CheckCircle2, AlertTriangle, Stethoscope, Heart, Shield, Award, UserCheck, Search, HelpCircle } from "lucide-react";

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

const faqs = [
  {
    question: "¿Es obligatoria la cirugía para una rotura de ligamento cruzado anterior?",
    answer: "No siempre. La decisión depende de factores como tu edad, nivel de actividad física y el grado de inestabilidad que sientas. Pacientes con baja demanda física pueden optar por un tratamiento conservador con fisioterapia enfocada en el fortalecimiento muscular. Sin embargo, en personas activas o jóvenes, la cirugía suele ser la mejor opción para evitar daños futuros en meniscos y cartílago."
  },
  {
    question: "¿Cuánto tiempo dura la recuperación después de la cirugía de LCA?",
    answer: "La recuperación completa para volver a deportes de alto impacto suele tomar entre 6 y 9 meses. No obstante, podrás caminar con apoyo parcial a las pocas semanas y realizar actividades cotidianas ligeras en aproximadamente un mes, siempre siguiendo estrictamente el programa de rehabilitación."
  },
  {
    question: "¿Qué pasa si no me opero el ligamento cruzado?",
    answer: "Si la rodilla presenta inestabilidad (sensación de que se 'va') y no se trata, existe un alto riesgo de sufrir lesiones secundarias, principalmente roturas de menisco y un desgaste prematuro del cartílago (artrosis temprana). El movimiento anormal de la rodilla acelera el deterioro articular."
  },
  {
    question: "¿La artroscopia de rodilla deja cicatrices grandes?",
    answer: "No. La reconstrucción del ligamento cruzado anterior se realiza mediante artroscopia de rodilla, una técnica de mínima invasión que utiliza pequeñas incisiones (portales) de menos de un centímetro. Esto reduce el dolor postoperatorio y acelera la cicatrización estética."
  },
  {
    question: "¿Cuándo puedo empezar a hacer ejercicio después de la lesión?",
    answer: "Inmediatamente después de la lesión se recomienda reposo, hielo y compresión. Una vez disminuida la inflamación, se inicia la fisioterapia pre-operatoria o de tratamiento conservador. El regreso al deporte competitivo solo se autoriza tras completar satisfactoriamente todas las fases de la rehabilitación y pruebas de fuerza."
  }
];

const tratamientos = [
  { title: "Tratamiento conservador", desc: "En lesiones parciales o pacientes de baja demanda, se puede manejar con reposo, antiinflamatorios y modificación de actividad." },
  { title: "Rehabilitación", desc: "Programa de fortalecimiento muscular progresivo para recuperar estabilidad y función de la rodilla." },
  { title: "Terapia física", desc: "Ejercicios especializados para restaurar el rango de movimiento, fuerza y propiocepción de la articulación." },
  { title: "Reconstrucción quirúrgica", desc: "En pacientes activos o con inestabilidad significativa, se realiza cirugía artroscópica para reconstruir el ligamento." },
];

export default function LigamentoCruzado() {
  useEffect(() => {
    document.title = "Ligamento Cruzado Anterior Cirugía | Ortopedista en Cuautitlán Izcalli | Dr. Jorge L. Córdova";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Especialista en ligamento cruzado anterior cirugía y artroscopia de rodilla. El Dr. Jorge Córdova es ortopedista en Cuautitlán Izcalli experto en reconstrucción de LCA.");
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
            "name": "Ligamento Cruzado Anterior Cirugía | Ortopedista en Cuautitlán Izcalli",
            "description": "Información sobre cirugía de ligamento cruzado anterior y artroscopia de rodilla con el Dr. Jorge Córdova en Cuautitlán Izcalli.",
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
                Ligamento Cruzado Anterior Cirugía y Tratamiento en Cuautitlán Izcalli
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                El ligamento cruzado anterior (LCA) es una estructura fundamental dentro de la rodilla. Su función principal es dar estabilidad a la articulación, impidiendo que la tibia se desplace hacia adelante respecto al fémur. Sin el LCA, la rodilla pierde firmeza y se vuelve inestable, lo que puede afectar seriamente su calidad de vida y desempeño deportivo.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Como <strong>ortopedista en Cuautitlán Izcalli</strong> y <strong>ortopedista Estado de México</strong>, el Dr. Jorge Córdova se especializa en la reconstrucción del LCA mediante técnicas modernas de mínima invasión, ayudando a cientos de pacientes a recuperar la movilidad y volver a sus actividades favoritas sin dolor ni inseguridad.
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
                  title="Ligamento Cruzado Anterior Cirugía - Especialista en reconstrucción de LCA"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                  loading="eager"
                  decoding="async"
                  data-testid="img-hero-lca"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  Especialista en <strong>ligamento cruzado anterior cirugía</strong> y tratamiento conservador en Cuautitlán Izcalli
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

      {/* SECCIÓN — ¿QUÉ ES EL LCA? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-slate-900">
              ¿Qué es el ligamento cruzado anterior y por qué es tan importante?
            </h2>
            <div className="prose prose-slate lg:prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p>
                El ligamento cruzado anterior es uno de los cuatro ligamentos principales que conectan el fémur con la tibia. Se cruza diagonalmente en el medio de la rodilla, lo que evita que la tibia se deslice frente al fémur y proporciona estabilidad rotacional a la rodilla.
              </p>
              <p>
                La lesión del LCA ocurre frecuentemente durante actividades deportivas que implican cambios bruscos de dirección, saltos o impactos directos en la rodilla. Es especialmente común en futbolistas, basquetbolistas y personas que practican deportes de contacto. Una rotura puede ser parcial o completa, y el diagnóstico preciso por un <strong>especialista en rodilla</strong> es crucial para determinar si el paciente requiere una <strong>ligamento cruzado anterior cirugía</strong> o puede beneficiarse de un manejo no quirúrgico.
              </p>
              <p>
                Sin un LCA funcional, la rodilla tiende a "fallar", lo que no solo limita la actividad deportiva, sino que también aumenta el riesgo de sufrir una <Link href="/lesion-menisco-cuautitlan-izcalli" className="text-primary hover:underline">lesión de menisco tratamiento</Link> adicional debido al movimiento anormal de los huesos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — SÍNTOMAS */}
      <section className="py-20 bg-slate-50" data-testid="section-sintomas-lca">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                Síntomas de la lesión del ligamento cruzado anterior
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                La lesión del LCA suele producirse de forma repentina. Muchos pacientes reportan haber escuchado un "tronido" en la rodilla al momento de la lesión, seguido de dolor intenso e inflamación rápida. Si experimentas estos síntomas, es fundamental consultar a un <strong>ortopedista en Cuautitlán Izcalli</strong>.
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
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772567503/ChatGPT_Image_4_mar_2026_12_33_22_p.m._vhwhfm.png"
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
                  ¿Dolor intenso en la rodilla después de un giro? La valoración por un <strong>especialista en rodilla</strong> es vital.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN — DIAGNÓSTICO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Diagnóstico por especialista</h3>
                <p className="text-muted-foreground mb-4">
                  El proceso de diagnóstico para una lesión de LCA comienza con una historia clínica detallada del mecanismo de lesión. El Dr. Jorge Córdova realizará pruebas físicas específicas, como la prueba de Lachman y la prueba de cajón anterior, para evaluar la laxitud de la rodilla.
                </p>
                <p className="text-muted-foreground mb-4">
                  Para confirmar el diagnóstico y evaluar lesiones asociadas (como meniscos o ligamentos colaterales), se solicita habitualmente una <strong>Resonancia Magnética (RMN)</strong>. Este estudio permite ver con claridad el estado del ligamento y planificar con precisión la <strong>artroscopia de rodilla</strong> en caso de ser necesaria.
                </p>
                <p className="text-muted-foreground">
                  Un diagnóstico certero a tiempo evita que el paciente camine con una rodilla inestable, lo que previene el desarrollo de <Link href="/artrosis-rodilla-cadera-cuautitlan-izcalli" className="text-primary hover:underline">artrosis de rodilla</Link> temprana.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                ¿Cómo confirmamos una rotura de LCA?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                No todas las lesiones de rodilla son iguales. Es vital distinguir entre un esguince simple y una rotura completa que requiera <strong>ligamento cruzado anterior cirugía</strong>.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="bg-primary/10 p-1 rounded-full h-fit mt-1"><CheckCircle2 className="w-5 h-5 text-primary" /></div>
                  <span className="text-slate-700">Exploración física manual especializada (Prueba de Lachman).</span>
                </li>
                <li className="flex gap-3">
                  <div className="bg-primary/10 p-1 rounded-full h-fit mt-1"><CheckCircle2 className="w-5 h-5 text-primary" /></div>
                  <span className="text-slate-700">Análisis del mecanismo de rotación o impacto.</span>
                </li>
                <li className="flex gap-3">
                  <div className="bg-primary/10 p-1 rounded-full h-fit mt-1"><CheckCircle2 className="w-5 h-5 text-primary" /></div>
                  <span className="text-slate-700">Uso de tecnología de imagen avanzada (Resonancia Magnética).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — CUÁNDO ACUDIR AL ESPECIALISTA */}
      <section className="py-20 bg-slate-50" data-testid="section-alertas-lca">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772567603/ChatGPT_Image_4_mar_2026_12_24_09_p.m._omuvan.png"
                  alt="Paciente adulto con dolor intenso en rodilla por posible lesión del ligamento cruzado anterior en consulta de ortopedia en Estado de México"
                  title="Dolor de rodilla por lesión del ligamento cruzado anterior | Ortopedista en Estado de México"
                  width={1200}
                  height={900}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-alertas-lca"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  ¿Sientes dolor o inestabilidad en la rodilla? Una lesión del ligamento cruzado anterior requiere valoración por un <strong>especialista en rodilla en Cuautitlán Izcalli</strong>
                </figcaption>
              </figure>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                ¿Cuándo debes acudir con un especialista en rodilla?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Una lesión del ligamento cruzado anterior no tratada puede provocar inestabilidad crónica, lesiones adicionales en meniscos y desgaste articular acelerado. Busca atención de un experto en <strong>ortopedia en Cuautitlán Izcalli</strong> si presentas:
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

      {/* SECCIÓN — CIRUGÍA DE LCA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                Cirugía de reconstrucción del LCA: Artroscopia de Rodilla
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cuando existe una rotura completa en un paciente activo, la <strong>ligamento cruzado anterior cirugía</strong> es el tratamiento de elección. Hoy en día, esta cirugía se realiza mediante <strong>artroscopia de rodilla</strong>, una técnica mínimamente invasiva.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl h-fit text-primary"><Shield className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Mínima Invasión</h4>
                    <p className="text-sm text-muted-foreground">Utilizamos pequeñas cámaras e instrumentos especializados, lo que significa menos dolor y cicatrices casi imperceptibles.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl h-fit text-primary"><Award className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Injertos de Alta Calidad</h4>
                    <p className="text-sm text-muted-foreground">La reconstrucción se realiza utilizando un injerto (tejido del propio paciente o de banco) para sustituir el ligamento roto, garantizando la máxima resistencia.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-2xl h-fit text-primary"><CheckCircle2 className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Regreso Seguro al Deporte</h4>
                    <p className="text-sm text-muted-foreground">Nuestro objetivo es que vuelvas a correr, saltar y jugar con la misma confianza que antes de la lesión.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772563068/ChatGPT_Image_4_mar_2026_12_38_38_p.m._1_pyz064.png"
                  alt="Sala quirúrgica equipada con torre de artroscopia de alta definición para cirugía de rodilla en Estado de México"
                  title="Sala de cirugía artroscópica de rodilla en Estado de México | Especialista en Ortopedia"
                  width={1200}
                  height={900}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  Tecnología de última generación para <strong>artroscopia de rodilla</strong> en Cuautitlán Izcalli.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN — TRATAMIENTO CONSERVADOR VS QUIRÚRGICO */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Tratamiento Conservador vs. Quirúrgico
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              No todos los pacientes con lesión de LCA necesitan pasar por quirófano. La decisión se toma basándose en tus objetivos personales y el estado de tu rodilla.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-primary">¿Cuándo elegir Tratamiento Conservador?</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-2"><span>•</span> Lesiones parciales donde la rodilla aún es estable.</li>
                <li className="flex gap-2"><span>•</span> Pacientes con un estilo de vida sedentario que no realizan deportes de giro.</li>
                <li className="flex gap-2"><span>•</span> Pacientes que pueden compensar la deficiencia con un excelente tono muscular.</li>
              </ul>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-primary">¿Cuándo es necesaria la Cirugía?</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-2"><span>•</span> Roturas completas en personas jóvenes o deportistas.</li>
                <li className="flex gap-2"><span>•</span> Inestabilidad recurrente (sentir que la rodilla se "sale") en el día a día.</li>
                <li className="flex gap-2"><span>•</span> Lesiones combinadas de LCA y meniscos o cartílago.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN — RECUPERACIÓN */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-slate-900">
              Recuperación y Rehabilitación: El camino al éxito
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              La cirugía es solo el 50% del éxito; el otro 50% depende de una rehabilitación adecuada. Después de una <strong>ligamento cruzado anterior cirugía</strong>, iniciaremos un programa personalizado que incluye:
            </p>
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <Card className="bg-slate-50 border-none">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-2">Fase Inicial (1-4 semanas)</h4>
                  <p className="text-sm text-muted-foreground">Control de la inflamación, recuperación del rango de movimiento y protección del injerto. Uso de muletas según indicación.</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-50 border-none">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-2">Fase Intermedia (2-4 meses)</h4>
                  <p className="text-sm text-muted-foreground">Fortalecimiento intensivo de cuádriceps e isquiotibiales. Ejercicios de equilibrio y propiocepción.</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-50 border-none">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-2">Fase Avanzada (4-6 meses)</h4>
                  <p className="text-sm text-muted-foreground">Trote ligero, saltos controlados y ejercicios específicos de tu deporte bajo supervisión.</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-50 border-none">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-2">Retorno Deportivo (6-9 meses)</h4>
                  <p className="text-sm text-muted-foreground">Pruebas de fuerza y estabilidad para autorizar el regreso a la competencia de alto nivel.</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-muted-foreground italic text-center">
              Como experto en <Link href="/lesiones-deportivas-cuautitlan-izcalli" className="text-primary hover:underline">lesiones deportivas</Link>, el Dr. Córdova te guiará en cada paso.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 — TRATAMIENTOS RESUMEN */}
      <section className="py-20 bg-slate-50" data-testid="section-tratamientos-lca">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              Tratamientos disponibles para la lesión del LCA
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              El tratamiento depende de la gravedad de la lesión, tu nivel de actividad y tus metas de recuperación. El Dr. Córdova, <strong>especialista en rodilla en Cuautitlán Izcalli</strong>, evalúa cada caso de forma individual.
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
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><CheckCircle2 className="text-primary w-6 h-6" /> Beneficios de la Atención Especializada</h3>
                 <p className="text-muted-foreground mb-4">Recibir atención de un <strong>traumatólogo en Cuautitlán Izcalli</strong> con experiencia en LCA te ofrece:</p>
                 <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-slate-600"><span className="text-primary font-bold">✓</span> Cirugía de mínima invasión con menos dolor.</li>
                    <li className="flex items-start gap-2 text-sm text-slate-600"><span className="text-primary font-bold">✓</span> Protocolos de rehabilitación acelerada.</li>
                    <li className="flex items-start gap-2 text-sm text-slate-600"><span className="text-primary font-bold">✓</span> Menor riesgo de reluxación o re-rotura.</li>
                    <li className="flex items-start gap-2 text-sm text-slate-600"><span className="text-primary font-bold">✓</span> Seguimiento personalizado hasta tu alta deportiva.</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — ATENCIÓN ESPECIALIZADA */}
      <section className="py-20 bg-white" data-testid="section-doctor-lca">
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

      {/* SECCIÓN FAQ */}
      <section className="py-20 bg-slate-50" data-testid="section-faq-lca">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <HelpCircle className="w-4 h-4" />
                Preguntas Frecuentes
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900">
                Dudas comunes sobre la lesión de Ligamento Cruzado Anterior
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} data-testid={`faq-item-lca-${index}`}>
                  <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 — CTA FINAL */}
      <section className="py-20 bg-primary" data-testid="section-cta-final-lca">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Heart className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Recupera la estabilidad de tu rodilla en Cuautitlán Izcalli
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            No permitas que una lesión del ligamento cruzado anterior limite tu vida. Agenda tu cita con el Dr. Jorge Córdova, <strong>ortopedista en Cuautitlán Izcalli</strong> y experto en <strong>artroscopia de rodilla</strong>. Una evaluación oportuna es el primer paso hacia tu recuperación.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-cta-final-lca">
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-10 py-7 text-xl shadow-2xl hover:-translate-y-1 transition-transform font-bold">
              <WhatsAppIcon className="w-7 h-7 mr-3" />
              AGENDAR CITA POR WHATSAPP
            </Button>
          </a>
          <p className="text-white/60 text-sm mt-6">Hospital Star Médica Luna Parc · Martes, Jueves y Sábado</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-white/60 text-xs">
            <Link href="/dolor-de-rodilla-cuautitlan-izcalli" className="hover:text-white transition-colors underline">Dolor de rodilla</Link>
            <Link href="/lesion-menisco-cuautitlan-izcalli" className="hover:text-white transition-colors underline">Lesión de meniscos</Link>
            <Link href="/lesiones-deportivas-cuautitlan-izcalli" className="hover:text-white transition-colors underline">Lesiones deportivas</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

