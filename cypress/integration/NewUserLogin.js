
describe("New User Registration", () => {
    it("Open URL", () => {
        cy.visit('https://app.languagedrops.com') // visit Url
       


        cy.get('[data-testid=Login] > .r-vdu5el') // Click on the Login option
            .click()
            
        
        cy.get('[data-testid=EmailButton] > .css-901oao') // Login with a Email Account
            .click()

        cy.get('.r-h4924u') // Log in as an existing Account Holder
            .click()
            .should('have.text', 'Sign up')

       cy.get('[data-testid=EmaiSignup_Email]')  // Key in Email Address
            .type('filexqa@gmail.com')
            
       cy.get('[data-testid=EmaiSignup_Password]') // Key in Password
            .type('Password@123')

       cy.get('[data-testid=EmaiSignup_Submit]') //Select Log in button
            .click()
            .should('have.text','LOG IN')
    
    
    });
});
