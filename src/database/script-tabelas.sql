CREATE DATABASE opium;
USE opium;

CREATE TABLE usuario(
    idUsuario INT AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(100),
    PRIMARY KEY(idUsuario)
);

CREATE TABLE album (
    idAlbum INT AUTO_INCREMENT,
    foto VARCHAR(100),
    nome VARCHAR(45),
    genero VARCHAR(45),
    PRIMARY KEY(idAlbum)
);

CREATE TABLE votoUsuario (
    idVotoUsuario INT AUTO_INCREMENT,
    fkUsuario INT,
    fkAlbum INT,
    avaliacao VARCHAR(45),
    CONSTRAINT fk_Usuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    CONSTRAINT fk_Album FOREIGN KEY (fkAlbum) REFERENCES album(idAlbum),
    CONSTRAINT pk_Composta PRIMARY KEY (idVotoUsuario, fkUsuario, fkAlbum)
);

INSERT INTO album (foto, nome, genero) VALUES 
    ('../assets/img/InsAbundance.png', 'In Abundance', 'Trap'),
    ('../assets/img/selfTilted.jpg', 'Self Tilted', 'Trap'),
    ('../assets/img/dielit.jpg', 'Die Lit', 'Trap'),
    ('../assets/img/wholottared.jpg', 'Who Lotta Red', 'Rage'),
    ('../assets/img/projectx.jpg', 'Project X', 'Rage'),
    ('../assets/img/X.jpg', 'X', 'Rage'),
    ('../assets/img/XTended.jpg', 'XTENDED', 'Rage'),
    ('../assets/img/agc.jpg', 'A Great Chaos', 'Rage'),
    ('../assets/img/neezus.jpg', 'NezzusDestroyed', 'Trap'),
    ('../assets/img/darkhorse.jpg', 'Darkhorse', 'Trap'),
    ('../assets/img/cora.jpg', '&lt;/3', 'Cyber Trap'),
    ('../assets/img/coracao2.jpg', '&lt;/3&sup2;', 'Cyber Trap'),
    ('../assets/img/nosty.jpg', 'No Stylist', 'Rage'),
    ('../assets/img/NS+.jpg', 'NS+ (ULTRA)', 'Rage'),
    ('../assets/img/iflooks.jpg', 'If Looks Could Kill', 'Trap Rock'),
    ('../assets/img/snotty.jpg', 'Snotty World', 'Trap'),
    ('../assets/img/hmxlif.jpg', 'Homixide Lifestyle', 'Rage'),
    ('../assets/img/snotornot.jpg', 'Snot or Not', 'Rage'),
    ('../assets/img/5th amndmnt album.jpg', '5TH AMNDMNT', 'Rage');

INSERT INTO usuario (nome, email, senha) VALUES 
    ('Murilo', 'Murilo@gmail.com', 'murilinS12d@#!'),
    ('Mat', 'matheuszin@gmail.com', 'matS12d@#!'),
    ('Alexandre', 'Alexandre@hotmail.com', 'alexS12d@#!'),
    ('Maria', 'Maria@hotmail.com', 'mariS12d@#!'),
    ('Rog', 'rog@hotmail.com', 'rogS12d@#!');

INSERT INTO votoUsuario (fkUsuario, fkAlbum, avaliacao) VALUES 
    (1, 1, 'Bom'),
    (1, 2, 'Ruim'),
    (1, 3, 'MUSIC!'),
    (1, 4, 'MUSIC!'),
    (1, 5, 'Ruim'),
    (1, 6, 'Muito Bom'),
    (1, 7, 'MUSIC!'),
    (1, 8, 'MUSIC!'),
    (1, 9, 'MUSIC!'),
    (1, 10, 'Ruim'),
    (1, 11, 'MUSIC!'),
    (1, 12, 'Muito Bom'),
    (1, 13, 'Bom'),
    (1, 14, 'Bom'),
    (1, 15, 'MUSIC!'),
    (1, 16, 'MUSIC!'),
    (1, 17, 'MUSIC!'),
    (1, 18, 'Ruim'),
    (1, 19, 'MUSIC!'),
    (2, 1, 'Bom'),
    (2, 2, 'Ruim'),
    (2, 3, 'MUSIC!'),
    (2, 4, 'MUSIC!'),
    (2, 5, 'Ruim'),
    (2, 6, 'Muito Bom'),
    (2, 7, 'MUSIC!'),
    (2, 8, 'MUSIC!'),
    (2, 9, 'MUSIC!'),
    (2, 10, 'Ruim'),
    (2, 11, 'MUSIC!'),
    (2, 12, 'Muito Bom'),
    (2, 13, 'Bom'),
    (2, 14, 'Bom'),
    (2, 15, 'MUSIC!'),
    (2, 16, 'MUSIC!'),
    (2, 17, 'MUSIC!'),
    (2, 18, 'Ruim'),
    (2, 19, 'MUSIC!'),
    (3, 1, 'MUSIC!'),
    (3, 2, 'Ruim'),
    (3, 3, 'Bom'),
    (3, 4, 'Muito Bom'),
    (3, 5, 'Ruim'),
    (3, 6, 'Muito Bom'),
    (3, 7, 'Bom'),
    (3, 8, 'MUSIC!'),
    (3, 9, 'MUSIC!'),
    (3, 10, 'Ruim'),
    (3, 11, 'MUSIC!'),
    (3, 12, 'MUSIC!'),
    (3, 13, 'Bom'),
    (3, 14, 'Bom'),
    (3, 15, 'Bom'),
    (3, 16, 'Bom'),
    (3, 17, 'Bom'),
    (3, 18, 'Ruim'),
    (3, 19, 'MUSIC!'),
    (4, 1, 'MUSIC!'),
    (4, 2, 'Ruim'),
    (4, 3, 'Bom'),
    (4, 4, 'MUSIC!'),
    (4, 5, 'Ruim'),
    (4, 6, 'MUSIC!'),
    (4, 7, 'Bom'),
    (4, 8, 'MUSIC!'),
    (4, 9, 'MUSIC!'),
    (4, 10, 'Ruim'),
    (4, 11, 'MUSIC!'),
    (4, 12, 'MUSIC!'),
    (4, 13, 'Bom'),
    (4, 14, 'Bom'),
    (4, 15, 'Bom'),
    (4, 16, 'Bom'),
    (4, 17, 'MUSIC!'),
    (4, 18, 'Ruim'),
    (4, 19, 'Bom'),
    (5, 1, 'Bom'),
    (5, 2, 'Ruim'),
    (5, 3, 'Bom'),
    (5, 4, 'Bom'),
    (5, 5, 'Ruim'),
    (5, 6, 'Bom'),
    (5, 7, 'Bom'),
    (5, 8, 'Bom'),
    (5, 9, 'MUSIC!'),
    (5, 10, 'Ruim'),
    (5, 11, 'Médio'),
    (5, 12, 'Bom'),
    (5, 13, 'Bom'),
    (5, 14, 'Bom'),
    (5, 15, 'Bom'),
    (5, 16, 'Bom'),
    (5, 17, 'Bom'),
    (5, 18, 'Ruim'),
    (5, 19, 'MUSIC!');

select * from usuario;