function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

describe('Registering with existing username', () => {
  it('makes a correct login attemp', () => {
    cy.visit('https://habitica.com/static/home')
    cy.get('#usernameInput').type('danyalej').should('have.value', 'danyalej');
    cy.get('[type="email"]').type('da.benavides@uniandes.edu.co', 'da.benavides@uniandes.edu.co')
    cy.get('[placeholder="Password"]').type('secretpassword');
    cy.get('[placeholder="Confirm Password"]').type('secretpassword');
    cy.get('.form > .btn').click();
  })
});

describe('Habitica under monkeys', function() {
    it('visits habitica and survives monkeys', function() {
        randomEvent(100000);
    })
})


function randomEvent(monkeysLeft) {
  if(monkeysLeft > 0) {
    var number = getRandomInt(0, 2);
    switch(number) {
      case 0:
        cy.visit('https://habitica.com');
        cy.wait(1000);
        cy.get('a').then($links => {
          var randomLink = $links.get(getRandomInt(0, $links.length));
          if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({force: true});
            monkeysLeft = monkeysLeft - 1;
          }
          cy.wait(500);
          randomEvent(monkeysLeft);
        });
      break;
      case 1:
        cy.visit('https://habitica.com');
        cy.wait(1000);
        cy.wait(1000);
        cy.get('input').then($input => {
          var randomInput = $input.get(getRandomInt(0, $input.length));
          if(!Cypress.dom.isHidden(randomInput)) {
            cy.wrap(randomInput).type('meditation', {force: true});
            monkeysLeft = monkeysLeft - 1;
          }
          cy.wait(500);
          randomEvent(monkeysLeft)
        });
      break;
      case 2:
        cy.visit('https://habitica.com');
        cy.wait(1000);
        cy.get('button').then($buttons => {
          var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
          if(!Cypress.dom.isHidden(randomButton)) {
            cy.wrap(randomButton).click();
            monkeysLeft = monkeysLeft - 1;
          }
          cy.wait(500);
          randomEvent(monkeysLeft)
        });
      break;
    }
  }
}

