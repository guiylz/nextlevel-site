import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { differentials } from '../data/content.js';

export default function Differentials() {
  return (
    <section className="section diff" aria-labelledby="diff-title">
      <div className="container diff__grid">
        <Reveal className="diff__statement">
          <p className="eyebrow">Por que a NextLevel</p>
          <h2 id="diff-title">
            Não é apenas automatizar mensagens.{' '}
            <span className="text-accent">É melhorar a operação.</span>
          </h2>
          <p>
            Um chatbot genérico responde perguntas. Um projeto bem implementado muda a forma como a
            sua equipe trabalha, e é nisso que a gente se concentra.
          </p>
        </Reveal>

        <ul className="diff__list">
          {differentials.map((d, i) => (
            <Reveal as="li" key={d.title} delay={i * 60} className="diff__item">
              <span className="diff__icon">
                <Icon name={d.icon} size={20} />
              </span>
              <div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
