CREATE DATABASE goffice_db;
USE goffice_db;

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    role VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(200) NOT NULL,
    phone_number INT NOT NULL,
    gender VARCHAR(1) NOT NULL,
    image VARCHAR(200) NOT NULL,
    id_roles INT NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (id_roles) REFERENCES roles(id)
);

CREATE TABLE products_category (
    id INT NOT NULL AUTO_INCREMENT,
    category VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(225) NOT NULL,
    description VARCHAR(400) NOT NULL,
    price INT NOT NULL,
    discount INT NOT NULL,
    image VARCHAR(200) NOT NULL,
    stock INT NOT NULL,
    id_products_category INT NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (id_products_category) REFERENCES products_category(id)
);

INSERT INTO products_category (id, category)
VALUES (DEFAULT, 'monitores');

INSERT INTO products_category (id, category)
VALUES (DEFAULT, 'camaras');

INSERT INTO products_category (id, category)
VALUES (DEFAULT, 'parlantes');

INSERT INTO products_category (id, category)
VALUES (DEFAULT, 'luces');

INSERT INTO products_category (id, category)
VALUES (DEFAULT, 'pads');

INSERT INTO products_category (id, category)
VALUES (DEFAULT, 'sillas');

INSERT INTO products_category (id, category)
VALUES (DEFAULT, 'teclados');

INSERT INTO products_category (id, category)
VALUES (DEFAULT, 'auriculares');

INSERT INTO products_category (id, category)
VALUES (DEFAULT, 'micrófonos');



INSERT INTO products (id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, 'Monitor','es re piola este monitor, no muestra el historial de busqueda del browser',
1459, 42, 'monitor1.png', 8, 1);

INSERT INTO products (id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, 'Camara', "esta camara es mejor que la de iphone",
2245.79, 12, 'camara.png', 8, 2);

INSERT INTO products (id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, 'Parlante Xinua', "este parlante suena las cumbias mas perronas del condado",
2101.17, 5, 'Parlante.png', 7, 3);

INSERT INTO products (id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, 'Luces LED', "Las luces mas gamers del mercado, anti-chicas",
4855.35, 36, 'luces.png', 5, 4);

INSERT INTO products (id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, 'mouse pad', "El mouse pad mas comodo para tu muñequita bebe",
2143.64, 10, 'mouse pad.png', 8, 5);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT,'Silla Gamer','La silla mas comoda para tus nalgotas bebe',
3579, 45,'silla.png', 9, 6);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT,'Teclado','teclado , nada fuera de lo normal',
4312,41,'teclado.png',10,7);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT,'Reddragon Zeus','auriculares VIP del grupo 5',
2815,14,'Reddragon Zeus-X.png',1,8);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT,'Microfono Hyperx','El microfono con mas autotune que maria becerra',
4684,3,'microfono.png',10,9);


INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, 'Monitor Epico2', 'El monitor epico, para ver cosas epicas en el.', 6000, 2, 'image.png', 4, 8);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT,"NekoHeadPhones7w7", "Headphones to drain up those juicy dollars from your's simps ewe", 8000, 33, "nekoHeadphones.png", 4, 1);


INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, 'Nikon Camera 3000', 'Una camara para captar los momentos más epicos del universo entero baby girl <3', 60000, 19, 'CamaraMamonaEpica3000.png', 7, 2);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, 'MasterOfGodsChair', 'Destroy your enemies with the new MasterOfGodsChair, the maximum comfort, well equiped chair that helps you to stay comfort while you slain your enemies in any type of game, Battlefield, Call Of Duty, Fortnite, hello kitty world, Where is the monkey?, Talking Tom. and MANY MORE!', 1000000, 0, 'NeonMasterDominatorChair.png', 1, 6);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, 'GamingChairNice', 'A cool gaming chair :3', 3500, 0, 'GamingChairNice.png', 5, 6);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, 'MicrophoneExtreme', 'MicrophoneExtreme is the new epic super pro microphone thats going to make you want to talk all day along in your streams :3', 7000, 10, 'microphonePro.png', 9, 9);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, 'HyperX Microphone', 'The HyperX Microphone is a high quality microphone that allows the owner to talk through it without any problems.', 6500, 2, 'HyperXMicrophone.png', 4, 9);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, "Asus Monitor", "The Asus Monitor is a high quality and high definition monitor.", 7500, 5, "AsusMonitor.png", 3, 1);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, "Corsair Keyboard", "Keyboard go click click bruh :P", 5800, 15, "CorsairKeyboard.png", 5, 7);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, "Mouse Pad", "This is a soft and comfortable mouse pad.", 2500, 0, "MousePad.png", 7, 5);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, "Yuki MousePad", "Buy your own soft and comfortable mouse pad of your best girl.", 2700, 17, "AnimeGirlMousePad.png", 10, 5);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, "Genius Mouse Pad", "Great and comfortable mouse pad", 1500, 7, "GeniusMousePad.png", 4, 5);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, "Rakoon Mouse Pad", "This big and soft mouse pad is of great quality.", 2300, 11, "RakoonMousePad.png", 2, 5);




