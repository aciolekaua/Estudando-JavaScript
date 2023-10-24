/*
    Exercicio 1:
    ---------

    Escrever um programa em JavaScript para checar 2 numeros e retornar true
    se um deles é 100 ou se a soma dos dois numeros é 100 
*/

 const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;
 console.log(isEqualTo100(100,0));
 console.log(isEqualTo100(0,100));

 console.log(isEqualTo100(10,0));
 console.log(isEqualTo100(0,10));

 console.log(isEqualTo100(20,80));
 console.log(isEqualTo100(50,50));


 /*
    Exercicio 2:
    ---------
    Escrever um programa em JavaScript que leia a extensão
    de um arquivo

 */

//Duas formas de Executar o mesmo codigo
const getFileExtension = (filename) => filename.split('.').pop();

//const getFileExtension = (filename) => filename.slice(filename.lastIndexOf('.'));

console.log(getFileExtension('example.txt'));
console.log(getFileExtension('index.html'));
console.log(getFileExtension('database.sql'));


 /*
    Exercicio 3:
    ---------
    Escrever um programa em JavaScript que mova cada
    caracter em uma string seguindo o alfabeto
 */

//String.fromCharCode
//charCodeAt

const moveCharsFoward = (str) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
console.log(moveCharsFoward('abcd'));
console.log(moveCharsFoward('jfsdk'));

/*
    Exercicio 4:
    ---------
    Escrever um programa em JavaScript que pegue a data atual
    formato esperado :
    mm-dd-yyyy, mm/dd/yyyy ou dd-mm-yyy, dd/mm/yyyy

*/

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth();
    const years = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${days}/${months}/${years} ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate());

/*
    Exercicio 5:
    ---------
    Escrever um programa em JavaScript que escreva New
    na frente de uma string, mas se a string já comecar com new
    retorna a original   
*/

const addNew = (str) => str.indexOf('New!') === 0 ? str : `New! ${str}`;

console.log(addNew('Hello Word!'));

/*
    Exercicio 6:
    ---------
    Escrever um programa em JavaScript que crie uma nova string
    pegando os 3 primeiros caracteres e os 3 ultimos juntando-as
    se a string tiver 3 ou mais caracteres,caso não a string original é retornada 
*/

const newString = (str) => {
    if(str.length < 3){
        return str;
    }else{
        let firstThreeCharacters = str.slice(0, 3);
        let lastThreeCharacters = str.slice(-3);
        return `${firstThreeCharacters}${lastThreeCharacters}`;
    }
}

//Outro jeito de fazer o mesmo codigo
const TreeFirstString = (str) => str.lenght < 3 ? str : str.slice(0,3) + str.slice(-3);


console.log(newString('hello word'));
console.log(TreeFirstString('Hello word'));

/*
    Exercicio 7:
    ---------

    Escreva um programa JavaScript para extrair a primeira metade de uma string de comprimento par
*/
const extractFirstHalf = (str) => {
    const halfLength = Math.floor(str.length / 2);
    return str.substring(0, halfLength);
}

//Outro jeito de fazer o mesmo codigo
const fisrtHalf = (str) => str.slice(0, str.length / 2);

console.log(extractFirstHalf('Hello Word!!'));
console.log(fisrtHalf('Temp'));

/*
    Exercicio 8:
    ---------

    Escreva um programa JavaScript que concatene duas strings exceto a primeiro caractere
*/
const concatenate = (string1, string2) => string1.slice(1) + string2.slice(1)
console.log(concatenate('Hel', 'lo World!'));
console.log(concatenate('abc','def'));
console.log(concatenate('Junior','Developer'));


/*
    Exercicio 9:
    ---------

    Dado dois numeros escreva um programa JavaScript que cheque qual deles está mais perto de 100
*/
function checkClosestToOneHundred(num1, num2){
    if(Math.abs(100-num1) <= Math.abs(100-num2)){
        console.log(`${num1} is closer to 100`);
    }else{
        console.log(`${num2} is closer to 100`);
    }    
};
checkClosestToOneHundred(98,99);

//Outro jeito de fazer o mesmo codigo
const closeTo100 = (num1,num2) => (100 - num1) < (100 - num2) ? num1 : num2;
console.log(closeTo100(99,1));

/*
    Exercicio 10:
    ---------

    Escreva um programa JavaScript para verificar se uma determinada string contém de 2 a 4 
    ocorrências de um caractere especificado
*/

const countChars = (str,char) => str.split('').filter(ch => ch === char).length;
const contains2To4 = (str, char) => countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2To4('ooh!','o'));
console.log(contains2To4('oh!','o'));
console.log(contains2To4('oooh!','o'));
console.log(contains2To4('oooh!','o'));

/*
    Exercicio 11:
    ---------

    Escreva um programa JavaScript para encontrar o número de dígitos pares em uma array de números inteiros
*/
const countEventNumbers = (arr) => arr.filter(num => num % 2 === 0).length;

console.log(countEventNumbers([1,2,3,4,5,6]));
console.log(countEventNumbers([2,2,2,2,2,2]));
console.log(countEventNumbers([3,5,7,10,100]));

/*
    Exercicio 12:
    ---------

    Escreva um programa JavaScript para encontrar o número de valores pares até um determinado número
*/
const findEvenNums = (n) => {
    let sum = 0;
    for(let i=0;i<=n;i++){
            if(i%2===0){
                sum++;    
            }   
        }
        return sum;
    };
    console.log(findEvenNums(10));

//Outro jeito de fazer o mesmo codigo
const createArrayOfNumbers = (num) => {
    const returnArray = [];
    for(let i = 1; i <= num; i+=1) {
        returnArray.push(i);
    }
    return returnArray;
}

console.log(countEventNumbers(createArrayOfNumbers(6)));
console.log(countEventNumbers(createArrayOfNumbers(9)));

/*
    Exercicio 12:
    ---------

    Escreva um programa JavaScript para verificar se um determinado array de inteiros está classificado
    em ordem crescente
 */

const isAscending = (arr) => {
    for(let i = 0; i < arr.length; i+=1) {
        if(arr[i+1] < arr[i]) return false;
    }
    return true;
}

console.log(isAscending([1,2,3,4,5,6]));
console.log(isAscending([1,2,5,4,3,6]));
console.log(isAscending([1,2,3,4,6,6]));


/*
    Exercicio 13:
    ---------
    Escreva um programa JavaScript para obter o maior número par de um array de inteiros
*/
function getMaxParNumber(array) {
    let maxNum = null;
    let maxParNum = null;
    for(let number of array) {
        if(number % 2 === 0 && (!maxNum || number > maxNum)) {
            maxNum = number;
            maxParNum = number;
            
        } else if(number % 2 !== 0 && (!maxNum || number > maxNum)) {
            maxNum = number;
                
        }
                
            
    }
                
    return maxParNum ? maxParNum : "No even numbers in the array";
                
}
console.log(getMaxParNumber([1, 5, 3, 3, 9, 11]));

//Outro jeito de fazer o mesmo codigo
const largestNumber = (arr) => Math.max(...arr.filter(num => num % 2 === 0));
console.log(largestNumber([1, 2, 3, 4, 5, 7,]));

/*
    Exercicio 14:
    ---------
    Escreva um programa JavaScript para substituir o 
    primeiro dígito em uma string (deve conter pelo menos dígito) por $ caractere
*/
const replaceFirstDigit = (str) => str.replace(/[0-9]/g, '$');
console.log(replaceFirstDigit('Abd1dss'));
console.log(replaceFirstDigit('A2d1d2s'));
console.log(replaceFirstDigit('3bd1d344s'));