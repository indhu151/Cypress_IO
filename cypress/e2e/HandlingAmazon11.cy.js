
describe("amazon",()=>{
    it("add cart",()=>{
        cy.visit("https://www.amazon.in/")
        cy.title().should('contain','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        cy.get('#twotabsearchtextbox').type("iphone 14")
        cy.get('#nav-search-submit-button').click()
        cy.title().should('contain','Amazon.in : iphone 14')
        cy.get('[data-asin="B0BDJVX14D"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal')
        .invoke('removeAttr','target')
        .click()
       // cy.title().should('contain','Apple iPhone 14 (512 GB) - (Product) RED : Amazon.in: Electronics')
        cy.get('#add-to-cart-button').click()
        cy.get("[class='a-size-medium-plus a-color-base sw-atc-text a-text-bold']").should('have.text',"Added to Cart")


    })
})