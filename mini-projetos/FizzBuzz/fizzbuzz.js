// um numero divisivel por 3 => Fizz
// um numero divisivel por 5 => Buzz
// um numero divisivel por 3 e 5 => FizzBuzz
// um numero não divisivel por 3 e 5 => entrada
// não é um numero => 'Não é um numero!'

let num = 10;

function FizzBuzz(num){
    if(num % 3 === 0)
        console.log("Fizz");
    
    if(num % 5 === 0)
        console.log("Buzz");
    
    if(num % 3 === 0 && num % 5 === 0)
        console.log("FizzBuzz");
    
    if(num % 3 > 0 && num % 5 > 0)
        console.log(num);
    
    if(typeof num !== 'number')
        console.log('Não é um numero!');
    
}