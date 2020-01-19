const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map( usuario =>  usuario.idade );
console.log(idades);

const rocket = usuarios.filter( (usuario) => {
    return usuario.empresa == 'Rocketseat' && usuario.idade > 18;
});
console.log(rocket);

const google = usuarios.find( usuario => usuario.empresa == 'Google' );
console.log(google);

const union = usuarios.map( usuario => {
    usuario.idade *= 2;
    return usuario;
}).filter( union => union.idade <= 50);

console.log(union);