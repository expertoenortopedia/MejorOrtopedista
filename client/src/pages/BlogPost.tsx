import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { blogPostsData } from "@/data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPostsData.find(p => p.slug === slug);

  const WHATSAPP_LINK = "https://wa.me/525514961386?text=Hola%20Dr.%20Jorge,%20vengo%20de%20su%20blog%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita.";

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-3xl text-center">
        <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
        <p className="text-muted-foreground mb-6">El artículo que buscas no existe o fue eliminado.</p>
        <Link href="/blog">
          <Button variant="outline">Volver al blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <Link href="/blog">
        <Button variant="ghost" className="mb-6 gap-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" /> Volver al blog
        </Button>
      </Link>

      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-72 md:h-96 object-cover rounded-2xl mb-8 shadow-lg"
        />
      )}

      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">
        {post.title}
      </h1>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          Dr. Jorge Luis Córdova Fonseca
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {new Date(post.createdAt).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })}
        </div>
      </div>

      <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-4">
        {post.content.split("\n").map((paragraph, idx) => {
          if (!paragraph.trim()) return null;
          if (paragraph.startsWith("## ")) {
            return <h2 key={idx} className="font-serif text-2xl font-bold mt-8 mb-4">{paragraph.replace("## ", "")}</h2>;
          }
          if (paragraph.startsWith("### ")) {
            return <h3 key={idx} className="font-serif text-xl font-bold mt-6 mb-3">{paragraph.replace("### ", "")}</h3>;
          }
          if (paragraph.startsWith("- ")) {
            return <li key={idx} className="ml-6 text-muted-foreground">{paragraph.replace("- ", "")}</li>;
          }
          return <p key={idx} className="text-muted-foreground">{paragraph}</p>;
        })}
      </div>

      <div className="mt-12 p-8 bg-green-50 rounded-2xl border border-green-100 text-center">
        <h3 className="font-bold text-xl mb-3">¿Tienes dudas sobre este tema?</h3>
        <p className="text-muted-foreground mb-6">El Dr. Jorge Luis Córdova puede evaluar tu caso de forma personalizada.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <Button className="bg-green-600 hover:bg-green-700 text-white rounded-xl gap-2 px-6 py-6 text-base">
            <WhatsAppIcon className="w-5 h-5" />
            Agendar cita por WhatsApp
          </Button>
        </a>
      </div>
    </article>
  );
}
