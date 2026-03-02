import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Trash2, Plus, Eye, EyeOff, Lock, LogIn } from "lucide-react";
import { useState } from "react";
import type { BlogPost, InsertBlogPost } from "@shared/schema";

const ADMIN_PASSWORD = "5674323";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <CardTitle>Panel de Administración</CardTitle>
          <p className="text-sm text-muted-foreground">Ingresa la contraseña para gestionar el blog.</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                placeholder="Ingresa la contraseña"
                data-testid="input-admin-password"
              />
              {error && <p className="text-sm text-red-500 mt-1">Contraseña incorrecta</p>}
            </div>
            <Button type="submit" className="w-full gap-2" data-testid="button-admin-login">
              <LogIn className="w-4 h-4" /> Ingresar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function PostForm({ post, onSave, onCancel }: { post?: BlogPost; onSave: (data: InsertBlogPost) => void; onCancel: () => void }) {
  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [summary, setSummary] = useState(post?.summary ?? "");
  const [content, setContent] = useState(post?.content ?? "");
  const [imageUrl, setImageUrl] = useState(post?.imageUrl ?? "");
  const [published, setPublished] = useState(post?.published ?? false);
  const [autoSlug, setAutoSlug] = useState(!post);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (autoSlug) setSlug(slugify(val));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, slug, summary, content, imageUrl: imageUrl || null, published });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Label htmlFor="title">Título del artículo</Label>
        <Input id="title" value={title} onChange={(e) => handleTitleChange(e.target.value)} required data-testid="input-post-title" />
      </div>
      <div>
        <Label htmlFor="slug">Slug (URL)</Label>
        <Input
          id="slug"
          value={slug}
          onChange={(e) => { setSlug(e.target.value); setAutoSlug(false); }}
          required
          data-testid="input-post-slug"
        />
        <p className="text-xs text-muted-foreground mt-1">URL: /blog/{slug}</p>
      </div>
      <div>
        <Label htmlFor="summary">Resumen (aparece en el listado)</Label>
        <Textarea id="summary" value={summary} onChange={(e) => setSummary(e.target.value)} rows={2} required data-testid="input-post-summary" />
      </div>
      <div>
        <Label htmlFor="content">Contenido del artículo</Label>
        <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows={12} required data-testid="input-post-content" />
        <p className="text-xs text-muted-foreground mt-1">Usa "## " para subtítulos, "### " para subtítulos menores, y "- " para listas.</p>
      </div>
      <div>
        <Label htmlFor="imageUrl">URL de imagen (opcional)</Label>
        <Input id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://..." data-testid="input-post-image" />
      </div>
      <div className="flex items-center gap-3">
        <Switch id="published" checked={published} onCheckedChange={setPublished} data-testid="switch-post-published" />
        <Label htmlFor="published" className="cursor-pointer">
          {published ? "Publicado (visible para pacientes)" : "Borrador (no visible)"}
        </Label>
      </div>
      <div className="flex gap-3 pt-4">
        <Button type="submit" className="gap-2" data-testid="button-save-post">
          {post ? "Guardar cambios" : "Crear artículo"}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>Cancelar</Button>
      </div>
    </form>
  );
}

export default function BlogAdmin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [creating, setCreating] = useState(false);
  const { toast } = useToast();

  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog", "admin"],
    queryFn: () => fetch("/api/blog?all=true").then(r => r.json()),
    enabled: authenticated,
  });

  const createMutation = useMutation({
    mutationFn: async (data: InsertBlogPost) => {
      const res = await fetch("/api/blog", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(data) 
      });
      if (!res.ok) {
        const errBody = await res.json().catch(() => ({ message: `HTTP ${res.status}` }));
        throw new Error(errBody.message || `Error ${res.status}`);
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      setCreating(false);
      toast({ title: "Artículo creado exitosamente" });
    },
    onError: (err: Error) => toast({ title: "Error al crear artículo", description: err.message, variant: "destructive" }),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<InsertBlogPost> }) =>
      fetch(`/api/blog/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
        .then(r => { if (!r.ok) throw r; return r.json(); }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      setEditing(null);
      toast({ title: "Artículo actualizado" });
    },
    onError: () => toast({ title: "Error al actualizar", variant: "destructive" }),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) =>
      fetch(`/api/blog/${id}`, { method: "DELETE" }).then(r => { if (!r.ok) throw r; return r.json(); }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      toast({ title: "Artículo eliminado" });
    },
    onError: () => toast({ title: "Error al eliminar", variant: "destructive" }),
  });

  if (!authenticated) {
    return <AdminLogin onLogin={() => setAuthenticated(true)} />;
  }

  if (creating) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="font-serif text-2xl font-bold mb-6">Nuevo Artículo</h1>
        <Card>
          <CardContent className="pt-6">
            <PostForm onSave={(data) => createMutation.mutate(data)} onCancel={() => setCreating(false)} />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (editing) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="font-serif text-2xl font-bold mb-6">Editar Artículo</h1>
        <Card>
          <CardContent className="pt-6">
            <PostForm post={editing} onSave={(data) => updateMutation.mutate({ id: editing.id, data })} onCancel={() => setEditing(null)} />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-2xl font-bold">Administrar Blog</h1>
          <p className="text-muted-foreground text-sm">Crea, edita y gestiona tus artículos médicos.</p>
        </div>
        <Button onClick={() => setCreating(true)} className="gap-2" data-testid="button-new-post">
          <Plus className="w-4 h-4" /> Nuevo Artículo
        </Button>
      </div>

      {isLoading && <p className="text-muted-foreground">Cargando artículos...</p>}

      {!isLoading && posts && posts.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <p className="text-muted-foreground mb-4">No hay artículos aún. Crea tu primer artículo médico.</p>
            <Button onClick={() => setCreating(true)} className="gap-2">
              <Plus className="w-4 h-4" /> Crear primer artículo
            </Button>
          </CardContent>
        </Card>
      )}

      {posts && posts.length > 0 && (
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-sm transition-shadow">
              <CardContent className="flex items-center justify-between py-5">
                <div className="flex-1 min-w-0 mr-4">
                  <div className="flex items-center gap-2 mb-1">
                    {post.published ? (
                      <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full font-medium">
                        <Eye className="w-3 h-3" /> Publicado
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full font-medium">
                        <EyeOff className="w-3 h-3" /> Borrador
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.createdAt).toLocaleDateString("es-MX")}
                    </span>
                  </div>
                  <h3 className="font-bold truncate">{post.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">{post.summary}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Button variant="outline" size="sm" onClick={() => setEditing(post)} className="gap-1" data-testid={`button-edit-post-${post.id}`}>
                    <Pencil className="w-3 h-3" /> Editar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1 text-red-500 hover:text-red-600 hover:bg-red-50"
                    onClick={() => {
                      if (confirm("¿Seguro que deseas eliminar este artículo?")) {
                        deleteMutation.mutate(post.id);
                      }
                    }}
                    data-testid={`button-delete-post-${post.id}`}
                  >
                    <Trash2 className="w-3 h-3" /> Eliminar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
