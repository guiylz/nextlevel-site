/**
 * Conteúdo textual das seções. Os ícones são referenciados pelo nome
 * e resolvidos nos componentes (lucide-react).
 */

export const problems = [
  {
    id: 'volume',
    title: 'Muitas mensagens ao mesmo tempo',
    text: 'Picos de contato no almoço, no fim de semana ou na véspera de feriado, e uma equipe só para dar conta.',
  },
  {
    id: 'espera',
    title: 'Clientes esperando resposta',
    text: 'Preço, horário, disponibilidade. Quem pergunta e não recebe retorno costuma procurar outra opção.',
  },
  {
    id: 'repeticao',
    title: 'Perguntas que se repetem o dia todo',
    text: 'Endereço, cardápio, estacionamento. Respostas iguais digitadas dezenas de vezes.',
  },
  {
    id: 'esquecidas',
    title: 'Solicitações perdidas na conversa',
    text: 'Um pedido de reserva no meio de vinte mensagens acaba ficando para depois, e às vezes para nunca.',
  },
  {
    id: 'fora-horario',
    title: 'Contato fora do horário',
    text: 'Muita gente escreve à noite ou de madrugada, quando não há ninguém para responder.',
  },
  {
    id: 'sobrecarga',
    title: 'Equipe presa em tarefas manuais',
    text: 'Tempo que poderia ir para o atendimento presencial é gasto copiando e colando informações.',
  },
];

export const solutions = [
  {
    id: 'ia',
    icon: 'Sparkles',
    title: 'Atendimento com IA',
    text: 'Respostas para perguntas frequentes, identificação da intenção do cliente e direcionamento da conversa conforme as regras configuradas.',
    tag: 'Base do projeto',
    detail: 'intent',
  },
  {
    id: 'whatsapp',
    icon: 'MessageCircle',
    title: 'Automação no WhatsApp',
    text: 'Atendimento pelo WhatsApp para tirar dúvidas, apresentar informações, organizar solicitações e direcionar clientes.',
    tag: 'Canal prioritário',
    detail: 'bubbles',
  },
  {
    id: 'instagram',
    icon: 'AtSign',
    title: 'Automação no Instagram',
    text: 'Interações elegíveis no Instagram Direct, organizando o primeiro contato e encaminhando cada solicitação ao lugar certo.',
    tag: 'Canal prioritário',
    detail: 'inbox',
  },
  {
    id: 'qualificacao',
    icon: 'ListChecks',
    title: 'Qualificação de clientes',
    text: 'Perguntas e regras configuradas para entender a necessidade de cada contato e encaminhar oportunidades comerciais com mais organização.',
    tag: 'Conforme configuração',
    detail: 'funnel',
  },
  {
    id: 'integracao',
    icon: 'Workflow',
    title: 'Integração de processos',
    text: 'Pode incluir conexão com sistemas e ferramentas que a empresa já usa, conforme viabilidade técnica e integrações contratadas.',
    tag: 'De acordo com as integrações',
    detail: 'nodes',
  },
  {
    id: 'hibrido',
    icon: 'Users',
    title: 'Atendimento híbrido',
    text: 'A automação cuida do que é recorrente e encaminha para a equipe as situações que pedem uma pessoa.',
    tag: 'Humano + IA',
    detail: 'handoff',
  },
];

export const steps = [
  {
    icon: 'MessageCircle',
    title: 'O cliente entra em contato',
    text: 'A mensagem chega pelo WhatsApp ou pelo Instagram Direct, no canal que ele já usa.',
  },
  {
    icon: 'ScanSearch',
    title: 'A intenção é identificada',
    text: 'A automação entende o que o cliente quer e consulta as informações disponíveis e autorizadas pela empresa.',
  },
  {
    icon: 'Zap',
    title: 'A resposta é dada',
    text: 'A IA responde ou executa o fluxo previamente configurado para aquele tipo de solicitação.',
  },
  {
    icon: 'UserCheck',
    title: 'A equipe assume quando precisa',
    text: 'Se a situação pedir, a conversa é direcionada para um atendente humano com o contexto preservado.',
  },
];

export const differentials = [
  {
    icon: 'Ruler',
    title: 'Feito sob medida',
    text: 'Cada solução é desenhada a partir da rotina da sua empresa, não de um modelo pronto.',
  },
  {
    icon: 'Target',
    title: 'Foco em necessidades reais',
    text: 'Automatizamos o que de fato consome tempo da equipe, e não tudo o que é possível automatizar.',
  },
  {
    icon: 'Users',
    title: 'Pessoas continuam no controle',
    text: 'Atendimento híbrido, com transferência para a equipe sempre que a situação pedir.',
  },
  {
    icon: 'GitBranch',
    title: 'Fluxos organizados',
    text: 'Conversas estruturadas por assunto, com caminhos claros para cada tipo de solicitação.',
  },
  {
    icon: 'Plug',
    title: 'Conexão com o que você já usa',
    text: 'Possibilidade de integrar ferramentas existentes, avaliada caso a caso.',
  },
  {
    icon: 'Compass',
    title: 'Implementação planejada',
    text: 'Etapas definidas conforme os processos do negócio, com testes antes de entrar no ar.',
  },
];

