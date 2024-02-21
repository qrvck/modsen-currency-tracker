describe('control panel', () => {
  it('when loading for the first time, the apply and fix buttons should be disabled', () => {
    cy.visit('/timeline');

    cy.get('[data-cy="apply-button"]').should('be.disabled');
    cy.get('[data-cy="fix-button"]').should('be.disabled');
  });

  it('when you select the correct date, currency and click apply it loads the data and show success modal', () => {
    cy.visit('/timeline');

    cy.get('input[type="date"]').type(`${'2024-01-01'}`);
    cy.get('select').select(2);
    cy.get('[data-cy="apply-button"]').click();

    cy.contains('Loading all the necessary data to build a chart');
    cy.contains('DONE');
  });
});
