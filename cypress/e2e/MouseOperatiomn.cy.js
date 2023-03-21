import 'cypress-iframe'
describe("mouse",()=>{
    it.skip("mouse hover",()=>{
        cy.visit("https://www.flipkart.com/")
        cy.title().should('include','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
        cy.get('._1_3w1N').trigger('mouseover')
        cy.get('._3vhnxf').should('have.length',6)
        cy.get('.pO9syL>li:nth-child(1)').click()
        cy.url().should('contain','https://www.flipkart.com/account/login?ret=%2Faccount%2F%3Frd%3D0%26link%3Dhome_account')
    })
    it.skip("rightclick",()=>{
        cy.visit("https://www.flipkart.com/")
        cy.wait(5000)
        cy.get('._3-PJz- > span').rightclick({force:true})
        cy.wait(5000)
    })
    it.skip("right  click",()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get('.context-menu-one').rightclick()
        cy.get('.context-menu-icon-edit').click()
        cy.on('window.alert',(t)=>{
                let msg=t.text()
                cy.log(msg)
                expect(t).contain('clicked: edit')
        })
    })
    it.skip("double click",()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick")
        cy.frameLoaded('#iframeResult')
        cy.iframe('#iframeResult').find('[ondblclick="myFunction()"]').dblclick()
       // cy.wait(4000)
       // cy.get('p#demo').contain('Hello World')
    })
    it("doubleclick",()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded('#iframeResult')
        cy.iframe('#iframeResult').find('[ondblclick="myFunction()"]').dblclick()
        cy.iframe('#iframeResult').find('field2').should('contain','Hello World!')




    })


    
    it.skip("drag and drop",()=>{
        cy.visit("https://demo.guru99.com/test/drag_drop.html")
        cy.get(':nth-child(2) > .button').drag('#amt8 > .placeholder',{force:true})



    })
})