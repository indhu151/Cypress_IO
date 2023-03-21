import 'cypress-file-upload'
describe("file upload",()=>{
    it("upload single file",()=>{
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get('#file-upload').attachFile('Framework.pdf')
    cy.get('#file-submit').click()
    cy.get('#uploaded-files').should('contain','Framework.pdf')

})
it("rename file name at run time",()=>{
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get('#file-upload').attachFile({filePath:'Framework.pdf',fileName:'test.pdf'})
    cy.get('#file-submit').click()
    cy.get('#uploaded-files').should('contain','test.pdf')

})
it("upload using dragand drop",()=>{
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get('#file-upload').attachFile('Framework.pdf',{subjectType:'drag-n-drop'})
    cy.get('#file-submit').click()
    cy.get('#uploaded-files').should('contain','Framework.pdf')
})
it("multiple files",()=>{
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
    cy.get('#filesToUpload').attachFile(['test1.pdf','Framework.pdf'])
    cy.get(':nth-child(6) > strong').contains('Files You Selected')
})
it.only("shadow dom",()=>{
    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
    cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('Framework.pdf')
   // cy.get('.smart-browse-input',{includeShadowDo:true}).should('contain','Framework.pdf')
})

})