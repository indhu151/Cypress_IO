describe("script",()=>{
    it("script-writing",()=>{
        cy.visit("https://www.amazon.in/")
       // Cypress.Cookies.debug(true, { verbose: false })
       cy.title().should('contain',"Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
        cy.get('#twotabsearchtextbox').type("iphone 14").type('{enter}')
        cy.url().should('include',"amazon.in/s?k=iphone+14")
        cy.get('[data-index="2"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > a').invoke('removeAttr','target')
        .click()
        cy.title().should('eq',"Apple iPhone 14 (128 GB) - Yellow : Amazon.in: Electronics")
        cy.get('#add-to-cart-button').should("be.visible").click()
        cy.get('#attachSiNoCoverage').click()
        cy.get(".a-size-medium-plus").should('contain',"Added to Cart")


    })
})