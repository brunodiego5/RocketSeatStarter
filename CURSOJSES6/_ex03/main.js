//3.1

const arr = [1,2,3,4,5];

arr.map(function(item) {
    return item + 10;
})

const arr1 = arr.map(item => item + 10);
console.log(arr1);

//3.2

const usuario = {nome: 'Diego', idade: 23};

function mostraIdade(usuario) {
    return usuario.idade;
}

mostraIdade(usuario);

const idade = usuario => usuario.idade;
console.log(idade(usuario));

//3.3
const nome = 'Diego';
const idadeUser = 23;

function mostraUsuario(nome = 'Diego', idade = 18) {
    return { nome, idade};
}

mostraUsuario(nome, idadeUser);
mostraUsuario(nome);

const mostraUsuario2 = (nome = 'Diego', idade = 18) => ({ nome, idade});

console.log(mostraUsuario2(nome, idade));
console.log(mostraUsuario2(nome));

//3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
    })
}

console.log(promise());

const promise2 = () => (new Promise((resolve, reject) => resolve()));

console.log(promise2());

