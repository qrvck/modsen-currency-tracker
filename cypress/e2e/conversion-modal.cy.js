describe('conversion modal', () => {
  it('when you click on the currency card it opens conversion modal', () => {
    cy.visit('/');
    cy.contains('USDC').click();
  });

  it('when you click on the currency card you can convert it to other currencies', () => {
    cy.visit('/');
    cy.contains('USDC').click();

    cy.get('[data-cy="currency-select"]').select(2);
  });
});
