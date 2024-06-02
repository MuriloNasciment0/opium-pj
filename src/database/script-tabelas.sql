create database opium;
use opium;

CREATE TABLE usuario(
idUsuario int auto_increment,
nome VARCHAR(100),
email varchar(100),
senha varchar(100),
primary key(idUsuario)
);

CREATE TABLE album (
idAlbum INT AUTO_INCREMENT,
foto VARCHAR(100),
nome VARCHAR(45),
genero VARCHAR(45),
primary key(idAlbum)
);

CREATE TABLE votoUsuario (
idVotoUsuario INT AUTO_INCREMENT,
fkUsuario INT,
CONSTRAINT fk_Usuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
fkAlbum INT,
CONSTRAINT fk_Album FOREIGN KEY (fkAlbum) REFERENCES album(idAlbum),
CONSTRAINT pk_Composta PRIMARY KEY (idVotoUsuario, fkUsuario, fkAlbum),
avaliacao VARCHAR(45)
);

INSERT INTO album VALUES 
	(null, '../assets/img/InsAbundance.png', 'In Abundance', 'Trap'),
    (null, '../assets/img/selfTilted.jpg', 'Self Tilted', 'Trap'),
    (null, '../assets/img/dielit.jpg', 'Die Lit', 'Trap'),
    (null, '../assets/img/wholottared.jpg', 'Who Lotta Red', 'Rage'),
    (null, '../assets/img/projectx.jpg"', 'Project X', 'Rage'),
    (null, '../assets/img/X.jpg', 'X', 'Rage'),
    (null, '../assets/img/XTended.jpg', 'XTENDED', 'Rage'),
    (null, '../assets/img/agc.jpg', 'A Great Chaos', 'Rage'),
    (null, '../assets/img/neezus.jpg', 'NezzusDestroyed', 'Trap'),
    (null, '../assets/img/darkhorse.jpg', 'Darkhorse', 'Trap'),
    (null, '../assets/img/cora.jpg', '&lt;/3', 'Cyber Trap'),
    (null, '../assets/img/coracao2.jpg', '&lt;/3&sup2;', 'Cyber Trap'),
    (null, '../assets/img/nosty.jpg"', 'No Stylist', 'Cyber Trap'),
    (null, '../assets/img/NS+.jpg', 'NS+ (ULTRA)', 'Cyber Trap'),
    (null, '../assets/img/iflooks.jpg', 'If Looks Could Kill', 'Rock'),
    (null, '../assets/img/snotty.jpg', 'Snotty World', 'Trap'),
    (null, '../assets/img/hmxlif.jpg', 'Homixide Lifestyle', 'Rage'),
    (null, '../assets/img/snotornot.jpg', 'Snot or Not', 'Rage'),
    (null, '../assets/img/5th amndmnt album.jpg', '5TH AMNDMNT', 'Rage');
    
INSERT INTO usuario VALUES 
(null, 'Murilo', 'Murilo@gmail.com', 'murilinS12d@#!'),
(null, 'Mat', 'matheuszin@gmail.com', 'matS12d@#!'),
(null, 'Alexandre', 'Alexandre@hotmail.com', 'alexS12d@#!'),
(null, 'Maria', 'Maria@hotmail.com', 'mariS12d@#!'),
(null, 'Rog', 'rog@hotmail.com', 'rogS12d@#!');

INSERT INTO votoUsuario VALUES 
	(null, 1, 1, 'Bom'),
	(null, 1, 2, 'Ruim'),
	(null, 1, 3, 'MUSIC!'),
	(null, 1, 4, 'MUSIC!'),
	(null, 1, 5, 'Ruim'),
	(null, 1, 6, 'Muito Bom'),
	(null, 1, 7, 'MUSIC!'),
	(null, 1, 8, 'MUSIC!'),
	(null, 1, 9, 'MUSIC!'),
	(null, 1, 10, 'Ruim'),
	(null, 1, 11, 'MUSIC!'),
	(null, 1, 12, 'Muito Bom'),
	(null, 1, 13, 'Bom'),
	(null, 1, 14, 'Bom'),
	(null, 1, 15, 'MUSIC!'),
	(null, 1, 16, 'MUSIC!'),
	(null, 1, 17, 'MUSIC!'),
	(null, 1, 18, 'Ruim'),
	(null, 1, 19, 'MUSIC!');
    
    INSERT INTO votoUsuario VALUES 
	(null, 2, 1, 'Bom'),
	(null, 2, 2, 'Ruim'),
	(null, 2, 3, 'MUSIC!'),
	(null, 2, 4, 'MUSIC!'),
	(null, 2, 5, 'Ruim'),
	(null, 2, 6, 'Muito Bom'),
	(null, 2, 7, 'MUSIC!'),
	(null, 2, 8, 'MUSIC!'),
	(null, 2, 9, 'MUSIC!'),
	(null, 2, 10, 'Ruim'),
	(null, 2, 11, 'MUSIC!'),
	(null, 2, 12, 'Muito Bom'),
	(null, 2, 13, 'Bom'),
	(null, 2, 14, 'Bom'),
	(null, 2, 15, 'MUSIC!'),
	(null, 2, 16, 'MUSIC!'),
	(null, 2, 17, 'MUSIC!'),
	(null, 2, 18, 'Ruim'),
	(null, 2, 19, 'MUSIC!');
    
    INSERT INTO votoUsuario VALUES 
	(null, 3, 1, 'MUSIC!'),
	(null, 3, 2, 'Ruim'),
	(null, 3, 3, 'Bom'),
	(null, 3, 4, 'Muito Bom'),
	(null, 3, 5, 'Ruim'),
	(null, 3, 6, 'Muito Bom'),
	(null, 3, 7, 'Bom'),
	(null, 3, 8, 'MUSIC!'),
	(null, 3, 9, 'MUSIC!'),
	(null, 3, 10, 'Ruim'),
	(null, 3, 11, 'MUSIC!'),
	(null, 3, 12, 'MUSIC!'),
	(null, 3, 13, 'Bom'),
	(null, 3, 14, 'Bom'),
	(null, 3, 15, 'Bom'),
	(null, 3, 16, 'Bom'),
	(null, 3, 17, 'Bom'),
	(null, 3, 18, 'Ruim'),
	(null, 3, 19, 'MUSIC!');

