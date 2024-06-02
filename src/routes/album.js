var express = require("express");
var router = express.Router();

var albumController = require("../controllers/albumController");

router.get("/", function (req, res) {
    albumController.testar(req, res);
});

router.get("/listar", function (req, res) {
    albumController.listar(req, res);
});

router.post("/exibirRanking", function (req, res) {
    albumController.exibirRanking(req, res);
})

router.get("/exibirAlbumMelhorAvaliado", function (req, res) {
    albumController.exibirAlbumMelhorAvaliado(req, res);
})

router.get("/exibirAlbumMenosAvaliado", function (req, res) {
    albumController.exibirAlbumMenosAvaliado(req, res);
})

module.exports = router;