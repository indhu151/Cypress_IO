import LoginPage from "../POM/LoginPage.js"
describe("Login details",()=>{
    it("check",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
        cy.fixture('Commondata.json').then((data)=>{
        LoginPage.setusername_tf(data.username)
        LoginPage.setPassword_tf(data.password)
        LoginPage.clickOnSubmit()
        })   // expect(acname).to.equal(expname)
        })
    })
