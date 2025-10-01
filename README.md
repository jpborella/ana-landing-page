# Landing Page - Ana Paula Farias

Landing page construída com React + TypeScript + Tailwind CSS + Vite.

Conteúdo
- Componentes em `src/components` (Header, Hero, Products, ProductCard, ProductModal, FinancialProducts, Footer)
- Dados demo em `src/data.ts` (produtos e contatos)
- Imagens em `public/images` (coloque suas imagens com os nomes: img1.jpg, img1-resp.jpg, ... img7.jpg)

Requisitos
- Node.js v16+ e npm

Instalação e execução (Terminal)

```terminal
cd 
npm install
npm run dev
```

Build de produção

```terminal
npm run build
npm run preview
```

Estrutura importante
- `src/components` — todos os componentes React.
- `src/data.ts` — dados usados para popular os cards.
- `public/images` — imagens públicas (desktop e versões `-resp` para mobile).
- `dist/` — saída do build (gerada por `npm run build`).

Boas práticas antes de commitar
- Rode `npm run build` e verifique `dist/`.
- Remova arquivos sensíveis (não deve haver no repositório).
