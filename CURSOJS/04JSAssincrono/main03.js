/*AXIOS */
axios.get('https://api.github.com/users/brunodiego5')
    .then(function(respose) {
        console.log(respose);
    })
    .catch(function(error) {
        console.warn(error);
    });