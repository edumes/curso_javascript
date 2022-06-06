//retornar true se um dos operandos forem true
let maiorDeIdade = false;
let possuiCarteiraMotorista = true;
let podeAplicar = maiorDeIdade && possuiCarteiraMotorista;

console.log('pode aplicar: ', podeAplicar);

//operador NOT (!)
let candidatoRecusado = !podeAplicar;

console.log('candidato recusado', candidatoRecusado);