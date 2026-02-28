---
title: "Guia Completo de Markdown"
subtitle: "Esto"
date: 2024-02-09
draft: false
categorias: ["Dieta", "Teologia"]
toc: true
series: [grana]
part: 1
---

# Título H1
## Título H2
### Título H3
#### Título H4
##### Título H5
###### Título H6

---

## Parágrafos e Quebras de Linha

Este é um parágrafo normal com texto corrido. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Este é outro parágrafo. Duas linhas em branco separam parágrafos.

Esta linha tem uma quebra forçada no final (dois espaços + Enter).  
Esta é a linha seguinte.

---

## Ênfase

*itálico com asterisco*  
_itálico com underline_  
**negrito com asterisco**  
__negrito com underline__  
***negrito e itálico***  
~~texto tachado~~  

---

## Blockquotes

> Isto é uma citação simples.

> Isto é uma citação com múltiplas linhas.
> Segunda linha da citação.

> Citação aninhada:
>> Nível 2
>>> Nível 3

> Citação com **formatação** dentro.

---

## Listas

### Lista não ordenada

- Item 1
- Item 2
  - Sub-item 2.1
  - Sub-item 2.2
    - Sub-item 2.2.1
- Item 3

* Também funciona com asterisco
* Item B

+ E com sinal de mais
+ Item X

### Lista ordenada

1. Primeiro
2. Segundo
3. Terceiro
   1. Sub-item 3.1
   2. Sub-item 3.2
4. Quarto

### Lista de tarefas (Task List)

- [x] Tarefa concluída
- [ ] Tarefa pendente
- [x] Outra tarefa concluída
- [ ] Mais uma pendente

---

## Código

### Código inline

Use o comando `git status` para verificar o repositório.

Também funciona com `variáveis`, `funções()` e `{{ templates }}`.

### Bloco de código sem linguagem

```
Bloco de código simples
sem highlight
```

### Bloco de código com linguagem

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Exemplo</title>
</head>
<body>
  <h1>Olá, Mundo!</h1>
</body>
</html>
```

```css
body {
  font-family: sans-serif;
  background-color: #f0f0f0;
  color: #333;
}
```

```javascript
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Mundo"));
```

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(10))
```

```bash
#!/bin/bash
echo "Olá, Mundo!"
ls -la
```

```toml
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
```

```json
{
  "nome": "Claude",
  "versao": 4,
  "ativo": true,
  "tags": ["ia", "assistente"]
}
```

---

## Links

[Link simples](https://example.com)

[Link com título](https://example.com "Título ao passar o mouse")

[Link relativo](/sobre)

Link automático: <https://example.com>

Email automático: <email@exemplo.com>

### Links de referência

Este é um [link de referência][ref1] e este é [outro][ref2].

[ref1]: https://example.com "Referência 1"
[ref2]: https://example.com/outro "Referência 2"

---

## Imagens

![Texto alternativo](https://via.placeholder.com/400x200 "Título da imagem")

![Imagem de referência][img-ref]

[img-ref]: https://via.placeholder.com/200x100 "Imagem via referência"

### Imagem com link

[![Imagem clicável](https://via.placeholder.com/300x150)](https://example.com)

---

## Tabelas

### Tabela básica

| Coluna 1 | Coluna 2 | Coluna 3 |
|----------|----------|----------|
| Dado 1   | Dado 2   | Dado 3   |
| Dado 4   | Dado 5   | Dado 6   |

### Tabela com alinhamento

| Esquerda | Centro | Direita |
|:---------|:------:|--------:|
| texto    | texto  | texto   |
| 1        | 2      | 3       |
| longo    | médio  | curto   |

### Tabela com formatação nas células

| Nome      | Descrição                  | Status     |
|-----------|----------------------------|------------|
| **Alpha** | *Primeira versão*          | ~~inativo~~|
| **Beta**  | `versao_beta()`            | **ativo**  |
| **Gamma** | [Link](https://example.com)| **ativo**  |

---

## Régua Horizontal

Três formas diferentes:

---

***

___

---

## HTML Inline (requer `unsafe = true` no Goldmark)

<p>Parágrafo em HTML puro.</p>

<strong>Negrito via HTML</strong>

<mark>Texto destacado (highlight)</mark>

<kbd>Ctrl</kbd> + <kbd>C</kbd>

<sup>Sobrescrito</sup> e <sub>subscrito</sub>

<details>
  <summary>Clique para expandir</summary>
  Conteúdo oculto revelado ao clicar!
</details>

<br>

---

## Escape de Caracteres

\*não é itálico\*  
\*\*não é negrito\*\*  
\# não é título  
\[não é link\]  
\`não é código\`  
\> não é blockquote  

---

## Notas de Rodapé (Footnotes)

Este texto tem uma nota de rodapé[^1] e outra aqui[^nota-longa].

[^1]: Esta é a nota de rodapé simples.

[^nota-longa]: Esta é uma nota de rodapé mais longa.
    Pode ter múltiplas linhas com indentação.

---

## Definições (Definition Lists)

Termo 1
: Definição do termo 1.

Termo 2
: Primeira definição do termo 2.
: Segunda definição do termo 2.

---

## Abreviações

*[HTML]: HyperText Markup Language
*[CSS]: Cascading Style Sheets

HTML e CSS são tecnologias fundamentais da web. (passe o mouse sobre as siglas)

---

## Âncoras e IDs

### Seção com ID personalizado {#meu-id}

Link para a seção: [Ir para seção](#meu-id)

---

## Texto Literal e Espaços

Texto com    múltiplos espaços (colapsados no HTML).

    Texto com 4 espaços de indentação = bloco de código (método alternativo)
    Segunda linha do bloco

---

## Listas com Blocos Internos

- Item com parágrafo interno.

  Este parágrafo pertence ao item da lista acima.

- Item com código interno:

  ```python
  print("dentro da lista")
  ```

- Item com citação:

  > Citação dentro de uma lista.

---

## Combinações e Edge Cases

> **Citação em negrito** com `código inline` e [link](https://example.com).

- Lista com ***negrito e itálico*** e ~~tachado~~ juntos.

| Col 1 | Col 2 |
|-------|-------|
| `código` | **negrito** |

---

*Fim do arquivo de teste — 100% das funcionalidades CommonMark + extensões Goldmark.*