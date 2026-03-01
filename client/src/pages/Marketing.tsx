import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, MessageCircle, Megaphone, Search, UserCircle, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Helper component for copyable text blocks
const CopyBlock = ({ title, text, bg = "bg-slate-50" }: { title: string, text: string, bg?: string }) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Copiado al portapapeles",
      description: "El texto está listo para usar.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-sm text-primary">{title}</h4>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 text-xs gap-1"
          onClick={handleCopy}
        >
          {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
          {copied ? 'Copiado' : 'Copiar'}
        </Button>
      </div>
      <div className={`p-4 rounded-lg border border-slate-200 text-sm whitespace-pre-wrap ${bg} font-mono text-slate-700`}>
        {text}
      </div>
    </div>
  );
};

export default function Marketing() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
      <div className="mb-10">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          Sistema de Captación: Dr. Jorge Luis Córdova
        </h1>
        <p className="text-muted-foreground text-lg">
          Materiales de marketing, copy y automatizaciones listos para implementar.
        </p>
      </div>

      <Tabs defaultValue="whatsapp" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 h-auto gap-2 bg-transparent p-0 mb-8">
          <TabsTrigger value="whatsapp" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700 data-[state=active]:border-green-200 border border-transparent py-3">
            <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
          </TabsTrigger>
          <TabsTrigger value="ads" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:border-blue-200 border border-transparent py-3">
            <Megaphone className="w-4 h-4 mr-2" /> Google Ads
          </TabsTrigger>
          <TabsTrigger value="seo" className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700 data-[state=active]:border-purple-200 border border-transparent py-3">
            <Search className="w-4 h-4 mr-2" /> SEO Local
          </TabsTrigger>
          <TabsTrigger value="doctoralia" className="data-[state=active]:bg-cyan-50 data-[state=active]:text-cyan-700 data-[state=active]:border-cyan-200 border border-transparent py-3">
            <UserCircle className="w-4 h-4 mr-2" /> Doctoralia
          </TabsTrigger>
          <TabsTrigger value="gmb" className="data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700 data-[state=active]:border-orange-200 border border-transparent py-3 hidden lg:flex">
            <Star className="w-4 h-4 mr-2" /> GMB
          </TabsTrigger>
        </TabsList>

        {/* WHATSAPP TAB */}
        <TabsContent value="whatsapp" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card>
            <CardHeader className="bg-green-50/50 border-b border-green-100">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <MessageCircle className="w-5 h-5" /> 
                Mensajes Automáticos de WhatsApp Business
              </CardTitle>
              <CardDescription>
                Respuestas rápidas para perfilar y agendar pacientes privados. Tono profesional, empático y directo.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <CopyBlock 
                title="Mensaje de Bienvenida / Pregunta 'Información doctor'"
                text={`¡Hola! 👋 Bienvenido al consultorio del Dr. Jorge Luis Córdova, especialista en Ortopedia y Traumatología.

Para brindarle la mejor atención, por favor díganos:
1️⃣ ¿Cuál es su nombre?
2️⃣ ¿Qué molestia presenta o qué articulación le duele (rodilla, hombro, etc.)?
3️⃣ ¿Es de primera vez o paciente subsecuente?

En breve le atenderemos personalmente para resolver sus dudas o agendar su cita. 🗓️`}
              />
              <CopyBlock 
                title="Respuesta a 'Tengo dolor / Me duele la rodilla/hombro'"
                text={`Lamento mucho que presente dolor. 

El Dr. Córdova es subespecialista precisamente en ese tipo de padecimientos (lesiones, desgaste, dolor crónico). 

Para poder ayudarle correctamente, es necesaria una valoración médica presencial. En la consulta, el Doctor evaluará su caso, revisará estudios (si los tiene) y le dará un diagnóstico claro y opciones de tratamiento.

¿Le gustaría que le comparta los horarios disponibles para esta semana? 🕒`}
              />
              <CopyBlock 
                title="Respuesta a 'Precio / ¿Cuánto cuesta la consulta?'"
                text={`La consulta de valoración especializada con el Dr. Jorge Luis Córdova tiene una inversión de $X,XXX MXN.

Incluye:
✅ Evaluación médica completa
✅ Revisión de estudios previos (Radiografías/Resonancias)
✅ Diagnóstico preciso y explicación detallada
✅ Plan de tratamiento personalizado

Nos encontramos en [Dirección del consultorio], en el Estado de México. 

¿Desea agendar un espacio o tiene alguna otra duda?`}
              />
              <CopyBlock 
                title="Mensaje de seguimiento (si no responde después de 24 hrs)"
                text={`Hola [Nombre], ¡buen día! ☀️

Le escribimos del consultorio del Dr. Jorge L. Córdova. Ayer nos contactó por molestias de [padecimiento]. 

Sabemos que vivir con dolor afecta su calidad de vida. Queríamos darle seguimiento y saber si pudimos resolver sus dudas o si desea reservar un espacio en la agenda de esta semana para una valoración.

Quedamos a su disposición. ¡Saludos!`}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* GOOGLE ADS TAB */}
        <TabsContent value="ads" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card>
            <CardHeader className="bg-blue-50/50 border-b border-blue-100">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Megaphone className="w-5 h-5" /> 
                Copys para Google Ads (Red de Búsqueda)
              </CardTitle>
              <CardDescription>
                Anuncios estructurados para pacientes con intención de búsqueda alta (dolor o buscando especialista).
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-4 text-slate-800 border-b pb-2">Grupo: Dolor de Rodilla / Desgaste</h3>
                  <CopyBlock 
                    title="Anuncio 1: Enfoque en Dolor"
                    text={`Título 1: Especialista en Rodilla
Título 2: ¿Dolor y Desgaste Articular?
Título 3: Agenda tu Cita Hoy Mismo

Descripción 1: Tratamientos efectivos para desgaste, dolor y lesiones de rodilla. Recupere su movilidad.
Descripción 2: El Dr. Jorge Córdova evalúa tu caso para darte el mejor tratamiento. Agenda por WhatsApp.`}
                  />
                  <CopyBlock 
                    title="Anuncio 2: Enfoque en Confianza"
                    text={`Título 1: Ortopedista en Estado de México
Título 2: Dr. Jorge Luis Córdova
Título 3: Tratamientos Sin Cirugía (si aplica)

Descripción 1: Opciones conservadoras y avanzadas para el dolor articular. Atención médica de excelencia.
Descripción 2: Consulta especializada. Evaluamos lesiones y desgaste. +500 pacientes recuperados.`}
                  />
                </div>
                <div>
                  <h3 className="font-bold mb-4 text-slate-800 border-b pb-2">Grupo: Lesiones Deportivas / Hombro</h3>
                  <CopyBlock 
                    title="Anuncio 3: Enfoque Deportivo / Meniscos"
                    text={`Título 1: Especialista en Lesiones Deportivas
Título 2: ¿Lesión de Meniscos o Ligamentos?
Título 3: Artroscopia de Mínima Invasión

Descripción 1: Diagnóstico preciso y recuperación rápida para volver a tu deporte. Agenda tu valoración.
Descripción 2: Subespecialista en rodilla y hombro. Tratamiento vanguardista para lesiones.`}
                  />
                  <CopyBlock 
                    title="Anuncio 4: Enfoque Hombro"
                    text={`Título 1: ¿Dolor al Levantar el Brazo?
Título 2: Especialista en Hombro
Título 3: Clínica Privada en EdoMex

Descripción 1: Soluciones para manguito rotador, tendinitis y luxaciones. Dile adiós al dolor.
Descripción 2: Tratamientos personalizados de menos a más. Atención humana y profesional. Llámanos.`}
                  />
                  <CopyBlock 
                    title="Anuncio 5: Genérico Branding"
                    text={`Título 1: Mejor Traumatólogo EdoMex
Título 2: Dr. Jorge Luis Córdova
Título 3: Citas Disponibles Esta Semana

Descripción 1: Experto en rodilla, hombro y cirugía articular. Clínica con altos estándares de calidad.
Descripción 2: Recupera tu estilo de vida sin dolor limitante. Haz clic para agendar vía WhatsApp.`}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SEO TAB */}
        <TabsContent value="seo" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card>
            <CardHeader className="bg-purple-50/50 border-b border-purple-100">
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <Search className="w-5 h-5" /> 
                Optimización SEO (Página Web)
              </CardTitle>
              <CardDescription>
                Metadatos para mejorar el posicionamiento orgánico en Google.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <CopyBlock 
                title="Título SEO (Title Tag) - Max 60 caracteres"
                text={`Ortopedista en Estado de México | Dr. Jorge Luis Córdova`}
              />
              <CopyBlock 
                title="Meta Descripción - Max 160 caracteres"
                text={`Dr. Jorge Luis Córdova, especialista en Ortopedia y Traumatología en Estado de México. Experto en rodilla, hombro y artroscopia. Agenda tu cita hoy.`}
              />
              <CopyBlock 
                title="Palabras Clave Principales (Keywords)"
                text={`ortopedista estado de mexico, traumatologo estado de mexico, especialista en rodilla, cirugia de meniscos, desgaste de rodilla tratamiento, doctor dolor de hombro, especialista en lesiones deportivas, artroscopia de rodilla edo mex`}
              />
              <CopyBlock 
                title="Etiquetas H1 y H2 Sugeridas para la Landing"
                text={`H1: Especialista en dolor de rodilla y hombro — Recupera tu movilidad y calidad de vida
H2: ¿Qué te duele? (Problemas que atiendo)
H2: Soluciones a tu medida, de menos a más (Tratamientos)
H2: Dr. Jorge Luis Córdova Fonseca (Perfil profesional)`}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* DOCTORALIA TAB */}
        <TabsContent value="doctoralia" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card>
            <CardHeader className="bg-cyan-50/50 border-b border-cyan-100">
              <CardTitle className="flex items-center gap-2 text-cyan-800">
                <UserCircle className="w-5 h-5" /> 
                Perfil Optimizado: Doctoralia
              </CardTitle>
              <CardDescription>
                Extracto sobre mí para el perfil del directorio médico.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <CopyBlock 
                title="Sección: Sobre Mí (Descripción Doctoralia)"
                text={`¡Hola! Soy el Dr. Jorge Luis Córdova Fonseca, médico especialista en Ortopedia y Traumatología. 

Mi enfoque se basa en el trato humano, ético y de alta especialidad. Entiendo que vivir con dolor articular limita drásticamente la calidad de vida, por eso mi misión es ayudarte a recuperar tu movilidad con los tratamientos más seguros y efectivos.

Cuento con subespecialidad en:
✅ Cirugía de Rodilla y Hombro
✅ Lesiones Deportivas
✅ Artroscopia y Cirugía de Mínima Invasión
✅ Tratamiento de desgaste articular (Artrosis)

En mi consulta, la prioridad eres tú. Dedico el tiempo necesario para evaluar tu caso, explicarte detalladamente tus radiografías o resonancias en un lenguaje claro (sin tecnicismos confusos), y ofrecerte un plan de tratamiento escalonado. Mi filosofía es agotar las vías conservadoras antes de considerar la cirugía.

Si buscas un diagnóstico honesto y atención médica de excelencia en el Estado de México, estaré encantado de recibirte.`}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* GMB TAB */}
        <TabsContent value="gmb" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card>
            <CardHeader className="bg-orange-50/50 border-b border-orange-100">
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <Star className="w-5 h-5" /> 
                Google My Business (Perfil de Empresa)
              </CardTitle>
              <CardDescription>
                Descripción para la ficha de Google Maps.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <CopyBlock 
                title="Descripción de la empresa"
                text={`Consultorio de Ortopedia y Traumatología del Dr. Jorge Luis Córdova Fonseca en el Estado de México. 

Somos especialistas en el diagnóstico y tratamiento de lesiones articulares, enfocándonos en rodilla, hombro y lesiones deportivas. Ofrecemos atención médica privada de primer nivel para pacientes con dolor articular, desgaste (artrosis), lesiones de meniscos, ligamentos y manguito rotador. 

Contamos con tratamientos vanguardistas: desde manejo conservador e infiltraciones, hasta artroscopia (cirugía de mínima invasión) y reemplazos articulares. 

Atención humana, ética y personalizada. Recupera tu movilidad y calidad de vida. Agenda tu valoración médica hoy mismo.`}
              />
              <div className="bg-orange-50/50 p-4 rounded-lg mt-4 text-sm text-orange-800 flex gap-2">
                <Star className="w-5 h-5 shrink-0" />
                <p><strong>Consejo GMB:</strong> Sube al menos 10 fotos del consultorio (limpio y bien iluminado), la fachada del edificio, y del Doctor con bata blanca sonriendo para generar confianza inmediata en Google Maps.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}
