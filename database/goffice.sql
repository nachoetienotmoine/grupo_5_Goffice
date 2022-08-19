CREATE SCHEMA `goffice` ;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `image` varchar(45) NOT NULL,
  `id_category_user` varchar(45) NOT NULL,
  UNIQUE KEY `idusers_UNIQUE` (`id`),
  UNIQUE KEY `id_category_user_UNIQUE` (`id_category_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `Products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `products_name` varchar(45) NOT NULL,
  `description` varchar(500) NOT NULL,
  `price` int NOT NULL,
  `discount` int NOT NULL,
  `image` varchar(500) NOT NULL,
  `stock` int NOT NULL,
  `id_category_product` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idProducts_UNIQUE` (`id`),
  UNIQUE KEY `Products Name_UNIQUE` (`products_name`),
  UNIQUE KEY `Description_UNIQUE` (`description`),
  CONSTRAINT `id_category_product` FOREIGN KEY (`id`) REFERENCES `category_products` (`id_category_products`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `user_category` (
  `id_users_category` int NOT NULL AUTO_INCREMENT,
  `id_users` int NOT NULL,
  `category_users` varchar(45) NOT NULL,
  PRIMARY KEY (`id_users_category`),
  UNIQUE KEY `idUsers Category_UNIQUE` (`id_users_category`),
  UNIQUE KEY `Id Users_UNIQUE` (`id_users`),
  KEY `Id Users_idx` (`id_users`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `category_products` (
  `id_category_products` int NOT NULL AUTO_INCREMENT,
  `id_products` int DEFAULT NULL,
  `Category` varchar(45) NOT NULL,
  PRIMARY KEY (`id_category_products`),
  UNIQUE KEY `idCategory Productos_UNIQUE` (`id_category_products`),
  KEY `Id products_idx` (`id_products`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci