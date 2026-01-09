/* Exercício JS */

/* É possível simplificar tudo isso!

function livro(nome, ano, autor) {
    const nomeAutor = nome.toUpperCase();
    const calcularAno = 2026 - ano;
    const frase = nome + ' por ' + autor;
    
    const objetoLivro = {
        nome: nomeAutor,
        calcularAno,
        frase,
    };

    return objetoLivro;
}
*/

function livro(nome, ano, autor) {
    return {
        nome: nome.toUpperCase(),
        calcularAno: 2026 - ano,
        frase: nome + ' por ' + autor,
    };
}

const livroRetorno = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');
console.log(livroRetorno.frase);
console.log(livroRetorno);
