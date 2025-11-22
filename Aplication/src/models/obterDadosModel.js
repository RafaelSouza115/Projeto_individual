const database = require("../database/config");

function obter(id) {

    // console.log("Obter : ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    //      id);


    var instrucaoObterSql = `
       select sum(acertos) * 10 as pontuacao from jogada j
join usuario u on u.id = j.id_usuario WHERE id_usuario = '${id}';`;

    // console.log("Obter: Executando a instrução SQL: \n" + instrucaoObterSql);
    return database.executar(instrucaoObterSql);
}

function rank(id) {

    // console.log(" Rank: ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    //      id);


    var instrucaoRankSql = `
       SELECT 
    (
        SELECT COUNT(*) + 1
        FROM (
            SELECT id_usuario, SUM(acertos) * 10 AS total_pontos
            FROM jogada
            GROUP BY id_usuario
        ) AS tabela
        WHERE tabela.total_pontos > SUM(j.acertos) * 10
    ) AS posicao
FROM usuario u
JOIN jogada j ON u.id = j.id_usuario
WHERE u.id = '${id}';`;

    // console.log("Rank: Executando a instrução SQL: \n" + instrucaoRankSql);
    return database.executar(instrucaoRankSql);
}

function acertos(id) {

    // console.log(" Acertos: ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    //      id);


    var instrucaoAcertosSql = `
             select acertos from jogada where id_usuario = '${id}' ORDER BY acertos DESC;
      `;

    // console.log("Acertos: Executando a instrução SQL: \n" + instrucaoAcertosSql);
    return database.executar(instrucaoAcertosSql);
}

function tentativa(id) {

    // console.log(" Tentativas : ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    //      id);

    var instrucaoTentativasSql = `
          select COUNT(j.id_quiz) as tentativa from jogada as j where j.id_usuario ='${id}'  GROUP BY j.id_usuario;
      `;

    // console.log("Tentativas : Executando a instrução SQL: \n" + instrucaoTentativasSql);
    return database.executar(instrucaoTentativasSql);
}

function preferencia() {
    console.log(" Tentativas : ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");


    var instrucaopreferenciaSql = `
          SELECT 
    p.cantor,
    COUNT(*) AS quantidade
FROM usuario u join preferencia p on p.id = u.id_preferencia GROUP BY cantor;
      `;

    console.log("Tentativas : Executando a instrução SQL: \n" + instrucaopreferenciaSql);
    return database.executar(instrucaopreferenciaSql);
}

function historico(id) {
    console.log(" Tentativas : ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");


    var instrucaohistoricoSql = `
         SELECT acertos, id from jogada where id_usuario = '${id}';
      `;

    console.log("Tentativas : Executando a instrução SQL: \n" + instrucaohistoricoSql);
    return database.executar(instrucaohistoricoSql);
}


module.exports = {
    obter,
    rank,
    acertos,
    tentativa,
    preferencia,
    historico
};
