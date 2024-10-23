var x = 1;
var y = 2;
var z = 3;

//.clear limpa o console
console.clear();

//.log printa o valor
console.log(x, y);

//Console é uma classe em formato de variavel que possui varios comandos dentro deste console
// console.

//Tudo que tem parenteses, é uma função ou método.
//função()

//typeof é uma função que retorna o tipo da variavel, pode ser combinado com o comando console.log() 
//typeof (date) 
console.log(typeof(x));

//tipos de dados para variaveis
var string = "texto";
var numeric = 1;
var boolean = true;
var date;
var array = [
    {
        nome: "Nome",
        idade: 40,
        genero: "feminino"
    },
    {
        nome: "nome 2",
        idade: 46,
        genero: "masculino"
    }

];
//datas em variaveis
var feriado = "07/09/2024";
var date = new Date(07/09/2024);
console.log(typeof(array));


//declaração de variaveis

//var comando antigo, pode ser usado mais os atuais agora são "let" e "const".

// o let e const em questão de segurança, é melhor que o var, recomendasse usar o let e const atualmente.

//O var e o let são variáveis alteráveis já o const não pode ser alterado. Caso precise alterar, tem
//que criar uma copia no lest. ex: a baixo. 
var variavel_1 = "texto qualquer 1";
let variavel_2 = "texto qualquer 2";
const variavel_3 = "texto qualquer 3";
console.clear();
let copia = variavel_3;
console.log(copia);
copia = "teste";
console.log(copia);
variavel_2 = 1;

//Mostrando no console a array por completo, todos os valores, dos dois itens.
console.log(array);

//mostrando primeiro e segundo objeto do array por posições
console.log(array[0]);
console.log(array[1]);

//mostrando um valor do objeto que está na posição 0 do array
console.log(array[0]["nome"]);
console.log(array[1]["genero"]);

//alterando posição inteira do objeto
array[0] = {
    nome: "Luiz Rafael",
    idade: 20,
    genero: "Masculino" 
}
console.log(array);

//alterando valor de um onjeto especifivo denro do array
array[1]["nome"]= "mudando nome posição 1";
console.log(array);