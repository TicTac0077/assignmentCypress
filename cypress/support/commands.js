// ***********************************************

Cypress.Commands.add('highlight', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).then($el => {
    $el.css('border', '2px solid red');
  });
});