INSERT INTO votoUsuario VALUES 
	(null, 4, 1, 'MUSIC!'),
	(null, 4, 2, 'Ruim'),
	(null, 4, 3, 'Bom'),
	(null, 4, 4, 'MUSIC!'),
	(null, 4, 5, 'Ruim'),
	(null, 4, 6, 'MUSIC!'),
	(null, 4, 7, 'Bom'),
	(null, 4, 8, 'MUSIC!'),
	(null, 4, 9, 'MUSIC!'),
	(null, 4, 10, 'Ruim'),
	(null, 4, 11, 'MUSIC!'),
	(null, 4, 12, 'MUSIC!'),
	(null, 4, 13, 'Bom'),
	(null, 4, 14, 'Bom'),
	(null, 4, 15, 'Bom'),
	(null, 4, 16, 'Bom'),
	(null, 4, 17, 'MUSIC!'),
	(null, 4, 18, 'Ruim'),
	(null, 4, 19, 'Bom');    
    
INSERT INTO votoUsuario VALUES 
	(null, 4, 1, 'Bom'),
	(null, 4, 2, 'Ruim'),
	(null, 4, 3, 'Bom'),
	(null, 4, 4, 'Bom'),
	(null, 4, 5, 'Ruim'),
	(null, 4, 6, 'Bom'),
	(null, 4, 7, 'Bom'),
	(null, 4, 8, 'Muito Bom'),
	(null, 4, 9, 'Bom'),
	(null, 4, 10, 'Ruim'),
	(null, 4, 11, 'Médio'),
	(null, 4, 12, 'Bom'),
	(null, 4, 13, 'Bom'),
	(null, 4, 14, 'Bom'),
	(null, 4, 15, 'Bom'),
	(null, 4, 16, 'Bom'),
	(null, 4, 17, 'Bom'),
	(null, 4, 18, 'Ruim'),
	(null, 4, 19, 'MUSIC!');    
    
    INSERT INTO votoUsuario VALUES 
	(null, 4, 1, 'Bom'),
	(null, 4, 2, 'Ruim'),
	(null, 4, 3, 'Bom'),
	(null, 4, 4, 'Bom'),
	(null, 4, 5, 'Ruim'),
	(null, 4, 6, 'Bom'),
	(null, 4, 7, 'Bom'),
	(null, 4, 8, 'Bom'),
	(null, 4, 9, 'MUSIC!'),
	(null, 4, 10, 'Ruim'),
	(null, 4, 11, 'Médio'),
	(null, 4, 12, 'Bom'),
	(null, 4, 13, 'Bom'),
	(null, 4, 14, 'Bom'),
	(null, 4, 15, 'Bom'),
	(null, 4, 16, 'Bom'),
	(null, 4, 17, 'Bom'),
	(null, 4, 18, 'Ruim'),
	(null, 4, 19, 'MUSIC!');    
    
INSERT INTO votoUsuario VALUES 
	(null, 5, 1, 'Bom'),
	(null, 5, 2, 'Ruim'),
	(null, 5, 3, 'Bom'),
	(null, 5, 4, 'Bom'),
	(null, 5, 5, 'Ruim'),
	(null, 5, 6, 'Bom'),
	(null, 5, 7, 'Bom'),
	(null, 5, 8, 'Bom'),
	(null, 5, 9, 'MUSIC!'),
	(null, 5, 10, 'Ruim'),
	(null, 5, 11, 'Médio'),
	(null, 5, 12, 'Bom'),
	(null, 5, 13, 'Bom'),
	(null, 5, 14, 'Bom'),
	(null, 5, 15, 'Bom'),
	(null, 5, 16, 'Bom'),
	(null, 5, 17, 'Bom'),
	(null, 5, 18, 'Ruim'),
	(null, 5, 19, 'MUSIC!');    
    
    
    