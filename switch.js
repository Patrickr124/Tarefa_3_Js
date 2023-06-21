// Retorna o dia da semana correspondente a um número
function retornaDiaSemana(number) {
    // Sua implementação aqui
    switch(number){
        case 1:
            return 'Hoje é Domingo';
         
          case 2:
            return 'Hoje é Segunda';
        
          case 3:
            return 'Hoje é Terça';
        
          case 4:
            return 'Hoje é Quarta';
            
          case 5:
            return 'Hoje é Quinta';
            
          case 6:
            return 'Hoje é Sexta';
            
          case 7:
            return 'Hoje é Sábado';
          default:
            return 'Número inválido';
    }
}

// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
    // Sua implementação aqui
    function retornaPrecoProduto(code){
        switch(code){
          case 'A':
            return 'O preço é 10.99';
            case 'B':
            return 'O preço é 5.99';
            case 'C':
            return 'O preço é 7.5';
          default:
            return'Código Inválido';
        }
      }
}

// Retorna a categoria do produto com base no tipo de produto
function retornaCategoriaProduto(type) {
    // Sua implementação aqui
    switch(type){
        case 'Eletrônicos':
          return 'Tecnologia';
        case 'Roupas':
          return 'Moda';
        case 'Alimentos':
          return 'Alimentação';
        default:
          return 'Categoria Desconhecida'
      }
}

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };