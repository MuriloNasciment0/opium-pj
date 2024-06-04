var votoUsuarioModel = require("../models/votoUsuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA votoUsuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    votoUsuarioModel.listar()
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

function inserirVotoUsuario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.body.idUsuarioServer;
    var album = req.body.albumServer;
    var avaliacaoAlbum = req.body.avaliacaoAlbumServer;

    // Faça as validações dos valores
    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else if (album == undefined) {
        res.status(400).send("O album está undefined!");
    } else if (avaliacaoAlbum == undefined) {
        res.status(400).send("O  do album está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        votoUsuarioModel.inserirVotoUsuario(idUsuario, album, avaliacaoAlbum)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function exibirQtdUserRanking(req, res) {
        
        votoUsuarioModel.exibirQtdUserRanking()
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

// function deletarDadosRanking(req, res) {
//     var fkUsuario = req.params.fkUsuario;

//     votoUsuarioModel.deletarDadosRanking(fkUsuario)
//         .then(
//             function (resultado) {
//                 res.json(resultado);
//             }
//         )
//         .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro nos dados do ranking: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

// function verificarUsuarioRanking(req, res) {
//     var fkUsuario = req.params.fkUsuario;
//     console.log("Valor de fkUsuario recebido: ", fkUsuario);

//     votoUsuarioModel.verificarUsuarioRanking(fkUsuario)
//         .then(
//             function (resultado) {
//                 res.json(resultado);
//             }
//         )
//         .catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro nos dados do ranking: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

function albumPorGenero(req, res) {
    votoUsuarioModel.albumPorGenero()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro nos dados do album: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function top10Albuns(req, res) {
    votoUsuarioModel.top10Albuns()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro nos dados do album: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    inserirVotoUsuario,
    listar,
    testar,
    exibirQtdUserRanking,
    // deletarDadosRanking,
    // verificarUsuarioRanking,
    albumPorGenero,
    top10Albuns
}