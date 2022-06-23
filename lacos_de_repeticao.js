//1.For
//2.While
//3.Do..while
//4.For..In
//5.For..of

//For
for(let i = 0; i < 5; i++){
    console.log("estou longe!");
}

//While
let i = 5;

while(i >= 1){
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}

//Do..While
let i = 0;

do{
    console.log("digitando", i);
    i++;
} while (i < 10)

//-------------------------------------------------------------------------------------
//for-in

const pessoa = {
    nome: 'Eduardo',
    idade: 25
};

for(let chave in pessoa) {
    console.log(chave, pessoa.nome);
}

const cores = ['Vermelho', 'Azul', 'Verde'];

for (let indice in cores){
    console.log(indice, cores[indice]);
}

//for-of
for(let cor of cores){
    console.log(cor);
}