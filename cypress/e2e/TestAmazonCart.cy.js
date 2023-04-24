describe("amazon",()=>{
    it("cart",()=>{
        cy.visit("https://www.amazon.in/")
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        cy.get('#twotabsearchtextbox').type('kurtis{enter}')
        cy.url().should('contain','kurtis&crid=1D9ZU9GYT7BDG')
        
    
    
    })
})