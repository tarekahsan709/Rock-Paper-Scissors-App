// https://docs.cypress.io/api/introduction/api.html

describe('Game home page test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome to Rock Paper Scissor');
  });
});
