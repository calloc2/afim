# Projeto MobiGlobal

Este documento fornece instruções para instalar e configurar o projeto MobiGlobal em sua máquina local.

## Pré-requisitos

Certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)
- [Ionic CLI](https://ionicframework.com/)

## Passo a passo para instalação

1. **Clone o repositório**
    ```bash
    git clone https://github.com/calloc2/mobiglobal.git
    cd mobiglobal
    ```

## Como Executar

### 1. Backend (Django)
- Suba os containers Docker, estando na pasta raíz:
    ```bash
    docker-compose up
    ```
- O backend estará disponível em: [http://localhost:8000](http://localhost:8000).

### 2. Frontend (Angular + Ionic)
- Instale as dependências:
    ```bash
    cd frontend
    npm install
    ```
- Inicie o servidor de desenvolvimento:
    ```bash
    ionic serve
    ```
- O frontend estará disponível em: [http://localhost:8100](http://localhost:8100).

## Comunicação entre Frontend e Backend

O frontend se comunica com o backend via API REST configurada no arquivo `environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000'
};
```

## Tecnologias Utilizadas

- **Backend**: Django, PostgreSQL, Django REST Framework
- **Frontend**: Angular, Ionic Framework
- **Containerização**: Docker, Docker Compose