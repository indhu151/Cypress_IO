describe("handling dropdowns",()=>{
    it("static using select by index",()=>{
        cy.visit("https://register.rediff.com/register/register.php")
        cy.title().should('contain','Rediffmail Free Unlimited Storage')
        cy.get('[id="country"]').select(3)
        .should('have.value',5)
    })
    it("select using text",()=>{
        cy.visit("https://register.rediff.com/register/register.php")
        cy.title().should('contain','Rediffmail Free Unlimited Storage')
        cy.get('[id="country"]').select('Australia')
        .should('have.value',12)
    })
    it("using value",()=>{
        cy.visit("https://register.rediff.com/register/register.php")
        cy.title().should('contain','Rediffmail Free Unlimited Storage')
        cy.get('[id="country"]').select('10')
        .should('contain','Armenia')
    })
})