describe("amazon",()=>{
    it("add to cart",()=>{
        cy.visit("https://www.amazon.in/")
        cy.url().should('eq','https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('iphone 14{enter}')
        cy.title().should('include','Amazon.in : iphone 14')
        cy.get('.a-size-medium.a-color-base.a-text-normal').contains('Apple iPhone 14 (128 GB) - Midnight')
        .parent()
        .invoke('removeAttr','target')
        .click()
        cy.title().should('contain','Apple iPhone 14 (128 GB) - Midnight : Amazon.in: Electronics')
        cy.get('#add-to-cart-button').should('exist').click()
        cy.get('#attachDisplayAddBaseAlert>.a-size-medium-plus').should('contain','Added to Cart')
    })
})