ALTER TABLE `goffice_db`.`users`
CHANGE COLUMN `phone_number` `phone_number` VARCHAR(200) NOT NULL;
ALTER TABLE `goffice_db`.`users`
CHANGE COLUMN `gender` `gender` VARCHAR(10) NOT NULL;
INSERT INTO roles (`id`, `role`) VALUES (1, 'admin');
INSERT INTO roles (`id`, `role`) VALUES (2, 'guest');


INSERT INTO users (`id`, `first_name`, `last_name`, `email`, `password`, `phone_number`, `gender`, `image`, `id_roles`) VALUES (1, 'Ignacio', 'Andreozzi', 'ignacio.andreozzi@hotmail.com', '$2a$10$vhZi/HzH9Wt1qZYumKByT.Xlt5V/HJLJK5tXqW9eI..gbpHb4bu9y', '5493815186646', 'male', 'lord_sixth.jpg', 1);
INSERT INTO users (`id`, `first_name`, `last_name`, `email`, `password`, `phone_number`, `gender`, `image`, `id_roles`) VALUES (2, 'Gonzalo', 'Andreozzi', 'andreozzigonzalo@gmail.com', '$2a$10$q0xiD0u3ucqOMYyvcHQB6unDbSEWe/1BaSZ9iMH3ZtsZj7maijdo6', '5493815302514', 'male', 'GonzaShino.png', 1);
INSERT INTO users (`id`, `first_name`, `last_name`, `email`, `password`, `phone_number`, `gender`, `image`, `id_roles`) VALUES (3, 'Nelson', 'Patiño', 'nelson227@hotmail.es', '$2a$10$NFtBZiHTO1Sm2rqJd5C5zOkrdCXSbkDfUXgGEWJNKp2gZEZYIzfma', '5491151410473', 'male', '496f6e98-cce5-4cd6-8487-4a8aed06950a.png', 1);
INSERT INTO users (`id`, `first_name`, `last_name`, `email`, `password`, `phone_number`, `gender`, `image`, `id_roles`) VALUES (4, 'Ignacio', 'Etienot', 'nachoetienotmoine@gmail.com', '$2a$10$9.x1F5m1Nvh7CK2yKY21YuXHsawh2a5/napkhTS.FdtoRdwrzm.8G', '5493512056946', 'male', 'SakuNacho.jpg', 1);
INSERT INTO users (`id`, `first_name`, `last_name`, `email`, `password`, `phone_number`, `gender`, `image`, `id_roles`) VALUES (5, 'Thomas', 'Farre', 'thomas.farres@gmail.com', '$2a$10$1ZMraM6myD3ezEWKAAqeaOvAH3pArajHE9iRbWFJYfzzRDii2gclO', '5491123018662', 'male', 'Thomas Farre.jpg', 1);


CREATE TABLE payment_methods (
    id INT NOT NULL AUTO_INCREMENT,
    method VARCHAR(20) NOT NULL,
    
    PRIMARY KEY (id)
);

CREATE TABLE carts (
    id INT NOT NULL AUTO_INCREMENT,
    total_products INT NOT NULL,
    total_price INT NOT NULL,
    payment_methods_id INT NOT NULL,
    users_id INT NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (payment_methods_id) REFERENCES payment_methods(id),
    FOREIGN KEY (users_id) REFERENCES users(id)
);

CREATE TABLE carts_products (
    id INT NOT NULL AUTO_INCREMENT,
    carts_id INT NOT NULL,
    products_id INT NOT NULL,

	PRIMARY KEY (id),
    FOREIGN KEY (carts_id) REFERENCES carts(id),
    FOREIGN KEY (products_id) REFERENCES products(id)
);

ALTER TABLE goffice_db.users DROP FOREIGN KEY users_ibfk_1;
ALTER TABLE goffice_db.users ADD CONSTRAINT users_ibfk_1 FOREIGN KEY (id_roles) REFERENCES goffice_db.roles(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE goffice_db.carts DROP FOREIGN KEY carts_ibfk_2;
ALTER TABLE goffice_db.carts ADD CONSTRAINT carts_ibfk_2 FOREIGN KEY (users_id) REFERENCES goffice_db.users(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE goffice_db.carts DROP FOREIGN KEY carts_ibfk_1;
ALTER TABLE goffice_db.carts ADD CONSTRAINT carts_ibfk_1 FOREIGN KEY (payment_methods_id) REFERENCES goffice_db.payment_methods(id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE goffice_db.carts_products DROP FOREIGN KEY carts_products_ibfk_2;
ALTER TABLE goffice_db.carts_products ADD CONSTRAINT carts_products_ibfk_2 FOREIGN KEY (products_id) REFERENCES goffice_db.products(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE goffice_db.carts_products DROP FOREIGN KEY carts_products_ibfk_1;
ALTER TABLE goffice_db.carts_products ADD CONSTRAINT carts_products_ibfk_1 FOREIGN KEY (carts_id) REFERENCES goffice_db.carts(id) ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO payment_methods (method)  VALUES ('efectivo');
INSERT INTO payment_methods (method)  VALUES ('mercado pago');
INSERT INTO payment_methods (method)  VALUES ('tarjeta');
INSERT INTO payment_methods (method)  VALUES ('transferencia');

CREATE TABLE users_products (
    id INT NOT NULL AUTO_INCREMENT,
    users_id INT NOT NULL,
    product_id INT NOT NULL,

	PRIMARY KEY (id),
    FOREIGN KEY (users_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);


