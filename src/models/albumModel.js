var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM album;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirRanking(fkUsuario) {
    var instrucao = `
    SELECT album.foto, album.nome, votoUsuario.avaliacao FROM album JOIN votoUsuario
    ON fkAlbum = idAlbum
    WHERE fkUsuario = ${fkUsuario}
    ORDER BY FIELD(avaliacao, 'Ruim', 'Bom', 'Muito Bom', 'MUSIC!');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// função
function exibirAlbumMelhorAvaliado() {
    var instrucao = `
    SELECT album.foto AS foto, album.nome AS nome, COUNT(avaliacao) AS quantidadeAvaliacao FROM votoUsuario JOIN album
    ON fkAlbum = idAlbum
    WHERE avaliacao LIKE 'MUSIC!'
    GROUP BY album.nome, album.foto ORDER BY quantidadeAvaliacao DESC limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirAlbumMenosAvaliado() {
    var instrucao = `
    SELECT album.foto AS foto, album.nome AS nome, COUNT(avaliacao) as quantidadeAvaliacao FROM votoUsuario JOIN album
    ON fkAlbum = idAlbum
    WHERE avaliacao LIKE 'Ruim'
    GROUP BY album.nome, album.foto ORDER BY quantidadeAvaliacao DESC limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    exibirRanking,
    listar,
    exibirAlbumMelhorAvaliado,
    exibirAlbumMenosAvaliado
};