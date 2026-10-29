import CtaLink from './CtaLink.jsx';
import ContactChannels from './ContactChannels.jsx';
import Reveal from './Reveal.jsx';
import { LogoMark } from './Logo.jsx';
import { getContactHref, siteConfig } from '../data/siteConfig.js';

export default function FinalCTA() {
  const demoHref = getContactHref(
    'Olá, NextLevel! Gostaria de solicitar uma demonstração da automação de atendimento.'
  );

  return (
    <section id="contato" className="section final" aria-labelledby="final-title">
      <div className="container">
        <Reveal className="final__panel">
          <div className="final__art" aria-hidden="true">
            <svg viewBox="0 0 400 400" className="final__rings">
              <circle cx="200" cy="200" r="80" />
              <circle cx="200" cy="200" r="130" />
              <circle cx="200" cy="200" r="180" />
            </svg>
            <LogoMark size={120} className="final__mark" />
          </div>

          <div className="final__content">
            <p className="eyebrow">Vamos conversar</p>
            <h2 id="final-title">
              Leve o atendimento da sua empresa para o <span className="text-accent">próximo nível.</span>
            </h2>
            <p className="final__text">
              Vamos entender a rotina do seu negócio e identificar onde a inteligência artificial
              pode tornar seu atendimento mais eficiente.
            </p>
            <div className="final__actions">
              <CtaLink size="lg">{siteConfig.ctas.final}</CtaLink>
              <CtaLink
                size="lg"
                variant="ghost"
                icon={false}
                href={demoHref === '#contato' ? '#demonstracao' : demoHref}
              >
                {siteConfig.ctas.demo}
              </CtaLink>
            </div>
            <ContactChannels className="final__channels" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
