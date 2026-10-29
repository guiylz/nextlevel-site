import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from './Reveal.jsx';
import CtaLink from './CtaLink.jsx';
import { faq } from '../data/content.js';

function Item({ q, a, open, onToggle, baseId }) {
  const btnId = `${baseId}-btn`;
  const panelId = `${baseId}-panel`;
  return (
    <div className={`faq__item ${open ? 'is-open' : ''}`}>
      <h3>
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="faq__q"
        >
          <span>{q}</span>
          <span className="faq__icon" aria-hidden="true">
            <Plus size={18} />
          </span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={btnId} className="faq__a">
        <div>
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const uid = useId();

  return (
    <section id="faq" className="section faq" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <Reveal className="faq__side">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2 id="faq-title">Antes de conversar, talvez você queira saber.</h2>
          <p>
            Não encontrou o que procurava? Conte sua dúvida para a gente e respondemos pensando no
            seu negócio.
          </p>
          <CtaLink variant="ghost" message="Olá, NextLevel! Tenho uma dúvida sobre a automação de atendimento.">
            Tirar uma dúvida
          </CtaLink>
        </Reveal>

        <Reveal className="faq__list">
          {faq.map((item, i) => (
            <Item
              key={item.q}
              {...item}
              baseId={`faq${uid.replace(/:/g, '')}-${i}`}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
