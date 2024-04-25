const { Soma, Sub, Mult, Div } = require("../../commom/calc")

describe('Calculadora', () => {
    describe('Soma', () => {
        it('deve retornar o resultado da soma de 1+2', () => {
            const res = Soma(1,2);
            expect(res).toBe(3);
        });
    });

    describe('Subtração', () => {
        it('deve retornar o resultado da subtração de 2-1', () => {
            const res = Sub(2,1);
            expect(res).toBe(1);
        });
    });
    
    describe('Multiplicação', () => {
        it('deve retornar o resultado da multiplicação de 2*2', () => {
            const res = Mult(2,2);
            expect(res).toBe(4);
        });
    });

    describe('Divisão', () => {
        it('deve retornar o resultado da divisão de 4/2', () => {
            const res = Div(4,2);
            expect(res).toBe(2);
        });
    });
});