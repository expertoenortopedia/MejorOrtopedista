import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { insertBlogPostSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get("/api/blog", async (_req, res) => {
    try {
      const all = _req.query.all === "true";
      const posts = await storage.getBlogPosts(!all);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener artículos" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ message: "Artículo no encontrado" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener artículo" });
    }
  });

  app.post("/api/blog", async (req, res) => {
    try {
      console.log("POST /api/blog body:", JSON.stringify(req.body));
      const parsed = insertBlogPostSchema.safeParse(req.body);
      if (!parsed.success) {
        console.log("Validation errors:", JSON.stringify(parsed.error.flatten()));
        return res.status(400).json({ message: "Datos inválidos", errors: parsed.error.flatten() });
      }
      const post = await storage.createBlogPost(parsed.data);
      res.status(201).json(post);
    } catch (error: any) {
      console.error("Error creating blog post:", error);
      if (error?.code === "23505") {
        return res.status(409).json({ message: "Ya existe un artículo con ese slug" });
      }
      res.status(500).json({ message: "Error al crear artículo" });
    }
  });

  app.patch("/api/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) return res.status(400).json({ message: "ID inválido" });
      const post = await storage.updateBlogPost(id, req.body);
      if (!post) return res.status(404).json({ message: "Artículo no encontrado" });
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar artículo" });
    }
  });

  app.delete("/api/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) return res.status(400).json({ message: "ID inválido" });
      const deleted = await storage.deleteBlogPost(id);
      if (!deleted) return res.status(404).json({ message: "Artículo no encontrado" });
      res.json({ message: "Artículo eliminado" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar artículo" });
    }
  });

  return httpServer;
}
