<h1 style="text-align: center;">Search Band App</h1>

<div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
  <img target="_blank" align="center" alt="icon-TS" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
  <img target="_blank" align="center" alt="icon-NEXT" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img target="_blank" align="center" alt="icon-TAILWIND" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"> 
  <img target="_blank" align="center" alt="icon-REACT-QUERY" src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"> 
  <img target="_blank" align="center" alt="icon-SHADCN" src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white"> 
  <img target="_blank" align="center" alt="icon-VITEST" src="https://img.shields.io/badge/vitest-000000?style=for-the-badge&logo=vitest"> 
  <img target="_blank" align="center" alt="icon-CYPRESS" src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white"> 
  <img target="_blank" align="center" alt="icon-ESLINT" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white">
  <img target="_blank" align="center" alt="icon-PRETTIER" src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E">
</div>

## 📖 Descrição

O Search Band App é uma aplicação que permite pesquisar por bandas e visualizar informações sobre elas. Basta utilizar o campo de pesquisa e buscar pela sua banda favorita!

[Preview](https://search-band-app.vercel.app/)

## 📦 Instalação

```bash
# clone o repositório
git clone https://github.com/wesleyara/job-frontend-developer

# acesse a pasta do projeto
cd job-frontend-developer

# instale as dependências
npm install
# ou
yarn
```

## 🔨 Execução

```bash
# execute a aplicação
npm run dev
# ou
yarn dev
```

Para executar utilizando o Docker, basta executar o comando:

```bash
# construa a imagem
docker build -t search-band-app .

# execute o container
docker run -p 3000:3000 search-band-app
```

Em seguida, abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

## 🚀 Tecnologias

- _TypeScript_ - Linguagem de programação
- _Next.js_ - Framework de desenvolvimento web
- _Tailwind CSS_ - Framework de estilos
- _React Query_ - Biblioteca de gerenciamento de estado
- _shadcn/ui_ - Componentes de interface
- _Vitest_ - Testes unitários
- _Cypress_ - Testes end-to-end
- _Eslint_ - Linter de código
- _Prettier_ - Formatador de código
- _Docker_ - Containerização da aplicação
- _CI/CD_ - Integração contínua e entrega contínua

Além disso, o projeto conta com a utilização de serviços externos, como:

- [_Ticket Master_](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/) - Para buscar informações relacionados à banda pesquisada.
- [_Youtube API_](https://developers.google.com/youtube/v3/getting-started) - Para buscar vídeos relacionados à banda pesquisada.

## 📝 Testes

Para executar os testes unitários, basta executar o comando:

```bash
npm run test:run
# ou
yarn test:run
```

## ✅ Explicando o processo de desenvolvimento

O app conta como uma única página, onde o usuário pode pesquisar por uma banda e visualizar informações sobre ela. 

Comecei o desenvolvimento do projeto estruturando o ambiente de desenvolvimento, criando a aplicação em _Next.js_ e configurando o _eslint_, _prettier_, _vitest_ e _tailwind_.

Utilizei de um padrão de pastas muito presente no mercado, onde separei a aplicação em _components_, _contexts_, _lib_ e _types_.

Durante o desenvolvimento optei por utilizar um design pattern chamado de _Composition_, que permite maior flexibilidade, facilidade nos testes unitários e reutilização de código, já que fazemos muito uso de componentes.

Para a busca de informações utilizando o protocolo HTTP, resolvi criar uma interface e uma classe (_HttpClient_) que implementa essa interface, para que possamos trocar de serviço de busca de informações sem alterar o código da aplicação. Utilizando do princípio de _Dependency Inversion_.

Para a busca de informações, utilizei a API do _Ticket Master_ e _Youtube API_, onde a primeira é utilizada para buscar informações sobre a banda pesquisada e a segunda para buscar vídeos relacionados à banda.

O _React Query_ foi utilizado para gerenciar o estado da aplicação, onde é possível fazer cache das informações e atualizá-las de forma automática. Além disso, fiz o uso de um contexto global para armazenar alguns estados da aplicação.

Para os testes unitários, utilizei o _Vitest_, onde é possível testar componentes, hooks e funções de forma isolada.

Para os testes end-to-end, utilizei o _Cypress_, onde é possível testar a aplicação de forma mais realista, simulando ações do usuário.

Por fim, configurei _CI/CD_ para o Github Actions, utilizei o _Docker_ para containerizar a aplicação e o _Vercel_ para fazer o deploy da aplicação.

## 🧑 Autor

<table>
  <tr>
    <td align="center"><a href="https://wesleyaraujo.dev/"><img src="https://avatars.githubusercontent.com/u/89321125?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Wesley Araújo</b></sub></a><br /></td>
  </tr>
</table>