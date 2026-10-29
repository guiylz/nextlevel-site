import { AtSign, Mail, MessageCircle } from 'lucide-react';
import {
  formatWhatsapp,
  getContactHref,
  getInstagramUrl,
  siteConfig,
} from '../data/siteConfig.js';

/** Lista apenas os canais preenchidos em siteConfig.contact. */
export function useChannels() {
  const { whatsapp, instagram, email } = siteConfig.contact;
  const list = [];
  if (whatsapp.replace(/\D/g, '')) {
    list.push({
      key: 'whatsapp',
      label: 'WhatsApp',
      value: formatWhatsapp(whatsapp),
      href: getContactHref(),
      Icon: MessageCircle,
      external: true,
    });
  }
  if (instagram.trim()) {
    list.push({
      key: 'instagram',
      label: 'Instagram',
      value: `@${instagram.replace(/^@/, '')}`,
      href: getInstagramUrl(),
      Icon: AtSign,
      external: true,
    });
  }
  if (email.trim()) {
    list.push({
      key: 'email',
      label: 'E-mail',
      value: email,
      href: `mailto:${email}`,
      Icon: Mail,
      external: false,
    });
  }
  return list;
}

export default function ContactChannels({ className = '' }) {
  const channels = useChannels();

  if (!channels.length) {
    // Aviso visível apenas em desenvolvimento (npm run dev)
    return import.meta.env.DEV ? (
      <p className={`dev-hint ${className}`}>
        Configure WhatsApp, Instagram e e-mail em <code>src/data/siteConfig.js</code> para exibir os
        canais de contato aqui.
      </p>
    ) : null;
  }

  return (
    <ul className={`channels ${className}`} aria-label="Canais de contato">
      {channels.map(({ key, label, value, href, Icon, external }) => (
        <li key={key}>
          <a
            href={href}
            className="channels__btn"
            aria-label={`${label}: ${value}${external ? ' (abre em nova aba)' : ''}`}
            title={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
