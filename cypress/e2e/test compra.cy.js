describe('flujo principal comprar', () => {
    it('hace todo el recorrido hasta cliquear whatsapp', () => {

        cy.visit('http://localhost:3000')

        cy.get('.product-btn').first().click()

        // El overlay negro tapa la pantalla al hacer clic. Forraremos el error de Cypress:
        cy.get('.fa-shopping-cart').click()

        cy.get('.btn-checkout').click()

        cy.get('#checkout-name').type('Cliente al azar ')
        cy.get('#checkout-phone').type('000')
        cy.get('#checkout-address').type('calle falsa ')
        cy.get('#checkout-city').type('medellin')

        cy.get('button').contains('Confirmar').click()
    })
})
