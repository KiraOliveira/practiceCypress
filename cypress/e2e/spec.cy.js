//describe('template spec', () => {
//  it('passes', () => {
//    cy.visit('https://example.cypress.io')
//  })
//})


//describe('My first Test', () => {
//  it('Does not do much!', () => {
//    expect(true).to.equal(true)
//  });
//});


//describe('My First Test', () => {
//  it('Does not do much!', () => {
//    expect(true).to.equal(false)
//  });  
//});


describe('My First Test', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    // Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  });
});