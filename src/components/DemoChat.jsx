import { useCallback, useEffect, useRef, useState } from 'react';
import { BedDouble, CornerDownRight, Info, RotateCcw, UtensilsCrossed, Wine } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { demoScripts } from '../data/content.js';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js';

const ORDER = ['restaurante', 'hotel', 'bar'];
const TAB_ICONS = { restaurante: UtensilsCrossed, hotel: BedDouble, bar: Wine };

export default function DemoChat() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState('restaurante');
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const [run, setRun] = useState(0);
  const sectionRef = useRef(null);
  const logRef = useRef(null);
  const tabsRef = useRef([]);

  const script = demoScripts[active];
  const total = script.messages.length;

  // Começa a tocar quando a seção aparece na tela
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !('IntersectionObserver' in window)) {
      setStarted(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Reprodução da conversa
  useEffect(() => {
    if (!started) return;
    if (reduced) {
      setCount(total);
      setTyping(false);
      return;
    }
    setCount(0);
    const timers = [];
    let t = 400;
    script.messages.forEach((m, i) => {
      if (m.from === 'ai') {
        timers.push(setTimeout(() => setTyping(true), t));
        t += 1100;
      }
      timers.push(
        setTimeout(() => {
          setTyping(false);
          setCount(i + 1);
        }, t)
      );
      t += m.from === 'client' ? 900 : 1200;
    });
    return () => timers.forEach(clearTimeout);
  }, [active, started, reduced, run, script, total]);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTo({ top: log.scrollHeight, behavior: reduced ? 'auto' : 'smooth' });
  }, [count, typing, reduced]);

  const selectTab = useCallback((key) => {
    setActive(key);
    setRun((r) => r + 1);
  }, []);

  const onTabKey = (e, idx) => {
    let next = null;
    if (e.key === 'ArrowRight') next = (idx + 1) % ORDER.length;
    if (e.key === 'ArrowLeft') next = (idx - 1 + ORDER.length) % ORDER.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = ORDER.length - 1;
    if (next !== null) {
      e.preventDefault();
      selectTab(ORDER[next]);
      tabsRef.current[next]?.focus();
    }
  };

  const shown = script.messages.slice(0, count);
  const progress = count / total;
  const handedOff = shown.some((m) => m.from === 'system');

  const insights = [
    { label: 'Canal', value: script.channel, on: count >= 1 },
    { label: 'Intenção identificada', value: script.intent, on: count >= 2 || typing },
    { label: 'Fonte consultada', value: script.source, on: count >= 2 },
    {
      label: 'Resultado',
      value: script.outcome,
      on: count >= total,
      highlight: true,
    },
  ];

  return (
    <section
      id="demonstracao"
      ref={sectionRef}
      className="section demo"
      aria-labelledby="demo-title"
    >
      <div className="container">
        <SectionHeading
          id="demo-title"
          eyebrow="Demonstração"
          title="Veja uma conversa acontecendo."
          intro="Escolha um segmento e acompanhe um exemplo de atendimento automatizado, com o que acontece nos bastidores de cada mensagem."
          align="center"
        />

        <Reveal className="demo__frame">
          <div className="demo__tabs" role="tablist" aria-label="Escolha um exemplo">
            {ORDER.map((key, idx) => {
              const TabIcon = TAB_ICONS[key];
              const selected = key === active;
              return (
                <button
                  key={key}
                  ref={(el) => (tabsRef.current[idx] = el)}
                  type="button"
                  role="tab"
                  id={`demo-tab-${key}`}
                  aria-selected={selected}
                  aria-controls="demo-panel"
                  tabIndex={selected ? 0 : -1}
                  className={`demo__tab ${selected ? 'is-active' : ''}`}
                  onClick={() => selectTab(key)}
                  onKeyDown={(e) => onTabKey(e, idx)}
                >
                  <TabIcon size={16} aria-hidden="true" />
                  {demoScripts[key].label}
                </button>
              );
            })}
          </div>

          <div
            id="demo-panel"
            role="tabpanel"
            aria-labelledby={`demo-tab-${active}`}
            className="demo__body"
          >
            <div className="phone">
              <div className="phone__head">
                <span className="phone__avatar" aria-hidden="true">
                  {script.business[0]}
                </span>
                <div>
                  <p className="phone__name">{script.business}</p>
                  <p className="phone__sub">Assistente com IA · demonstração</p>
                </div>
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => setRun((r) => r + 1)}
                  aria-label="Reiniciar demonstração"
                  title="Reiniciar"
                >
                  <RotateCcw size={16} aria-hidden="true" />
                </button>
              </div>

              <div className="phone__log" ref={logRef} aria-live="polite" aria-relevant="additions">
                <p className="phone__day">Hoje</p>
                {shown.map((m, i) =>
                  m.from === 'system' ? (
                    <p key={`${active}-${i}`} className="sys-msg">
                      <CornerDownRight size={14} aria-hidden="true" /> {m.text}
                    </p>
                  ) : (
                    <div key={`${active}-${i}`} className={`msg msg--${m.from}`}>
                      <span className="sr-only">{m.from === 'client' ? 'Cliente: ' : 'Assistente: '}</span>
                      {m.text}
                    </div>
                  )
                )}
                {typing && (
                  <div className="msg msg--ai msg--typing" aria-label="Assistente digitando">
                    <span /> <span /> <span />
                  </div>
                )}
              </div>

              <div className="phone__input" aria-hidden="true">
                <span>Conversa simulada nesta página</span>
              </div>
            </div>

            <aside className="insights" aria-label="Bastidores do atendimento">
              <p className="insights__title">Bastidores</p>
              <div className="insights__bar" aria-hidden="true">
                <span style={{ transform: `scaleX(${progress})` }} />
              </div>
              <dl>
                {insights.map((it) => (
                  <div
                    key={it.label}
                    className={`insight ${it.on ? 'is-on' : ''} ${it.highlight ? 'insight--result' : ''}`}
                  >
                    <dt>{it.label}</dt>
                    <dd>{it.on ? it.value : '—'}</dd>
                  </div>
                ))}
              </dl>
              <p className={`insights__human ${handedOff ? 'is-on' : ''}`}>
                {script.handoff
                  ? 'Neste exemplo, a equipe assume a etapa final.'
                  : 'Neste exemplo, a automação resolve sozinha.'}
              </p>
            </aside>
          </div>

          <p className="demo__disclaimer">
            <Info size={14} aria-hidden="true" />
            Conversa demonstrativa, simulada dentro desta página. Não há conexão com WhatsApp ou
            Instagram, e todos os nomes e informações são fictícios.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
