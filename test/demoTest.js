const assert = require('assert');
const sumar = require('../index');
//AFIRMACIONES




describe('Probar las sumas de numeros', ()=>{
    it('Cinco  mas cinco es diez', ()=>{
        assert.equal(10, sumar(5,5));
    });

    it('Cinco mas cinco no son 20',()=>{
        assert.notEqual(20, sumar(5,5));
    });
});