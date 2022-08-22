CREATE SCHEMA `goffice` ;

CREATE TABLE `goffice`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `First Name` VARCHAR(100) NOT NULL,
  `Last Name` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  `Gender` VARCHAR(45) NOT NULL,
  `Image` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE INDEX `idusers_UNIQUE` (`idusers` ASC) VISIBLE);

  CREATE TABLE `goffice`.`Products` (
  `idProducts` INT NOT NULL AUTO_INCREMENT,
  `Products Name` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(500) NOT NULL,
  `Price` INT NOT NULL,
  `Discount` INT NOT NULL,
  `Image` VARCHAR(500) NOT NULL,
  `Stock` INT NOT NULL,
  PRIMARY KEY (`idProducts`),
  UNIQUE INDEX `idProducts_UNIQUE` (`idProducts` ASC) VISIBLE,
  UNIQUE INDEX `Products Name_UNIQUE` (`Products Name` ASC) VISIBLE,
  UNIQUE INDEX `Description_UNIQUE` (`Description` ASC) VISIBLE);


CREATE TABLE `goffice`.`Category Products` (
  `idCategory Products` INT NOT NULL AUTO_INCREMENT,
  `Id Products` INT NULL,
  PRIMARY KEY (`idCategory Products`),
  UNIQUE INDEX `idCategory Productos_UNIQUE` (`idCategory Products` ASC) VISIBLE,
  INDEX `Id products_idx` (`Id Products` ASC) VISIBLE,
  CONSTRAINT `Id products`
    FOREIGN KEY (`Id Products`)
    REFERENCES `goffice`.`Products` (`idProducts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
ALTER TABLE `goffice`.`Category Products` 
ADD COLUMN `Category` VARCHAR(45) NOT NULL AFTER `Id Products`;

CREATE TABLE `goffice`.`Users Category` (
  `idUsers Category` INT NOT NULL AUTO_INCREMENT,
  `Id Users` INT NOT NULL,
  `Category Users` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUsers Category`),
  UNIQUE INDEX `idUsers Category_UNIQUE` (`idUsers Category` ASC) VISIBLE,
  INDEX `Id Users_idx` (`Id Users` ASC) VISIBLE,
  UNIQUE INDEX `Id Users_UNIQUE` (`Id Users` ASC) VISIBLE,
  CONSTRAINT `Id Users`
    FOREIGN KEY (`Id Users`)
    REFERENCES `goffice`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
