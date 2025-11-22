CREATE DATABASE rebobinando;
USE rebobinando;

CREATE TABLE preferencia(
	id INT PRIMARY KEY AUTO_INCREMENT,
	cantor VARCHAR(50)
);
INSERT INTO preferencia(cantor) VALUES 
('Arnaldo Antunes'),
('Carlinhos Brown'),
('Marisa Monte');

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	id_preferencia int,
	constraint fk_preferencia FOREIGN KEY (id_preferencia) REFERENCES preferencia(id)
	);

create table quiz (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100)
);
insert into quiz(nome) VALUES
('Tribalistas');

CREATE TABLE jogada(
	id INT PRIMARY KEY AUTO_INCREMENT,
	id_usuario INT,
	id_quiz INT,
	acertos INT,
	erros INT,
	constraint fk_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id),
	constraint fk_quiz FOREIGN KEY (id_quiz) REFERENCES quiz (id)
);

select sum(acertos) * 10 as pontuacao, u.nome from jogada 
join usuario u on u.id = jogada.id_usuario WHERE id_usuario = 1;
insert into jogada(id_usuario, id_quiz, acertos, erros) VALUES
(2, 1, 3, 2),
(3, 1, 2, 2),
(4, 1, 2, 2),
(4, 1, 1, 2);

SELECT * from usuario;
select * from quiz;
insert into usuario(nome, email, senha, id_preferencia) VALUES
('rafael','rafa@gmail.com','local123', 1);

SELECT * FROM preferencia;
CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'usuario123';

GRANT SELECT, INSERT, UPDATE, DELETE ON usuario.* TO 'usuario'@'%';
 
flush privileges;

select * from jogada;
select * from usuario;

SELECT 
    u.id,
    u.nome,
   SUM(j.acertos) * 10  AS pontuacao
FROM usuario u
JOIN jogada j ON u.id = j.id_usuario
GROUP BY u.id, u.nome
ORDER BY pontuacao DESC;


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
WHERE u.id = 11;


SELECT 
    posicao
FROM (
    SELECT 
        id_usuario,
        total_pontos,
        RANK() OVER (ORDER BY total_pontos DESC) AS posicao
    FROM (
        SELECT 
            id_usuario,
            SUM(acertos) * 10 AS total_pontos
        FROM jogada
        GROUP BY id_usuario
    ) AS ranking
) AS final
WHERE id_usuario = 11;

SELECT 
    (
        SELECT COUNT(*) + 1
        FROM (
            SELECT id_usuario, SUM(acertos) * 10 AS total_pontos
            FROM jogada
            GROUP BY id_usuario
        ) AS tabela
        WHERE tabela.total_pontos > (
            SELECT SUM(acertos) * 10
            FROM jogada
            WHERE id_usuario = 11
        )
    ) AS posicao;

    SELECT
(
    SELECT COUNT(*) 
    FROM (
        SELECT id_usuario, SUM(acertos) * 10 AS total_pontos
        FROM jogada
        GROUP BY id_usuario
    ) AS t2
    WHERE t2.total_pontos > (
        SELECT SUM(acertos) * 10 
        FROM jogada 
        WHERE id_usuario = 11
    )
) + 1 AS posicao;




 SELECT COUNT(*) + 1
        FROM (
            SELECT id_usuario, SUM(acertos) * 10 AS total_pontos
            FROM jogada
            GROUP BY id_usuario
        ) AS tabela 
JOIN jogada j ON u.id = j.id_usuario
        WHERE tabela.total_pontos > SUM(j.acertos) * 10 
        GROUP BY tabela;

SELECT 
    COUNT(*) + 1 AS posicao
FROM (
    SELECT id_usuario, SUM(acertos) * 10 AS total_pontos
    FROM jogada
    GROUP BY id_usuario
) AS tabela
WHERE tabela.total_pontos >
(
    SELECT SUM(acertos) * 10
    FROM jogada
    WHERE id_usuario = 7
);

SELECT id_usuario, SUM(acertos) * 10 AS total_pontos
            FROM jogada
            GROUP BY id_usuario;


    select acertos from jogada where id_usuario = 5 ORDER BY acertos DESC;

    select COUNT(id_quiz) as tentativa from jogada where id_usuario = 1 GROUP BY id_usuario;
SELECT COUNT(SUM(id_preferencia)) as pref from usuario;

SELECT 
    p.cantor,
    COUNT(*) AS quantidade
FROM usuario u join preferencia p on p.id = u.id_preferencia GROUP BY cantor;

SELECT COUNT(SUM(id_preferencia)) as pref from usuario;

SELECT acertos, id from jogada where id_usuario = 1;

USE rebobinando;
