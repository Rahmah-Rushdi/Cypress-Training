///<reference types="cypress"/>

//describe - it
//BDD- Gerkin language-Cucumber Given,When,Then

describe("session1",()=>{

    it("Visit Magento Site",()=>{
        cy.visit("/")
      //  cy.visit("/what-is-new.html")
      //  cy.visit("/customer/account/create/")

        
    })
    /**
     * 1- open website
     * 2- enter valid email
     * 3- enter valid passord
     * 4- click on login button
     * 5- the user will be redirected to my account page
    
    */
    it.only("Validate that the user can login to magento site ",()=>{
        cy.visit("/customer/account/login/")
        cy.get("#email").type("CypressUser@gmail.com")
        cy.get("#pass").type("test@123")
        cy.get("#send2").click()
        //Assertion
        cy.get(".page-title").should("contain","My Account")

    })
});
