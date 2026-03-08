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
  {
    icon: XCircle,
    title: "Presença pelo WhatsApp",
    description: "Lista de confirmados se perde entre memes, áudios e discussões infinitas.",
  },
  {
    icon: CreditCard,
    title: "Cobranças manuais",
    description: "Cobrar mensalidade um por um, sem controle de quem já pagou.",
  },
  {
    icon: MessageSquare,
    title: "Confusão com pagamentos",
    description: "Comprovantes misturados no chat, impossível rastrear depois.",
  },
  {
    icon: Clock,
    title: "Sem histórico",
    description: "Nenhum registro de presenças, pagamentos ou membros ao longo do tempo.",
  },
];

const features = [
  {
    icon: CheckCircle,
    title: "Confirmação de presença",
    description: "Cada jogador confirma ou recusa direto no sistema, sem poluir o grupo.",
  },
  {
    icon: CreditCard,
    title: "Comprovante de pagamento",
    description: "Envio e validação de comprovantes de forma organizada e rastreável.",
  },
  {
    icon: Shield,
    title: "Controle de inadimplência",
    description: "Veja quem está em dia e quem está devendo — tudo em tempo real.",
  },
  {
    icon: Users,
    title: "Registro de membros",
    description: "Cadastro completo com dados de cada jogador do time.",
  },
  {
    icon: LayoutDashboard,
    title: "Painel da diretoria",
    description: "Visão geral de tudo: presenças, pagamentos, membros e mais.",
  },
];

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Cadastre seu time",
    description: "Preencha as informações do seu grupo esportivo e personalize seu espaço.",
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Convide os membros",
    description: "Compartilhe o link e cada jogador cria sua conta em segundos.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Gerencie tudo em um só lugar",
    description: "Presenças, pagamentos e comunicação — tudo centralizado.",
  },
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

      {/* Hero */}
      <section className="bg-navy text-primary-foreground pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-sm font-medium text-primary-light mb-6">
                ⚽ Para times e babas
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Seu time merece mais{" "}
                <span className="text-gradient">organização</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-lg leading-relaxed">
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

            <div className="w-full max-w-[260px] lg:max-w-[300px] mx-auto lg:mx-0">
              <ProjectImageCarousel
                images={[baba1, baba2, baba3]}
                alt="Baba do Bacana"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Cansado dessa rotina?
            </h2>
            <p className="text-muted-foreground text-lg">
              Se você organiza um baba ou time amador, provavelmente vive esses
              problemas toda semana.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {problems.map((item, i) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl border border-destructive/20 p-6 shadow-card opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              A solução completa para seu time
            </h2>
            <p className="text-muted-foreground text-lg">
              Tudo que você precisa para organizar seu grupo esportivo em um só
              sistema.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className="bg-card rounded-2xl border border-primary/20 p-7 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className="w-12 h-12 rounded-xl border border-primary/30 bg-accent flex items-center justify-center mb-5">
                  <feat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feat.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative bg-card rounded-2xl border border-primary/20 p-8 shadow-card hover:shadow-primary transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.15 * i}s` }}
              >
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground shadow-primary">
                  {step.number}
                </div>
                <div className="w-14 h-14 rounded-xl border border-primary/30 bg-accent flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
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

      {/* O Case */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                📋 Case completo
              </Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                O Case: Baba do Bacana
              </h2>
            </div>

            <div className="space-y-8">
              {/* O Problema */}
              <div className="bg-card rounded-2xl border border-destructive/20 p-8 shadow-card">
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" />
                  O Problema
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dificuldade em controlar presença e pagamento de um grupo que joga futebol semanalmente.
                </p>
              </div>

              {/* A Solução */}
              <div className="bg-card rounded-2xl border border-primary/20 p-8 shadow-card">
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  A Solução
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Web app onde membros confirmam presença nos próximos jogos e enviam comprovantes de pagamento, facilitando o acompanhamento da diretoria.
                </p>
              </div>

              {/* Funcionalidades */}
              <div className="bg-card rounded-2xl border border-primary/20 p-8 shadow-card">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-primary" />
                  Funcionalidades
                </h3>
                <ul className="space-y-3">
                  {[
                    "Confirmação de presença",
                    "Envio de comprovante de pagamento",
                    "Registro organizado de membros",
                    "Controle de inadimplência",
                  ].map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impacto */}
              <div className="bg-card rounded-2xl border border-primary/20 p-8 shadow-card">
                <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Impacto Gerado
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    "Menos mensagens no WhatsApp",
                    "Menos retrabalho manual",
                    "Mais organização e previsibilidade",
                  ].map((impact) => (
                    <div key={impact} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {impact}
                    </div>
                  ))}
                </div>
              </div>

              {/* Ver projeto */}
              <div className="text-center pt-4">
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-6 text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
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
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Quer esse sistema para o seu time?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Entre em contato e vamos montar a solução ideal para o seu grupo
              esportivo.
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
