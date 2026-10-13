# Meu Portfólio (versão inicial)

Primeiro esboço do meu portfólio pessoal em React, criado em maio de 2026 para experimentar React 19 com Tailwind CSS 4 e testes com Vitest.

> 📦 **Projeto de estudo — não recebe mais atualizações.**
> A versão atual do portfólio está em [portfolio-marcio-gomes](https://github.com/marcio-sgomes/portfolio-marcio-gomes) (publicada em <https://portfolio-marcio-gomes.vercel.app>).

## O que tem aqui

- Projeto Vite + React com o Tailwind CSS 4 configurado pelo plugin `@tailwindcss/vite`.
- Uma única tela com o título "Meu Portfólio Profissional" e uma frase de boas-vindas.
- Um teste de exemplo (`src/App.test.jsx`) com Vitest + React Testing Library, comentado passo a passo (preparação, ação e validação).

## Tecnologias

- React 19 e Vite
- Tailwind CSS 4
- Vitest, React Testing Library e jsdom
- ESLint

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) 20 ou superior.

```bash
git clone https://github.com/marcio-sgomes/meu-portfolio.git
cd meu-portfolio
npm install
npm run dev     # abre em http://localhost:5173
npm run test    # roda o teste de exemplo (modo observação; Ctrl+C para sair)
```

Outros scripts: `npm run build` (gera `dist/`), `npm run preview` e `npm run lint`.
