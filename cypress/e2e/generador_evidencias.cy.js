describe('Generacion de Evidencias de Defectos', () => {

    it('Error 1 - Element covered by overlay', () => {
        cy.visit('http://localhost:3000')
        cy.get('.product-btn').first().click()
        // Este clic fallará porque el menú lateral se sobrepuso
        cy.get('.fa-shopping-cart').click()
    })

    it('Error 2 - Unhandled Alert del navegador', () => {
        cy.visit('http://localhost:3000')
        // Intentamos enviar pedido sin haber metido productos al carrito
        cy.get('.btn-checkout').click({ force: true })
    })

    it('Error 3 - Element not visible', () => {
        cy.visit('http://localhost:3000')
        // Intentamos escribir forzosamente en el modal de checkout sin abrirlo primero
        cy.get('#checkout-name').type('Escribiendo fantasma')
    })

})
