var albumModel = require("../models/albumModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA albumController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    albumModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function exibirRanking(req, res) {
    var fkUsuario = req.body.fkUsuarioServer
    if (fkUsuario == undefined) {
        res.status(400).send('A fk do usuário não foi enviada!')
    } else {
        albumModel.exibirRanking(fkUsuario).then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado)
            } else {
                res.status(204).send('Não chegou nenhum resultado!')
            }
        }).catch((erro) => {
            console.log(erro)
            res.status(500).json(erro.sqlMessage)
        })
    }
}

function exibirAlbumMelhorAvaliado(req, res) {

    albumModel.exibirAlbumMelhorAvaliado().then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado)
        } else {
            res.status(204).send('Não chegou nenhum resultado!')
        }
    }).catch((erro) => {
        console.log(erro)
        res.status(500).json(erro.sqlMessage)
    })

}

function exibirAlbumMenosAvaliado(req, res) {

    albumModel.exibirAlbumMenosAvaliado().then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado)
        } else {
            res.status(204).send('Não chegou nenhum resultado!')
        }
    }).catch((erro) => {
        console.log(erro)
        res.status(500).json(erro.sqlMessage)
    })

}



module.exports = {
    exibirRanking,
    listar,
    testar,
    exibirAlbumMelhorAvaliado,
    exibirAlbumMenosAvaliado
}