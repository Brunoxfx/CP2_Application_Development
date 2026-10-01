# Calculadora de IMC

**Nome:** Bruno anselmo da silva

**RM:** 566521

Aplicação React para cálculo do Índice de Massa Corporal (IMC), desenvolvida na atividade de Application Development da Aula 19.

## Tecnologias

- React 19 e JavaScript.
- Vite 8.
- CSS.
- ESLint.

## Instalação e execução

Requisitos: Node.js 22, a partir da versão 22.13, ou Node.js 24 ou superior; npm.

Na pasta do projeto, execute:

```bash
npm ci
npm run dev
```

O endereço de acesso é exibido no terminal.

### Comandos

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run lint` | Verifica o código com ESLint. |
| `npm run build` | Gera os arquivos de produção em `dist/`. |
| `npm run preview` | Inicia a prévia local do build. |

## Funcionalidades

- Entrada de altura em metros e peso em quilogramas, com vírgula ou ponto decimal.
- Validação de campos vazios, valores não numéricos, negativos e zero.
- Cálculo pelo botão **Calcular** ou pela tecla Enter.
- Exibição do IMC, da classificação e da tabela de referência.
- Destaque da linha correspondente ao resultado.
- Botão **Limpar** para apagar os campos e as mensagens de erro.
- Botão **Voltar** para iniciar um novo cálculo.
- Layout responsivo para celular e computador.

## Cálculo e classificação

```text
IMC = peso (kg) / altura (m)²
```

O resultado é arredondado para uma casa decimal antes da classificação. Altura de 1,75 m e peso de 70,5 kg resultam em IMC 23,0, classificado como Normal.

As faixas e os graus de obesidade estão definidos em `src/data/data.js`, conforme a tabela da Aula 19. O limite superior da última faixa é 99. Resultados fora dos intervalos exibem a mensagem “IMC fora das faixas da tabela da aula”, sem destacar uma linha.

## Organização do código

| Arquivo | Responsabilidade |
| --- | --- |
| `src/App.jsx` | Cálculo, classificação e controle da tela exibida. |
| `src/components/ImcCalc.jsx` | Formulário e validação dos campos. |
| `src/components/ImcTable.jsx` | Resultado e tabela de classificações. |
| `src/components/Button.jsx` | Componente de botão. |
| `src/data/data.js` | Dados das faixas de IMC. |
| `src/main.jsx` | Inicialização da aplicação. |

Os estados são gerenciados com `useState`. Cada componente possui seu arquivo CSS; os estilos gerais ficam em `src/index.css` e `src/App.css`.

## Erro de cache na instalação

Se `npm ci` apresentar erro `EEXIST` no cache, execute:

```bash
npm ci --cache .npm-cache
```
