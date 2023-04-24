describe("amazon",()=>{
    it("handle cart",()=>{
    let offer_price
    let org_price
    let dis_per
    cy.visit("https://www.amazon.in/")
    cy.title().should('eq',"Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
    cy.get('#twotabsearchtextbox').type('samsung mobiles{enter}')
    cy.url().should('contain','samsung+mobiles&crid')
    cy.get('a.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal[href*="B09VK5D8KW"]')
    .invoke('removeAttr','target')
    .first()
    .click();
    cy.title().should('include','Samsung Galaxy A23 Blue')
    cy.get('span.a-price-whole').first().then((ele)=>{
        offer_price=ele.text().match(/[0-9]/g)
       offer_price=offer_price.join("")
        cy.log(offer_price)
    })
    cy.get('span.a-price.a-text-price>.a-offscreen').first().then((ele)=>{
        org_price=ele.text().match(/[0-9]/g)
        org_price=org_price.join("")
        cy.log(org_price)
        cy.log(offer_price)
       dis_per=(Number(org_price)-Number(offer_price))/(Number(org_price))*100
       cy.log(Math.round(dis_per)+"%")
    })
    })

})