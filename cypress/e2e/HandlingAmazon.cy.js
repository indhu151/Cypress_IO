describe("amazon",()=>{
    it("login",()=>{
        cy.visit("https://www.amazon.in/")
        cy.title().should('contain',"Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
        cy.get('#twotabsearchtextbox').type("iphone")
        cy.get('#nav-search-submit-button').click()
        cy.title().should('eq',"Amazon.in : iphone")
        cy.get('[data-index="4"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal')
        .invoke('removeAttr',"target")
        .click()
        cy.url().should('include',"Apple-iPhone-128GB-Product-RED/dp/B0BDJVSDMY/ref=sr_1_3?")
        cy.get('#add-to-cart-button').click()
        cy.get('#nav-cart-count').click()
        cy.get('.a-truncate-cut').should('have.text',"Apple iPhone 14 (128 GB) - (Product) RED")

        //cy.get('span.a-size-medium-plus').should('have,text',"Added to Cart")
        //cy.get('.nav-cart-icon').click()
        //cy.get('#attach-sidesheet-view-cart-button').click()
        //cy.url().should('contain',"/gp/cart/view.html/ref=dp_atch_dss_cart?")


    })
})