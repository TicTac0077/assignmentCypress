// ***********************************************

Cypress.Commands.add('highlight', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).then($el => {
    $el.css('border', '2px solid red');
  });
});

// Select a random value from the dropdown options
Cypress.Commands.add("getIframeBody", (iframeSelector) => {
  return cy
    .get(iframeSelector)
    .its("0.contentDocument.body") // Access the iframe's body
    .should("not.be.empty") // Ensure the iframe is loaded
    .then(cy.wrap); // Wrap the iframe body for further commands
});

