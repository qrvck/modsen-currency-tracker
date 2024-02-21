describe('navigation', () => {
  it('when you click on timeline nav link it redirect to timeline page', () => {
    cy.visit('/');

    cy.contains('Timeline').click();
    cy.location('pathname').should('eq', '/timeline');
  });

  it('when you go to a non-existent path it redirects to the main page', () => {
    cy.visit('/non-existent-path');
    cy.location('pathname').should('eq', '/');
  });
});
