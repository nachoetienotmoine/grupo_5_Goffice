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
1459, 42, 'monitor1.jpg', 2, 1);

INSERT INTO products (id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, 'Camara', "esta camara es mejor que la de iphone",
2245.79, 12, 'camara.jpg', 8, 2);

INSERT INTO products (id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, 'Parlante Xinua', "este parlante suena las cumbias mas perronas del condado",
2101.17, 5, 'Parlante.jpg', 7, 3);

INSERT INTO products (id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, 'Luces LED', "Las luces mas gamers del mercado, anti-chicas",
4855.35, 36, 'luces.jpg', 5, 4);

INSERT INTO products (id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT, 'mouse pad', "El mouse pad mas comodo para tu muñequita bebe",
2143.64, 10, 'mouse pad.jpg', 8, 5);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT,'Silla Gamer','La silla mas comoda para tus nalgotas bebe',
3579, 45,'silla.jpg', 9, 6);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT,'Teclado','teclado , nada fuera de lo normal',
4312,41,'teclado.jpg',1,7);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT,'Reddragon Zeus','auriculares VIP del grupo 5',
2815,14,'Reddragon Zeus-X.jpg',1,8);

INSERT INTO products(id, name, description, price, discount, image, stock, id_products_category)
VALUES (DEFAULT,'Microfono Hyperx','El microfono con mas autotune que maria becerra',
4684,3,'microfono.jpg',0,9);


ALTER TABLE `goffice_db`.`users`
CHANGE COLUMN `phone_number` `phone_number` VARCHAR(200) NOT NULL;
ALTER TABLE `goffice_db`.`users`
CHANGE COLUMN `gender` `gender` VARCHAR(10) NOT NULL;
INSERT INTO roles (`id`, `role`) VALUES (1, 'admin');
INSERT INTO roles (`id`, `role`) VALUES (2, 'guest');


INSERT INTO users (`id`, `first_name`, `last_name`, `email`, `password`, `phone_number`, `gender`, `image`, `id_roles`) VALUES (1, 'Ignacio', 'Andreozzi', 'ignacio.andreozzi@hotmail.com', '$2a$04$fjnirznw/Ow5dyOxtVxE8e0ZLxCzvOjvyU0AYD3j.6V4.pqSLflOe', '5493815186646', 'male', 'Ignacio Andreozzi.jpg', 1);
INSERT INTO users (`id`, `first_name`, `last_name`, `email`, `password`, `phone_number`, `gender`, `image`, `id_roles`) VALUES (2, 'Gonzalo', 'Andreozzi', 'andreozzigonzalo@gmail.com', '$2a$04$FmbwcJcBXrBIB.i1VpRWqeUSRLgd5HS.PNK1a3UlMl5E4rl4GErOu', '5493815302514', 'male', 'Gonzalo Andreozzi.jpg', 1);
INSERT INTO users (`id`, `first_name`, `last_name`, `email`, `password`, `phone_number`, `gender`, `image`, `id_roles`) VALUES (3, 'Ignacio', 'Etienot', 'nachoetienotmoine@gmail.com', '$2a$04$wBCL3VILWHzpPUZc6k61ZuasP4iKr3HHNeJshpO6cOSl5kVDkYgNO', '5493512056946', 'male', 'Ignacio Etionet.jpg', 2);
INSERT INTO users (`id`, `first_name`, `last_name`, `email`, `password`, `phone_number`, `gender`, `image`, `id_roles`) VALUES (4, 'Nelson', 'Patiño', 'nelson227@hotmail.es', '$2a$04$YtB2Pp1rcBRr/JpW642pgeBrMe1UA9AVwAg5GQOW/2SmXr2vvPchO', '5491151410473', 'male', 'pp (1).jpg', 1);
INSERT INTO users (`id`, `first_name`, `last_name`, `email`, `password`, `phone_number`, `gender`, `image`, `id_roles`) VALUES (5, 'Thomas', 'farre', 'thomas.farres@gmail.com', '$2a$04$MnOyKRfKgNCGZnmjqB8kcOy0rENhA4fJmX6TmUAIJIap3UeXEwxlm', '5491123018662', 'male', 'Thomas Farre.jpg', 2);










