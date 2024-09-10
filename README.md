# Campaign Manager Web
Este é o frontend de um sistema de gerenciamento de campanhas, desenvolvido em React com Material-UI. O sistema permite visualizar, criar, editar e excluir campanhas, além de listar as campanhas disponíveis com integração a uma API backend.

## Funcionalidades
- Listagem de campanhas com opções de visualizar, editar e excluir.
- Criação e edição de campanhas.
- Validação de datas no formulário.
- Integração com uma API RESTful.
- Utilização do Material-UI para design e componentes estilizados.

## Pré-requisitos
- **Node.js** (versão 16 ou superior)
- **npm** (ou yarn) para gerenciar pacotes
- **Backend** configurado e em execução (ver [Campaign Manager API](https://github.com/pedrocezar/campaign-manager-ai))

## Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/pedrocezar/campaign-manager-web.git
   cd campaign-manager-web
2. Instale as dependências:
    ````bash
    npm install
3. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
A aplicação estará disponível em http://localhost:4000.

## Como Usar
**Listar Campanhas**: A página inicial (`/campaigns`) exibe uma lista de todas as campanhas disponíveis. Você pode visualizar os detalhes, editar ou excluir uma campanha diretamente da lista.

**Criar uma Nova Campanha**: Navegue até a página de criação de campanha clicando no botão "Add Campaign". Preencha os campos obrigatórios, incluindo as datas, e clique em "Save Campaign".

**Editar Campanha**: Na página de listagem, clique em "View" para editar os detalhes da campanha selecionada.

**Excluir Campanha**: No botão "Delete" você pode remover uma campanha, que será marcada como "inativa".

## Tecnologias Usadas
**React.js** - Biblioteca para criação da interface de usuário.

**Material-UI** - Biblioteca de componentes para React com design moderno.

**Axios** - Cliente HTTP para integração com a API de campanhas.

**React Router DOM** - Gerenciamento de rotas no frontend.

## Scripts Disponíveis
`npm start` - Inicia o servidor de desenvolvimento.

`npm run build` - Cria a build otimizada para produção.

`npm test` - Executa os testes.

