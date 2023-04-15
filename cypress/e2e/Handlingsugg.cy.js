describe("amazon",()=>{
    it.skip("login",()=>{
        cy.visit("https://www.amazon.in/")
        cy.title().should('contain',"Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
        cy.get('#twotabsearchtextbox').type("iphone")
        cy.get(' .s-suggestion-container > .s-suggestion').each(($ele,index,$list)=>{
            let value=$ele.text()
            cy.log(value)
        })

    })
    it("google",()=>{
        cy.visit("http://google.com/")
        //cy.get('')
    })
})