const usuarios = [
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    {nome: 'Lucas', idade: 30, empresa: 'Facebook'}
];

const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

const usuarios1 = usuarios.filter(usuario => usuario.idade > 18 && usuario.empresa === 'Rocketseat');
console.log(usuarios1);

const usuarios2 = usuarios.find(usuario => usuario.empresa === 'Google');
console.log(usuarios2);

const usuarios3 = usuarios
    .map(usuario => ({...usuario, idade: usuario.idade*2})) //...SPREAD
    .filter(usuario => usuario.idade < 50);
console.log(usuarios3);
