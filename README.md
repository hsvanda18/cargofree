# CARGO FREE — Landing Page

Site institucional de uma página da **CARGO FREE**, empresa angolana de serviços
logísticos integrados e agente de transporte: coordenação e optimização de operações de transporte e
logística na importação e exportação de mercadorias, por via terrestre, marítima
e aérea.

O texto institucional, os contactos e o roteiro de clientes são editáveis sem
tocar em código, através de um Studio Sanity — ver [Conteúdo (Sanity)](#conteúdo-sanity)
abaixo.

## Stack

- React 19 + Vite
- Tailwind CSS 4
- Sanity (CMS de conteúdo)
- Oxlint
- Playwright (script de screenshot)

## Desenvolvimento

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção para dist/
npm run preview  # pré-visualizar o build
npm run lint     # oxlint
```

## Estrutura

- `src/components/` — secções da página (Hero, Services, About, Clients, Contact, Footer)
- `src/assets/` — logótipos e fotografias (os logos de clientes migraram para o Sanity — ver abaixo)
- `src/content/fallback.js` — cópia de reserva do conteúdo, usada se o Sanity estiver em baixo
- `src/lib/` — ligação ao Sanity (`sanity.js`) e o hook que busca o conteúdo (`useSiteContent.js`)
- `scripts/` — utilitários (processamento de imagens, screenshots, arranque do Sanity)
- `studio/` — o Studio Sanity (projecto separado — ver `studio/README.md`)
- `DESIGN.md` — direcção de arte e sistema de design
- `PRODUCT.md` — contexto do produto e conteúdo

## Conteúdo (Sanity)

O texto institucional (Hero, Quem somos, Serviços), os contactos e o roteiro
de clientes vivem num projecto Sanity (`t2t3490q` / dataset `production`), não
no código. O site vai buscar esse conteúdo à API pública do Sanity a cada
carregamento de página — publicar uma alteração no Studio reflecte-se no site
sem necessidade de reconstruir ou reimplantar nada.

Editar o conteúdo: abra o Studio publicado (peça o endereço a quem o
configurou) ou, localmente:

```bash
cd studio
npm install
npx sanity login
npm run dev       # Studio em http://localhost:3333
```

Ver `studio/README.md` para mais detalhes, e `PRODUCT.md` para o que fica
fora do Sanity (a fotografia) e porquê.

**Resiliência:** se o Sanity estiver em baixo, mal configurado, ou o dataset
ficar vazio por engano, o site continua a mostrar o conteúdo em
`src/content/fallback.js` em vez de ficar em branco — ver o comentário no
topo desse ficheiro.
