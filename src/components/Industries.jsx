import {
  BedDouble,
  CalendarDays,
  Car,
  Check,
  Clock,
  Coffee,
  Info,
  MapPin,
  Mic,
  UtensilsCrossed,
  Wifi,
  Wine,
} from 'lucide-react';
import CtaLink from './CtaLink.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { siteConfig } from '../data/siteConfig.js';

const segmentIcon = { hotel: BedDouble, restaurante: UtensilsCrossed, bar: Wine };

function HotelScene() {
  return (
    <div className="scene scene--hotel">
      <div className="keycard">
        <div className="keycard__top">
          <span>Pousada Exemplo</span>
          <span className="keycard__chip" />
        </div>
        <p className="keycard__room">Suíte 204</p>
        <div className="keycard__times">
          <div>
            <span>Check-in</span>
            <strong>14:00</strong>
          </div>
          <div>
            <span>Check-out</span>
            <strong>12:00</strong>
          </div>
        </div>
      </div>
      <ul className="amenities">
        <li><Wifi size={16} /> Wi-Fi</li>
        <li><Coffee size={16} /> Café da manhã</li>
        <li><Car size={16} /> Estacionamento</li>
        <li><MapPin size={16} /> Localização</li>
      </ul>
      <div className="scene__bubble">Que horas posso fazer check-in?</div>
    </div>
  );
}

function RestaurantScene() {
  const menu = [
    ['Entradas', 'ver opções'],
    ['Pratos principais', 'ver opções'],
    ['Sobremesas', 'ver opções'],
    ['Bebidas', 'ver opções'],
  ];
  return (
    <div className="scene scene--restaurant">
      <div className="menu-card">
        <p className="menu-card__title">Cardápio</p>
        <p className="menu-card__sub">Restaurante Exemplo</p>
        <ul>
          {menu.map(([a, b]) => (
            <li key={a}>
              <span>{a}</span>
              <i />
              <span className="menu-card__link">{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hours-pill">
        <Clock size={16} /> Hoje: 11h30 – 15h · 19h – 23h
      </div>
      <div className="scene__bubble">Vocês abrem no domingo?</div>
    </div>
  );
}

function BarScene() {
  return (
    <div className="scene scene--bar">
      <div className="poster">
        <p className="poster__day">Sexta</p>
        <p className="poster__title">
          Música
          <br />
          ao vivo
        </p>
        <div className="poster__meta">
          <span><Mic size={14} /> Banda convidada</span>
          <span><Clock size={14} /> a partir das 21h</span>
        </div>
        <div className="poster__stub" />
      </div>
      <div className="agenda">
        <p><CalendarDays size={14} /> Programação da semana</p>
        <ul>
          <li><span>Qua</span> Happy hour</li>
          <li><span>Sex</span> Música ao vivo</li>
          <li><span>Sáb</span> Noite temática</li>
        </ul>
      </div>
      <div className="scene__bubble">Dá pra comemorar aniversário aí?</div>
    </div>
  );
}

const scenes = { hotel: HotelScene, restaurante: RestaurantScene, bar: BarScene };

export default function Industries() {
  return (
    <section id="segmentos" className="section industries" aria-labelledby="industries-title">
      <div className="container">
        <SectionHeading
          id="industries-title"
          eyebrow="Segmentos"
          title="Cada negócio tem sua rotina. A automação acompanha."
          intro="Começamos pela hospitalidade, onde o volume de mensagens é alto e cada resposta conta. Veja como a automação pode ser aplicada em cada segmento."
        />

        <nav className="industries__tabs" aria-label="Segmentos">
          {siteConfig.industries.map((ind) => {
            const SegIcon = segmentIcon[ind.id];
            return (
              <a key={ind.id} href={`#seg-${ind.id}`} className={`seg-pill seg-pill--${ind.id}`}>
                <SegIcon size={16} aria-hidden="true" /> {ind.label}
              </a>
            );
          })}
        </nav>

        <div className="industries__list">
          {siteConfig.industries.map((ind, idx) => {
            const Scene = scenes[ind.id];
            const SegIcon = segmentIcon[ind.id];
            return (
              <article
                key={ind.id}
                id={`seg-${ind.id}`}
                className={`industry industry--${ind.id} ${idx % 2 ? 'industry--flip' : ''}`}
                aria-labelledby={`seg-${ind.id}-title`}
              >
                <Reveal className="industry__visual">
                  {ind.image ? (
                    <img
                      className="industry__photo"
                      src={ind.image}
                      alt={ind.imageAlt}
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="600"
                    />
                  ) : (
                    <div aria-hidden="true">{Scene && <Scene />}</div>
                  )}
                  <span className="industry__label">Exemplo ilustrativo</span>
                </Reveal>

                <Reveal className="industry__content" delay={100}>
                  <p className="industry__seg">
                    <SegIcon size={16} aria-hidden="true" /> {ind.label}
                  </p>
                  <h3 id={`seg-${ind.id}-title`}>{ind.title}</h3>
                  <p className="industry__intro">{ind.intro}</p>
                  <p className="industry__list-title">Possibilidades de implementação</p>
                  <ul className="check-list">
                    {ind.items.map((it) => (
                      <li key={it}>
                        <Check size={16} aria-hidden="true" /> {it}
                      </li>
                    ))}
                  </ul>
                  <p className="industry__note">
                    <Info size={14} aria-hidden="true" /> {ind.note}
                  </p>
                  <CtaLink message={ind.whatsappMessage} variant="outline">
                    {ind.cta}
                  </CtaLink>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
