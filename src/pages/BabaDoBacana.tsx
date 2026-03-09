import { useNavigate } from "react-router-dom";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ProjectImageCarousel from "@/components/ui/ProjectImageCarousel";

import baba1 from "@/assets/baba-bacana-1.jpeg";
import baba2 from "@/assets/baba-bacana-2.jpeg";
import baba3 from "@/assets/baba-bacana-3.jpeg";

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
  { number: "01", icon: ClipboardList, title: "Cadastre seu time" },
  { number: "02", icon: UserPlus, title: "Convide os membros" },
  { number: "03", icon: Settings, title: "Gerencie tudo" },
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
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate("/#contato");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero — texto centralizado sem imagem */}
      <section className="bg-navy text-primary-foreground pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-sm font-medium text-primary-light mb-6">
              ⚽ Para times e babas
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Seu time merece mais{" "}
              <span className="text-gradient">organização</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 leading-relaxed">
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
            {/* Antes */}
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

            {/* Depois */}
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

      {/* Solução — Features em grid sem carrossel */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              A solução completa para seu time
            </h2>
            <p className="text-muted-foreground text-lg">
              Tudo que você precisa para organizar seu grupo esportivo em um só sistema.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="bg-card rounded-xl border border-border p-6 flex flex-col gap-3 shadow-card"
              >
                <div className="w-10 h-10 rounded-lg border border-primary/30 bg-accent flex items-center justify-center flex-shrink-0">
                  <feat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{feat.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona — Timeline */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Simples de começar
            </h2>
            <p className="text-muted-foreground text-lg">
              Em 3 passos seu time já está organizado.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line (desktop only) */}
              <div className="hidden md:block absolute top-7 left-[16.67%] right-[16.67%] h-0.5 bg-primary/20" />

              {steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-primary mb-4 relative z-10">
                    {step.number}
                  </div>
                  <step.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 md:py-28 bg-navy text-primary-foreground">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Resultados que fazem diferença
            </h2>
            <p className="text-primary-foreground/70 text-lg">
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
                  <item.icon className="w-8 h-8 text-primary-light" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {item.metric}
                </p>
                <p className="text-primary-foreground/60 text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O Case — Carrossel + Detalhes lado a lado */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                📋 Case completo
              </Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                O Case: Baba do Bacana
              </h2>
            </div>

            <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
              {/* Layout principal: carrossel + detalhes */}
              <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr]">
                {/* Carrossel */}
                <div className="flex items-center justify-center p-8 lg:border-r border-border bg-secondary/20">
                  <div className="w-full max-w-[180px]">
                    <ProjectImageCarousel
                      images={[baba1, baba2, baba3]}
                      alt="Baba do Bacana — telas do app"
                    />
                  </div>
                </div>

                {/* Detalhes */}
                <div className="flex flex-col divide-y divide-border">
                  {/* Problema & Solução */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <XCircle className="w-5 h-5 text-destructive" />
                        <h3 className="font-bold text-foreground">O Problema</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Dificuldade em controlar presença e pagamento de um grupo que joga futebol semanalmente.
                      </p>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <h3 className="font-bold text-foreground">A Solução</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Web app onde membros confirmam presença nos próximos jogos e enviam comprovantes de pagamento.
                      </p>
                    </div>
                  </div>

                  {/* Funcionalidades & Impacto */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <ClipboardList className="w-5 h-5 text-primary" />
                        <h3 className="font-bold text-foreground">Funcionalidades</h3>
                      </div>
                      <ul className="space-y-2">
                        {["Confirmação de presença", "Envio de comprovante de pagamento", "Registro de membros", "Controle de inadimplência"].map((feat) => (
                          <li key={feat} className="flex items-center gap-2 text-muted-foreground text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <h3 className="font-bold text-foreground">Impacto Gerado</h3>
                      </div>
                      <ul className="space-y-2">
                        {["Menos mensagens no WhatsApp", "Menos retrabalho manual", "Mais organização e previsibilidade"].map((impact) => (
                          <li key={impact} className="flex items-center gap-2 text-muted-foreground text-sm">
                            <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                            {impact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-border p-6 text-center bg-secondary/30">
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
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Quer esse sistema para o seu time?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Entre em contato e vamos montar a solução ideal para o seu grupo esportivo.
            </p>
            <Button
              onClick={scrollToContact}
              className="rounded-full px-10 py-6 text-base gradient-primary text-primary-foreground shadow-primary hover:opacity-90 transition-opacity"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
