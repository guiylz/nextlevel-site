/**
 * Marca NxL: balão de conversa com o "N" cuja haste direita vira uma seta para cima.
 * variant="amber"  → balão âmbar (uso sobre fundos escuros)
 * variant="navy"   → balão azul-marinho (uso sobre fundos claros)
 */
export function LogoMark({ size = 40, variant = 'amber', className = '', title }) {
  const palette =
    variant === 'navy'
      ? { bubble: '#101B33', n: '#F5F7FA', arrow: '#F2A93B' }
      : { bubble: '#F2A93B', n: '#0B1530', arrow: '#FFFFFF' };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path
        d="M18 4h28c7.7 0 14 6.3 14 14v20c0 7.7-6.3 14-14 14H24.5L11 61.5c-.9.6-2-.2-1.8-1.2L11.6 50C7.1 47.7 4 43.2 4 38V18C4 10.3 10.3 4 18 4Z"
        fill={palette.bubble}
      />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6">
        <path d="M20 40V17l18.5 22.5" stroke={palette.n} />
        <path d="M42 40V14M34.5 21.5 42 14l7.5 7.5" stroke={palette.arrow} />
      </g>
    </svg>
  );
}

export function Logo({ href = '#inicio', size = 38, onClick }) {
  return (
    <a href={href} className="logo" aria-label="NextLevel — voltar ao início" onClick={onClick}>
      <LogoMark size={size} />
      <span className="logo__text" aria-hidden="true">
        <span className="logo__word">
          N<span className="logo__x">x</span>L
        </span>
        <span className="logo__tag">next level</span>
      </span>
    </a>
  );
}
