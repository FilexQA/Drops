
describe("Navigate Site", () => {
    it("Open URL", () => {
        cy.visit('https://app.languagedrops.com') // visit Url
    
  
     cy.get('[data-testid=ENGB] > .r-1awozwy > .css-901oao')
        .click()
  
     cy.get('#root > div > div > div > div > div.css-1dbjc4n.r-1p0dtai.r-13awgt0.r-a9hzal.r-1d2f490.r-12vffkv.r-u8s1d.r-zchlnj.r-ipm5af.r-1jjucrs > div > div > div:nth-child(2) > div > div.css-1dbjc4n.r-u8s1d > div > img')
        .click()

     cy.get('#root > div > div > div > div > div.css-1dbjc4n.r-a9hzal.r-1d2f490.r-1udh08x.r-ipm5af.r-1jjucrs > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-u8s1d > div > img')
        .click()

     
     cy.get('[data-testid=FeatureIntroductionAction]')
        .click()
          


        
    });


});
 
