# ClickTree

Plataforma web educativa dedicada à conscientização ambiental, à
preservação das árvores e ao incentivo de práticas responsáveis de
arborização.

```{=html}
<p align="center">
```
`<a href="https://clicktree-site.vercel.app">`{=html}`<strong>`{=html}Acessar
o ClickTree`</strong>`{=html}`</a>`{=html}
```{=html}
</p>
```
```{=html}
<p align="center">
```
`<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">`{=html}
`<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">`{=html}
`<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">`{=html}
`<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">`{=html}
```{=html}
</p>
```
## Sobre o projeto

O **ClickTree** é um projeto acadêmico desenvolvido no contexto do curso
de Engenharia de Software da UNICID. A proposta é utilizar a tecnologia
como meio de educação e conscientização ambiental, apresentando
informações sobre a importância das árvores, iniciativas de preservação
e formas de participação da sociedade.

O site reúne páginas informativas e recursos de interação para tornar o
conteúdo mais acessível e facilitar a navegação entre os temas
abordados.

## Objetivos

### Objetivo geral

Desenvolver uma plataforma web que contribua para a conscientização
ambiental, destacando a importância das árvores e incentivando atitudes
responsáveis relacionadas à arborização e à preservação da natureza.

### Objetivos específicos

-   Apresentar informações educativas sobre a importância das árvores
    para o meio ambiente e para a qualidade de vida.
-   Divulgar projetos e iniciativas relacionados à preservação
    ambiental.
-   Reunir conteúdos informativos em diferentes formatos e seções.
-   Oferecer uma experiência de navegação responsiva e recursos básicos
    de acessibilidade.
-   Demonstrar, por meio de recursos interativos, como a participação
    digital pode ser associada à conscientização ambiental.

## Páginas e conteúdos

  -----------------------------------------------------------------------
  Página                              Descrição
  ----------------------------------- -----------------------------------
  **Início**                          Apresenta a proposta do ClickTree,
                                      destaca a participação do público e
                                      reúne chamadas para explorar o
                                      conteúdo do site.

  **Sobre**                           Explica a proposta do projeto, sua
                                      missão, visão, valores e
                                      compromisso com a transparência.

  **Projetos**                        Apresenta iniciativas e frentes
                                      temáticas relacionadas à
                                      restauração ecológica, à Mata
                                      Atlântica, às comunidades e à
                                      educação ambiental.

  **Impacto**                         Expõe indicadores e explica a
                                      diferença entre interações
                                      digitais, aquisição de mudas,
                                      plantio e sobrevivência das
                                      árvores.

  **Notícias**                        Reúne conteúdos educativos sobre
                                      transparência, acessibilidade e
                                      práticas responsáveis de plantio.

  **Galeria**                         Organiza imagens relacionadas à
                                      temática ambiental.

  **Mídia**                           Estrutura áreas destinadas a
                                      conteúdos em vídeo, podcasts,
                                      entrevistas e mapas.

  **Orçamento e hospedagem**          Apresenta informações sobre
                                      aspectos de desenvolvimento,
                                      infraestrutura e operação da
                                      plataforma.

  **Acessibilidade**                  Reúne orientações e recursos de
                                      navegação, incluindo opções de
                                      contraste e ajuste de tamanho do
                                      texto.

  **Contato**                         Disponibiliza um formulário
                                      demonstrativo para preenchimento de
                                      mensagens.
  -----------------------------------------------------------------------

## Funcionalidades

-   Navegação entre as páginas do projeto.
-   Menu responsivo para diferentes tamanhos de tela.
-   Ajuste do tamanho do texto.
-   Alternância de alto contraste.
-   Navegação por teclado e indicação visual de foco.
-   Contador demonstrativo de cliques, com atualização de indicadores na
    interface.
-   Desafio simples de verificação exibido periodicamente durante a
    interação com o contador.
-   Validação demonstrativa de formulários no navegador.

> **Importante:** os recursos de contador e formulários têm finalidade
> demonstrativa. O contador utiliza o armazenamento local do navegador e
> não representa, por si só, árvores efetivamente plantadas. Os
> formulários validam a interação no front-end, mas não enviam mensagens
> para um serviço de atendimento.

