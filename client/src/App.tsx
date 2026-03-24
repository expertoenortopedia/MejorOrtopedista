import { Navbar } from "./components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
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
import DolorDeRodilla from "@/pages/DolorDeRodilla";
import LesionMenisco from "@/pages/LesionMenisco";
import LigamentoCruzado from "@/pages/LigamentoCruzado";
import Artrosis from "@/pages/Artrosis";
import DolorHombro from "@/pages/DolorHombro";
import LesionesDeportivas from "@/pages/LesionesDeportivas";
import AvisoPrivacidad from "@/pages/AvisoPrivacidad";
import HombroLanding from "@/pages/HombroLanding";

const HIDDEN_LAYOUT_ROUTES: string[] = [];

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dolor-de-rodilla-cuautitlan-izcalli" component={DolorDeRodilla} />
      <Route path="/lesion-menisco-cuautitlan-izcalli" component={LesionMenisco} />
      <Route path="/ligamento-cruzado-anterior-cuautitlan-izcalli" component={LigamentoCruzado} />
      <Route path="/artrosis-rodilla-cadera-cuautitlan-izcalli" component={Artrosis} />
      <Route path="/dolor-hombro-manguito-rotador-cuautitlan-izcalli" component={DolorHombro} />
      <Route path="/lesiones-deportivas-cuautitlan-izcalli" component={LesionesDeportivas} />
      <Route path="/marketing" component={Marketing} />
      <Route path="/admin/blog" component={BlogAdmin} />
      <Route path="/blog-admin" component={BlogAdmin} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/aviso-de-privacidad" component={AvisoPrivacidad} />
      <Route path="/hombro-cuautitlan-izcalli" component={HombroLanding} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const hideLayout = HIDDEN_LAYOUT_ROUTES.includes(location);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          {!hideLayout && <Navbar />}
          <ScrollToTop />
          <main className="flex-grow">
            <Router />
          </main>
          {!hideLayout && <Footer />}
        </div>
        <Toaster />
        {!hideLayout && (
          <>
            <a
              href="/hombro-cuautitlan-izcalli"
              className="fixed bottom-6 left-6 z-50 text-white rounded-full px-5 py-3 shadow-2xl text-sm font-bold max-w-[210px] text-center leading-tight"
              style={{ background: "linear-gradient(135deg, #c0392b, #e74c3c)", animation: "pulseHombro 2s ease-in-out infinite", boxShadow: "0 0 0 0 rgba(231,76,60,0.7)" }}
              data-testid="button-hombro-floating"
              aria-label="¿Me duele el hombro, qué puedo hacer...?"
            >
              <span className="absolute inset-0 rounded-full bg-red-500 opacity-30 animate-ping" style={{ animationDuration: "1.5s" }} />
              <span className="relative">🔴 ¿Me duele el hombro, qué puedo hacer?</span>
            </a>
            <a
              href="https://wa.me/525514961386?text=Hola%20Dr.%20Jorge,%20me%20gustar%C3%ADa%20agendar%20una%20cita."
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 group"
              data-testid="button-whatsapp-floating"
              aria-label="Agendar cita por WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-slate-800 text-sm font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Agendar cita
              </span>
            </a>
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
