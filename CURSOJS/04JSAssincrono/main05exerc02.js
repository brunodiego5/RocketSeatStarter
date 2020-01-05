var elementInput = document.querySelector('input[name=user]');
var elementButton = document.querySelector('#app button');
var elementList = document.querySelector('#app ul');

/*promise*/
function getRepositoriesPerUser(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var xhr = new XMLHttpRequest();
            var textUlr = 'https://api.github.com/users/'+userName+'/repos?per_page=100';
            xhr.open('GET', textUlr);
            xhr.send(null);
            xhr.onreadystatechange = function() {
                
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject('Erro na requisição');
                    }
                }
            }
        }, 1000);
    });


}

function renderWaitingInlist() {   
    elementList.innerHTML = ''; 
    var itemElement = document.createElement('li');
    var itemText = document.createTextNode('Carregando...');

    itemElement.appendChild(itemText);
    itemElement.className = 'list-group-item'; //bootstrap

    elementList.appendChild(itemElement);
}
    

function fillList(listRepositories) {   
    elementList.innerHTML = ''; 
    console.log(listRepositories.length);

    var i = 0;
    for (const repository of listRepositories) {
        i++;
        var itemElement = document.createElement('li');
        var itemText = document.createTextNode(repository.name);

        itemElement.appendChild(itemText);
        itemElement.className = 'list-group-item'; //bootstrap

        elementList.appendChild(itemElement);
    }
    console.log(i);
}

function renderRepositories() {
    var userName = elementInput.value;
    elementList.innerHTML = ''; 
    
    renderWaitingInlist();

    getRepositoriesPerUser(userName)
        .then(function(response) {
            fillList(response);
        })
        .catch(function(error) {
            console.error('error: ', error);
            alert('Usuário não encontrado no github');
        });

}

elementButton.onclick = renderRepositories;