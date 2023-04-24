describe("dynamic dropdowns",()=>{
    it.skip("dynamic",()=>{
        cy.visit("https://demo.automationtesting.in/Register.html")
        cy.title().should('eq','Register')
        cy.get('#msdd').type('Czech').type('{enter}')
    })
    it("dynamic-dropdowns",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#autocomplete').type('India')
    })
})