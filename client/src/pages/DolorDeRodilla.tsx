import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CheckCircle2, AlertTriangle, Stethoscope, Heart, Shield, Award, UserCheck, ChevronDown, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";

const WHATSAPP_LINK = "https://wa.me/525514961386?text=Hola%20Dr.%20Jorge,%20vengo%20de%20su%20p%C3%A1gina%20de%20dolor%20de%20rodilla%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita.";

const sintomas = [
  "Dolor al caminar o al realizar actividad física",
  "Dolor al subir o bajar escaleras (frecuente en problemas de rótula)",
  "Inflamación o hinchazón visible en la articulación",
  "Rigidez articular, especialmente por las mañanas",
  "Sensación de desgaste o chasquidos al mover la rodilla",
  "Inestabilidad o sensación de que la rodilla 'se falsea'",
  "Enrojecimiento y calor al tacto en la zona afectada",
];

const alertas = [
  "Dolor persistente que no cede con reposo ni analgésicos comunes",
  "Inflamación frecuente o recurrente sin causa aparente",
  "Limitación severa para caminar o realizar actividades cotidianas",
  "Lesión previa (esguince, golpe) que no fue tratada correctamente",
  "Imposibilidad de extender o flexionar la rodilla por completo",
  "Fiebre acompañada de dolor e inflamación articular",
];

const faqs = [
  {
    question: "¿Por qué me duele la rodilla al caminar?",
    answer: "El dolor de rodilla al caminar puede deberse a múltiples causas, desde un simple proceso inflamatorio por sobrecarga hasta el desgaste del cartílago (artrosis). Como ortopedista en Cuautitlán Izcalli, evalúo si el dolor proviene de los meniscos, ligamentos o de la propia articulación para determinar el tratamiento adecuado."
  },
  {
    question: "¿Cuándo es necesaria una artroscopia de rodilla?",
    answer: "La artroscopia de rodilla es una técnica mínimamente invasiva indicada principalmente para reparar lesiones de meniscos, reconstruir el ligamento cruzado anterior o realizar limpiezas articulares en casos de desgaste inicial que no responde a tratamiento conservador."
  },
  {
    question: "¿El dolor de rodilla siempre termina en cirugía?",
    answer: "No. La gran mayoría de los pacientes que atiendo como especialista en rodilla Cuautitlán Izcalli mejoran significativamente con tratamientos conservadores como fisioterapia, medicamentos específicos, control de peso e infiltraciones con ácido hialurónico."
  },
  {
    question: "¿Qué especialista trata el dolor de rodilla?",
    answer: "El especialista indicado es el ortopedista y traumatólogo. Un experto con subespecialidad en rodilla tiene el entrenamiento específico para diagnosticar con precisión si el problema es mecánico (lesión) o degenerativo (desgaste)."
  },
  {
    question: "¿Cuánto tiempo dura la recuperación de una cirugía de rodilla?",
    answer: "Depende del procedimiento. Una artroscopia de rodilla sencilla puede permitir el apoyo al día siguiente, mientras que una reconstrucción de ligamento cruzado o una prótesis requieren un programa de rehabilitación de varios meses para un regreso seguro a las actividades deportivas."
  }
];

