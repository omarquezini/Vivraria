let livros = require('./listaLivros');

let menorVal = require('./menor');

for(let atual = 0; atual < livros.length; atual++){
    let menor = menorVal(livros, atual);

    let livroAtual = livros[atual];
    console.log("(",atual,")========>");
    console.log("Livro Atual           ", livros[atual]);

    let livroMenorPreco = livros[menor];

    console.log("Livro com menor preço:", livros[menor]);
    console.log(" ")

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}
console.log(livros);