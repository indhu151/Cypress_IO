import 'cypress-xpath'
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
    cy.xpath("//a").each($ele)
    
  })
})