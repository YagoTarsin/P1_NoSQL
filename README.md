# Nome do Projeto

Descrição breve sobre o que o projeto faz e o objetivo principal. Este projeto inclui funcionalidades de registro e login de usuários, utilizando um backend Node.js com Express e um banco de dados MongoDB.

## Funcionalidades

- **Registro de Usuário**: Permite que novos usuários se cadastrem no sistema fornecendo um nome de usuário, email e senha.
- **Login de Usuário**: Permite que usuários cadastrados façam login no sistema usando suas credenciais (nome de usuário e senha).

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor que executa o código do backend.
- **Express**: Framework web utilizado para construir as APIs de backend.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar as informações dos usuários.
- **Docker**: Plataforma que permite containerizar e gerenciar o ciclo de vida de aplicações.
- **Docker Compose**: Ferramenta utilizada para definir e rodar aplicações Docker com múltiplos containers.

## Pré-requisitos

Antes de começar, você precisa ter o Docker e o Docker Compose instalados em sua máquina. Isso pode ser feito seguindo os links abaixo:
- [Instalar Docker](https://www.docker.com/get-started)
- [Instalar Docker Compose](https://docs.docker.com/compose/install/)

## Como Rodar o Sistema

Siga os passos abaixo para configurar e rodar o sistema utilizando Docker Compose.

1. **Clonar o Repositório**

   Clone este repositório para sua máquina local usando:

   ```bash
   git clone https://github.com/YagoTarsin/P1_NoSQL.git
   cd nome-do-repositorio

2. **Configurar Variáveis de Ambiente**: Antes de iniciar a aplicação, é necessário configurar as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis para definir a URI de conexão com o MongoDB e a porta em que a aplicação será executada. Substitua `nomeDoBanco` pelo nome do seu banco de dados e, se necessário, ajuste o número da porta.

   ```plaintext
   MONGO_URI=mongodb://mongo:27017/nomeDoBanco
   PORT=3000
   ```
   Salve o arquivo .env com essas informações antes de prosseguir para o próximo passo.

3. **Construir e Rodar com Docker Compose**: Após configurar as variáveis de ambiente, use o Docker Compose para construir e iniciar o aplicativo. O Docker Compose usará o arquivo `docker-compose.yml` na raiz do projeto para criar os containers necessários para o aplicativo e o banco de dados MongoDB. Execute o comando abaixo na raiz do projeto para iniciar o processo:

   ```bash
   docker-compose up --build
   ```
   Este comando irá baixar as imagens necessárias, construir a imagem do seu aplicativo Node.js a partir do Dockerfile e iniciar os containers especificados. Aguarde até que todos os serviços estejam em execução.

4. **Acessar a Aplicação**: Com os containers em execução, o aplicativo está disponível e pode ser acessado através do navegador ou de outras ferramentas de cliente HTTP como o Postman. Para interagir com as páginas de Registro e Login, utilize as seguintes URLs:

   - Página de Registro: `http://localhost:3000/register.html`
   - Página de Login: `http://localhost:3000/login.html`

   Certifique-se de substituir `localhost` e `3000` se a sua aplicação está configurada para usar um host ou porta diferentes. As rotas da API para registro e login podem ser testadas e utilizadas através dessas páginas.

5. **Comandos Úteis**: Durante o desenvolvimento e a manutenção do sistema, você pode precisar utilizar comandos adicionais para gerenciar os containers Docker. Aqui estão alguns comandos que podem ser úteis:

   - Para parar os containers e remover os containers, redes, volumes e imagens criadas pelo `up`, execute:
     ```bash
     docker-compose down
     ```

   - Para visualizar os logs dos containers em execução em tempo real, utilize:
     ```bash
     docker-compose logs -f
     ```

   - Para pausar os serviços sem pará-los completamente, você pode usar:
     ```bash
     docker-compose pause
     ```

   - E para continuar a execução dos serviços pausados, utilize:
     ```bash
     docker-compose unpause
     ```

   Estes comandos ajudarão você a gerenciar o estado dos containers enquanto desenvolve e testa sua aplicação.

6. **Finalização e Limpeza**: Após terminar de usar os serviços, você pode querer limpar os recursos que não são mais necessários. Isso pode ser feito com comandos adicionais do Docker Compose:

   - Para parar todos os serviços ativos:
     ```bash
     docker-compose stop
     ```

   - Para remover todos os containers e a rede criada pelo Docker Compose, mas preservar os volumes:
     ```bash
     docker-compose down --volumes
     ```

