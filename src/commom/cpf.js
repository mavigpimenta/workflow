function validateCpf(cpf) {

    if (cpf.length !== 11) {
      return false;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
      soma += (10 - i) * cpf.charAt(i);
    }

    let primeiroDigito = soma % 11;
    primeiroDigito = primeiroDigito < 2 ? 0 : 11 - primeiroDigito;

    soma = 0;

    for (let i = 0; i < 10; i++) {
      soma += (11 - i) * cpf.charAt(i);
    }

    let segundoDigito = soma % 11;
    segundoDigito = segundoDigito < 2 ? 0 : 11 - segundoDigito;
  
    return primeiroDigito === parseInt(cpf.charAt(9)) && segundoDigito === parseInt(cpf.charAt(10)) ? true : false;
}

module.exports = { validateCpf }