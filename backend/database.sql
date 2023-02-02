CREATE TABLE IF NOT EXISTS role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS tier (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(25),
  rate INT,
  color VARCHAR(25)
);

CREATE TABLE IF NOT EXISTS pokemon (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pokedexId INT NOT NULL,
    url VARCHAR(255) NOT NULL,
    name VARCHAR(25) NOT NULL,
    tierID INT DEFAULT 1,
    FOREIGN KEY (tierId) REFERENCES tier(id)
);

CREATE TABLE IF NOT EXISTS avatar (
    id INT PRIMARY KEY AUTO_INCREMENT,
    url VARCHAR(255) NOT NULL,
    name VARCHAR(25) NOT NULL
);

CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    username VARCHAR(20) NOT NULL,
    roleID INT DEFAULT 1,
    avatarID INT DEFAULT 1,
    FOREIGN KEY (roleId) REFERENCES role(id),
    FOREIGN KEY (avatarId) REFERENCES avatar(id)
);

CREATE TABLE IF NOT EXISTS bagpokemon (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES user (id),
    pokemonId INT NOT NULL,
    FOREIGN KEY (pokemonId) REFERENCES pokemon (id)
);

CREATE TABLE IF NOT EXISTS pokeball (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(25) NOT NULL,
  url VARCHAR(255) NOT NULL,
  rate INT NOT NULL
);

CREATE TABLE IF NOT EXISTS bagBall (
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES user (id),
    pokeballId INT NOT NULL,
    FOREIGN KEY (pokeballId) REFERENCES pokeball (id)
);

INSERT INTO role (name) VALUES ("basic"), ("vip"), ("admin");

INSERT INTO avatar (url, name) VALUES ("https://archives.bulbagarden.net/media/upload/9/9a/Spr_B2W2_Red.png", "Red"), ("https://archives.bulbagarden.net/media/upload/f/f4/Spr_B2W2_Blue.png", "Blue");

INSERT INTO tier (name, rate, color) VALUES ("Commun", 1, "#56D3FF"), ("Rare", 2, "#FF6C00"), ("Super Rare", 3, "#FFF000"), ("Legendary", 4, "#FF00FF"), ("Shiny", 5, "#9B00FF");

INSERT INTO pokemon (pokedexId, url, name, tierID) VALUES
(1, "https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__001__xy.gif", "Bulbasaur", 1),
(2, "https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__002__xy.gif", "Ivysaur", 2),
(3, "https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__003_m_xy.gif", "Venusaur", 3),
(4, "https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__004__xy.gif", "Charmander",1),
(5, "https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__005__xy.gif", "Charmeleon",2),
(6, "https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__006__xy.gif", "Charizard",3),
(7, "https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__007__xy.gif", "Squirtle",1),
(8, "https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__008__xy.gif", "Wartortle",2),
(9, "https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__009__xy.gif", "Blastoise",3),
(132, "https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__132__xy.gif", "Ditto",3),
(133, "https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__133__xy.gif", "Eevee",2),
(134, "https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__134__xy.gif", "Vaporeon",3),
(135, "https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__135__xy.gif", "Jolteon",3),
(136, "https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__136__xy.gif", "Flareon",3),
(144, "https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__144__xy.gif", "Articuno",4),
(145, "https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__145__xy.gif", "Zapdos",4),
(146, "https://www.pokencyclopedia.info/sprites/3ds/ani_6/3ani__146__xy.gif", "Moltres",4),
(132, "https://www.pokencyclopedia.info/sprites/3ds/ani_6_shiny/3ani_-S_132__xy.gif", "Ditto",5);

