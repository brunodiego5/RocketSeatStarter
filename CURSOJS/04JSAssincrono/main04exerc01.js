/*PROMISE*/
function checaIdade(idade) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if (idade >= 18) {
                resolve('Maior que 18');
            } else {
                reject('Menor que 18');
            }
        }, 2000);
        
    });
}

checaIdade(17)
    .then(function() {
        console.log('Maior que 18');
    })
    .catch(function() {
        console.warn('Menor que 18');
    });