export const implementation = [
  {
    title: 'Entendimento do negócio',
    text: 'Conversamos sobre a rotina da empresa e os principais gargalos do atendimento.',
  },
  {
    title: 'Mapeamento',
    text: 'Levantamos as perguntas frequentes, os tipos de solicitação e os fluxos de conversa.',
  },
  {
    title: 'Planejamento',
    text: 'Definimos o que será automatizado, quando a equipe assume e quais integrações são necessárias.',
  },
  {
    title: 'Configuração e testes',
    text: 'Configuramos a automação, testamos cenários reais e ajustamos as respostas.',
  },
  {
    title: 'Acompanhamento',
    text: 'Acompanhamos o funcionamento conforme o escopo contratado.',
  },
];

export const faq = [
  {
    q: 'O que é automação de atendimento com inteligência artificial?',
    a: 'É o uso de IA para receber mensagens de clientes, entender o que eles querem e responder com base nas informações que a sua empresa fornece. Perguntas recorrentes podem ser resolvidas automaticamente, e o que exige atenção humana é encaminhado para a equipe.',
  },
  {
    q: 'A solução funciona pelo WhatsApp?',
    a: 'Sim, o WhatsApp é um dos nossos canais prioritários. A forma de conexão e os recursos disponíveis dependem do tipo de conta da empresa, das políticas da plataforma e do escopo definido no projeto.',
  },
  {
    q: 'É possível automatizar o Instagram Direct?',
    a: 'Sim, para as interações elegíveis segundo as regras da plataforma. Avaliamos com você quais tipos de mensagem podem ser automatizados e como organizar o primeiro contato.',
  },
  {
    q: 'A IA consegue responder perguntas específicas sobre minha empresa?',
    a: 'Consegue, desde que essas informações sejam cadastradas: horários, serviços, cardápio, políticas, localização e o que mais fizer sentido. A IA responde com base no que foi fornecido e autorizado, e encaminha para a equipe quando não tiver a resposta.',
  },
  {
    q: 'Posso continuar atendendo clientes pessoalmente?',
    a: 'Sim. A proposta é o atendimento híbrido: a automação cuida do que é repetitivo e a sua equipe assume as conversas sempre que necessário ou quando preferir.',
  },
  {
    q: 'A automação pode ser integrada aos meus sistemas?',
    a: 'Pode ser possível. Isso depende dos sistemas que você usa, das integrações que eles oferecem e do escopo contratado. Fazemos essa análise de viabilidade durante o planejamento.',
  },
  {
    q: 'Quanto custa implementar uma solução?',
    a: 'O investimento varia conforme os canais, o volume de atendimento, a complexidade dos fluxos e as integrações necessárias. Depois de entender o seu negócio, apresentamos uma proposta com escopo e valores definidos.',
  },
  {
    q: 'Como faço para contratar a NextLevel?',
    a: 'Fale com a gente pelos canais desta página. Começamos com uma conversa para entender a rotina do seu negócio e, a partir dela, montamos uma proposta.',
  },
];

/**
 * Roteiros da demonstração. Conteúdo 100% fictício.
 * from: 'client' | 'ai' | 'system'
 */
export const demoScripts = {
  restaurante: {
    label: 'Restaurante',
    business: 'Restaurante Demonstração',
    clientName: 'Cliente (exemplo)',
    channel: 'Canal de mensagens',
    intent: 'Horário de funcionamento',
    source: 'Horários cadastrados',
    outcome: 'Resolvido pela automação',
    handoff: false,
    messages: [
      { from: 'client', text: 'Olá! Vocês funcionam hoje à noite?' },
      { from: 'ai', text: 'Olá! Posso te ajudar com isso. Vou consultar os horários cadastrados do restaurante.' },
      { from: 'ai', text: 'De acordo com as informações cadastradas para esta demonstração, o atendimento começa às 19h.' },
      { from: 'client', text: 'Ótimo, obrigado!' },
      { from: 'ai', text: 'Por nada! Se quiser, também posso mostrar o cardápio cadastrado.' },
    ],
  },
  hotel: {
    label: 'Hotel',
    business: 'Pousada Demonstração',
    clientName: 'Hóspede (exemplo)',
    channel: 'Canal de mensagens',
    intent: 'Check-in e reserva',
    source: 'Políticas da hospedagem',
    outcome: 'Encaminhado à recepção',
    handoff: true,
    messages: [
      { from: 'client', text: 'Oi! Qual o horário de check-in? Queria reservar para o próximo fim de semana.' },
      { from: 'ai', text: 'Olá! Pelas informações cadastradas nesta demonstração, o check-in é a partir das 14h e o check-out até as 12h.' },
      { from: 'ai', text: 'Para a reserva, vou registrar seu pedido e passar para a recepção confirmar a disponibilidade.' },
      { from: 'system', text: 'Conversa encaminhada para a recepção' },
      { from: 'client', text: 'Perfeito, aguardo!' },
    ],
  },
  bar: {
    label: 'Bar',
    business: 'Bar Demonstração',
    clientName: 'Cliente (exemplo)',
    channel: 'Canal de mensagens',
    intent: 'Programação e aniversário',
    source: 'Agenda de eventos cadastrada',
    outcome: 'Encaminhado à equipe',
    handoff: true,
    messages: [
      { from: 'client', text: 'E aí! Tem música ao vivo na sexta? Queria comemorar um aniversário.' },
      { from: 'ai', text: 'Oi! Na programação cadastrada para esta demonstração, sexta tem música ao vivo a partir das 21h.' },
      { from: 'ai', text: 'Que legal a comemoração! Quantas pessoas, mais ou menos? Assim já passo para a equipe com os detalhes.' },
      { from: 'client', text: 'Umas 12 pessoas.' },
      { from: 'system', text: 'Solicitação encaminhada para a equipe do bar' },
    ],
  },
};
