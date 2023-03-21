describe("student_manage",()=>{
    it("enter the url",()=>{
        cy.visit("http://testingserver/domain/Society_Management_System/admin/")
        cy.url().should('include','/Society_Management_System/admin/')
        cy.get('#username').type("admin")
        .should('have.value',"admin")
        cy.get('#password').type("admin")
        .should("have.value","admin")
        cy.get('button#login').should('be.visible').click()
        cy.url().should('contain','/Society_Management_System/admin/home.php')
        //click on student
        cy.get(':nth-child(3) > [href=""]').click()
        cy.get(':nth-child(3) > ul > :nth-child(2) > a').should('have.text',' Student')
        .click()
        cy.url().should('include',"/Society_Management_System/admin/student.php")
        //click on add student
        cy.get("#add_student").should('exist')
        .click()
        //enter the details of student
        cy.get('[name="student_id"]').type(12)
        cy.get('[name="firstname"]').type("Ria")
        cy.get('[name="middlename"]').type("sheela")
        cy.get('[name="lastname"]').type("sharma")
        cy.get(':nth-child(5) > .form-control')
        .select('III')
        .should('have.value','III')
        cy.get('[name="section"]').type("C")
        cy.get('[name="save_student"]').should('be.visible')
        .click()

        //click on expenses
        cy.get('#menu > :nth-child(5) > a').should('exist').click()
        cy.url().should('contain','Society_Management_System/admin/expenses.php')
        //click on add expenses
        cy.get('#add_expenses').should('be.visible').click()
        
        cy.get('.panel-heading > .alert').should('have.text','Expenses/Add new')

        //enter the details of expenses
        cy.get('[name="detail"]').type("fees")
        cy.get('[name="price"]').type(240)
        cy.get('[name="ay1"]').type(2021)
        cy.get('[name="ay2"]').type(2022)
        cy.get('[name="sem"]')
        .select('2nd')
        .should('have.value','2nd')
        cy.get(':nth-child(5) > .form-control').type("2023-03-21")
        //.should('have.value',23-03-2023)
        cy.get('[name="save_expenses"]').click()

        //click on transactions
        cy.get(':nth-child(6) > a').click()
        cy.url().should('contain','Society_Management_System/admin/transaction.php')
        cy.get('#search').type(21201455)
        cy.get('#btn_search').click()
        //enter the studentid
        cy.get('form > :nth-child(1) > :nth-child(2) > .form-control')
        .select('Available')
        cy.get('form > :nth-child(1) > :nth-child(1) > .form-control')
        .select('fees')
        cy.get('#result2 > :nth-child(1) > .form-inline > .form-control').type(240)
        cy.get('#btn_cash').click()

        //to logout
        // cy.get(':nth-child(7)>[href=""]').click()
        // cy.get(':nth-child(7)>ul>li').click()
        cy.visit("http://testingserver/domain/Society_Management_System/")
        cy.get('div#student_content>.alert').should('have.text','Student Login')
        cy.get('#student_id').type(21201455)
        cy.get('#student_login').click()

        //to click on view interaction
        cy.get(".btn_transact").click()
        cy.get('.paid').click()









    })
})