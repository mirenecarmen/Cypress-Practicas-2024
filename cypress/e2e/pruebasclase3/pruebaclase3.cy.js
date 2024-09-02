describe('test de formulario',() => {
    it('visitar pagina',() => {
        cy.visit('https://demoqa.com')//nuestro objetivo es llegar al formulario,llegar a "forms" y
        //luego a "practice forms"
        cy.get('h5').contains('Elements').click()
        //de esta forma se seleccionan los elementos html,asi por su nombre,span,body,h5 etc
        cy.get('span').contains('Forms').click()
        cy.get('span').contains('Practice Forms').click()
        cy.get('#firstName').type('123456456444')
        //cy.get('#lastName').type('1234')
        cy.get('#firstName').clear()
        cy.get('#firstName').type('!"#?%')
    })

        //cy.get('.nombre de la clase')
        //cy.get('#iddelElemento') //no siempre es conveniente agarrar por los id,porque pueden ser dinamicos por ejemplo
        //no siempre es facil agarrar por los elementos,porque muchas veces se repiten
        //todo depende de la web
        //cy.get('[name="nombre del elemento"]')//asi se agarran los "name"
        //cy.get('.header-wrapper').eq(1).click //es un array,sería el segundo elemento de header-wrapper

});