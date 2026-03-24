import { useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/525514961386?text=Hola%20doctor,%20tengo%20dolor%20de%20hombro%20y%20quiero%20valoraci%C3%B3n";

export default function HombroLanding() {
  useEffect(() => {
    document.title = "Dolor de hombro en Cuautitlán Izcalli | Manguito rotador";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Especialista en dolor de hombro en Cuautitlán Izcalli. Diagnóstico preciso y tratamiento del manguito rotador. Agenda tu valoración.");
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, lineHeight: 1.6, color: "#333" }}>

      <header style={{ background: "#0a3d62", color: "white", padding: "40px 20px", textAlign: "center" }}>
        <h1 style={{ color: "white", marginBottom: "10px" }}>Dolor de hombro en Cuautitlán Izcalli</h1>
        <p style={{ marginBottom: "20px" }}>Especialista en manguito rotador | Diagnóstico preciso y tratamiento basado en evidencia</p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", background: "#25D366", color: "white", padding: "15px 25px", margin: "8px", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" }}
        >
          Agendar por WhatsApp
        </a>
        <a
          href="#contacto"
          style={{ display: "inline-block", background: "#1a5276", color: "white", padding: "15px 25px", margin: "8px", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" }}
        >
          Agenda consulta
        </a>
      </header>

      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2 style={{ color: "#0a3d62" }}>¿Te duele el hombro y no mejora?</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li>Dolor al levantar el brazo</li>
          <li>Molestia al dormir sobre ese lado</li>
          <li>Pérdida de fuerza</li>
          <li>Limitación en actividades diarias</li>
        </ul>
        <p><strong>Estas lesiones pueden empeorar si no se tratan a tiempo.</strong></p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", background: "#25D366", color: "white", padding: "15px 25px", marginTop: "15px", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" }}
        >
          Quiero valoración
        </a>
      </section>

      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2 style={{ color: "#0a3d62" }}>¿Qué puede estar causando tu dolor?</h2>
        <p>Una de las causas más frecuentes es la lesión del manguito rotador, un grupo de tendones responsables de la movilidad y estabilidad del hombro.</p>
        <p>Sin tratamiento adecuado, estas lesiones pueden progresar y afectar tu calidad de vida.</p>
      </section>

      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2 style={{ color: "#0a3d62" }}>Opciones de tratamiento</h2>
        <h3 style={{ color: "#0a3d62" }}>Tratamiento conservador</h3>
        <p>Medicamentos, rehabilitación y modificación de actividades.</p>
        <h3 style={{ color: "#0a3d62" }}>Infiltraciones</h3>
        <p>Indicadas en casos seleccionados para disminuir dolor e inflamación.</p>
        <h3 style={{ color: "#0a3d62" }}>Cirugía</h3>
        <p>Solo en casos necesarios, cuando el tratamiento conservador no es suficiente.</p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", background: "#25D366", color: "white", padding: "15px 25px", marginTop: "15px", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" }}
        >
          Agendar valoración
        </a>
      </section>

      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2 style={{ color: "#0a3d62" }}>Enfoque médico honesto</h2>
        <p>No todos los pacientes requieren cirugía. La decisión se toma después de una valoración completa, explicando cada opción de tratamiento.</p>
        <p><strong>El objetivo es resolver tu problema con el tratamiento más adecuado, no el más invasivo.</strong></p>
      </section>

      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2 style={{ color: "#0a3d62" }}>¿Cuándo debes acudir a valoración?</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li>Dolor persistente por más de 2 semanas</li>
          <li>Dificultad para mover el brazo</li>
          <li>Dolor nocturno constante</li>
          <li>Lesión después de caída o esfuerzo</li>
        </ul>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", background: "#25D366", color: "white", padding: "15px 25px", marginTop: "15px", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" }}
        >
          Agenda ahora
        </a>
      </section>

      <section id="contacto" style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2 style={{ color: "#0a3d62" }}>Ubicación</h2>
        <p>Consulta en Cuautitlán Izcalli, Estado de México.</p>
        <p>Atención a pacientes de Tultitlán, Coacalco, Tlalnepantla y zona norte de CDMX.</p>
      </section>

      <footer style={{ background: "#f4f4f4", textAlign: "center", padding: "20px" }}>
        <p>Ortopedista en Cuautitlán Izcalli | Especialista en hombro</p>
      </footer>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: "fixed", bottom: "20px", right: "20px", background: "#25D366", color: "white", padding: "15px 20px", borderRadius: "50px", textDecoration: "none", fontWeight: "bold", zIndex: 9999 }}
      >
        WhatsApp
      </a>

    </div>
  );
}
