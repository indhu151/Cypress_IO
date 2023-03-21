class LoginPage
{
    user_tf='input[name="username"]'
    pass_tf='input[placeholder="Password"]'
    submit_btn='button[type="submit"]'
    setusername_tf(user){
        cy.get(this.user_tf).type(user)
        .should('have.value',"Admin")
    }
    setPassword_tf(password){
        cy.get(this.pass_tf).type(password)
    }
    clickOnSubmit(){
        cy.get(this.submit_btn).click()
    }


    

}
export default new LoginPage()