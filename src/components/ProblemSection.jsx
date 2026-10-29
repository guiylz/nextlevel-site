import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { problems } from '../data/content.js';

const inbox = [
  { who: 'Cliente', text: 'Qual o horário de vocês hoje?', time: '23:12' },
  { who: 'Cliente', text: 'Ainda tem vaga para o feriado?', time: '07:58' },
  { who: 'Cliente', text: 'Vocês aceitam pet?', time: '12:03' },
  { who: 'Cliente', text: 'Me manda o cardápio, por favor', time: '12:04' },
  { who: 'Cliente', text: 'Qual o endereço certinho?', time: '12:04' },
];

export default function ProblemSection() {
  return (
    <section className="section problem" aria-labelledby="problem-title">
      <div className="container problem__grid">
        <div className="problem__intro">
          <Reveal>
            <p className="eyebrow">O problema</p>
            <h2 id="problem-title">
              Seu negócio não deveria perder oportunidades por{' '}
              <span className="underline-accent">falta de resposta.</span>
            </h2>
            <p className="problem__lead">
              Quem trabalha com hospitalidade conhece a cena: o celular não para, a equipe está
              ocupada com quem está presente, e as mensagens se acumulam.
            </p>
          </Reveal>

          <Reveal delay={120} className="inbox" aria-hidden="true">
            <div className="inbox__head">
              <span>Mensagens</span>
              <span className="inbox__count">não respondidas</span>
            </div>
            <ul>
              {inbox.map((m, i) => (
                <li key={i} style={{ '--i': i }}>
                  <span className="inbox__avatar">{m.who[0]}</span>
                  <span className="inbox__text">{m.text}</span>
                  <span className="inbox__time">{m.time}</span>
                </li>
              ))}
            </ul>
            <p className="inbox__note">Exemplo ilustrativo</p>
          </Reveal>
        </div>

        <ol className="problem__list">
          {problems.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i * 60} className="problem__item">
              <span className="problem__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      <div className="container">
        <Reveal className="problem__answer">
          <div className="problem__answer-mark" aria-hidden="true">
            <ArrowRight size={22} />
          </div>
          <p>
            A NextLevel organiza e automatiza parte dessas interações: o que é recorrente recebe
            resposta imediata, e o que precisa de uma pessoa chega à equipe certa, já com contexto.
          </p>
          <a href="#solucoes" className="link-arrow">
            Conheça nossas soluções <ArrowRight size={16} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
