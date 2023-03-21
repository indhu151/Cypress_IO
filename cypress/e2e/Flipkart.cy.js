describe("myntra", ()=>{
    it("cart",()=>{
    cy.visit("https://www.amazon.in/")
    cy.get('#twotabsearchtextbox').type('kurtis',{ force: true })
    //.should('have.value','iphone14')
    cy.get('#nav-search-submit-button').click()
   // cy.url().should('include','s?k=kurtis&ref=nb_sb_noss')
   // cy.get('.desktop-searchBar[placeholder="Search for products, brands and more"]').type('lipstick')
   // .should('have.value','lipstick')ression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus')
   cy.get('[data-asin="B072KVHQJN"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style>h2>a')
  // .should('contain',"Women's Cotton Straight Kurta")
   .invoke('removeAttr','target').click()
   //cy.get('#native_dropdown_selected_size_name')
   //.select('Large',{ force:true })
   //.should('have.value','2,B08ND3L997')
   
   //click on add to cart button
    cy.get('#add-to-cart-button').click()

    //go to cart
    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()

    //to verify
    cy.get('.a-truncate-cut')
    .should('contain',"Pistaa's Women's Cotton Straight Kurta (KWT2PLGREEN40M_Lime…")

    })

})