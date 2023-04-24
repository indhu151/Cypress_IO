describe("price",()=>{
    it("amazon",()=>{
        let offer_price
        let percentage
        let org_price
        cy.visit("https://www.amazon.in/")
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        cy.get('#twotabsearchtextbox').type('iphone 14{enter}')
        cy.title().should('contain','Amazon.in : iphone 14')
        cy.get('.a-size-medium.a-color-base.a-text-normal').contains('Apple iPhone 14 (128 GB) - Midnight')
        .parent()
        .invoke('removeAttr','target')
        .click()
        cy.url().should('include','Apple-iPhone-14-128GB-Midnight/dp/B0BDHX8Z63')
        cy.get('#corePriceDisplay_desktop_feature_div>:nth-child(2)>.a-size-large').then((ele)=>{
            percentage=ele.text().match(/[0-9]/g).join("")
            
            cy.log(percentage)
        })
        cy.get('#corePriceDisplay_desktop_feature_div>:nth-child(2)>.a-price>[aria-hidden="true"]>.a-price-whole')
        .then((ele)=>{
           offer_price=ele.text().match(/[0-9]/g)
           offer_price=offer_price.join("")
           cy.log(offer_price)
        })
        cy.get('#corePriceDisplay_desktop_feature_div>:nth-child(3)>span>.a-size-small>.a-price>.a-offscreen')
        .then((ele)=>{
            org_price=ele.text().match(/[0-9]/g)
            org_price=org_price.join("")
            cy.log(org_price)
            let dis=(Number(org_price)-Number(offer_price))/Number(org_price)*100
            dis=Math.round(dis)
            cy.log(dis)
            if(percentage==dis)
            {
                cy.log("matching")
            }
        })
    })
})