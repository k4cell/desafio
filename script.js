const image = document.querySelector('#img1');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome1');
const especie= document.querySelector('#especie1');
const condicao = document.querySelector('#condicao1');
const localizacao = document.querySelector('#localizacao1');
const genero = document.querySelector('#genero1');

const image2 = document.querySelector('#img2');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie2= document.querySelector('#especie2');
const condicao2 = document.querySelector('#condicao2');
const localizacao2 = document.querySelector('#localizacao2');
const genero2 = document.querySelector('#genero2');

const image3 = document.querySelector('#img3');
const nomeDoPersonagem3 = document.querySelector('#nome3');
const especie3= document.querySelector('#especie3');
const condicao3 = document.querySelector('#condicao3');
const localizacao3 = document.querySelector('#localizacao3');
const genero3 = document.querySelector('#genero3');

gerarValorAleatorio=() => {
    return Math.floor(Math.random() * 671);
}

sortearPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio(); 
    console.log(numeroAleatorio)
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: { 
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((Response) => Response.json()).then((data) => {
        console.log(data)
        image.src = data.image;
        image.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
        localizacao.innerHTML = data.location.name;
        genero.innerHTML = data.gender;

    });
}
gerarValorAleatorio2=() => {
    return Math.floor(Math.random() * 671);
}

sortearPersonagem2 =() => {
    let numeroAleatorio = gerarValorAleatorio(); 
    console.log(numeroAleatorio)
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: { 
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((Response) => Response.json()).then((data) => {
        console.log(data)
        image2.src = data.image;
        image2.alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        especie2.innerHTML = data.species;
        condicao2.innerHTML = data.status;
        localizacao2.innerHTML = data.location.name;
        genero2.innerHTML = data.gender;

    });
}

gerarValorAleatorio3=() => {
    return Math.floor(Math.random() * 671);
}

sortearPersonagem3 =() => {
    let numeroAleatorio = gerarValorAleatorio(); 
    console.log(numeroAleatorio)
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: { 
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((Response) => Response.json()).then((data) => {
        console.log(data)
        image3.src = data.image;
        image3.alt = data.name;
        nomeDoPersonagem3.innerHTML = data.name;
        especie3.innerHTML = data.species;
        condicao3.innerHTML = data.status;
        localizacao3.innerHTML = data.location.name;
        genero3.innerHTML = data.gender;

    });
}

consultarPersonagens = () => {
    console.log('funcao');
    sortearPersonagem()
    sortearPersonagem2()
    sortearPersonagem3()
}

botao.onclick = consultarPersonagens;
