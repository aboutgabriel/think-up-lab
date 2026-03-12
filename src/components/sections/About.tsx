import { Lightbulb, Rocket, Handshake } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Soluções sob medida",
    description: "Cada projeto é pensado para resolver problemas reais do seu negócio, sem fórmulas prontas.",
  },
  {
    icon: Rocket,
    title: "Agilidade na entrega",
    description: "Processos enxutos para colocar sua ideia no ar com rapidez, sem abrir mão da qualidade.",
  },
  {
    icon: Handshake,
    title: "Parceria de verdade",
    description: "Acompanhamos seu crescimento e evoluímos juntos, com suporte próximo e contínuo.",
  },
];

const About = () => {
  return (
    <section id="quem-somos" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-accent border border-primary/30 text-accent-foreground text-sm font-medium mb-4">
            Quem somos
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tecnologia que{" "}
            <span className="text-gradient">resolve de verdade</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A thinkup LAB nasceu para transformar ideias em soluções digitais práticas. 
            Somos especializados em criar sistemas web e aplicativos que simplificam a rotina 
            de pequenos e médios negócios — do planejamento ao lançamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((item) => (
            <div
              key={item.title}
              className="text-center p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-primary">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
