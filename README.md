# Test Case Generation I.A e Cypress

## Descrição do Projeto

Este projeto integra **Inteligência Artificial (IA)** e **Cypress** para automatizar a geração e execução de casos de teste. Utilizamos a API do Hugging Face para gerar casos de teste a partir de histórias de usuários, e o Cypress para automatizar e validar esses testes na aplicação de **login** de uma loja online.

## Funcionalidades

- **Geração Automática de Casos de Teste**: Utilizando IA para criar casos de teste com base nas histórias de usuários.
- **Execução de Testes com Cypress**: Automação e execução dos testes gerados na aplicação de login da loja.
- **Cobertura de Cenários Críticos de Login**: Casos de teste focados em sucesso, erros de autenticação, e validação de campos obrigatórios.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no backend.
- **Cypress**: Ferramenta de automação de testes end-to-end.
- **Hugging Face API**: API para processamento de linguagem natural e IA.
- **Dotenv**: Gerenciamento seguro de variáveis de ambiente, como chaves de API.
- **Axios**: Cliente HTTP usado para fazer chamadas à API Hugging Face.

## Estrutura do Projeto

```plaintext
test-case-generation/
│
├── .env                     # Arquivo de configuração com a chave da API Hugging Face
├── node_modules/             # Dependências do Node.js
├── cypress/                  # Diretório contendo os testes Cypress
│   └── integration/
│       └── logon.spec.js     # Testes automatizados para login
├── src/
│   └── generateTests.js      # Script de geração de casos de teste com IA
├── package.json              # Arquivo de configuração do projeto Node.js
└── README.md                 # Documentação do projeto

```

## Como Utilizar

## 1. Clonar o Repositório
Clone o repositório localmente com o comando:

```
git clone https://github.com/sousafael/test-case-generation.git
cd test-case-generation

```

## 2. Instalar Dependências
Instale as dependências do projeto:
```
npm install
```

## 3. Configurar a Chave da API
Crie um arquivo .env na raiz do projeto e adicione a sua chave da API do Hugging Face:
```
HUGGINGFACE_API_KEY=your-hugging-face-api-key
```
Substitua your-hugging-face-api-key pela chave real da API.

## 4. Gerar Casos de Teste
Execute o script para gerar casos de teste a partir de uma história de usuário:
```
node src/generateTests.js
```
Este comando vai chamar a API do Hugging Face e gerar casos de teste com base na história fornecida.

## 5. Executar Testes com Cypress
Para rodar os testes com Cypress, execute:
```
npx cypress open
```
Isso abrirá a interface do Cypress, onde você poderá visualizar e executar os testes. Selecione o arquivo logon.spec.js para rodar os testes de login.

Exemplos de casos de teste que podem ser gerados:

- Login com credenciais corretas: Verifica se o login ocorre com sucesso ao fornecer um nome de usuário e senha válidos.
- Login com senha incorreta: Testa se a aplicação exibe a mensagem de erro apropriada ao fornecer uma senha incorreta.
- Campos obrigatórios vazios: Valida que a aplicação impede o login se os campos obrigatórios, como nome de usuário ou senha, estiverem vazios.

## Contribuições
Contribuições são bem-vindas! Para sugerir melhorias, abra um pull request ou crie uma issue no repositório.
   



