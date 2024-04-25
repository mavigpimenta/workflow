const { numeroPrimo } = require("../../commom/primo")

describe('Número Primo', () => {
    it('deve retornar primo para o número 2', () => {
        const res = numeroPrimo(2);
        expect(res).toBe(true);
    });

    it('deve retornar não primo para o número 9', () => {
        const res = numeroPrimo(9);
        expect(res).toBe(false);
    }) 
});