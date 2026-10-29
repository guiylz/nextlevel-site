import { Info } from 'lucide-react';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { steps } from '../data/content.js';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section how" aria-labelledby="how-title">
      <div className="container">
        <SectionHeading
          id="how-title"
          eyebrow="Como funciona"
          title="Da primeira mensagem à solução. Com inteligência em cada etapa."
          intro="Sem complicação para o seu cliente: ele conversa como sempre conversou. Por trás, cada mensagem segue um caminho pensado para o seu negócio."
        />

        <Reveal as="ol" className="flow">
          {steps.map((s, i) => (
            <li key={s.title} className="flow__step" style={{ '--i': i }}>
              <div className="flow__marker">
                <span className="flow__icon">
                  <Icon name={s.icon} size={22} />
                </span>
              </div>
              <span className="flow__num" aria-hidden="true">
                Etapa {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </Reveal>

        <Reveal className="callout">
          <Info size={18} aria-hidden="true" />
          <p>
            Os fluxos dependem das informações, integrações, permissões e regras configuradas para
            cada cliente. A automação só usa o que a sua empresa fornecer e autorizar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