export default function DolorDeRodilla() {
  useEffect(() => {
    document.title = "Dolor de Rodilla al Caminar | Ortopedista en Cuautitlán Izcalli | Dr. Jorge L. Córdova";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Especialista en dolor de rodilla al caminar en Cuautitlán Izcalli. El Dr. Jorge Córdova, ortopedista experto, ofrece tratamientos avanzados para lesiones y desgaste.");
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
            "name": "Dolor de Rodilla al Caminar: Ortopedista en Cuautitlán Izcalli",
            "description": "Tratamiento especializado para el dolor de rodilla en Cuautitlán Izcalli. Especialista en rodilla y artroscopia.",
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
                Ortopedista en Cuautitlán Izcalli
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                Dolor de Rodilla al Caminar: causas y tratamiento en Cuautitlán Izcalli
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                El <strong>dolor de rodilla al caminar</strong> es una de las afecciones más frecuentes que veo en mi consulta. Esta articulación es fundamental para nuestra movilidad y soporta gran parte del peso corporal, lo que la hace susceptible a lesiones y procesos degenerativos. Si sientes molestias persistentes, es fundamental acudir con un <strong>ortopedista en Cuautitlán Izcalli</strong> para un diagnóstico preciso.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                El Dr. Jorge Luis Córdova es un <strong>especialista en rodilla Cuautitlán Izcalli</strong> con más de 25 años de trayectoria. Su enfoque se centra en devolver la calidad de vida a sus pacientes mediante tratamientos personalizados que van desde la rehabilitación física hasta la <strong>artroscopia de rodilla</strong> de alta precisión.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-hero">
                  <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:-translate-y-1 transition-transform">
                    <WhatsAppIcon className="w-6 h-6 mr-2" />
                    Agendar cita por WhatsApp
                  </Button>
                </a>
              </div>
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
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden md:block border border-slate-100">
                <p className="text-sm font-bold text-primary">+25 años</p>
                <p className="text-xs text-muted-foreground">de experiencia médica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN NUEVA — ¿QUÉ CAUSA EL DOLOR? */}
      <section className="py-16 bg-white border-y border-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-6 text-slate-900">¿Qué causa el dolor de rodilla al caminar?</h2>
            <div className="prose prose-slate max-w-none text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                El dolor puede originarse en cualquiera de las estructuras que componen la rodilla: huesos (fémur, tibia, rótula), cartílago articular, ligamentos, tendones o meniscos. Identificar la causa exacta es el primer paso para un tratamiento exitoso.
              </p>
              <p>
                Entre las causas más comunes encontramos la <strong>osteoartritis o artrosis</strong>, que es el desgaste progresivo del cartílago. Esto genera que los huesos rocen entre sí, provocando inflamación y dolor severo. Otras causas frecuentes son las <Link href="/lesion-menisco-cuautitlan-izcalli" className="text-primary hover:underline font-medium">lesiones de menisco</Link>, desgarros del <Link href="/ligamento-cruzado-anterior-cuautitlan-izcalli" className="text-primary hover:underline font-medium">ligamento cruzado anterior</Link>, tendinitis rotuliana y la bursitis.
              </p>
              <p>
                En pacientes jóvenes, el dolor suele estar asociado a actividades deportivas o traumatismos, mientras que en adultos mayores el factor degenerativo es predominante. Como <strong>ortopedista Estado de México</strong>, analizo factores como la alineación de tus piernas, tu peso y tu nivel de actividad para entender el origen de tu gonalgia (dolor de rodilla).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — SÍNTOMAS FRECUENTES */}
      <section className="py-20 bg-slate-50" data-testid="section-sintomas">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                Síntomas frecuentes que no debes ignorar
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                El dolor rara vez viene solo. Prestar atención a los síntomas acompañantes nos da pistas vitales sobre el estado de tu articulación. Si experimentas alguno de estos, una valoración por un <strong>especialista en rodilla Cuautitlán Izcalli</strong> es necesaria.
              </p>
              <div className="grid sm:grid-cols-1 gap-4">
                {sintomas.map((sintoma, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100" data-testid={`text-sintoma-${idx}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{sintoma}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772493530/ChatGPT_Image_2_mar_2026_05_18_28_p.m._nmcsxx.png"
                alt="Dolor de rodilla por desgaste de cartílago tratado con cirugía por ortopedista en Cuautitlán Izcalli"
                title="Ortopedista en Cuautitlán Izcalli especialista en cirugía de rodilla y desgaste de cartílago"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                decoding="async"
                data-testid="img-sintomas"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN NUEVA — DIAGNÓSTICO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                <h2 className="font-serif text-3xl font-bold mb-6 text-slate-900">Diagnóstico por especialista en ortopedia</h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Un diagnóstico preciso comienza con una historia clínica detallada y una exploración física minuciosa. Durante la consulta, realizamos maniobras específicas para evaluar la estabilidad de los ligamentos y la integridad de los meniscos.
                  </p>
                  <p>
                    Para confirmar el diagnóstico, solemos apoyarnos en estudios de imagen de alta calidad:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Radiografías:</strong> Ideales para ver el espacio articular y detectar signos de <Link href="/artrosis-rodilla-cadera-cuautitlan-izcalli" className="text-primary hover:underline">artrosis de rodilla</Link>.</li>
                    <li><strong>Resonancia Magnética (RMN):</strong> Esencial para visualizar tejidos blandos como meniscos y ligamentos.</li>
                    <li><strong>Ultrasonido:</strong> Útil para evaluar tendones y acumulación de líquido (derrame articular).</li>
                  </ul>
                  <p>
                    Contar con el equipo tecnológico del <strong>Hospital Star Médica Luna Parc</strong> nos permite obtener resultados rápidos y confiables para iniciar tu tratamiento lo antes posible.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772653274721.png"
                alt="Diagnóstico de rodilla por especialista"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — CUÁNDO ACUDIR AL ORTOPEDISTA */}
      <section className="py-20 bg-slate-900 text-white" data-testid="section-alertas">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772492995/ChatGPT_Image_2_mar_2026_05_09_46_p.m._xkrkbn.png"
                alt="Dolor de rodilla por desgaste articular tratado con cirugía especializada"
                title="Especialista en cirugía de rodilla y desgaste articular"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] border-4 border-white/10"
                loading="lazy"
                decoding="async"
                data-testid="img-alertas"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">
                Señales de alerta que requieren atención inmediata
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed text-lg">
                Ignorar el dolor puede llevar a daños irreversibles en el cartílago. Como <strong>traumatólogo en Cuautitlán Izcalli</strong>, recomiendo no dejar pasar más de una semana con síntomas si estos incluyen:
              </p>
              <div className="space-y-4">
                {alertas.map((alerta, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10" data-testid={`text-alerta-${idx}`}>
                    <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90 text-lg">{alerta}</span>
                  </div>
                ))}
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-alertas">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:-translate-y-1 transition-transform mt-8 w-full sm:w-auto">
                  <WhatsAppIcon className="w-6 h-6 mr-2" />
                  Solicitar valoración urgente
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN NUEVA — TRATAMIENTO CONSERVADOR VS QUIRÚRGICO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-slate-900">Opciones de Tratamiento Especializado</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              No todos los dolores de rodilla requieren cirugía. Mi enfoque es siempre comenzar con la opción más conservadora que garantice tu recuperación.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-xl bg-slate-50 overflow-hidden">
              <div className="bg-primary p-6 text-white">
                <h3 className="text-2xl font-bold">Tratamiento Conservador</h3>
              </div>
              <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  En etapas iniciales de desgaste o lesiones leves, el tratamiento conservador es altamente efectivo. Esto incluye:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1"/> <span><strong>Manejo Farmacológico:</strong> Uso de antiinflamatorios y analgésicos de última generación.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1"/> <span><strong>Viscosuplementación:</strong> Infiltraciones de ácido hialurónico para "lubricar" la articulación.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1"/> <span><strong>Fisioterapia:</strong> Programas personalizados para fortalecer el cuádriceps y dar estabilidad a la rodilla.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1"/> <span><strong>Ortesis:</strong> Uso de rodilleras especiales o plantillas ortopédicas.</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-slate-50 overflow-hidden">
              <div className="bg-slate-800 p-6 text-white">
                <h3 className="text-2xl font-bold">Tratamiento Quirúrgico</h3>
              </div>
              <CardContent className="p-8 space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Cuando el tratamiento conservador no es suficiente, optamos por técnicas quirúrgicas de mínima invasión:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-slate-700 shrink-0 mt-1"/> <span><strong>Artroscopia de rodilla:</strong> Cirugía con cámara a través de pequeñas incisiones para reparar meniscos o ligamentos.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-slate-700 shrink-0 mt-1"/> <span><strong>Reemplazo Articular (Prótesis):</strong> En casos de artrosis avanzada, sustituimos las superficies desgastadas por componentes de alta tecnología.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-slate-700 shrink-0 mt-1"/> <span><strong>Osteotomías:</strong> Cirugías para realinear el eje de la pierna y reducir la carga en la zona dañada.</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECCIÓN NUEVA — RECUPERACIÓN */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772501060/ChatGPT_Image_2_mar_2026_07_23_45_p.m._el9k5x.png"
                alt="Recuperación de rodilla"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-slate-900">Recuperación y Regreso a tus Actividades</h2>
              <div className="prose prose-slate max-w-none text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  La recuperación es una fase tan importante como el tratamiento mismo. Mi compromiso como <strong>especialista en rodilla Cuautitlán Izcalli</strong> es acompañarte hasta que retomes tu vida normal.
                </p>
                <p>
                  Tras una <strong>artroscopia de rodilla</strong>, la recuperación suele ser rápida. La mayoría de los pacientes pueden caminar con apoyo parcial el mismo día o al día siguiente. El objetivo inicial es controlar la inflamación y recuperar el rango de movimiento.
                </p>
                <p>
                  En procedimientos mayores, como una prótesis, el proceso es gradual pero muy satisfactorio. El dolor del desgaste desaparece casi de inmediato tras la cirugía, y con una rehabilitación adecuada, podrás volver a caminar sin dolor en pocas semanas. Trabajamos de la mano con los mejores fisioterapeutas para asegurar que tu musculatura recupere la fuerza necesaria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — POR QUÉ ELEGIR AL DR. CÓRDOVA */}
      <section className="py-20 bg-white" data-testid="section-doctor">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              ¿Por qué elegir al Dr. Jorge Córdova?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Tu salud merece la atención de un <strong>ortopedista en Cuautitlán Izcalli</strong> comprometido con la excelencia y la ética profesional.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "Subespecialista en rodilla", desc: "Formación avanzada en el diagnóstico y tratamiento quirúrgico y no quirúrgico de la articulación de la rodilla." },
              { icon: Award, title: "Más de 25 años de experiencia", desc: "Cientos de cirugías exitosas y pacientes recuperados en todo el Estado de México." },
              { icon: UserCheck, title: "Atención personalizada", desc: "No eres un número más. Recibirás una explicación clara de tu padecimiento y todas las opciones disponibles." },
            ].map((item, idx) => (
              <Card key={idx} className="text-center border-0 shadow-lg bg-slate-50 hover:-translate-y-2 transition-transform duration-300" data-testid={`card-doctor-${idx}`}>
                <CardContent className="p-8">
                  <div className="mx-auto mb-6 p-4 bg-primary text-white rounded-2xl w-16 h-16 flex items-center justify-center">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN NUEVA — FAQ SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900">Preguntas Frecuentes sobre Dolor de Rodilla</h2>
            <p className="text-lg text-muted-foreground mt-4">Resolvemos las dudas más comunes de nuestros pacientes en Cuautitlán Izcalli.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-xl border border-slate-200 px-6">
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-primary text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECCIÓN 6 — CTA FINAL WHATSAPP */}
      <section className="py-20 bg-primary" data-testid="section-cta-final">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Heart className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            No dejes que el dolor de rodilla limite tu vida
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Agenda tu cita hoy mismo con el Dr. Jorge Córdova, <strong>ortopedista en Cuautitlán Izcalli</strong>. Estamos ubicados en Star Médica Luna Parc para brindarte la mejor atención.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-cta-final">
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-10 py-7 text-xl shadow-2xl hover:-translate-y-1 transition-transform font-bold">
              <WhatsAppIcon className="w-7 h-7 mr-3" />
              AGENDAR CITA POR WHATSAPP
            </Button>
          </a>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-white/70">
            <Link href="/lesion-menisco-cuautitlan-izcalli" className="hover:text-white transition-colors underline decoration-white/30">Lesión de Menisco</Link>
            <Link href="/artrosis-rodilla-cadera-cuautitlan-izcalli" className="hover:text-white transition-colors underline decoration-white/30">Artrosis de Rodilla</Link>
            <Link href="/ligamento-cruzado-anterior-cuautitlan-izcalli" className="hover:text-white transition-colors underline decoration-white/30">Ligamento Cruzado</Link>
          </div>
          <p className="text-white/60 text-sm mt-8">Hospital Star Médica Luna Parc · Consultorio 402 · Cuautitlán Izcalli, Edo. Méx.</p>
        </div>
      </section>
    </div>
  );
}
