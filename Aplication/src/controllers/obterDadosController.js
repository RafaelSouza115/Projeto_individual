const obterModel = require("../models/obterDadosModel");


function obter(req, res) {
    var id = req.body.id;
    console.log("Controller do obter")
    obterModel.obter(id)
        .then(resultado => {
            console.log("Obter: estou no controller")
            res.status(200).json(resultado);

        })
        .catch(erro => {
            res.status(500).json(erro);
            console.log("Obter: estou no controller erro")
        });
}

function rank(req, res) {
    var id = req.body.id;

    console.log("Controller do rank")
    obterModel.rank(id)
        .then(resultado => {
            console.log("Rank: estou no controller")
            res.status(200).json(resultado);

        })
        .catch(erro => {
            res.status(500).json(erro);
            console.log("Rank: estou no controller erro")
        });
}

function acertos(req, res) {
    var id = req.body.id;

    console.log("Controller do acertos")
    obterModel.acertos(id)
        .then(resultado => {
            console.log("acertos : estou no controller")
            res.status(200).json(resultado);

        })
        .catch(erro => {
            res.status(500).json(erro);
            console.log("acertos : estou no controller erro")
        });
}

function tentativa(req, res) {
    var id = req.body.id;

    console.log("Controller das tentativas")
    obterModel.tentativa(id)
        .then(resultado => {
            console.log("Tentativas: estou no controller")
            res.status(200).json(resultado);

        })
        .catch(erro => {
            res.status(500).json(erro);
            console.log("Tentativas: estou no controller erro")
        });
}

function preferencia(req, res){
     obterModel.preferencia()
            .then(resultado => {
                res.status(200).json(resultado);
                console.log("estou no controller da preferencia")
            })
            .catch(erro => {
                res.status(500).json(erro);
                console.log("estou no controller erro da preferencia")
            });
}

function historico(req, res){
    var id = req.body.id;

     obterModel.historico(id)
            .then(resultado => {
                res.status(200).json(resultado);
                console.log("estou no controller da historico")
            })
            .catch(erro => {
                res.status(500).json(erro);
                console.log("estou no controller erro da historico")
            });
}

module.exports = {
    obter,
    rank,
    acertos,
    tentativa,
    preferencia,
    historico
};
