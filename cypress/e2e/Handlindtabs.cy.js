describe("handling tabs/child windows",()=>{
    // it.skip("approach1",()=>{
    //     cy.visit('https://the-internet.herokuapp.com/windows')
    //     cy.get('.example>a').invoke('removeAttr','target').click()
    //     cy.url('contain','the-internet.herokuapp.com/windows')
    //     cy.wait(4000)
    //     cy.go('back')

    // })
    it("approach2",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example>a').then((e)=>{
        let url= e.prop('href')
        cy.visit(url)
        })
    })
})