require('dotenv').config();

const axios = require('axios');

// História do usuário
const userStory = "Como um usuário, quero fazer login na loja usando meu nome de usuário e senha.";

// Função para gerar casos de teste
const generateTestCases = async (userStory) => {
    const modelId = "google/gemma-2-2b-it"; 
    const apiKey = process.env.HUGGINGFACE_API_KEY; 

    const prompt = `Baseado na história do usuário: "${userStory}", gere três casos de teste específicos e detalhados que validem este processo de login. Cada caso deve ser focado em uma funcionalidade diferente, como campos de entrada, autenticação de usuário e falhas potenciais.`;

    try {
        const response = await axios.post(
            `https://api-inference.huggingface.co/models/${modelId}`,
            { 
                inputs: prompt,
                parameters: { max_length: 500 },  // Limite de tamanho para evitar cortes
            },
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }
        );
        

        // Verificando o formato da resposta
        console.log("Resposta da API:", response.data);
        
        // Retorna os casos de teste gerados
        return response.data;
    } catch (error) {
        console.error("Erro ao chamar a API:", error.response ? error.response.data : error.message);
    }
};

// Executa a função para gerar os casos de teste
generateTestCases(userStory)
    .then(testCases => {
        if (testCases && testCases.length) {
            console.log("Casos de teste gerados:", testCases);
        } else {
            console.log("Nenhum caso de teste gerado.");
        }
    });
