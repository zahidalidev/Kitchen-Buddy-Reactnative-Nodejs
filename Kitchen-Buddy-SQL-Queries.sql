-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE database kitchenBuddy;
USE kitchenBuddy;

-- -----------------------------------------------------
-- Table user
-- -----------------------------------------------------
CREATE TABLE customer (
  id INT NOT NULL IDENTITY,
  name VARCHAR(155) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
)


-- -----------------------------------------------------
-- Table ingredient
-- -----------------------------------------------------
CREATE TABLE ingredient (
  id INT NOT NULL IDENTITY,
  name VARCHAR(255) NOT NULL,
  brandName VARCHAR(255) NULL,
  category VARCHAR(255) NULL,
  location VARCHAR(255) NULL,
  confectionType VARCHAR(255) NULL,
  ripeness VARCHAR(255) NULL,
  ripenessEditedDate DATE NULL,
  lastCheckDate DATE NULL,
  frozen VARCHAR(45) NULL,
  openClose VARCHAR(45) NULL,
  expirationDate DATE NULL,
  PRIMARY KEY (id),
  userId INT NOT NULL foreign key references customer(id)
)

-- -----------------------------------------------------
-- Table category
-- -----------------------------------------------------
CREATE TABLE category (
  id INT NOT NULL IDENTITY,
  name VARCHAR(155) NOT NULL,
  PRIMARY KEY (id)
)

-- -----------------------------------------------------
-- Table location
-- -----------------------------------------------------
CREATE TABLE location (
  id INT NOT NULL IDENTITY,
  name VARCHAR(155) NOT NULL,
  PRIMARY KEY (id)
)

-- -----------------------------------------------------
-- Table confectionType
-- -----------------------------------------------------
CREATE TABLE confectionType (
  id INT NOT NULL IDENTITY,
  name VARCHAR(155) NOT NULL,
  PRIMARY KEY (id)
)

