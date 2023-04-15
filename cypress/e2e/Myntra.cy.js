describe("myntra",()=>{
   
    it("myntra",()=>{
        cy.visit("https://www.flipkart.com/")
        cy.title().should('contain',"Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")
        cy.get('._3704LK').type("iphone").type('{enter}')
        cy.title().should('include',"Iphone- Buy Products Online at Best Price in India - All Categories | Flipkart.com")
        cy.get('[data-id="MOBGHWFHABH3G73H"] > ._2kHMtA > ._1fQZEK').invoke('removeAttr',"target")
        .click()
        cy.url().should('include',"apple-iphone-14-starlight-128-gb/p/itm3485a56f6e676")
        cy.get(".row > :nth-child(1) > ._2KpZ6l").click()
        cy.get('._2xm1JU').should("be.visible").click()
        cy.get('._3SkBxJ').should("exist").click()
    })
})