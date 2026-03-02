import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Activity, ArrowRight, Award, Bone, BookOpen, CheckCircle2, 
  Calendar, ChevronRight, HeartPulse, ShieldCheck, 
  Star, Stethoscope, UserCheck 
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import type { BlogPost } from "@shared/schema";
import heroImg from "@/assets/images/hero-medical.png";
import doctorImg from "@/assets/images/doctor-portrait.png";
import clinicImg from "@/assets/images/clinic-interior.png";

export default function Home() {
  const WHATSAPP_LINK = "https://wa.me/525514961386?text=Hola%20Dr.%20Jorge,%20vengo%20de%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita.";

  const { data: blogPosts } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
    queryFn: () => fetch("/api/blog").then(r => r.json()),
  });
  const recentPosts = blogPosts?.slice(0, 3) ?? [];

  return (
    <div className="w-full bg-background overflow-hidden">
      
      {/* 1. ENCABEZADO PRINCIPAL (HERO) */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 lg:min-h-[90vh] flex items-center">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px] -z-10 hidden lg:block" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div className="max-w-2xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Ortopedia y Traumatología Especializada</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
                Ortopedista en Estado de México <span className="text-primary italic">especialista en rodilla y hombro</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Atención médica humana y altamente especializada para adultos con dolor, desgaste articular o lesiones deportivas en el Estado de México. Vuelve a disfrutar tu día a día sin dolor.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full text-base h-14 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/30 rounded-xl gap-2 transition-transform hover:-translate-y-1">
                    <WhatsAppIcon className="w-6 h-6" />
                    Agendar cita por WhatsApp
                  </Button>
                </a>
                <a href="#especialidad" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full text-base h-14 rounded-xl gap-2 border-2">
                    Conocer tratamientos
                  </Button>
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                      <UserCheck className="w-5 h-5 text-slate-400" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-sm font-medium mt-1">+1000 pacientes recuperados</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] -rotate-3 scale-105" />
              <img 
                src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772415646/ChatGPT_Image_1_mar_2026_07_40_32_p.m._ygzejw.png"
                alt="Doctor examinando rodilla de paciente" 
                className="relative rounded-[2rem] shadow-2xl object-cover aspect-[4/3] w-full"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce hover:animate-none [animation-duration:3s]">
                <div className="bg-green-100 p-3 rounded-full">
                  <Activity className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-sm">Tecnología de Vanguardia</p>
                  <p className="text-xs text-muted-foreground">Diagnóstico preciso</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. PROBLEMAS QUE ATIENDE */}
      <section id="especialidad" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">¿Qué te duele?</h2>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">No te acostumbres a vivir con dolor</h3>
            <p className="text-lg text-muted-foreground">
              Brindo diagnóstico y tratamiento preciso para lesiones y afecciones del sistema musculoesquelético. Explicado siempre en un lenguaje claro y comprensible.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Dolor de rodilla", desc: "Soluciones para dolor crónico, chasquidos al caminar, inflamación y limitación de movimiento.", icon: Activity, link: "/dolor-de-rodilla-cuautitlan-izcalli" },
              { title: "Lesión de meniscos", desc: "Atención especializada si sientes bloqueos en la rodilla, dolor agudo al rotar o inestabilidad.", icon: Bone, link: "/lesion-menisco-cuautitlan-izcalli" },
              { title: "Ligamento cruzado", desc: "Reconstrucción y tratamiento tras lesiones deportivas o accidentes que causan fallo en la rodilla.", icon: HeartPulse, link: "/ligamento-cruzado-anterior-cuautitlan-izcalli" },
              { title: "Desgaste articular (Artrosis)", desc: "Tratamientos para el desgaste del cartílago. Retrasamos el avance y aliviamos el dolor profundo.", icon: Stethoscope, link: "/artrosis-rodilla-cadera-cuautitlan-izcalli" },
              { title: "Dolor de hombro", desc: "Alivio para dolor al levantar el brazo, manguito rotador, tendinitis y hombro congelado.", icon: UserCheck, link: "/dolor-hombro-manguito-rotador-cuautitlan-izcalli" },
              { title: "Lesiones deportivas", desc: "Recuperación rápida y segura para que regreses a tu deporte favorito en tu máximo rendimiento.", icon: Award },
            ].map((item, idx) => {
              const cardContent = (
                <Card key={idx} className={`border border-slate-100 hover:border-primary/20 shadow-sm hover:shadow-md transition-all group overflow-hidden ${item.link ? "cursor-pointer" : ""}`} data-testid={`card-specialty-${idx}`}>
                  <CardContent className="p-8">
                    <div className="mb-6 p-4 bg-slate-50 group-hover:bg-primary/5 rounded-2xl w-16 h-16 flex items-center justify-center transition-colors">
                      <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                    {item.link && (
                      <span className="inline-flex items-center text-primary text-sm font-medium mt-3 group-hover:translate-x-1 transition-transform">
                        Más información <ChevronRight className="w-4 h-4 ml-1" />
                      </span>
                    )}
                  </CardContent>
                </Card>
              );
              return item.link ? (
                <Link key={idx} href={item.link} className="block">
                  {cardContent}
                </Link>
              ) : cardContent;
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">¿Te identificas con alguno de estos síntomas?</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:-translate-y-1 transition-transform">
                <WhatsAppIcon className="w-6 h-6 mr-2" />
                Cuéntame tus síntomas por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 3. TRATAMIENTOS EXPLICADOS SIMPLES */}
      <section id="tratamientos" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src={clinicImg} 
                alt="Instalaciones de primer nivel" 
                className="rounded-3xl shadow-xl object-cover w-full h-[500px]"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Enfoque médico</h2>
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">Soluciones a tu medida, de menos a más</h3>
                <p className="text-lg text-muted-foreground">
                  Mi filosofía es agotar las opciones conservadoras antes de contemplar la cirugía. Analizamos tu caso a detalle para ofrecerte el tratamiento más efectivo y menos invasivo posible.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { 
                    title: "Tratamiento Conservador", 
                    desc: "Fisioterapia, medicamentos específicos, ejercicios de rehabilitación y cambios de hábitos para mejorar sin cirugía." 
                  },
                  { 
                    title: "Infiltraciones", 
                    desc: "Aplicación directa de medicamentos o biológicos (ácido hialurónico, plasma) en la articulación para desinflamar y lubricar rápidamente." 
                  },
                  { 
                    title: "Artroscopia (Cirugía de mínima invasión)", 
                    desc: "Procedimiento mediante incisiones milimétricas y una cámara. Menor dolor, rápida recuperación y resultados estéticos." 
                  },
                  { 
                    title: "Cirugía Ortopédica Avanzada", 
                    desc: "Cuando es estrictamente necesario, realizamos reemplazos articulares (prótesis) y cirugías reconstructivas con altos estándares de seguridad." 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIFERENCIADORES Y PERFIL DEL DOCTOR */}
      <section id="doctor" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            
            <div className="lg:col-span-2 order-2 lg:order-1 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/5 rounded-[2rem] transform -rotate-3 scale-105" />
              <img 
                src="https://res.cloudinary.com/dcuuvanw3/image/upload/v1772410036/FotodelGeorge_menos5MB_c57hjv.jpg"
                alt="Dr. Jorge Luis Córdova Fonseca" 
                className="relative rounded-[2rem] shadow-xl w-full aspect-[3/4] object-cover object-top"
              />
            </div>

            <div className="lg:col-span-3 order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Tu Especialista</h2>
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">Dr. Jorge Luis Córdova Fonseca</h3>
                <p className="text-xl text-slate-600 font-medium mb-6">"Mi objetivo no es solo tratar lesiones, sino devolverte tu estilo de vida."</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Soy médico especialista en Ortopedia y Traumatología con subespecialidad en cirugía articular y artroscopia. Entiendo perfectamente la frustración y el miedo que causa el dolor limitante.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Cuento con más de 25 años de experiencia y soy profesor de la subespecialidad, formando médicos nacionales e internacionales en el área de Ortopedia y Traumatología.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  En mi consulta privada en el Estado de México, te garantizo una evaluación exhaustiva, empatía genuina y un diagnóstico transparente. No te recomendaré tratamientos innecesarios, solo lo que científicamente es mejor para tu salud.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Certificación Vigente</h4>
                    <p className="text-xs text-muted-foreground">Consejo Mexicano de Ortopedia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Alta Especialidad</h4>
                    <p className="text-xs text-muted-foreground">Rodilla, hombro y deporte</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Trato Humano</h4>
                    <p className="text-xs text-muted-foreground">Consultas sin prisa, explicaciones claras</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. TESTIMONIOS (REALISTAS Y ÉTICOS) */}
      <section id="testimonios" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary-foreground/80 font-bold tracking-wider uppercase text-sm mb-3">Casos de Éxito</h2>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">Lo que dicen mis pacientes</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Llevaba 2 años con dolor de rodilla que otros médicos me decían que era normal por la edad. El Dr. Jorge me diagnosticó desgaste y con un tratamiento de infiltración ahora puedo caminar sin dolor. Muy ético y profesional.",
                author: "Marta R.",
                detail: "Paciente de tratamiento conservador"
              },
              {
                text: "Me rompí el ligamento jugando fútbol. Tenía mucho miedo a la cirugía, pero el Doctor me explicó el procedimiento paso a paso. La artroscopia fue un éxito y ya estoy en rehabilitación.",
                author: "Carlos E.",
                detail: "Paciente de artroscopia deportiva"
              },
              {
                text: "Excelente atención. No te apresura en la consulta, te revisa detalladamente y te muestra en las radiografías exactamente dónde está el problema. Me dio mucha confianza desde el primer día.",
                author: "Laura G.",
                detail: "Paciente por dolor de hombro"
              },
              {
                text: "Agradezco la honestidad del Dr. Córdova. Pensé que necesitaba cirugía de meniscos y él me recomendó primero fisioterapia especializada. Me ahorró una cirugía innecesaria y ya estoy al 100%.",
                author: "Roberto M.",
                detail: "Paciente de lesión de meniscos"
              },
              {
                text: "Llevé a mi madre por un desgaste articular severo. El trato fue de primera, súper respetuoso con el paciente mayor. Le hizo un reemplazo de rodilla y el cambio en su calidad de vida ha sido increíble.",
                author: "Familia Sánchez",
                detail: "Familiar de paciente (Prótesis)"
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CardContent className="p-8">
                  <div className="flex text-yellow-400 mb-4">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-xs text-slate-400">{testimonial.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BLOG MÉDICO */}
      <section id="blog" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              <BookOpen className="w-4 h-4" />
              Blog Médico
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">Artículos y Actualizaciones</h3>
            <p className="text-lg text-muted-foreground">
              Información confiable sobre ortopedia, prevención de lesiones y tratamientos, escrita por el Dr. Jorge Luis Córdova.
            </p>
          </div>

          {recentPosts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card className="overflow-hidden cursor-pointer group hover:shadow-lg transition-all border-slate-100 hover:border-primary/20 h-full">
                      {post.imageUrl && (
                        <div className="h-48 overflow-hidden">
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.createdAt).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}
                        </div>
                        <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-muted-foreground text-sm line-clamp-3">{post.summary}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Link href="/blog">
                  <Button variant="outline" className="rounded-full px-8 py-5 text-base gap-2 border-2">
                    Ver todos los artículos <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Próximamente publicaremos artículos de interés médico.</p>
            </div>
          )}
        </div>
      </section>

      {/* 7. CALL TO ACTION FINAL */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">Da el primer paso hacia una vida sin dolor</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Agenda tu valoración médica hoy mismo. Recibirás un diagnóstico certero, honesto y las mejores opciones de tratamiento para tu caso específico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-16 px-8 text-lg bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-2xl gap-3">
                <WhatsAppIcon className="w-7 h-7" />
                Agendar por WhatsApp
              </Button>
            </a>
            <a href="https://g.co/kgs/eVj8vhe" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="h-16 px-8 text-lg bg-transparent text-white border-white/30 hover:bg-white/10 rounded-xl gap-3">
                Ver ubicación en mapa
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
