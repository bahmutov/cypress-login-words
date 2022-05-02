/// <reference types="cypress" />

it('does not log in with wrong words', () => {
  cy.visit('public/index.html')
    // wait 1 second for clarity
    .wait(1000)
  cy.contains('button', 'I remember', { matchCase: false }).click()
  // the section changes
  cy.get('section#login').should('be.visible')
  cy.get('input[type=text]').each(($input, k) => {
    cy.wrap($input).type('word' + (k + 1))
  })
  cy.contains('#login-button', 'Log in', { matchCase: false }).click()
  cy.contains('#login-button', 'Try again').should('be.visible')
})
