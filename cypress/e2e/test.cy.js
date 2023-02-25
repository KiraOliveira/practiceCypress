//<reference types="cypress"/>

/*
Given a user visits https://example.cypress.io -- Dado a um usuário visita https://example.cypress.io
When they click the link labeled type -- Quando eles clicam em um link rotulando "tipo"
And they type "fake@email.com" into the [data-testid="action-email"] input -- E eles digitam "fake@email.com" na entrada [data-testid="action-email"]
Then the URL should include /commands/actions -- Então a URL deve incluir /commands/actions
And the [data-testid="action-email"] input has "fake@email.com" as its value -- E a entrada [data-testid="action-email"] tem o email "fake@email.com" como seu valor
*/

describe("Realizando uma busca no Google", () => {
  it("Navegando no site e buscando", () => {
    cy.visit("https://www.google.com.br/");

    cy.contains("Google");

    // Should be on a new URL which
    // includes '/commands/actions'
    //cy.url().should('include', '/commands/actions')

    // Get an input, type into it
    cy.get(".gLFyf").type("chocolate");

    cy.get(".aajZCb > .lJ9FBc > center > .gNO89b").click();

    // Verify that the value has been updated
    //cy.get('.action-email').should('have.value', 'fake@email.com')
  });
});