## Tecnologias utilizadas

  -----------------------------------------------------------------------
  Tecnologia                          Aplicação no projeto
  ----------------------------------- -----------------------------------
  **HTML5**                           Estruturação semântica das páginas
                                      e organização do conteúdo.

  **CSS3**                            Estilização, identidade visual,
                                      componentes e responsividade.

  **JavaScript**                      Interações da interface,
                                      preferências de acessibilidade,
                                      contador demonstrativo e validações
                                      no navegador.

  **Vercel**                          Hospedagem e publicação da versão
                                      on-line do projeto.

  **Git e GitHub**                    Controle de versão e armazenamento
                                      do código-fonte.

  **Cursor Rules (`.mdc`)**           Arquivos de orientação para
                                      padronizar o desenvolvimento, com
                                      diretrizes de HTML
                                      semântico/acessível e de
                                      organização/estilização do CSS.
  -----------------------------------------------------------------------

## Cursor Rules

O repositório inclui arquivos de regras do Cursor, escritos no formato
`.mdc`. Eles funcionam como orientações para o desenvolvimento e ajudam
a manter consistência entre os arquivos do projeto.

-   **`html-semantico(1).mdc`**: reúne diretrizes para a construção de
    páginas HTML semânticas e acessíveis, incluindo estrutura de
    cabeçalho, navegação e rodapé, hierarquia de títulos, identificação
    de idioma e uso de textos alternativos em imagens.
-   **`css-estilo(1).mdc`**: reúne padrões para a estilização, como uso
    de variáveis CSS, estados de foco, responsividade, seletores
    organizados e consistência visual.

Esses arquivos orientam quem desenvolve o projeto; não são necessários
para que o site seja exibido no navegador. O Cursor é um editor que pode
utilizar essas regras como contexto durante a edição do código.

## Estrutura do projeto

A organização abaixo representa os principais arquivos identificados no
código-fonte enviado. Os arquivos de imagem e outros recursos visuais
são mantidos na pasta `assets`.

``` text
ClickTree/
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
│   └── ... imagens e demais recursos visuais
├── .cursor/
│   └── rules/
│       ├── html-semantico.mdc
│       └── css-estilo.mdc
└── README.md
```

> Os nomes dos arquivos `.mdc` acima são apresentados de forma
> simplificada para facilitar a leitura da estrutura. Mantenha no
> repositório os nomes e caminhos efetivamente utilizados pela equipe.

## Como executar localmente

O ClickTree é um projeto front-end composto por HTML, CSS e JavaScript.
**Não é necessário instalar Python, Node.js ou outro ambiente de
desenvolvimento** para visualizar as páginas.

1.  Baixe o repositório pelo GitHub usando **Code → Download ZIP** e
    extraia o conteúdo, ou clone-o com Git:

    ``` bash
    git clone https://github.com/Richfers/u-nicid-eng-frontend-2260025-n3-2-2026-nt-clicktree.git
    ```

2.  Abra a pasta do projeto.

3.  Abra o arquivo `index.html` em um navegador atualizado, como Chrome,
    Firefox ou Edge.

Como alternativa, se você já utiliza o Visual Studio Code, pode abrir a
pasta do projeto e utilizar uma extensão de servidor local, como Live
Server. Essa extensão é opcional e não é uma dependência do site.

## Acessibilidade e responsividade

O projeto inclui recursos e práticas voltados à acessibilidade e à
adaptação a diferentes dispositivos, como:

-   Estruturação do conteúdo com elementos semânticos do HTML.
-   Identificação de idioma em português do Brasil.
-   Textos alternativos nas imagens, conforme sua finalidade.
-   Navegação por teclado e estilos de foco.
-   Opções de ajuste do tamanho do texto e alto contraste.
-   Adaptações de layout para diferentes larguras de tela.
-   Respeito à preferência do sistema por movimento reduzido.

## Publicação

A versão on-line do projeto está disponível em:

**<https://clicktree-site.vercel.app>**

O código-fonte está disponível no GitHub:

**[Richfers/u-nicid-eng-frontend-2260025-n3-2-2026-nt-clicktree](https://github.com/Richfers/u-nicid-eng-frontend-2260025-n3-2-2026-nt-clicktree)**

## Contexto acadêmico

Projeto desenvolvido como atividade acadêmica do curso de **Engenharia
de Software da Universidade Cidade de São Paulo (UNICID)**.

O ClickTree integra conhecimentos de desenvolvimento front-end,
estruturação semântica, estilização, responsividade e programação de
interações com JavaScript, aplicados a uma proposta de conscientização
ambiental.

------------------------------------------------------------------------

```{=html}
<p align="center">
```
`<strong>`{=html}ClickTree`</strong>`{=html}`<br>`{=html} Tecnologia e
conscientização em favor da preservação ambiental.
```{=html}
</p>
```
