import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import CtaLink from './CtaLink.jsx';
import { implementation } from '../data/content.js';

export default function Implementation() {
  return (
    <section className="section impl" aria-labelledby="impl-title">
      <div className="container">
        <div className="impl__head">
          <SectionHeading
            id="impl-title"
            eyebrow="Implementação"
            title="Uma solução pensada para a realidade do seu negócio."
            intro="Esta é a nossa proposta de metodologia. Cada etapa é ajustada ao tamanho e ao momento da sua empresa."
          />
          <Reveal className="impl__cta">
            <CtaLink variant="outline" message="Olá, NextLevel! Quero agendar uma conversa inicial sobre automação do atendimento.">
              Agendar conversa inicial
            </CtaLink>
          </Reveal>
        </div>

        <ol className="levels">
          {implementation.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 80}
              className="levels__step"
              style={{ '--lvl': i }}
            >
              <span className="levels__num">Nível {i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
