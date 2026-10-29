import { Logo } from './Logo.jsx';
import { useChannels } from './ContactChannels.jsx';
import { siteConfig } from '../data/siteConfig.js';

export default function Footer() {
  const channels = useChannels();
  const { legal, company } = siteConfig;
  const legalLine = [legal.companyName, legal.cnpj && `CNPJ ${legal.cnpj}`, legal.address]
    .filter(Boolean)
    .join(' · ');
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo size={34} />
          <p>{company.description}</p>
        </div>

        <nav className="footer__col" aria-label="Rodapé">
          <h2 className="footer__title">Navegação</h2>
          <ul>
            {siteConfig.navigation.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
            <li>
              <a href="#demonstracao">Demonstração</a>
            </li>
            <li>
              <a href="#faq">Perguntas frequentes</a>
            </li>
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__title">Segmentos</h2>
          <ul>
            {siteConfig.industries.map((i) => (
              <li key={i.id}>
                <a href={`#seg-${i.id}`}>{i.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {channels.length > 0 && (
          <div className="footer__col">
            <h2 className="footer__title">Contato</h2>
            <ul>
              {channels.map((c) => (
                <li key={c.key}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <c.Icon size={15} aria-hidden="true" /> {c.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {company.name}. Todos os direitos reservados.
          {legalLine && <span className="footer__legal"> {legalLine}</span>}
        </p>
        <p className="footer__disclaimer">
          Conversas e exemplos exibidos neste site são demonstrativos. WhatsApp e Instagram são
          marcas de seus respectivos proprietários.
        </p>
      </div>
    </footer>
  );
}
