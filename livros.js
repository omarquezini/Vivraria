let precoLivros = [25, 15, 50, 30, 30,];

let maisBarato = 0;

for (let atual = 0; atual < precoLivros.length; atual++){
    if (precoLivros[atual] < precoLivros[maisBarato]){
        maisBarato = atual;

    }

}
console.log(`O livro mais barato custa R$${precoLivros[maisBarato]}`);