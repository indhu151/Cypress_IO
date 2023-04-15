import "cypress-xpath"
describe("amazon",()=>{
    it("cart",()=>{
        cy.visit("https://www.amazon.in/");
        cy.title().should('contain','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        cy.get('#twotabsearchtextbox').type('iphone 14{enter}')
        cy.url().should('include','=iphone+14&crid')
        //cy.get('a[target]').invoke('removeAttr','target')
        cy.xpath('[data-index="2"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal')
        .invoke('removeAttr','target')
        .click();
    })
})