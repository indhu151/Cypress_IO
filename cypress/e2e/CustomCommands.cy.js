
describe("custom",()=>{
    it("handling links",()=>{
        cy.visit("https://demo.nopcommerce.com/")
        cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click()
        cy.url().should('contain','om/apple-macbook-pro-13-inch')
        cy.get('.product-name>h1').should('have.text','Apple MacBook Pro 13-inch')
    })
    it.only("handling links-custom",()=>{
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.url().should('contain','om/apple-macbook-pro-13-inch')
        cy.get('.product-name>h1').should('have.text','Apple MacBook Pro 13-inch')
    })
})