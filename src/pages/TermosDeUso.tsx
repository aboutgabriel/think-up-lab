import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const TermosDeUso = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-20">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Termos de Uso</h1>
          <p className="text-muted-foreground mb-10">Última atualização: 12 de março de 2026</p>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Objeto e Aceitação</h2>
              <p>Estes Termos de Uso regulam o acesso e a utilização do site e dos serviços oferecidos pela <strong>ThinkUp Lab</strong>. Ao acessar ou utilizar nosso site, você concorda integralmente com estes termos. Caso não concorde, recomendamos que não utilize nossos serviços.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Descrição dos Serviços</h2>
              <p>A ThinkUp Lab desenvolve sistemas web sob medida para pequenas e médias empresas (PMEs), transformando processos manuais e planilhas em soluções digitais eficientes. Os serviços incluem, mas não se limitam a:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Desenvolvimento de sistemas de gestão personalizados</li>
                <li>Digitalização de processos empresariais</li>
                <li>Consultoria em transformação digital</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Propriedade Intelectual</h2>
              <p>Todo o conteúdo presente neste site — incluindo textos, imagens, logotipos, layouts e código-fonte — é de propriedade da ThinkUp Lab ou de seus licenciadores, sendo protegido pela legislação brasileira de direitos autorais e propriedade intelectual. É vedada a reprodução, distribuição ou modificação sem autorização prévia por escrito.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Responsabilidades do Usuário</h2>
              <p>O usuário compromete-se a:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Fornecer informações verdadeiras e atualizadas ao utilizar formulários de contato</li>
                <li>Não utilizar o site para fins ilegais ou não autorizados</li>
                <li>Não tentar acessar áreas restritas ou comprometer a segurança do site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Limitação de Responsabilidade</h2>
              <p>A ThinkUp Lab não se responsabiliza por danos diretos ou indiretos resultantes do uso ou da impossibilidade de uso do site. O site é disponibilizado "como está", sem garantias de disponibilidade ininterrupta ou ausência de erros.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Modificações dos Termos</h2>
              <p>A ThinkUp Lab reserva-se o direito de alterar estes Termos de Uso a qualquer momento, sem aviso prévio. As alterações entram em vigor imediatamente após a publicação nesta página. Recomendamos que revise periodicamente este documento.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Foro e Legislação Aplicável</h2>
              <p>Estes Termos de Uso são regidos pela legislação da República Federativa do Brasil. Fica eleito o foro da comarca da sede da ThinkUp Lab para dirimir quaisquer controvérsias decorrentes deste documento, com renúncia expressa a qualquer outro, por mais privilegiado que seja.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Contato</h2>
              <p>Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail: <a href="mailto:thiuplab@gmail.com" className="text-primary hover:underline">thiuplab@gmail.com</a>.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermosDeUso;
