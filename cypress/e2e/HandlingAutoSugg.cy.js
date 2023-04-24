describe("amazon",()=>{
    it("handling autosugg",()=>{
        cy.visit("https://www.amazon.in/")
        cy.title().should('eq',"Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
        cy.get('#twotabsearchtextbox').type('iphone')
        cy.get('#nav-flyout-searchAjax').should('be.visible')
        cy.get('.s-suggestion-container>.s-suggestion.s-suggestion-ellipsis-direction')
        .each(($ele,index,$list)=>{
                    let value=$ele.text()
                    cy.log(value)
        })
      
        // cy.get('.s-suggestion-container').each(($ele,index,$list)=>{
        //     let text=$ele.text()
        //     cy.log(text);
        //     if(text=="iphone 14")
        //     {
        //         cy.wrap($ele).click()
        //     }
        // })
    })
})