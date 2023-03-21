describe("explictwait",()=>{
    it("check",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.get('input[name="username"]').type("Admin")
        .should('have.value','Admin')
        cy.get('input[placeholder="Password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.url().should('include','index.php/dashboard/index')
        //to get test
        let expname="Paul Collings"
        cy.get('.oxd-userdropdown-name').then((x)=>{
            let acname=x.text()
            cy.log(acname)
            expect(acname).to.equal(expname)
        })
    })
})