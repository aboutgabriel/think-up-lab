import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  Users,
  CreditCard,
  Shield,
  LayoutDashboard,
  ClipboardList,
  MessageSquare,
  UserPlus,
  Settings,
  TrendingDown,
  TrendingUp,
  Clock,
  BarChart3,
  ExternalLink,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";

import baba1 from "@/assets/baba-bacana-1.jpeg";
import baba2 from "@/assets/baba-bacana-2.jpeg";
import baba3 from "@/assets/baba-bacana-3.jpeg";
import baba4 from "@/assets/baba-bacana-4.jpeg";

const problems = [
  { icon: XCircle, title: "Presença pelo WhatsApp" },
  { icon: CreditCard, title: "Cobranças manuais" },
  { icon: MessageSquare, title: "Pagamentos confusos" },
  { icon: Clock, title: "Sem histórico" },
];

const features = [
  { icon: CheckCircle, title: "Confirmação de presença" },
  { icon: CreditCard, title: "Comprovante de pagamento" },
  { icon: Shield, title: "Controle de inadimplência" },
  { icon: Users, title: "Registro de membros" },
  { icon: LayoutDashboard, title: "Painel da diretoria" },
];

const steps = [
  { number: "01", icon: ClipboardList, title: "Cadastre seu time", description: "Crie o perfil do seu grupo com nome, regras e valores de contribuição." },
  { number: "02", icon: UserPlus, title: "Convide os membros", description: "Compartilhe o link e cada membro se registra direto na plataforma." },
  { number: "03", icon: Settings, title: "Gerencie tudo", description: "Presença, pagamentos e comunicação — tudo centralizado num só lugar." },
];

const results = [
  {
    icon: TrendingDown,
    metric: "80%",
    label: "menos mensagens no grupo",
  },
  {
    icon: Clock,
    metric: "5h/mês",
    label: "economizadas em retrabalho",
  },
  {
    icon: BarChart3,
    metric: "100%",
    label: "de visibilidade financeira",
  },
];

export default function BabaDoBacana() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-background text-foreground pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium text-primary mb-6">
              Para times e babas
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Seu time merece mais{" "}
              <span className="text-gradient">organização</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Chega de gerenciar pelada pelo WhatsApp. Tenha um sistema
              completo para presença, pagamentos e gestão do seu grupo
              esportivo.
            </p>
            <Button
              onClick={scrollToContact}
              className="rounded-full px-8 py-6 text-base gradient-primary text-primary-foreground shadow-primary hover:opacity-90 transition-opacity"
            >
              Quero para o meu time
            </Button>
          </div>
        </div>
      </section>

      {/* Problema — Antes vs Depois */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Cansado dessa rotina?
            </h2>
            <p className="text-muted-foreground text-lg">
              Se você organiza um baba ou time amador, provavelmente vive esses problemas toda semana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-destructive/15 flex items-center justify-center">
                  <XCircle className="w-4 h-4 text-destructive" />
                </div>
                <h3 className="font-bold text-destructive">Antes</h3>
              </div>
              <div className="space-y-3">
                {problems.map((item) => (
                  <div key={item.title} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-destructive/70 flex-shrink-0" />
                    <p className="font-medium text-foreground text-sm">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl border border-primary/30 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-bold text-primary">Depois</h3>
              </div>
              <div className="space-y-3">
                {features.slice(0, 4).map((item) => (
                  <div key={item.title} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-primary/70 flex-shrink-0" />
                    <p className="font-medium text-foreground text-sm">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona — Timeline Vertical */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Simples de começar
            </h2>
            <p className="text-muted-foreground text-lg">
              Em 3 passos seu time já está organizado.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-primary/20" />

              <div className="space-y-12">
                {steps.map((step, i) => (
                  <div key={step.number} className="flex gap-6 relative">
                    {/* Circle with number */}
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-primary flex-shrink-0 relative z-10">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <div className="flex items-center gap-2 mb-1">
                        <step.icon className="w-4 h-4 text-primary" />
                        <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 md:py-28 bg-background text-foreground">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Resultados que fazem diferença
            </h2>
            <p className="text-muted-foreground text-lg">
              Times que usam o sistema ganham tempo e eliminam dor de cabeça.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {results.map((item, i) => (
              <div
                key={item.label}
                className="text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.15 * i}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {item.metric}
                </p>
                <p className="text-muted-foreground text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O Case */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                Case
              </Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Baba do Bacana
              </h2>
            </div>

            {/* Setor 1 — Problema */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-16">
              <div className="w-full max-w-[240px] md:max-w-[260px] flex-shrink-0">
                <div className="aspect-[9/16] rounded-xl overflow-hidden shadow-card border border-border">
                  <img src={baba4} alt="Baba do Bacana — tela do problema" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-full bg-destructive/15 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Problema</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">•</span>Presença confirmada por mensagens no WhatsApp, sem controle real</li>
                  <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">•</span>Cobranças feitas manualmente, sem registro ou histórico</li>
                  <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">•</span>Informações perdidas entre memes e áudios do grupo</li>
                  <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">•</span>Organizador gastando horas toda semana em tarefas repetitivas</li>
                </ul>
              </div>
            </div>

            {/* Setor 2 — Solução */}
            <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center mb-16">
              <div className="w-full max-w-[240px] md:max-w-[260px] flex-shrink-0">
                <div className="aspect-[9/16] rounded-xl overflow-hidden shadow-card border border-border">
                  <img src={baba2} alt="Baba do Bacana — tela da solução" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Solução</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Web app acessível pelo celular, sem precisar baixar nada</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Cada membro confirma presença direto no sistema</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Envio de comprovante de pagamento com um clique</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Tudo centralizado e organizado automaticamente</li>
                </ul>
              </div>
            </div>

            {/* Setor 3 — Funcionalidades */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-16">
              <div className="w-full max-w-[240px] md:max-w-[260px] flex-shrink-0">
                <div className="aspect-[9/16] rounded-xl overflow-hidden shadow-card border border-border">
                  <img src={baba3} alt="Baba do Bacana — tela de funcionalidades" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                    <ClipboardList className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Funcionalidades</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Lista de presença automática por jogo</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Controle de inadimplência com alertas</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Painel exclusivo para a diretoria do time</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Histórico completo de partidas e pagamentos</li>
                </ul>
              </div>
            </div>

            {/* Setor 4 — Impacto */}
            <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center mb-10">
              <div className="w-full max-w-[240px] md:max-w-[260px] flex-shrink-0">
                <div className="aspect-[9/16] rounded-xl overflow-hidden shadow-card border border-border">
                  <img src={baba1} alt="Baba do Bacana — tela de impacto" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Impacto</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>80% menos mensagens no grupo de WhatsApp</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>5 horas por mês economizadas em retrabalho</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>100% de visibilidade financeira para a diretoria</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">•</span>Membros mais engajados e organizados</li>
                </ul>
              </div>
            </div>

            {/* Botão Ver Projeto */}
            <div className="flex justify-center">
              <Button
                variant="outline"
                className="rounded-full px-8 py-5 text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                asChild
              >
                <a href="https://babadobacana.lovable.app/" target="_blank" rel="noopener noreferrer">
                  Ver projeto
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contato embutido */}
      <Contact />

      <Footer />

      {/* Botão Voltar ao Topo */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full gradient-primary text-primary-foreground shadow-primary flex items-center justify-center transition-all duration-300 hover:opacity-90 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
