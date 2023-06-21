// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
    // Sua implementação aqui
    const retangulo = {
        largura: 5,
        altura: 8,
    };
let area=retangulo.largura*retangulo.altura;
let perimetro=2*(retangulo.largura+retangulo.altura)

}

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
    // Sua implementação aqui
    if(pessoa.idade>=18){
        return'true';
       }else{
         return 'false';
       }
}

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    // Sua implementação aqui

}
const obj={
    nome: 'Bob',
    idade: 35,
    cidade: 'London',
 };
 let concate="Nome:"+obj.nome+' '+'Idade:'+obj.idade+' '+'Cidade:'+obj.cidade;
module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
