import { useEffect, useState } from 'react';
import { ArrowDown, Check, CornerDownRight, ScanSearch, UserRound } from 'lucide-react';
import CtaLink from './CtaLink.jsx';
import { siteConfig } from '../data/siteConfig.js';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js';

const PIPELINE = ['Recebida', 'Interpretada', 'Respondida', 'Encaminhada'];
const LAST_STAGE = 5;

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (reduced) {
      setStage(LAST_STAGE);
      return;
    }
    let s = 0;
    setStage(0);
    const id = window.setInterval(() => {
      if (document.hidden) return;
      s = s >= LAST_STAGE + 2 ? 0 : s + 1; // segura o estado final por alguns ciclos
      setStage(Math.min(s, LAST_STAGE));
    }, 1500);
    return () => window.clearInterval(id);
  }, [reduced]);

  const pipeIndex = stage <= 1 ? 0 : stage === 2 ? 1 : stage === 3 ? 2 : 3;

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <svg className="hero__steps" viewBox="0 0 800 400" preserveAspectRatio="none">
          <path d="M0 380 H160 V300 H340 V210 H520 V120 H700 V40 H800" />
        </svg>
        <div className="hero__glow" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__kicker">
            <span className="pulse-dot" aria-hidden="true" />
            Automação de atendimento com IA para WhatsApp e Instagram
          </p>

          <h1 id="hero-title" className="hero__title">
            Seu atendimento no <span className="text-accent">próximo nível.</span>
          </h1>

          <p className="hero__lead">
            Automatize o atendimento da sua empresa com inteligência artificial. Responda clientes
            pelo WhatsApp e Instagram, organize solicitações e tenha mais tempo para fazer seu
            negócio crescer.
          </p>

          <div className="hero__actions">
            <CtaLink size="lg">{siteConfig.ctas.primary}</CtaLink>
            <a href="#como-funciona" className="btn btn--ghost btn--lg">
              <span>{siteConfig.ctas.secondary}</span>
              <ArrowDown className="btn__icon btn__icon--down" size={18} aria-hidden="true" />
            </a>
          </div>

          <p className="hero__support">
            <span className="hero__support-line" aria-hidden="true" />
            Automação inteligente, adaptada à rotina do seu negócio.
          </p>
        </div>

        <div className="hero__visual">
          <figure className="stage" aria-label="Ilustração de uma conversa atendida por automação com IA">
            <div className="stage__panel">
              <div className="stage__top">
                <div className="stage__avatar" aria-hidden="true">C</div>
                <div>
                  <p className="stage__name">Cliente (exemplo)</p>
                  <p className="stage__status">
                    <span className="status-dot" aria-hidden="true" /> conversa em andamento
                  </p>
                </div>
                <span className="stage__badge">Ilustrativo</span>
              </div>

              <ol className="stage__pipeline" aria-hidden="true">
                {PIPELINE.map((p, i) => (
                  <li
                    key={p}
                    className={i < pipeIndex ? 'is-done' : i === pipeIndex ? 'is-current' : ''}
                  >
                    <span className="stage__pipe-dot" />
                    {p}
                  </li>
                ))}
              </ol>

              <div className="stage__chat" aria-hidden="true">
                <div className="bubble bubble--client is-in">
                  Oi! Vocês têm mesa para 6 pessoas no sábado à noite?
                  <span className="bubble__time">20:41</span>
                </div>

                {stage === 1 && (
                  <div className="bubble bubble--typing is-in">
                    <span /> <span /> <span />
                  </div>
                )}

                {stage >= 3 && (
                  <div className="bubble bubble--ai is-in">
                    Oi! Recebi seu pedido de reserva para sábado, 6 pessoas. Vou passar para a
                    equipe confirmar a disponibilidade.
                    <span className="bubble__time">
                      20:41 <Check size={12} />
                    </span>
                  </div>
                )}

                {stage >= 4 && (
                  <div className="stage__handoff is-in">
                    <CornerDownRight size={14} /> Encaminhado para a equipe
                  </div>
                )}
              </div>
            </div>

            <div className={`float-card float-card--intent ${stage >= 2 ? 'is-on' : ''}`} aria-hidden="true">
              <span className="float-card__icon"><ScanSearch size={16} /></span>
              <div>
                <p className="float-card__label">Intenção identificada</p>
                <p className="float-card__value">Pedido de reserva</p>
              </div>
            </div>

            <div className={`float-card float-card--data ${stage >= 2 ? 'is-on' : ''}`} aria-hidden="true">
              <p className="float-card__label">Dados extraídos</p>
              <div className="chips">
                <span className="chip">sábado</span>
                <span className="chip">noite</span>
                <span className="chip">6 pessoas</span>
              </div>
            </div>

            <div className={`float-card float-card--team ${stage >= 4 ? 'is-on' : ''}`} aria-hidden="true">
              <span className="float-card__icon float-card__icon--team"><UserRound size={16} /></span>
              <div>
                <p className="float-card__label">Equipe notificada</p>
                <p className="float-card__value">Confirmar disponibilidade</p>
              </div>
            </div>

            <figcaption className="stage__caption">
              Representação conceitual. Nomes e mensagens são fictícios.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
