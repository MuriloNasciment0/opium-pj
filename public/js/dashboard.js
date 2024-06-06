document.addEventListener('DOMContentLoaded',()=> {
    fetch("/album/exibirAlbumMelhorAvaliado", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },

    }).then((resposta) => {
        if (resposta.ok) {
            console.log(resposta)
            resposta.json().then((albumMaisOuvido) => {
                conteudoAlbumMaisOuvido.innerHTML = 
                `
                <img class="imgAlbumDashMaisMenos" src="${albumMaisOuvido[0].foto}">
                <div class="areaNumero">
                    <span id="nomeAlbumMais" class="nomeAlbum">${albumMaisOuvido[0].nome}</span>
                </div>
                `
            })
        } else {
            console.log('Deu erro no then')
        }
    })
})

document.addEventListener('DOMContentLoaded',()=> {
    fetch("/album/exibirAlbumMenosAvaliado", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },

    }).then((resposta) => {
        if (resposta.ok) {
            console.log(resposta)
            resposta.json().then((albumMenos) => {
                conteudoAlbumMenosOuvido.innerHTML = 
                `
                <img class="imgAlbumDashMaisMenos" src="${albumMenos[0].foto}">
                        <div class="areaNumero">
                            <span class="nomeAlbum">${albumMenos[0].nome}</span>
                </div>
                `
            })
        } else {
            console.log('Deu erro no then')
        }
    })
})

document.addEventListener('DOMContentLoaded',()=> {
    fetch("/votoUsuario/exibirQtdUserRanking", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },

    }).then((resposta) => {
        if (resposta.ok) {
            console.log(resposta)
            resposta.json().then((qtdUserRanking) => {
                conteudoQtdUsuario.innerHTML = 
                `
                <span id="numeroUsuario">${qtdUserRanking[0].quantidadeUsuario}</span>
                <span class="subtituloUsuario">Members</span>
                `
            })
        } else {
            console.log('Deu erro no then')
        }
    })
})

// Os dados que vem select são armazenados nessa json;
// A estrutura do JSON depende diretamente do resultado da consulta SQL executada pela função votoUsuarioModel.exibirQtdUserRanking().