import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { z } from 'zod';

const PAGE_NAMES = [
  'index.html',
  'sobre.html',
  'projetos.html',
  'impacto.html',
  'noticias.html',
  'galeria.html',
  'acessibilidade.html',
  'contato.html',
  'orcamento_hospedagem.html',
  'midia.html',
  'premium.html',
  'premiun.html'
];

const PAGE_LABELS = {
  'index.html': 'Início',
  'sobre.html': 'O projeto',
  'projetos.html': 'Projetos',
  'impacto.html': 'Impacto',
  'noticias.html': 'Notícias',
  'galeria.html': 'Galeria',
  'acessibilidade.html': 'Acessibilidade',
  'contato.html': 'Contato',
  'orcamento_hospedagem.html': 'Orçamento e hospedagem',
  'midia.html': 'Mídia',
  'premium.html': 'Premium',
  'premiun.html': 'Premium (página principal)'
};

const root = process.cwd();

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function readPage(page) {
  if (!PAGE_NAMES.includes(page)) {
    throw new Error(`Página inválida. Escolha uma destas: ${PAGE_NAMES.join(', ')}`);
  }
  return readFile(path.join(root, page), 'utf8');
}

function createServer() {
  const server = new McpServer({
    name: 'clicktree-mcp',
    version: '1.0.0'
  });

  server.registerTool(
    'listar_paginas',
    {
      title: 'Listar páginas do ClickTree',
      description: 'Lista as páginas disponíveis no site ClickTree.',
      inputSchema: {}
    },
    async () => ({
      content: [{
        type: 'text',
        text: PAGE_NAMES.map((page) => `${page} — ${PAGE_LABELS[page]}`).join('\n')
      }]
    })
  );

  server.registerTool(
    'ler_pagina',
    {
      title: 'Ler página do ClickTree',
      description: 'Retorna o texto visível de uma página HTML do ClickTree.',
      inputSchema: { page: z.enum(PAGE_NAMES) }
    },
    async ({ page }) => {
      const html = await readPage(page);
      return {
        content: [{
          type: 'text',
          text: `${PAGE_LABELS[page]} (${page})\n\n${stripHtml(html)}`
        }]
      };
    }
  );

  server.registerTool(
    'resumo_clicktree',
    {
      title: 'Resumo do ClickTree',
      description: 'Explica o propósito, o estado atual e as limitações demonstrativas do projeto.',
      inputSchema: {}
    },
    async () => ({
      content: [{
        type: 'text',
        text: [
          'ClickTree é um site/protótipo educativo sobre participação ambiental, restauração de ecossistemas e acessibilidade.',
          'O contador de cliques funciona apenas no navegador usando localStorage; não registra plantios reais.',
          'Os formulários atuais são demonstrações locais e não enviam mensagens.',
          'Para contas, pagamentos, antifraude ou métricas reais, é necessário adicionar um backend e um banco de dados.'
        ].join('\n')
      }]
    })
  );

  server.registerTool(
    'status_prototipo',
    {
      title: 'Status do protótipo',
      description: 'Informa quais recursos são apenas demonstrações locais.',
      inputSchema: {}
    },
    async () => ({
      content: [{
        type: 'text',
        text: JSON.stringify({
          site_estatico: true,
          contador_persistido_no_navegador: true,
          backend_de_contagem: false,
          formularios_conectados: false,
          pagamentos_reais: false,
          mcp_http: true
        }, null, 2)
      }]
    })
  );

  return server;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Mcp-Session-Id, Last-Event-ID');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (!['GET', 'POST', 'DELETE'].includes(req.method)) {
    res.status(405).json({ error: 'Método não permitido' });
    return;
  }

  const server = createServer();
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true
  });

  try {
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
  } catch (error) {
    console.error('MCP request failed:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Falha interna no servidor MCP' });
    } else {
      res.end();
    }
  } finally {
    await server.close().catch(() => {});
  }
}
