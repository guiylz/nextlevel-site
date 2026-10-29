import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { solutions } from '../data/content.js';

function Detail({ type }) {
  switch (type) {
    case 'intent':
      return (
        <div className="detail detail--intent">
          <span className="detail__msg">"tem mesa sábado?"</span>
          <span className="detail__arrow" />
          <span className="chip chip--accent">reserva</span>
          <span className="chip">sábado</span>
        </div>
      );
    case 'bubbles':
      return (
        <div className="detail detail--bubbles">
          <span className="mini-bubble mini-bubble--in" />
          <span className="mini-bubble mini-bubble--out" />
          <span className="mini-bubble mini-bubble--in mini-bubble--short" />
        </div>
      );
    case 'inbox':
      return (
        <div className="detail detail--inbox">
          {['Dúvida', 'Reserva', 'Parceria'].map((t, i) => (
            <span key={t} style={{ '--i': i }}>
              <i /> {t}
            </span>
          ))}
        </div>
      );
    case 'funnel':
      return (
        <div className="detail detail--funnel">
          <span style={{ '--w': '100%' }} />
          <span style={{ '--w': '72%' }} />
          <span style={{ '--w': '44%' }} />
        </div>
      );
    case 'nodes':
      return (
        <svg className="detail detail--nodes" viewBox="0 0 200 60">
          <path d="M20 30 H70 M90 30 C110 30 110 12 130 12 H180 M90 30 C110 30 110 48 130 48 H180" />
          <circle cx="20" cy="30" r="6" />
          <rect x="70" y="20" width="20" height="20" rx="6" />
          <circle cx="180" cy="12" r="5" />
          <circle cx="180" cy="48" r="5" />
        </svg>
      );
    case 'handoff':
      return (
        <div className="detail detail--handoff">
          <span className="handoff__node handoff__node--ai">IA</span>
          <span className="handoff__line" />
          <span className="handoff__node handoff__node--human">Equipe</span>
        </div>
      );
    default:
      return null;
  }
}

export default function Solutions() {
  return (
    <section id="solucoes" className="section solutions" aria-labelledby="solutions-title">
      <div className="container">
        <SectionHeading
          id="solutions-title"
          eyebrow="Soluções"
          title="Automação inteligente para o dia a dia da sua empresa."
          intro="Cada projeto combina os módulos que fazem sentido para o seu negócio. O escopo final depende da configuração, dos canais e das integrações definidas com você."
        />

        <div className="bento">
          {solutions.map((s, i) => (
            <Reveal as="article" key={s.id} delay={i * 70} className={`bento__card bento__card--${s.id}`}>
              <div className="bento__top">
                <span className="icon-tile">
                  <Icon name={s.icon} />
                </span>
                <span className="bento__tag">{s.tag}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <div className="bento__detail" aria-hidden="true">
                <Detail type={s.detail} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
