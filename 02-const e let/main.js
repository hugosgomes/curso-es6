//constantes são tipos de váriáveis somente leitura que não podem ter seu conteúdo mudado diretamente mas podem ser mutadas, 
// ter parte de seu conteudo alterado.
const usuario = {nome: 'Diego'};

usuario.nome = 'Cleiton';

console.log(usuario);


function teste(x) {
    let y = 2;

    if (x > 5) {
        console.log(x, y);
    }
}

teste(10);