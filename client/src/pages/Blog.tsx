import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { blogPostsList } from "@/data/blogPosts";

export default function Blog() {
  const posts = blogPostsList;

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
          <BookOpen className="w-4 h-4" />
          Blog Médico
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Artículos y Actualizaciones Médicas</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Información confiable sobre ortopedia, lesiones y tratamientos, escrita por el Dr. Jorge Luis Córdova Fonseca.
        </p>
      </div>

      {posts.length === 0 && (
        <div className="text-center py-20">
          <BookOpen className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Próximamente</h2>
          <p className="text-muted-foreground">Estamos preparando artículos médicos de interés para ti.</p>
        </div>
      )}

      {posts.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
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
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{post.summary}</p>
                  <span className="text-primary text-sm font-semibold flex items-center gap-1">
                    Leer artículo <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
