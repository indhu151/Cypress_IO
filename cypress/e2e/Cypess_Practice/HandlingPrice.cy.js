import "cypress-xpath"
describe("amazon",()=>{
    it("price",()=>{
        let org_Price;
        let offer_price;
        cy.visit("https://www.amazon.in/")
        cy.url().should('contain','amazon.in')
        cy.get('#twotabsearchtextbox').type('iphone 14{enter}')
        cy.title().should('include','Amazon.in : iphone 14')
        //cy.get('[data-asin="B0BDK62PDX"]>.sg-col-inner>.s-widget-container>.s-card-container>.a-section>.sg-row>:nth-child(2)>.sg-col-inner>.a-section>:nth-child(3)>:nth-child(1)>.sg-col-inner>:nth-child(1)>.a-row>.a-size-base>.a-price>:nth-child(2)>.a-price-whole')
        cy.xpath('//span[text()="Apple iPhone 14 Plus (128 GB) - Purple"]/../../../..//span[@class="a-price-whole"]')
        .then((ele)=>{
                offer_price=ele.text();
                offer_price=offer_price.match(/[0-9]/g)
                cy.log(offer_price.join(""))
        })
       // cy.log("************************************************"+offer_price)
                cy.get('[data-index="12"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .sg-row > .sg-col-4-of-20 > .sg-col-inner > .s-price-instructions-style > .a-color-base > .a-link-normal > div > .a-price > [aria-hidden="true"]')
                .then((e)=>{
                   var Price=e.text()
                   org_Price=Price.match(/[0-9]/g)
                   cy.log(org_Price.join(""))
                   cy.log(offer_price)
                })
           

        
            
    })
})