<div align="center">

# Taís Rodrigues

### Advocacia Estratégica · Direito Médico e Bioética

**Entre a Bula e a Lei.**

Site institucional desenvolvido para apresentar a atuação da Dra. Taís Rodrigues em advocacia preventiva voltada a médicos, clínicas e profissionais da saúde.

[![Next.js](https://img.shields.io/badge/Next.js-111827?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-142E23?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-142E23?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-C5A059?style=for-the-badge&logo=tailwindcss&logoColor=142E23)](https://tailwindcss.com/)

**[Ver demonstração](#-demonstração)** · **[Tecnologias](#-tecnologias)** · **[Como executar](#-executando-localmente)**

</div>

---

## ✦ Sobre o projeto

Uma experiência digital institucional, contemporânea e responsiva, concebida para comunicar com clareza a proposta de uma advocacia preventiva, ética e próxima da prática médica.

O design combina uma base em **verde profundo**, superfícies em **creme**, detalhes **champagne**, tipografia editorial e transições sutis. A navegação privilegia a leitura, a acessibilidade e o contato direto com a profissional.

> **Nota:** o conteúdo deste repositório é uma apresentação técnica e de portfólio. Informações profissionais e textos institucionais devem ser validados pela responsável antes da publicação definitiva.

## ◇ Demonstração

**Status:** aguardando o primeiro deploy na Vercel.

<!-- Após o deploy, substitua a linha abaixo pelo endereço real:
[🌐 Acessar o site](https://SEU-PROJETO.vercel.app)
-->

**Prévia visual**

Para incluir uma captura real do site, adicione uma imagem em `docs/preview.png` e remova os comentários abaixo:

<!-- ![Prévia do site Taís Rodrigues](docs/preview.png) -->

## ✧ Funcionalidades

- **Layout responsivo** para desktop, tablet e smartphone.
- **Hero editorial** com composição adaptada ao mobile.
- **Header flutuante com Liquid Glass**, navegação por âncoras e comportamento inteligente durante a rolagem.
- **Menu mobile animado**, com navegação dedicada.
- **Seção institucional** com apresentação da profissional.
- **Formação e credenciais** em destaque.
- **Seção de citação com parallax** e recursos visuais de profundidade.
- **Áreas de atuação** apresentadas em interface interativa.
- **FAQ em acordeão** para dúvidas frequentes.
- **Botão flutuante de WhatsApp**, com mensagem pré-preenchida e aparição após rolagem.
- **SEO e Open Graph** para mecanismos de busca e compartilhamento.
- **Favicon personalizado** e identidade visual consistente.
- **Suporte a preferência por movimento reduzido** nas animações implementadas.

## 🛠 Tecnologias

| Tecnologia | Aplicação |
| --- | --- |
| [Next.js](https://nextjs.org/) | Framework React com App Router e metadados |
| [React](https://react.dev/) | Componentização da interface |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização responsiva |
| [Framer Motion](https://www.framer.com/motion/) | Animações e transições |
| [Lucide](https://lucide.dev/) | Ícones da interface |
| [next/font](https://nextjs.org/docs/app/api-reference/components/font) | Carregamento e otimização tipográfica |

## 🎨 Identidade visual

| Cor | Hexadecimal | Uso |
| --- | --- | --- |
| Verde profundo | `#142E23` | Superfícies institucionais e botões |
| Creme | `#F8F7F4` | Fundos claros e textos sobre verde |
| Champagne | `#C5A059` | Destaques, detalhes e interações |

A direção visual busca equilíbrio entre **credibilidade institucional**, **sofisticação** e **clareza de navegação**.

## 📁 Estrutura do projeto

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── icon.png
├── components/
│   ├── animation/
│   │   └── SmoothScroll.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CredentialsSection.tsx
│   │   ├── QuoteParallaxSection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── FaqSection.tsx
│   └── ui/
│       └── FloatingWhatsApp.tsx
└── config/
    └── site.ts

public/
├── images/
└── og-image.png
```

> A árvore acima apresenta os principais arquivos da implementação. Outros arquivos de configuração e componentes auxiliares podem estar presentes no projeto.

## 🚀 Executando localmente

### Pré-requisitos

- Node.js compatível com a versão do Next.js instalada no projeto.
- npm (ou outro gerenciador de pacotes configurado no repositório).

### Instalação

```bash
git clone https://github.com/igorsposito/tais-rodrigues.git
cd tais-rodrigues
npm install
npm run dev
```

Abra **http://localhost:3000** no navegador.

Para gerar uma build de produção:

```bash
npm run build
npm run start
```

## ⚙️ Configurações

As informações institucionais e os destinos de contato ficam centralizados em:

```text
src/config/site.ts
```

Antes de publicar, confira:

1. Nome profissional, registro na OAB e textos institucionais.
2. Número do WhatsApp e mensagem de contato.
3. Instagram e demais links externos.
4. Imagens autorizadas e arquivos em `public/images/`.
5. Metadados, imagem `public/og-image.png` e favicon.
6. URL definitiva em `metadataBase`, após o deploy.

## ☁️ Publicação

O projeto foi estruturado para deploy na **Vercel**.

1. Faça push da branch `main` para o GitHub.
2. Importe o repositório na [Vercel](https://vercel.com/new).
3. Confira as configurações de build detectadas para Next.js.
4. Publique e teste as rotas, o WhatsApp e a imagem Open Graph.
5. Atualize este README com o link público da demonstração.

## ♿ Experiência e boas práticas

O projeto prioriza hierarquia visual, contraste, responsividade, semântica de navegação e animações discretas. A validação final de acessibilidade, desempenho e SEO deve ser feita na versão publicada, em diferentes dispositivos.

## © Direitos e créditos

**Dra. Taís Rodrigues** — identidade profissional, textos e imagens utilizados mediante autorização para o projeto.

**Desenvolvimento:** [Ágave Lab](https://www.agavelab.com.br)  
**Instagram:** [@agavelab.dev](https://www.instagram.com/agavelab.dev/)  
**LinkedIn:** [Ágave Lab](https://www.linkedin.com/company/agavelab)

Este projeto foi desenvolvido para uma cliente. A disponibilização do código no GitHub **não implica licença para reutilização comercial** de sua identidade visual, fotografias, textos ou demais materiais protegidos.

---

<div align="center">

**Desenvolvido com atenção aos detalhes pela [Ágave Lab](https://www.agavelab.com.br).**

</div>
