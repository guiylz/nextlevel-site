# NextLevel — Landing page

Landing page institucional da **NextLevel** (automação de atendimento com IA para WhatsApp e Instagram).
React + Vite + CSS puro + Lucide React. Site 100% estático, sem backend, pronto para o Cloudflare Pages.

## Rodar localmente

Requisito: Node.js 18 ou superior.

```bash
npm install      # instala as dependências
npm run dev      # abre em http://localhost:5173
npm run build    # gera a versão final na pasta dist/
npm run preview  # confere a versão de produção localmente
```

## Publicar grátis no Cloudflare Pages

**Opção A — pelo GitHub (recomendado, atualiza sozinho a cada push)**

1. Suba esta pasta para um repositório no GitHub.
2. No painel da Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**.
3. Escolha o repositório e configure:
   - Framework preset: **Vite** (ou "None")
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Clique em **Save and Deploy**. O site fica em `https://<nome-do-projeto>.pages.dev`.

**Opção B — upload direto (sem GitHub)**

1. Rode `npm run build` no seu computador.
2. Na Cloudflare: **Workers & Pages → Create → Pages → Upload assets**.
3. Arraste a pasta `dist`.

Domínio próprio: no projeto do Pages, aba **Custom domains**.
Depois de definir o domínio, preencha `siteUrl` em `src/data/siteConfig.js` e descomente
a `<link rel="canonical">` e a `og:url` no `index.html`.

## Personalizar contatos e textos

Tudo fica em **`src/data/siteConfig.js`**:

```js
contact: {
  whatsapp: '5561999999999',     // só números, com 55 + DDD
  whatsappMessage: 'Olá, NextLevel! ...',
  instagram: 'nextlevel.ia',     // só o @, sem a URL
  email: 'contato@seudominio.com.br',
},
legal: { companyName: '', cnpj: '', address: '' }, // aparece no rodapé só se preenchido
```

Como os botões comerciais funcionam:

- Com WhatsApp preenchido → abrem o WhatsApp com a mensagem pronta (cada segmento tem sua própria mensagem).
- Sem WhatsApp, mas com e-mail → abrem o e-mail.
- Sem nenhum dos dois → levam à seção **Contato**.

Canais vazios não aparecem no site. Em `npm run dev` aparece um aviso lembrando de configurá-los.

Outros textos (soluções, etapas, FAQ, roteiros da demonstração) ficam em `src/data/content.js`.

## Fotos dos segmentos

Os blocos de Hotéis, Restaurantes e Bares usam composições ilustradas em CSS.
Para usar fotos reais: coloque os arquivos em `public/images/` (ex.: `hotel.webp`, ~1200 px)
e preencha `image: '/images/hotel.webp'` no segmento correspondente em `siteConfig.js`.
Use fotos próprias ou de bancos com licença comercial (Unsplash, Pexels).

## Identidade visual

- Cores definidas em `src/index.css` (`:root`). O destaque é o âmbar do logotipo (`#F2A93B`);
  o azul elétrico e o ciano da paleta original aparecem só em detalhes (status, brilhos).
- Logotipo redesenhado em SVG em `src/components/Logo.jsx` e `public/favicon.svg`.
- Fontes: Sora (títulos) e Manrope (texto), via Google Fonts.

## Estrutura

```
src/
  components/   Header, Hero, ProblemSection, Solutions, Industries, HowItWorks,
                DemoChat, Differentials, Implementation, FAQ, FinalCTA, Footer
                + Logo, CtaLink, ContactChannels, Reveal, SectionHeading, Icon
  data/         siteConfig.js (contatos e dados), content.js (textos)
  hooks/        usePrefersReducedMotion.js
  index.css     estilos (organizados por seção)
public/         favicon, og-image, robots.txt, _headers (cache na Cloudflare), images/
```
