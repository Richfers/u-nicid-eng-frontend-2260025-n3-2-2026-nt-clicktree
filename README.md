# ClickTree

O ClickTree é um site acadêmico de educação ambiental. Ele apresenta a importância das árvores, orientações de plantio, organizações citadas em um material de referência e dados informados por esse material. Também demonstra, no navegador, como uma participação digital pode ser registrada sem ser confundida com plantio real.

O projeto foi desenvolvido no curso de Engenharia de Software da Universidade Cidade de São Paulo (UNICID).

## Tecnologias

O site usa somente HTML, CSS e JavaScript. Não há framework, banco de dados nem etapa de instalação. As fotografias das páginas são carregadas de endereços externos escritos no HTML. Os desenhos locais ficam em `ClickTree/assets/` e são arquivos SVG.

## Como abrir

1. Abra a pasta `ClickTree`.
2. Abra o arquivo `index.html` em um navegador atual, como Chrome, Firefox ou Edge.

Não é preciso instalar Python, Node.js ou outra ferramenta para ver o site. Um servidor local é opcional.

O contador e as preferências de acessibilidade usam o armazenamento do próprio navegador. Se a página for aberta diretamente pelo arquivo, esses dados ficam associados a essa origem.

## Estrutura

```text
.
├── README.md
├── .cursor/
│   └── rules/
│       ├── html-semantico.mdc
│       └── css-estilo.mdc
└── ClickTree/
    ├── index.html
    ├── sobre.html
    ├── projetos.html
    ├── impacto.html
    ├── noticias.html
    ├── galeria.html
    ├── midia.html
    ├── orcamento_hospedagem.html
    ├── acessibilidade.html
    ├── contato.html
    ├── assets/
    │   ├── style.css
    │   ├── app.js
    │   ├── favicon.svg
    │   ├── tree.svg
    │   └── nature-illustration.svg
    └── docs/
        └── conteudo-a-ser-inserido-no-site/
            └── Conteúdo para ClickTree.docx
```

As regras em `.cursor/rules/` orientam a edição no Cursor. O navegador não precisa delas para exibir o site.

## Páginas

O menu principal liga Início, O projeto, Projetos, Impacto, Notícias, Galeria, Acessibilidade e Contato. Mídia e Orçamento existem, mas não aparecem nesse menu: abra os arquivos correspondentes diretamente.

| Página | Arquivo | Função |
| --- | --- | --- |
| Início | `ClickTree/index.html` | Apresenta o projeto, um aviso de que se trata de um protótipo fictício, uma faixa de fotos e o contador demonstrativo. |
| Sobre | `ClickTree/sobre.html` | Explica a origem, a missão, a visão e os valores do ClickTree, e acrescenta os benefícios das árvores descritos no material oficial. |
| Projetos | `ClickTree/projetos.html` | Mostra três frentes ilustrativas do projeto e, em seção separada, sete organizações citadas no material de referência. Essas organizações não são apresentadas como parceiras do ClickTree. |
| Impacto | `ClickTree/impacto.html` | Diferencia cliques, mudas e sobrevivência. Mantém uma tabela-modelo e publica duas tabelas com indicadores informados no material, além das fontes 7 a 19, sem endereços. |
| Notícias | `ClickTree/noticias.html` | Reúne três chamadas educativas e o passo a passo de plantio consciente, inclusive as orientações municipais ainda pendentes de confirmação. |
| Galeria | `ClickTree/galeria.html` | Organiza fotografias com legenda. Em telas de até 600 px a grade fica em uma coluna. |
| Mídia | `ClickTree/midia.html` | Reserva espaços para vídeo, áudio e mapa. Esses conteúdos ainda não estão publicados. |
| Orçamento e hospedagem | `ClickTree/orcamento_hospedagem.html` | Registra notas de planejamento técnico e respostas sobre o que o protótipo ainda não faz. |
| Acessibilidade | `ClickTree/acessibilidade.html` | Explica teclado, tamanho do texto, contraste e outras orientações de uso. |
| Contato | `ClickTree/contato.html` | Oferece um formulário de demonstração. O envio não chega a um serviço externo. |

O texto oficial usado nas páginas Sobre, Projetos, Impacto e Notícias está em `ClickTree/docs/conteudo-a-ser-inserido-no-site/Conteúdo para ClickTree.docx`. Os indicadores de 2025/2026 e os procedimentos municipais foram copiados desse documento e ainda precisam ser conferidos nas fontes originais.

## Arquivos de estilo e comportamento

`ClickTree/assets/style.css` é a única folha de estilo. Ela define as cores, a tipografia, o menu, os cartões, a galeria, as tabelas, os formulários e as adaptações de largura.

`ClickTree/assets/app.js` é o único script. Ele controla o menu em telas menores, o tamanho do texto, o alto contraste, o contador, a verificação periódica de cliques e a resposta dos formulários de demonstração. As preferências ficam nas chaves `ct-font-scale`, `ct-contrast` e `ct-clicks`.

## Funcionalidades

- Navegação entre as páginas do menu e link para pular ao conteúdo.
- Menu que passa a ser aberto por botão quando a largura chega a 900 px.
- Botões para aumentar ou diminuir o texto, entre 90% e 125%, com a escolha guardada no navegador.
- Alto contraste, também guardado no navegador.
- Indicação visual de foco para teclado.
- Contador local de cliques, barra de progresso e uma conta simples depois de 25 cliques na mesma visita.
- Validação dos formulários no navegador, sem envio externo.

O contador não comprova árvore plantada. Os formulários não enviam mensagens. A página de Mídia não contém vídeo, podcast nem mapa funcionando.

## Manutenção

- Altere o visual em `ClickTree/assets/style.css` e o comportamento em `ClickTree/assets/app.js`.
- Mantenha uma única declaração `<!DOCTYPE html>` na primeira linha de cada página.
- Conserve o aviso da página inicial: o ClickTree é um projeto hipotético.
- Ao incluir um número do material oficial, conserve a fonte indicada no documento e não o apresente como resultado do ClickTree.
- Não trate as organizações citadas como parceiras do projeto.
- As regras de `.cursor/rules/` descrevem o padrão de HTML semântico e de CSS usado na edição.

## Publicação

O endereço associado ao projeto no material anterior é <https://clicktree-site.vercel.app>.
