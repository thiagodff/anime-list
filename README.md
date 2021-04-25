# Cache no frontend

Estratégias de estado no React: Estados globais, locais e o server side state

## Server Side State

É basicamente o controle dos dados que vem do back end, por exemplo em uma listagem de contatos, é interessante ter isso salvo para entregar de forma instantânea a listagem no próximo acesso do usuário e ao mesmo tempo realizar uma requisição ao back end a fim de verificar se houve alguma alteração dos dados.

Antigamente as pessoas jogavam esses dados no Redux e lidavam dessa forma para cachear as informações que vinham do banco de dados. Porém o Redux é uma estratégia de gerenciamento de estado e essa abordagem gerava vários reducers que não faziam nada além de salvar dados (e com isso ter que configurar action, saga, black list, white list, interface).

Hoje em dia temos abordagens e bibliotecas mais simples como React Query e o SWR para tratar o server side state.

O SWR é uma lib da Vercel que integra muito bem com o React e com o Next, porém, o React Query também funciona muito bem e oferece mais funcionalidades, sendo assim, mais utilizada.

## Instalando

```ts
yarn add react-query
```

## Funcionamento

O react query contém um query client que é um objeto você instância na sua aplicação, um singleton que pode ser acessado em qualquer lugar da aplicação

## React Query Devtools

Ele verifica se o node env é production, ou seja, não precisa se preocupar em tratar o dev tools na hora do build
