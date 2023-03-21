describe("implict assertions",()=>{
    it("check assertions",()=>{
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       cy.title().should('eq','OrangeHRM')
       cy.title().should('include','Orange')
       .and('contain','HRM')
        cy.get('input[name="username"]').type("Admin")
        .should('have.value','Admin')
        cy.get('input[placeholder="Password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        .and('contain','https://opensource-demo.orangehrmlive.com/')
        .and('include','index.php/dashboard/index')

    })
})