# CARGO FREE — Landing Page

Site institucional de uma página da **CARGO FREE**, empresa angolana de serviços
logísticos integrados e agente de transporte: coordenação e optimização de operações de transporte e
logística na importação e exportação de mercadorias, por via terrestre, marítima
e aérea.

## Stack

- React 19 + Vite
- Tailwind CSS 4
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
- `src/assets/` — logótipos, logos de clientes e fotografias
- `scripts/` — utilitários (processamento de imagens, screenshots)
- `DESIGN.md` — direcção de arte e sistema de design
- `PRODUCT.md` — contexto do produto e conteúdo
