describe('switcher', () => {
  it('when you open the site for the first time, the light theme is turned on', () => {
    cy.clearLocalStorage('isDark');
    cy.visit('/');

    cy.get('body').should('have.css', 'background-color', 'rgb(252, 252, 251)');
    cy.get('body').should('have.css', 'color', 'rgb(0, 0, 0)');
  });

  it('the theme switches from light to dark and from dark to light', () => {
    cy.clearLocalStorage('isDark');
    cy.visit('/');

    cy.get('body').should('have.css', 'background-color', 'rgb(252, 252, 251)');
    cy.get('body').should('have.css', 'color', 'rgb(0, 0, 0)');

    cy.get('[data-cy="theme-switcher"]').click();

    cy.get('body').should('have.css', 'background-color', 'rgb(3, 3, 4)');
    cy.get('body').should('have.css', 'color', 'rgb(255, 255, 255)');

    cy.get('[data-cy="theme-switcher"]').click();

    cy.get('body').should('have.css', 'background-color', 'rgb(252, 252, 251)');
    cy.get('body').should('have.css', 'color', 'rgb(0, 0, 0)');
  });

  it('when you refresh the page the theme color is saved', () => {
    cy.clearLocalStorage('isDark');
    cy.visit('/');

    cy.get('body').should('have.css', 'background-color', 'rgb(252, 252, 251)');
    cy.get('body').should('have.css', 'color', 'rgb(0, 0, 0)');

    cy.get('[data-cy="theme-switcher"]').click();
    cy.reload();

    cy.get('body').should('have.css', 'background-color', 'rgb(3, 3, 4)');
    cy.get('body').should('have.css', 'color', 'rgb(255, 255, 255)');
  });
});
