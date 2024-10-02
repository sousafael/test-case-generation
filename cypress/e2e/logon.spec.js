describe('Teste de Login', () => {
    it('Login com usuário e senha válidos', () => {
        // Adicione seu código de teste aqui
        cy.visit('http://165.227.93.41/lojinha-web/v2/');
        cy.get('input[name="usuario"]').type('admin', { force: true });
        cy.get('input[name="senha"]').type('admin', { force: true });
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/produto');  // Verifica se a URL está correta após login
    });

  });
