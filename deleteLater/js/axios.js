let btn = document.querySelector('#btn');
let div = document.querySelector('#app');


btn.onclick = () => {
    //limpa a div
    div.innerHTML = '';

    //cria span 

    let spanNome = document.createElement('span');

    //criar o txtNome

    let txtNome = '';

    //recupera o input

    let github_user = document.querySelector('input[name=github_user]').value;

    axios.get(`https://api.github.com/users/${github_user}`)
        .then(function(response){
            if(response.data.name !== null){
                txtNome = document.createTextNode(response.data.name);

                let img = document.createElement('img');
                img.setAttribute('src', response.data.avatar_url);
                img.setAttribute('alt', response.data.name);
                img.setAttribute('widht', '45px');
                img.setAttribute('height', '45px');

                div.appendChild(img);
            }else{
                txtNome = document.createTextNode('Nome inexistente!')
            }
            //add o conteudo na div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        })
        .catch(function(error){

        });
}