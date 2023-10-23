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

    return `${days}/${months}/${years}`;
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

console.log(addNew('opá'));