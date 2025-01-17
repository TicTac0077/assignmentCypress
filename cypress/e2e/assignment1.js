///<reference types = "cypress"/>

describe("CandyMapper Halloween Party Tests", () => {

    beforeEach(() => {
      cy.visit("https://candymapper.com");
  
      // Assert that the alert text equals "Pop-Up Challenge."
      cy.on("window:alert", (alertText) => {
        expect(alertText).to.equal("Pop-Up Challenge");
      });
  
      // Close the pop-up window.
      cy.get("#popup-widget50273-close-icon").highlight().click();
  
      // Go to the menu.
      cy.get("[data-ux=\"IconHamburger\"]")
        .should('be.visible')
        .highlight()
        .click();
  
      // Choose the "Join us" option.
      cy.get("span").contains("JOIN US").highlight().click();
  
      // Authorize (sign in) by entering the credentials.
      cy.get("[placeholder=\"Email\"]").highlight().type("abduganieva8a14@gmail.com");
      cy.get("[placeholder=\"Password\"]").highlight().type("u2110077");
  
      // Click the "Sign in" button to complete the authorization process.
      cy.get('.x-el-form > :nth-child(5) > .x-el').contains("Sign in").highlight().click();

    });

    afterEach(() => {
        // Navigate to the menu
        cy.get("[data-ux=\"IconHamburger\"]")
            .should('be.visible')
            .highlight()
            .click();
    
        // Click the "Sign out" link
        cy.get("[data-aid=\"MEMBERSHIP_SIGNOUT_LINK\"]")
            .contains("Sign out", { matchCase: false })
            .click({ force: true });
    });
    
    // Navigate to the Halloween party page
    it("Go to the Halloween party page", () => {
        // Open the menu
        cy.get("[data-ux=\"IconHamburger\"]")
            .should('be.visible')
            .highlight()
            .click();
    
        // Click on the "Halloween Party" link
        cy.get("span").contains("Halloween Party").highlight().click();
    
        // Take a screenshot for test1
        cy.screenshot("test1");
    });

    // On the Halloween party page, choose the zombies theme
    it("In Halloween party page choose zombies theme", () => {
        cy.get("[data-ux=\"IconHamburger\"]")
            .should('be.visible')
            .highlight()
            .click();

        cy.get("span").contains("Halloween Party").highlight().click();

        cy.get('[href="/host-a-party-1"]').highlight().click();
        cy.get('[data-tccl="ux2.buttons.buttons_cta_0.click,click"]')
            .contains("zombies", { matchCase: false })
            .highlight()
            .click();

        // Access the iframe body
        cy.getIframeBody("#iframe-03")
            .find("#guests").highlight() // Locate the element with the ID 'guests'
            .should("exist") // Verify that the element exists
            .then(($dropdown) => {
                // Retrieve all dropdown options
                const options = $dropdown.find("option");

                // Generate a random index
                const randomIndex = Math.floor(Math.random() * options.length);

                // Select the random option
                const randomValue = options[randomIndex].value;

                // Use the random value to select an option
                cy.wrap($dropdown).select(randomValue);

                // Convert the random value (string) to an integer of base 10
                const selectedValue = parseInt(randomValue, 10);

                // Verify that the selected value is between 0 and 2
                expect(selectedValue).to.be.gte(0).and.to.be.lte(2);

                // Log the randomly selected value
                cy.log(`Randomly selected value: ${selectedValue}`);
       
            });

        // Take a screenshot and save it as 'test2'
        cy.screenshot("test2");

    });

    // Test the invalid email address and get an error message
    it("Test the invalid email address", () => {
        cy.get("[data-ux=\"IconHamburger\"]")
            .should('be.visible')
            .highlight()
            .click();

        cy.get("span").contains("Halloween Party").highlight().click();

        cy.get('[href="/host-a-party-1"]').highlight().click();
        cy.get('[data-tccl="ux2.buttons.buttons_cta_0.click,click"]')
            .contains("zombies", { matchCase: false })
            .highlight()
            .click();
        
        // Access the iframe body
        cy.getIframeBody("#iframe-03")
            .find("#guests") // Locate the element with the ID 'guests'
            .should("exist") // Verify that the element exists
            .then(($dropdown) => {
                // Retrieve all dropdown options
                const options = $dropdown.find("option");

                // Generate a random index
                const randomIndex = Math.floor(Math.random() * options.length);

                // Select the random option
                const randomValue = options[randomIndex].value;

                // Use the random value to select an option
                cy.wrap($dropdown).select(randomValue);

                // Convert the random value (string) to an integer of base 10
                const selectedValue = parseInt(randomValue, 10);

                // Verify that the selected value is between 0 and 2
                expect(selectedValue).to.be.gte(0).and.to.be.lte(2);

                // Log the randomly selected value
                cy.log(`Randomly selected value: ${selectedValue}`);
       
            });

        // Enter an invalid email address and expect to get an error message: "Please enter a valid email address."
        // Email field
        cy.get("#input4")
            .highlight()
            .type("test3");

        // Remind me button
        cy.get('.x-el-button')
            .highlight()
            .click();

        // Verify error message
        cy.get('.c2-4m > .x-el')
            .contains("Please enter a valid email address.", { matchCase: false })
            .highlight();

        // Take a screenshot
        cy.screenshot("test3");

    });
    

  });
  
