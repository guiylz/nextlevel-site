import { ArrowRight } from 'lucide-react';
import { getContactHref, isExternal } from '../data/siteConfig.js';

/**
 * Botão de contato comercial. Usa o WhatsApp configurado; se não houver,
 * cai para o e-mail e, por último, para a seção #contato.
 */
export default function CtaLink({
  children,
  message,
  href,
  variant = 'primary',
  size = 'md',
  icon = true,
  className = '',
  ...rest
}) {
  const target = href || getContactHref(message);
  const external = isExternal(target);
  return (
    <a
      href={target}
      className={`btn btn--${variant} btn--${size} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      <span>{children}</span>
      {icon && <ArrowRight className="btn__icon" size={18} strokeWidth={2} aria-hidden="true" />}
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  );
}
