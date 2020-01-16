//REST

const usuario = {
    nome: 'Diego',
    idade:23,
    empresa: 'RocketSeat'
}

const {nome, ...resto} = usuario;

// console.log(nome, resto);

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

// console.log(a,b,c);

function soma(...params) {
    return params.reduce((total,next) => total + next);
}

// console.log(soma(1,3,4));

//SPREAD

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'RocketSeat'
}

const usuario2 = {...usuario1, nome: 'Gabriel'}

console.log(usuario2);