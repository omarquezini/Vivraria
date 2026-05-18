let livros = require('./listaLivros')

function menorVal(arrProdutos, posiçãoInicial){

let maisBarato = posiçãoInicial;

for (let atual = posiçãoInicial; atual < livros.length; atual++){
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
        maisBarato = atual;
    }
}
return maisBarato;
}
module.exports = menorVal;

