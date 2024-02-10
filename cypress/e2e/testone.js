///<reference types="cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('this is test for normal alert', () => {
it('welcome to alert test', () => {
    cy.visit("https://demo.automationtesting.in/Alerts.html")
    cy.get('#OKTab > .btn').click()
    cy.on("window:alert", (Msg) => {
        expect(Msg).to.eql("I am an alert box!")
    })
});
  
 it.skip("this is a testfor prompt alert",()=>{
    cy.visit("https://demo.automationtesting.in/Alerts.html")
cy.window().then((win)=>{
    cy.stub(win,'prompt').returns("Sarah")
cy.get('#Textbox > .btn').click()

})

})
it.only('this is test for confirmation test', () => {
    cy.visit("https://demo.automationtesting.in/Alerts.html")
    cy.on('window:confirm',(question)=>{
        return true;
    })
    cy.get('#CancelTab > .btn').click()
});
});