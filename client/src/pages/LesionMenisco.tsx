import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  CheckCircle2,
  AlertTriangle,
  Stethoscope,
  Heart,
  Shield,
  Award,
  UserCheck,
  ClipboardCheck,
  ChevronRight,
  HelpCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    document.title = "Lesión de Menisco Tratamiento | Ortopedista en Cuautitlán Izcalli | Dr. Jorge L. Córdova";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Especialista en lesión de menisco tratamiento en Cuautitlán Izcalli. Artroscopia de rodilla y recuperación personalizada con el Dr. Jorge Córdova, Ortopedista en Cuautitlán Izcalli.");
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
                Lesión de Menisco Tratamiento en Cuautitlán Izcalli
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ¿Buscas un especialista en <strong>lesión de menisco tratamiento</strong>? Los meniscos son dos discos de cartílago en forma de media luna que se encuentran dentro de la rodilla. Funcionan como amortiguadores críticos entre el fémur y la tibia, protegiendo la articulación y ayudando a distribuir el peso corporal de manera uniforme.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Una lesión de menisco ocurre cuando este cartílago se rompe o se desgarra, generalmente por un movimiento brusco de rotación, una lesión deportiva o por el desgaste natural con la edad. Como <strong>ortopedista en Cuautitlán Izcalli</strong>, el Dr. Jorge Córdova ofrece soluciones integrales que van desde el manejo conservador hasta la <strong>artroscopia de rodilla</strong> de alta precisión.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Si sientes dolor persistente, bloqueo o inflamación, es fundamental acudir con un <strong>especialista en rodilla Cuautitlán Izcalli</strong> para evitar complicaciones a largo plazo como la artrosis temprana.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-hero-menisco">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:-translate-y-1 transition-transform mt-2">
                  <WhatsAppIcon className="w-6 h-6 mr-2" />
                  Agendar cita por WhatsApp
                </Button>
              </a>
            </div>
            <div className="relative">
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772555615/ChatGPT_Image_4_mar_2026_10_12_52_a.m._bfhjls.png"
                  alt="Lesión de menisco diagnosticada por ortopedista especialista en rodilla en Estado de México mediante artroscopia"
                  title="Lesión de menisco: síntomas, causas y tratamiento - Especialista en rodilla en Cuautitlán Izcalli"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                  loading="eager"
                  decoding="async"
                  data-testid="img-hero-menisco"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  Especialista en lesión de menisco y dolor de rodilla en Cuautitlán Izcalli
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

      {/* SECCIÓN 2 — ¿QUÉ ES LA LESIÓN DE MENISCO? */}
      <section className="py-20 bg-white" data-testid="section-que-es-menisco">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              ¿Qué es la lesión de menisco?
            </h2>
            <p>
              La <strong>lesión de menisco</strong> es uno de los daños más frecuentes en la rodilla. El menisco es una estructura fibrocartilaginosa que actúa como una "almohadilla" entre los huesos de la pierna. Cada rodilla tiene dos meniscos: el interno (medial) y el externo (lateral).
            </p>
            <p>
              Existen diferentes tipos de roturas, desde pequeñas fisuras en el borde hasta desgarros complejos que pueden bloquear el movimiento de la rodilla. El <strong>tratamiento de la lesión de menisco</strong> depende en gran medida de la zona afectada, ya que el tercio exterior del menisco tiene mejor flujo sanguíneo ("zona roja") y puede sanar por sí solo o mediante reparación, mientras que los dos tercios internos ("zona blanca") tienen poca irrigación y suelen requerir intervención quirúrgica como la <strong>artroscopia de rodilla</strong>.
            </p>
            <p>
              Como <strong>ortopedista en Cuautitlán Izcalli</strong>, el Dr. Jorge Córdova evalúa cada caso detalladamente, considerando factores como la edad del paciente, el nivel de actividad física y el tiempo de evolución de la lesión para determinar si el tratamiento será conservador o quirúrgico.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — SÍNTOMAS */}
      <section className="py-20 bg-slate-50" data-testid="section-sintomas-menisco">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                Síntomas comunes y diagnóstico por especialista
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Los síntomas pueden aparecer de forma inmediata tras una lesión aguda o desarrollarse gradualmente con el tiempo. El <strong>diagnóstico por especialista en ortopedia</strong> es vital para diferenciar una lesión meniscal de otros problemas como el <Link href="/dolor-de-rodilla-cuautitlan-izcalli" className="text-primary hover:underline font-medium">dolor de rodilla</Link> crónico o una <Link href="/ligamento-cruzado-anterior-cuautitlan-izcalli" className="text-primary hover:underline font-medium">lesión de ligamento cruzado</Link>.
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
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772556763/ChatGPT_Image_4_mar_2026_10_52_48_a.m._nc3wyd.png"
                  alt="Paciente en cirugía de reconstrucción de ligamento cruzado anterior (LCA) y menisco de rodilla realizada por ortopedista especialista en lesión de LCA"
                  title="Síntomas de lesión de menisco y ligamento cruzado anterior - Ortopedista especialista en rodilla"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-sintomas-menisco"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  Ortopedista especialista en cirugía de menisco, reconstrucción de LCA y lesiones deportivas de rodilla
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 — TRATAMIENTO CONSERVADOR Y QUIRÚRGICO */}
      <section className="py-20 bg-white" data-testid="section-tratamientos-profundo">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Opciones de tratamiento para la lesión de menisco
              </h2>
              <h3 className="text-2xl font-bold text-slate-800 mt-8">Tratamiento conservador</h3>
              <p>
                No todas las lesiones de menisco requieren cirugía. En desgarros pequeños o localizados en la periferia vascularizada del menisco, el <strong>especialista en rodilla Cuautitlán Izcalli</strong> puede recomendar un protocolo de reposo, hielo, compresión y elevación (RICE), complementado con fisioterapia avanzada.
              </p>
              <p>
                El objetivo es fortalecer los músculos estabilizadores de la rodilla, como los cuádriceps y los isquiotibiales, para reducir la carga sobre el cartílago dañado. Este enfoque es muy efectivo en pacientes con menor demanda física o en <Link href="/lesiones-deportivas-cuautitlan-izcalli" className="text-primary hover:underline font-medium">lesiones deportivas</Link> leves.
              </p>

              <h3 className="text-2xl font-bold text-slate-800 mt-10">Artroscopia de rodilla para menisco</h3>
              <p>
                Cuando el tratamiento conservador falla o el desgarro es mecánico (bloquea la rodilla), la <strong>artroscopia de rodilla</strong> es el estándar de oro. Es una técnica mínimamente invasiva donde el Dr. Jorge Córdova utiliza pequeñas incisiones y una cámara minúscula para reparar el menisco (sutura meniscal) o retirar la porción dañada (menisectomía parcial).
              </p>
              <p>
                La gran ventaja de este procedimiento en Cuautitlán Izcalli es que permite una recuperación mucho más rápida que la cirugía abierta tradicional, con menos dolor postoperatorio y un retorno más temprano a las actividades diarias.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-primary shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-primary" />
                Recuperación después de cirugía de menisco
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                El proceso de <strong>recuperación después de cirugía de menisco</strong> es fundamental para el éxito a largo plazo. Dependiendo del tipo de procedimiento (sutura vs. menisectomía), el paciente podría usar muletas por un tiempo breve y comenzará un programa de rehabilitación física personalizado. Como <strong>ortopedista en Cuautitlán Izcalli</strong>, el Dr. Córdova supervisa personalmente cada etapa del proceso para asegurar que la articulación recupere su rango de movimiento y fuerza óptimos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — CUÁNDO ACUDIR AL ESPECIALISTA */}
      <section className="py-20 bg-slate-50" data-testid="section-alertas-menisco">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <figure>
                <img
                  src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772555559/ChatGPT_Image_4_mar_2026_10_15_50_a.m._xlo5jx.png"
                  alt="Paciente en cirugía de meniscos mediante artroscopia de rodilla en quirófano realizado por ortopedista especialista en Cuautitlán Izcalli"
                  title="Artroscopia de rodilla para lesión de menisco - Especialista en rodilla en Cuautitlán Izcalli"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-alertas-menisco"
                />
                <figcaption className="text-xs text-muted-foreground mt-2 text-center italic">
                  Especialista en meniscos y dolor de rodilla en Cuautitlán Izcalli
                </figcaption>
              </figure>
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

      {/* SECCIÓN 7 — FAQ */}
      <section className="py-20 bg-white" data-testid="section-faq-menisco">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <HelpCircle className="w-8 h-8 text-primary" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 text-center">
                Preguntas frecuentes sobre lesión de menisco
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">¿Se puede caminar con una lesión de menisco?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  Sí, en muchos casos es posible caminar, pero suele haber dolor, inflamación o una sensación de que la rodilla "se traba". Sin embargo, caminar con un menisco roto sin el tratamiento adecuado puede causar un desgaste acelerado del cartílago articular (artrosis). Es fundamental que un <strong>ortopedista en Cuautitlán Izcalli</strong> evalúe la estabilidad de tu rodilla.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">¿Cuánto tiempo dura la recuperación de una artroscopia de rodilla?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  Si se realiza una menisectomía parcial (limpieza del menisco), la recuperación inicial es rápida, pudiendo caminar con apoyo parcial en pocos días y regresar a actividades normales en 3-4 semanas. Si se realiza una sutura meniscal (reparación), el proceso es más lento (6-8 semanas de protección) para permitir que el tejido cicatrice correctamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">¿Siempre es necesaria la cirugía para un menisco roto?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  No. Las roturas pequeñas en la periferia del menisco a menudo sanan con tratamiento conservador, fisioterapia y fortalecimiento. La cirugía se recomienda cuando hay bloqueos articulares, dolor persistente que no cede con rehabilitación o desgarros complejos que comprometen la salud futura de la rodilla.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold">¿Qué pasa si no me opero una lesión de menisco?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  Una lesión de menisco no tratada puede actuar como una "piedra en el zapato" dentro de la articulación, erosionando el cartílago que protege los huesos. Esto lleva inevitablemente a la artrosis de rodilla temprana, dolor crónico y una posible necesidad de prótesis en el futuro.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold">¿Qué tipo de ejercicio puedo hacer con una lesión de menisco?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  Se recomiendan ejercicios de bajo impacto como natación, bicicleta estática (con poca resistencia) y ejercicios específicos de fortalecimiento de cuádriceps indicados por su <strong>especialista en rodilla Cuautitlán Izcalli</strong>. Se deben evitar deportes de impacto, saltos o giros bruscos hasta completar la rehabilitación.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECCIÓN 8 — CTA FINAL */}
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
