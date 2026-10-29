/**
 * ============================================================
 *  NEXTLEVEL — CONFIGURAÇÃO CENTRAL DO SITE
 * ============================================================
 *  Edite este arquivo para atualizar contatos, textos e links.
 *  Campos vazios ('') são tratados como "ainda não informados":
 *  o site simplesmente não exibe aquele item.
 * ============================================================
 */

export const siteConfig = {
  company: {
    name: 'NextLevel',
    shortName: 'NxL',
    tagline: 'next level',
    description:
      'Automação empresarial com inteligência artificial. Implementamos soluções personalizadas de atendimento para WhatsApp e Instagram, adaptadas à rotina de cada negócio.',
    // Domínio definitivo (ex.: 'https://www.nextlevel.com.br').
    // Quando preenchido, também atualize a <link rel="canonical"> e og:url em index.html.
    siteUrl: '',
  },

  /* Cores da marca — espelham as variáveis em src/index.css (:root). */
  colors: {
    black: '#080A0F',
    navy: '#0D1424',
    accent: '#F2A93B', // âmbar do logotipo NxL
    electric: '#4263FF',
    cyan: '#36D9FF',
    white: '#F5F7FA',
    muted: '#9AA4B2',
  },

  contact: {
    // WhatsApp: somente números, com código do país e DDD. Ex.: '5561999999999'
    whatsapp: '5512996351999',
    // Mensagem que já vem escrita quando o visitante abre o WhatsApp
    whatsappMessage:
      'Olá, NextLevel! Vim pelo site e quero entender como automatizar o atendimento da minha empresa.',
    // Instagram: apenas o @, sem a URL. Ex.: 'nextlevel.ia'
    instagram: 'nextl1evel',
    // E-mail comercial. Ex.: 'contato@nextlevel.com.br'
    email: 'nxlnextlevel.contato@gmail.com',
  },

  /* Informações legais — exibidas no rodapé apenas se preenchidas. */
  legal: {
    companyName: '', // Razão social
    cnpj: '',
    address: '',
  },

  navigation: [
    { label: 'Início', href: '#inicio' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Segmentos', href: '#segmentos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Contato', href: '#contato' },
  ],

  ctas: {
    primary: 'Quero automatizar meu atendimento',
    secondary: 'Descubra como funciona',
    header: 'Falar com especialista',
    final: 'Conversar com a NextLevel',
    demo: 'Solicitar uma demonstração',
  },

  /*
   * Segmentos atendidos.
   * image: caminho de uma foto em /public/images (ex.: '/images/hotel.webp').
   *   Deixe null para usar a composição ilustrada criada em CSS.
   */
  industries: [
    {
      id: 'hotel',
      label: 'Hotéis e pousadas',
      title: 'Mais agilidade para receber seus hóspedes.',
      intro:
        'Hóspedes perguntam a mesma coisa antes, durante e depois da estadia. A automação pode cuidar das dúvidas recorrentes e deixar a recepção livre para o que exige atenção.',
      items: [
        'Responder dúvidas sobre acomodações e serviços',
        'Apresentar informações de check-in e check-out',
        'Organizar solicitações de reserva para a equipe',
        'Informar localização, horários e comodidades',
        'Encaminhar situações específicas para a recepção',
      ],
      note: 'Reservas automáticas dependem de integração com o sistema de hotelaria utilizado.',
      cta: 'Automatizar atendimento hoteleiro',
      whatsappMessage:
        'Olá, NextLevel! Tenho um hotel/pousada e quero automatizar o atendimento.',
      image: null,
      imageAlt: 'Recepção de hotel com atendimento ao hóspede',
    },
    {
      id: 'restaurante',
      label: 'Restaurantes',
      title: 'Menos tempo respondendo mensagens. Mais foco na operação.',
      intro:
        'Horário, cardápio, reserva, estacionamento. Perguntas simples que chegam em grande volume, justamente quando a cozinha e o salão estão cheios.',
      items: [
        'Informar horários de funcionamento',
        'Apresentar cardápios e opções disponíveis',
        'Responder perguntas frequentes',
        'Organizar solicitações de reserva',
        'Encaminhar pedidos e dúvidas para a equipe responsável',
      ],
      note: 'Registro de pedidos e consulta de mesas exigem integração específica com seus sistemas.',
      cta: 'Automatizar atendimento do restaurante',
      whatsappMessage:
        'Olá, NextLevel! Tenho um restaurante e quero automatizar o atendimento.',
      image: null,
      imageAlt: 'Salão de restaurante contemporâneo',
    },
    {
      id: 'bar',
      label: 'Bares',
      title: 'Atendimento mais organizado, mesmo nos horários movimentados.',
      intro:
        'Programação da semana, aniversários, lista, localização. O movimento do bar não espera, e as mensagens também não.',
      items: [
        'Responder perguntas sobre horários e localização',
        'Divulgar programação e eventos cadastrados',
        'Informar sobre cardápio e experiências oferecidas',
        'Organizar dúvidas sobre reservas e comemorações',
        'Encaminhar solicitações específicas para a equipe',
      ],
      note: 'As respostas usam apenas a programação e as informações que o bar cadastrar.',
      cta: 'Automatizar atendimento do bar',
      whatsappMessage:
        'Olá, NextLevel! Tenho um bar e quero automatizar o atendimento.',
      image: null,
      imageAlt: 'Balcão de bar com iluminação ambiente',
    },
  ],
};

/**
 * Retorna o melhor link de contato disponível:
 * WhatsApp → e-mail → seção de contato da página.
 */
export function getContactHref(message = siteConfig.contact.whatsappMessage) {
  const { whatsapp, email } = siteConfig.contact;
  const digits = whatsapp.replace(/\D/g, '');
  if (digits) {
    return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
  }
  if (email) {
    return `mailto:${email}?subject=${encodeURIComponent('Contato pelo site — NextLevel')}&body=${encodeURIComponent(message)}`;
  }
  return '#contato';
}

export function isExternal(href) {
  return /^https?:/.test(href);
}

export function getInstagramUrl() {
  const handle = siteConfig.contact.instagram.replace(/^@/, '').trim();
  return handle ? `https://instagram.com/${handle}` : '';
}

export function formatWhatsapp(raw) {
  const d = raw.replace(/\D/g, '');
  const m = d.match(/^55(\d{2})(\d{4,5})(\d{4})$/);
  return m ? `+55 (${m[1]}) ${m[2]}-${m[3]}` : raw;
}
