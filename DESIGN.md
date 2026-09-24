---
name: Portfólio de Vinícius F. Marrocos
description: Identidade Lima para um portfólio fullstack pessoal
colors:
  lime: "#c0f27c"
  lime-solid: "#adf156"
  lime-on: "#15200d"
  lime-hover: "#9add48"
  ink: "#0e0f0c"
  surface: "#191b15"
  surface-raised: "#24271d"
  text: "#fafbf5"
  muted: "#c3c8b7"
  subtle: "#9fa892"
  line: "#373c2d"
  paper: "#f7faef"
  light-accent: "#476f13"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(43px, 5.5vw, 76px)"
    fontWeight: 800
    lineHeight: 1.03
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(30px, 3.4vw, 47px)"
    fontWeight: 700
    lineHeight: 1.16
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "16px"
    lineHeight: 1.77
  label:
    fontFamily: "Geist Mono, monospace"
    fontSize: "12px"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  control: "6px"
  portrait: "8px"
spacing:
  chip-gap: "8px"
  card-padding: "24px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.lime-solid}"
    textColor: "{colors.lime-on}"
    rounded: "{rounded.control}"
    padding: "11px 21px"
  button-primary-hover:
    backgroundColor: "{colors.lime-hover}"
    textColor: "{colors.lime-on}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "11px 21px"
  project-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
---

# Design System: Portfólio de Vinícius F. Marrocos

## Overview

**Creative North Star: "Grade técnica em verde-lima"**

O visual escolhido pelo usuário combina a estrutura sóbria dos exemplos enviados com uma composição gráfica mais expressiva. A foto pessoal apresenta Vinícius; os dashboards reais sustentam os projetos. A interface usa espaço amplo, contornos discretos e verde-lima em pontos de ação e orientação.

**Key Characteristics:** fundo quase preto, texto branco suave, verde-lima pontual, nome em caixa alta, retrato retangular, cartões com prints reais.

## Colors

No tema escuro, `ink` é o fundo, `surface` e `surface-raised` separam blocos, `text` e `muted` estabelecem a hierarquia de leitura. `lime` orienta links e rótulos; `lime-solid` preenche a ação principal, com `lime-on` no texto e `lime-hover` no hover. No tema claro, `paper` é o fundo, os cartões são brancos e `light-accent` assume os destaques de texto. As variáveis CSS trocam seus valores com `data-theme='light'`; há uma só família de acento.

## Typography

Geist sustenta títulos e texto corrido; Geist Mono identifica grupos de tecnologias, etiquetas e o papel profissional. O nome usa peso 800, caixa alta e espaçamento apertado. O tamanho base do nome é `clamp(43px, 5.5vw, 76px)`, passando a `clamp(57px, 6vw, 80px)` acima de 900px; em telas até 760px e 520px há ajustes próprios. Títulos de seção usam a escala `headline`; o texto corrido usa 16px com entrelinha 1.77 e largura de até 76ch. O rótulo de grupos usa 12px, peso 500 e espaçamento de 0.08em.

## Layout

O conteúdo ocupa até 1080px, com seções principais de até 980px. No desktop, a abertura coloca o retrato de 260 × 320px à esquerda e o texto à direita. Os dois projetos ficam lado a lado. Abaixo de 900px, a abertura se centraliza; até 760px, os projetos formam uma coluna e o menu vira um painel vertical. Até 520px, a stack também vira uma coluna. A grade de fundo usa módulos sutis de 24px. Os 112px de `spacing.section` são a referência da seção padrão; seções específicas variam seu respiro.

## Elevation & Depth

O sistema é quase plano. Diferenças de tom, linhas finas e a moldura dos projetos criam profundidade; o retrato usa sombra difusa (`0 16px 42px rgb(0 0 0 / 0.13)`). O menu aberto no celular também recebe uma sombra leve para se separar da página. Ao passar o ponteiro, o cartão de projeto sobe 4px, ganha borda de acento e sombra (`0 16px 36px rgb(0 0 0 / 0.18)`).

## Shapes

Controles, chips e cartões usam cantos de 6px. O retrato usa 8px. Os três pontos da barra dos projetos preservam o formato circular reconhecível de uma janela de navegador.

## Components

### Buttons

O botão principal é verde-lima com texto `lime-on`; o secundário tem fundo de superfície e borda. Ambos têm altura mínima de 46px, deslocam 2px no hover e mantêm contorno de foco visível. No tema claro, as cores mudam pelos mesmos papéis sem alterar a forma.

### Chips

Tecnologias de projetos aparecem em etiquetas retangulares de fundo tonal e texto de alto contraste; as competências da seção de stack usam uma variante maior, com borda fina. Quando entram na área visível, essas competências crescem de escala 0.9 para 1, escalonadas em intervalos de 30ms dentro de cada grupo.

### Cards / Containers

Cada projeto usa um cartão de 6px com barra de navegador, print real do dashboard, resumo, tecnologias, links e detalhes expansíveis. `spacing.card-padding` corresponde ao corpo interno do cartão; a mídia e a barra ficam sem esse preenchimento. Os cartões entram na leitura em sequência, com 80ms entre eles, e recebem o deslocamento e a sombra descritos em Elevation & Depth no hover.

### Navigation

O cabeçalho é `sticky` no topo. Âncoras levam às seções; no celular, o menu abre verticalmente. O tema claro/escuro permanece salvo no navegador. Uma linha de progresso verde-lima de 2px fica fixa no alto da tela e cresce horizontalmente conforme a rolagem.

### Motion

Na abertura, o retrato entra de escala 0.78, passa por 1.03 e termina em 1 (`700ms`, atraso de `200ms`, curva `cubic-bezier(.2,.8,.2,1)`). Nome, papel, introdução e ações entram de 20px abaixo e opacidade zero (`600ms ease-out`), com atrasos respectivos de 300, 350, 400 e 500ms. Os links sociais surgem por opacidade (`600ms`, atraso de 600ms). A seta aparece por opacidade e oscila 10px para baixo em um ciclo de 1500ms após atraso de 1500ms.

Títulos, textos, grupos, cartões e contato revelam-se uma vez ao entrar na viewport: transição de opacidade e deslocamento vertical de 16px (`500ms ease-out`), acionada por `IntersectionObserver`. Se o observador não estiver disponível, o conteúdo é mostrado diretamente. Com `prefers-reduced-motion: reduce`, animações e rolagem suave são desativadas e as transições são quase instantâneas.

## Do's and Don'ts

### Do:

- **Do** usar imagens reais dos projetos e retrato fornecido pelo proprietário.
- **Do** reservar o verde-lima para destaque, ação e orientação.
- **Do** manter a legibilidade dos dois temas e a navegação por teclado.

### Don't:

- **Don't** criar dashboards falsos para representar projetos.
- **Don't** introduzir um segundo acento de interface que dispute com o verde-lima.
- **Don't** arredondar novos controles como pílulas; usar a escala de cantos definida.
