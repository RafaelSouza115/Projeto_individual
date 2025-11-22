var express = require("express");
var router = express.Router();

var obterController = require("../controllers/obterDadosController");

router.post("/obterDados",function (req, res){
 obterController.obter(req, res);
});

router.post("/obterRank",function (req, res){
 obterController.rank(req, res);
});


router.post("/obterAcertos",function (req, res){
 obterController.acertos(req, res);
});

router.post("/obterTentativa",function (req, res){
 obterController.tentativa(req, res);
});

router.post("/obterPref",function (req, res){
 obterController.preferencia(req, res);
});

router.post("/obterHistorico",function (req, res){
 obterController.historico(req, res);
});

module.exports = router;
