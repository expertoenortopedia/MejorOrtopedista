import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Marketing from "@/pages/Marketing";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import BlogAdmin from "@/pages/BlogAdmin";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/marketing" component={Marketing} />
      <Route path="/admin/blog" component={BlogAdmin} />
      <Route path="/blog-admin" component={BlogAdmin} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
