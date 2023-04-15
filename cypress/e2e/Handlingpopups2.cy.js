describe("popups",()=>{
    it("alert popup",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('[onclick="jsAlert()"]').click()
        cy.on('window:alert',(t)=>{
            expect(t).contains('I am a JS Alert')
    })
    it.only("confirm popup",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm',()=>false)
    })

       
    })
})