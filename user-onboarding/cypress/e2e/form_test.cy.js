describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  // helpers
  const fNameInput = () => cy.get('input[name=fName]');
  const lNameInput = () => cy.get('input[name=lName]');
  const emailInput = () => cy.get('input[name=email]');
  const passwordInput = () => cy.get('input[name=password]');
  const agreeCheckbox = () => cy.get('input[name=agree]');
  const submitBtn = () => cy.get('button[data-test-id=submit]');

  // practice tests
  it('checks to ensure cypress tests are functioning', () => {
    expect(1 + 1).to.equal(2);
    expect(true).to.equal(true);
    expect (true).not.to.equal(false);
  })

  // TESTS

  // elements exist
  it('shows elements on page', () => {
    fNameInput().should('exist');
    lNameInput().should('exist');
    emailInput().should('exist');
    passwordInput().should('exist');
    agreeCheckbox().should('exist');
    submitBtn().should('exist');
  })

  // elements working
  describe('filling out form inputs and submitting', () => {
    it('can navigate to the page', () => {
      cy.url().should('include', 'localhost');
    })

    it('fills out form inputs', () => {
      submitBtn().should('be.disabled');
      fNameInput().should('have.value', '')
        .type('Troy')
        .should('have.value', 'Troy');
      lNameInput().should('have.value', '')
        .type('Caselli')
        .should('have.value', 'Caselli');
      emailInput().should('have.value', '')
        .type('myemail@gmail.com')
        .should('have.value', 'myemail@gmail.com');
      passwordInput().should('have.value', '')
        .type('nobodywillknow')
        .should('have.value', 'nobodywillknow');
      agreeCheckbox().should('not.be.checked')
        .check()
        .should('be.checked');
      submitBtn().should('not.be.disabled')
        .click()
        .should('be.disabled');

        // form inputs should be reset
        fNameInput().should('have.value', '');
        lNameInput().should('have.value', '');
        emailInput().should('have.value', '');
        passwordInput().should('have.value', '');
        agreeCheckbox().should('not.be.checked');
        submitBtn().should('be.disabled');
    })

    it('partially fills out form and cannot submit', () => {
      fNameInput().should('have.value', '')
        .type('Troy')
        .should('have.value', 'Troy');
      emailInput().should('have.value', '')
        .type('myemail@gmail.com')
        .should('have.value', 'myemail@gmail.com');
      submitBtn().should('be.disabled');
    })

  })

})