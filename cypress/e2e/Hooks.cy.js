describe("hooks",()=>{
    before(()=>{
        cy.log("launch the browser")
    })
    after(()=>{
        cy.log("close the browser")
    })
    beforeEach(()=>{
        cy.log("login")
    })
    afterEach(()=>{
        cy.log("logout")
    })
    it("search",()=>{
        cy.log("search")
    })
    it("Advanced-search",()=>{
        cy.log("Advanced search")
    })
})