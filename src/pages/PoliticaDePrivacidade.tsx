import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const PoliticaDePrivacidade = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-20">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Política de Privacidade</h1>
          <p className="text-muted-foreground mb-10">Última atualização: 12 de março de 2026</p>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Introdução</h2>
              <p>A <strong>thinkup LAB</strong> está comprometida com a proteção dos dados pessoais de seus usuários, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018). Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Dados Coletados</h2>
              <p>Coletamos os seguintes dados pessoais:</p>
              <h3 className="text-lg font-medium text-foreground mt-4 mb-2">2.1 Formulário de Contato</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nome</li>
                <li>Nome da empresa (opcional)</li>
                <li>E-mail ou telefone de contato</li>
                <li>Descrição da necessidade/problema</li>
              </ul>
              <h3 className="text-lg font-medium text-foreground mt-4 mb-2">2.2 Cookies e Analytics</h3>
              <p>Utilizamos cookies e ferramentas de análise (como Google Analytics) para coletar dados de navegação, incluindo:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Endereço IP (anonimizado)</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Origem do tráfego (referência)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Finalidade do Tratamento</h2>
              <p>Os dados pessoais são tratados para as seguintes finalidades:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Responder a solicitações de contato e orçamento</li>
                <li>Analisar o uso do site para melhorar a experiência do usuário</li>
                <li>Enviar comunicações relevantes sobre nossos serviços (mediante consentimento)</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Base Legal</h2>
              <p>O tratamento de dados pessoais é realizado com base em:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Consentimento</strong> — ao preencher o formulário de contato ou aceitar cookies</li>
                <li><strong>Legítimo interesse</strong> — para análise de métricas e melhoria dos serviços</li>
                <li><strong>Execução de contrato</strong> — quando necessário para a prestação dos serviços contratados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Compartilhamento com Terceiros</h2>
              <p>Podemos compartilhar dados com os seguintes terceiros, exclusivamente para as finalidades descritas:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Google Analytics</strong> — análise de tráfego e comportamento de navegação</li>
                <li><strong>Provedores de e-mail</strong> — envio de respostas às solicitações de contato</li>
              </ul>
              <p className="mt-2">Não vendemos, alugamos ou compartilhamos dados pessoais com terceiros para fins de marketing.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Direitos do Titular</h2>
              <p>Conforme a LGPD, você tem os seguintes direitos sobre seus dados pessoais:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Acesso</strong> — solicitar informações sobre o tratamento de seus dados</li>
                <li><strong>Correção</strong> — solicitar a correção de dados incompletos ou desatualizados</li>
                <li><strong>Exclusão</strong> — solicitar a eliminação de dados desnecessários ou tratados em desconformidade</li>
                <li><strong>Portabilidade</strong> — solicitar a transferência de seus dados a outro fornecedor</li>
                <li><strong>Revogação do consentimento</strong> — retirar seu consentimento a qualquer momento</li>
                <li><strong>Oposição</strong> — opor-se ao tratamento realizado com base em legítimo interesse</li>
              </ul>
              <p className="mt-2">Para exercer seus direitos, entre em contato pelo e-mail indicado na seção 9.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Retenção de Dados</h2>
              <p>Os dados pessoais coletados pelo formulário de contato são retidos pelo tempo necessário para atender à finalidade para a qual foram coletados, ou conforme exigido pela legislação aplicável. Dados de analytics são retidos conforme as políticas do Google Analytics.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Cookies</h2>
              <p>Utilizamos cookies para melhorar sua experiência de navegação. Os cookies podem ser:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Essenciais</strong> — necessários para o funcionamento básico do site</li>
                <li><strong>Analíticos</strong> — utilizados para entender como os visitantes interagem com o site</li>
              </ul>
              <p className="mt-2">Você pode gerenciar as preferências de cookies nas configurações do seu navegador. A desativação de cookies pode afetar a funcionalidade do site.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Contato do Responsável</h2>
              <p>Para questões relacionadas à privacidade e proteção de dados, entre em contato com o responsável:</p>
              <div className="mt-3 p-4 bg-secondary/50 rounded-lg">
                <p><strong>thinkup LAB</strong></p>
                <p>E-mail: <a href="mailto:thiuplab@gmail.com" className="text-primary hover:underline">thiuplab@gmail.com</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Alterações nesta Política</h2>
              <p>Esta Política de Privacidade pode ser atualizada periodicamente. Quaisquer alterações serão publicadas nesta página com a data de atualização revisada. Recomendamos que consulte esta página regularmente.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaDePrivacidade;
