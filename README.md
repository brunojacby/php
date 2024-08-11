# Projeto CRUD com Angular e PHP

Este é um projeto simples de CRUD (Create, Read, Update, Delete) utilizando Angular para o frontend e PHP para o backend. O projeto permite a visualização e manipulação de dados de livros usando uma API.

## Estrutura do Projeto

- **Frontend (Angular):** Implementado usando Angular CLI para criar a interface de usuário.
- **Backend (PHP):** Implementado usando PHP para fornecer a API RESTful.

## Requisitos

- **Node.js (v18.19 ou superior)**
- **Angular CLI**
- **PHP**
- **Servidor Web (Apache ou Nginx) ou Servidor PHP Embutido**

## Configuração

### Backend (PHP)

1. **Instalar o PHP:**
   - Certifique-se de que o PHP está instalado e configurado no seu sistema. Você pode verificar a instalação com `php -v`.

2. **Configurar o Backend:**
   - Coloque seus arquivos PHP no diretório `backend` do projeto.
   - Inicie o servidor PHP embutido para testes rápidos:

     ```bash
     php -S localhost:8000 -t backend
     ```

   - Se estiver usando um servidor web como Apache ou Nginx, configure-o para servir o conteúdo do diretório `backend`.

### Frontend (Angular)

1. **Instalar Node.js e Angular CLI:**
   - Certifique-se de que o Node.js está instalado. Você pode verificar com `node -v`.
   - Instale o Angular CLI globalmente:

     ```bash
     npm install -g @angular/cli
     ```

2. **Configurar o Frontend:**
   - Navegue até o diretório do projeto Angular e instale as dependências:

     ```bash
     cd frontend
     npm install
     ```

   - Se você configurou um proxy para redirecionar chamadas API, certifique-se de que o arquivo `proxy.conf.json` está configurado corretamente.

3. **Executar o Frontend:**
   - Inicie o servidor de desenvolvimento do Angular:

     ```bash
     ng serve --proxy-config proxy.conf.json
     ```

   - O aplicativo Angular estará disponível em `http://localhost:4200`.

## Estrutura de Diretórios

project-root/
├── backend/
│ ├── api/
│ ├── index.php
│ └── ...
├── frontend/
│ ├── src/
│ ├── angular.json
│ ├── package.json
│ └── ...
├── proxy.conf.json
└── README.md


## Endpoints da API

- **GET /api/books** - Lista todos os livros.
- **GET /api/books/{id}** - Obtém um livro específico por ID.
- **POST /api/books** - Adiciona um novo livro.
- **PUT /api/books/{id}** - Atualiza um livro existente.
- **DELETE /api/books/{id}** - Remove um livro.

## Contribuição

Se você deseja contribuir para o projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch para suas alterações (`git checkout -b minha-nova-funcionalidade`).
3. Faça as alterações e adicione testes, se possível.
4. Faça commit das suas alterações (`git commit -am 'Adiciona nova funcionalidade'`).
5. Faça push para a branch (`git push origin minha-nova-funcionalidade`).
6. Crie uma pull request para a branch principal do repositório.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Para mais informações ou suporte, entre em contato:

- **GitHub:** [seu-github](https://github.com/brunojacby/)
