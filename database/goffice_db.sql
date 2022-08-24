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