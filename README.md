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


