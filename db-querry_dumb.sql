-- ------------------------------------------------------
-- Script One:

-- creates the database and tables
-- populates the tables with records
-- ------------------------------------------------------

-- -----------------------------------------------------
-- Drop the 'testdb' database/schema
-- -----------------------------------------------------

DROP SCHEMA IF EXISTS testdb;
-- -----------------------------------------------------
-- Create 'testdb' database/schema and use this database
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Create 'testdb' database/schema and use this database
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS testdb;

USE testdb;

-- -----------------------------------------------------
-- Drop tables
-- -----------------------------------------------------

-- drop table user;
-- drop table server;

-- -----------------------------------------------------
-- Create table user
-- -----------------------------------------------------


create table User(
userID int auto_increment not null,
userEmail varchar(40) not null,
userPassword varchar(40) not null,
primary key (userID)
);


-- -----------------------------------------------------
-- Create table server
-- -----------------------------------------------------

create table if not exists server(
serverID int auto_increment not null,
userID int not null,
serverName varchar(40) not null,
serverIP varchar(40) not null,
serverOS varchar(40) not null,
serverIdrac varchar(40) not null,
serverDesc varchar(40) not null,
dateManual date,
serverBackupTo varchar(40) not null,
serverMonitoredWith varchar(40) not null,
serverSupport varchar(40) not null,
serverServices varchar(40) not null,
primary key (serverID)
);



-- -----------------------------------------------------
-- Populate table user
-- -----------------------------------------------------

insert into user values
(111, 'mack.intent@example.commmmmm', 'password');
insert into user values
(3456, 'mario.fanderham@example.com', 'password');
insert into user values
(1212, 'tibor.molnar@waltoninstitute.ie', 'password');
insert into user values
(9876, 'roy.cahnde@example.com', 'password');
insert into user values
(9971, 'rowan.sharlock@gmail.com', 'password');

-- -----------------------------------------------------
-- Populate table server
-- -----------------------------------------------------

insert into server values
(1, 0111, 'RXS-480','192.168.1.101', 'Ubuntu_23.10', '192.1.88.98', 'description', '2024-01-02', 'serverBackupTo', 'serverMonitoredWith', 'serverSupport', 'serverServices');
insert into server values 
(2, 3456, 'RXX-10', '192.168.1.102', 'Windows 2000', '192.1.88.91', 'description', '2024-01-02', 'serverBackupTo', 'serverMonitoredWith', 'serverSupport', 'serverServices');
insert into server values 
(3, 1212, 'BB-323', '192.168.1.103', 'Cirros 01', '192.2.88.98', 'description', '2024-01-02', 'serverBackupTo', 'serverMonitoredWith', 'serverSupport', 'serverServices');
insert into server values 
(4, 9876, 'CSI-1', '192.168.1.104', 'Ubuntu 18.04 LTS', '82.1.1.98', 'description', '2024-01-02', 'serverBackupTo', 'serverMonitoredWith', 'serverSupport', 'serverServices');
insert into server values 
(5, 9971, 'MMT001', '192.168.1.105', 'Ubuntu 16.04 LTS', '92.1.22.1', 'description', '2024-01-02', 'serverBackupTo', 'serverMonitoredWith', 'serverSupport', 'serverServices');




