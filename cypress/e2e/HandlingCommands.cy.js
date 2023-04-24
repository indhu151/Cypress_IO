describe("commands",()=>{
    beforeEach(()=>{
        cy.visit("https://google.com")
    })
    it("visit",()=>{
        cy.viewport(1280, 720)
        cy.screenshot()
    })
    it("viewport with preset",()=>{
        cy.viewport("macbook-13")
        cy.screenshot()
        cy.wait(200)
    })
    it("viewport with preset and oriententation",()=>{
        cy.viewport("iphone-6","landscape")
        cy.screenshot()
    })
    it("viewport")

})