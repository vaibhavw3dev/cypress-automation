/// <reference types="cypress" />
describe('Registration Functionality', () => {
  it('Register new user', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > :nth-child(3) > a').click()
    cy.get("input[id='customer.firstName']").type('vaibhav')
    cy.get("input[id='customer.lastName']").type('khondekar')
    cy.get("input[id='customer.address.street']").type('Koradi')
    cy.get("input[id='customer.address.city']").type('Nagpur')
    cy.get("input[id='customer.address.state']").type('Maharashtra')
    cy.get("input[id='customer.address.zipCode']").type('441111')
    cy.get("input[id='customer.phoneNumber']").type('7972441179')
    cy.get("input[id='customer.ssn']").type('4545623')
    cy.get("input[id='customer.username']").type('vaibhavkhondekar7972@gmail.com')
    cy.get("input[id='customer.password']").type('Vaibhav@7972')
    cy.get("input[id='repeatedPassword']").type('Vaibhav@7972')
    cy.get('#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input').click()
    cy.get("span[id='customer.username.errors']").should('have.text', 'This username already exists.')
    



    
  })
})