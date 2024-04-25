const { validateCpf } = require("../../commom/cpf")

describe('Validação de CPF', () => {
    it('deve retornar cpf válido para o cpf 02258872901', () => {
        const res = validateCpf('11569771936');
        expect(res).toBe(true);
    });

    it('deve retornar cpf não válido para o cpf 12345678900', () => {
        const res = validateCpf('12345678900');
        expect(res).toBe(false);
    }) 
});