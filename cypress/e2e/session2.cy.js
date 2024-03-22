///<reference types="cypress"/>

//describe - it
//BDD- Gerkin language-Cucumber Given,When,Then

describe("session2",()=>{

    it("Selectors",()=>{
        cy.visit("/")
        cy.get(".authorization-link a").first().click()
        cy.get("#search").type("bag")
        cy.get(".showcart").click()
        cy.get(".nav-1 span").click()

       //cy.contains("Sign In")
       // cy.get(".authorization-link a").last()

    })
   
});
