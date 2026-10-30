# ClickTree + MCP para Vercel

Este pacote contém o site estático original do ClickTree e um servidor MCP HTTP stateless em `api/mcp.js`.

## O que foi corrigido

O ZIP original não tinha `package.json`, função serverless nem `vercel.json`; por isso ele era apenas um site estático e não poderia funcionar como MCP. A versão atual:

- mantém as páginas HTML, CSS, JavaScript e SVGs;
- adiciona um endpoint MCP em `/api/mcp`;
- usa o transporte MCP Streamable HTTP sem estado, compatível com funções serverless;
- não exige banco, segredo ou variável de ambiente;
- expõe ferramentas para listar páginas, ler o texto de uma página, obter um resumo e consultar o status do protótipo.

## Deploy na Vercel

1. Suba **esta pasta `ClickTree`**, e não o ZIP contendo uma pasta externa `ClickTree`.
2. Na Vercel, deixe **Framework Preset: Other** e **Build Command vazio**.
3. Deixe o **Output Directory vazio** e o **Root Directory** apontando para a pasta que contém `package.json`, `vercel.json` e `api/`.
4. Depois do deploy, o site estará em `https://SEU-DOMINIO.vercel.app/` e o MCP em `https://SEU-DOMINIO.vercel.app/api/mcp`.

Pelo CLI:

```bash
npm install
npx vercel --prod
```

## Ferramentas MCP

- `listar_paginas`: lista as páginas do site;
- `ler_pagina`: lê o texto visível de uma página HTML;
- `resumo_clicktree`: descreve o propósito e as limitações do protótipo;
- `status_prototipo`: retorna o status dos recursos locais e do endpoint MCP.

O contador de cliques e os formulários continuam sendo demonstrações no navegador. Este MCP não transforma esses recursos em banco de dados ou pagamentos reais.
