import axios from 'axios';

/*function getUserFromGitHub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe: ', err);
        });
}*/

const getUserFromGitHub = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.warn('Usuário não existe: ', err);
    }

}

// getUserFromGitHub('brunodiego5');
// com erro 404 => getUserFromGitHub('brunodiego5_NAO_EXISTE');

/*class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.warn('Repositório não existe: ', err);
            })
    }
}*/

class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch(err) {
            console.error('Repositório não existe: ', err);
        }
    }
}

// Github.getRepositories('rocketseat/unform');
// com erro 404 => Github.getRepositories('rocketseat/adasgdias');

/*const buscaUsuario = user => {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
}*/

const buscaUsuario = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch(err) {
        console.error('Usuário não existe: ', err);
    }
}

// buscaUsuario('diego3g');
// com erro 404 => buscaUsuario('diego3gssasa');

const executarTodos = async () => {
    await getUserFromGitHub('brunodiego5');
    // com erro 404 => await getUserFromGitHub('brunodiego5_NAO_EXISTE');

    await Github.getRepositories('rocketseat/unform');
    // com erro 404 => await Github.getRepositories('rocketseat/adasgdias');

    await buscaUsuario('diego3g');
    // com erro 404 => await buscaUsuario('diego3gssasa');
}

executarTodos();