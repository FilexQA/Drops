
describe("Navigate Site", () => {
    it("Open URL", () => {
        cy.visit('https://app.languagedrops.com') // visit Url
  
     cy.get('[data-testid=ENGB] > .r-1awozwy > .css-901oao')// Select English(UK) from selection of Languages
        .click()
  
      cy.get('[data-testid=CloseButton]')   // Close Helping Hand page
        .click()

      cy.get('#root > div > div > div > div > div.css-1dbjc4n.r-a9hzal.r-1d2f490.r-1udh08x.r-ipm5af.r-1jjucrs > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-u8s1d > div > img')
      .click('topLeft')   // close Drops Premium Subscription Page
          

        
    });


});
 
