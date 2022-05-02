/// <reference types="cypress" />

it('does not log in with wrong words', () => {
  cy.visit('public/index.html')
    // wait 1 second for clarity
    .wait(1000)
  cy.contains('button', 'I remember', { matchCase: false }).click()
  // the section changes
  cy.get('section#login').should('be.visible')
  cy.get('input[type=text]').each(($input, k) => {
    // take the jQuery element $input
    // and wrap it using Cypress cy.wrap command
    // now we can correctly chain Cypress commands
    cy.wrap($input).type('word' + (k + 1))
  })
  cy.contains('#login-button', 'Log in', { matchCase: false }).click()
  cy.contains('#login-button', 'Try again').should('be.visible')
})

it('remembers the words', () => {
  cy.visit('public/index.html')
    // wait 1 second for clarity
    .wait(1000)
  // remember the words from the list
  const words = []
  cy.get('#show-words .words li')
    .each(($li) => {
      words.push($li.text())
    })
    .then(() => {
      // we can use the data from the page
      // in cy.then callback function
      cy.log(words.join(', '))
    })
})

it('logs in', () => {
  cy.visit('public/index.html')
    // wait 1 second for clarity
    .wait(1000)
  // remember the words from the list
  const words = []
  cy.get('#show-words .words li')
    .each(($li) => {
      words.push($li.text())
    })
    .then(() => {
      // we can use the data from the page
      // in cy.then callback function
      cy.log(words.join(', '))

      cy.contains('button', 'I remember', { matchCase: false }).click()
      // the section changes
      cy.get('section#login').should('be.visible')
      cy.get('#login .words li').each(($li, k) => {
        const $input = $li.find('input')
        if ($input.length) {
          cy.wrap($input).type(words[k])
        }
      })
    })

  cy.contains('#login-button', 'Log in', { matchCase: false }).click()
  cy.contains('#login-button', 'Success').should('be.visible')
})
