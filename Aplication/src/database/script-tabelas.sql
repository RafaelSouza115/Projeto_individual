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

CREATE TABLE jogada(
	id INT PRIMARY KEY AUTO_INCREMENT,
	id_usuario INT,
	id_quiz INT,
	acertos INT,
	erros INT,
	constraint fk_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id),
	constraint fk_quiz FOREIGN KEY (id_usuario) REFERENCES quiz (id)
);
SELECT * from usuario;

SELECT * FROM preferencia;
