/// <reference types="cypress" />
describe('Luanch browser', () => {
    it('luanch browser', () => {
      cy.visit('https://formstone.it/components/dropdown/')
      cy.get('#demo_label-dropdown-selected').click()
      cy.get('#demo_label-dropdown > div > div.fs-scrollbar-content > button:nth-child(6)').click()
     
      
    })
  })