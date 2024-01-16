-- ------------------------------------------------------
-- Script One:

-- creates the database and tables
-- populates the tables with records
-- ------------------------------------------------------

-- -----------------------------------------------------
-- Drop the 'todos' database/schema
-- -----------------------------------------------------

DROP SCHEMA IF EXISTS todos;
-- -----------------------------------------------------
-- Create 'todos' database/schema and use this database
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Create 'todos' database/schema and use this database
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS todos;

USE todos;

CREATE TABLE tasks (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(255) NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY (id)
);