import { ShieldCheck } from "lucide-react";

export default function AvisoPrivacidad() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Protección de Datos</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-titulo-aviso">
              Aviso de Privacidad
            </h1>
            <p className="text-lg text-muted-foreground">
              Dr. Jorge Luis Córdova Fonseca — Ortopedia y Traumatología
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8" data-testid="card-aviso-privacidad">

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">Declaro</h2>
              <p className="text-muted-foreground leading-relaxed">
                De acuerdo con la <strong>"Ley Federal de Protección de Datos Personales"</strong>, ser médico especialista en Ortopedia con domicilio en Avenida Primero de Mayo lote 34, Manzana C-34-C, torre Luna Parc, en el Hospital Star Médica, consultorio 1210 en Cuautitlán Izcalli, Estado de México y como responsable de tratamiento de datos personales, se hace de su conocimiento que la información de nuestros pacientes se trata de forma estrictamente confidencial por lo que al proporcionar sus datos personales tales como nombre, edad, dirección, teléfono, correo electrónico, sexo, estado civil, ocupación, etc., estos serán utilizados única y exclusivamente para los siguientes fines:
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground">Finalidades del tratamiento de datos</h3>
              <ol className="space-y-3 list-none">
                {[
                  "Elaborar expediente clínico",
                  "Proveer los servicios de atención médica",
                  "Comunicarse con usted para confirmar, cancelar o modificar citas",
                  "Otorgar informes a las compañías de seguros de gastos médicos",
                  "Solicitar interconsultas y opiniones médicas"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground" data-testid={`text-finalidad-${idx + 1}`}>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground">Resguardo de información</h3>
              <p className="text-muted-foreground leading-relaxed">
                Su información personal será resguardada, evitando usos no autorizados o divulgación mediante el secreto médico y expedientes físicos y electrónicos a los que solo tiene acceso el personal que labora en el consultorio.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground">Derechos ARCO</h3>
              <p className="text-muted-foreground leading-relaxed">
                En cualquier momento puede solicitar su derecho al <strong>Acceso, Rectificación, Cancelación y Oposición</strong> al realizarlo a su médico por escrito, explicando los motivos. Si usted no manifiesta oposición para que sus datos sean transferidos, se entenderá que ha otorgado su consentimiento para ello.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground">Expediente clínico</h3>
              <p className="text-muted-foreground leading-relaxed">
                El expediente clínico es propiedad del médico y bajo normatividad correspondiente debe conservarse por un periodo mínimo de cinco años, contados a la fecha de su último acto médico.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6 mt-8">
              <p className="text-sm text-slate-400 text-center">
                Dr. Jorge Luis Córdova Fonseca — Cédula Profesional: 2814883 — Cédula Especialidad: 4255209
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
