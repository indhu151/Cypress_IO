describe("popups",()=>{
it("alert",()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get('[onclick="jsAlert()"]').click()
    cy.on('window:alert',(t)=>{
        
        expect(t).contain("I am a JS Alert")
        
        //cy.log(msg)
    })
})
it("confirm alert",()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get('[onclick="jsConfirm()"]').click()
    cy.on('window:confirm',(t)=>{
        expect(t).include('I am a JS Confirm')
    })
})
it("confirm alert-click on cancel button",()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get('[onclick="jsConfirm()"]').click()
    cy.on('window:confirm',()=>false)
    cy.get('#result').should('have.text','You clicked: Cancel')

})
it("prompt alert-send text inside alert",()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.window().then((win)=>{
        cy.stub(win,'prompt').returns("welcome")
    })
    cy.get('[onclick="jsPrompt()"]').click()
})
it("authentication",()=>{
    //approach1
    cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin",password:"admin"}})
    cy.get('p').should('have.contain',"Congratulations! You must have the proper credentials.")
})
it.only("authentication-appraoch2",()=>{
     cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get('p').should('have.contain',"Congratulations! You must have the proper credentials.")
})
})