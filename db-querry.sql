-- ------------------------------------------------------
-- Script One:

-- creates the database and tables
-- populates the tables with records
-- creates indexes
-- creates triggers
-- creates views
-- ------------------------------------------------------

-- -----------------------------------------------------
-- Drop the 'companyx' database/schema
-- -----------------------------------------------------

DROP SCHEMA IF EXISTS lcc;
-- -----------------------------------------------------
-- Create 'lcc' database/schema and use this database
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Create 'lcc' database/schema and use this database
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS lcc;

USE lcc;

-- -----------------------------------------------------
-- Drop tables
-- -----------------------------------------------------


-- drop table Node;
-- drop table Interface;
-- drop table OS;
-- drop table IP;
-- drop table User;
-- drop table Server;
-- drop table IoTDevices;
-- drop table ComputerDevices;


-- -----------------------------------------------------
-- Create table OS
-- -----------------------------------------------------

create table OS(
osSerialNumber int not null,
osName varchar(40) not null,
osType varchar(40) not null,
osVersion int not null,
vendor varchar(40) not null,
primary key (osSerialNumber)
);

-- -----------------------------------------------------
-- Create table Interface
-- -----------------------------------------------------

Create table Interface(
intAddress varchar(20) not null,
intType varchar(20),
primary key (intAddress)
);

-- -----------------------------------------------------
-- Create table Node
-- -----------------------------------------------------

create table Node (
nodeSerialNumber int auto_increment not null,
osSerialNumber int not null,
intAddress varchar(20) not null,
nodeName varchar(20) not null,
nodeType varchar(20) not null,
manufacturer varchar(20) not null,
model varchar(20) not null,
location varchar(20) not null,
price int not null,
primary key (nodeSerialNumber),
foreign key(osSerialNumber) references OS(osSerialNumber) on update cascade on delete no action,
foreign key(intAddress) references Interface(intAddress) on update cascade on delete no action
);

-- -----------------------------------------------------
-- Create table IP
-- -----------------------------------------------------

create table IP(
ipAddress varchar(40) not null,
network varchar(35) not null,
gateway varchar(35) not null,
version varchar(8) not null,
primary key (ipAddress)
);


-- -----------------------------------------------------
-- Create table User_audit - trigger ref
-- -----------------------------------------------------

create table User_audit(
userID int auto_increment PRIMARY KEY,
ipAddress varchar(20) not null,
userName varchar(20) not null,
action varchar(40) not null
);


-- -----------------------------------------------------
-- Create table User + index
-- -----------------------------------------------------

create table User(
userID int auto_increment not null,
ipAddress varchar(40) not null,
userFirstName varchar(40) not null,
userLastName varchar(40) not null,
userEmail varchar(40) not null,
userPassword varchar(40) not null,
userDOB date,
primary key (userID),
foreign key(ipAddress) references IP(ipAddress) on update cascade on delete no action,
INDEX (ipAddress(40), userFirstName(40))
);


-- -----------------------------------------------------
-- Create table Devices
-- -----------------------------------------------------

create table if not exists Server(
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
primary key (serverID),
foreign key(userID) references User(userID) on update cascade on delete no action
);

-- -----------------------------------------------------
-- Create table IoTDevices
-- -----------------------------------------------------

create table if not exists IoTDevices(
deviceID varchar(20) not null,
networkCardSpeed varchar(20) not null,
primary key (deviceID)
);

-- -----------------------------------------------------
-- Create table ComputerDevices
-- -----------------------------------------------------

create table if not exists ComputerDevices(
deviceID varchar(20) not null,
hddSize varchar(20) not null,
primary key (deviceID)
);

-- -----------------------------------------------------
-- Populate table OS
-- -----------------------------------------------------

insert into OS values 
(112, 'Windows Server 16', 'NTFS', 1, '00x Del Inc.');
insert into OS values 
(113, 'Windows Server 16', 'NTFS', 2, '00x Del Inc.');
insert into OS values 
(114, 'Windows Server 19', 'NTFS', 6, '00x Del Inc.');
insert into OS values 
(115, 'Cirros', 'EXT3', 11, '09x Del Inc.');
insert into OS values 
(116, 'Ubuntu 22.04', 'EXT3', 5, '01x Del Inc.');

-- -----------------------------------------------------
-- Populate table Interface
-- -----------------------------------------------------

insert into Interface values 
 ('00-B0-D0-63-C2-26', '1G');
insert into Interface values
 ('00-BA-D1-13-C2-56', '1G');
insert into Interface values
 ('00-AB-D2-43-C2-11', '10G');
insert into Interface values
 ('00-BC-D3-61-C2-25', '10G');
insert into Interface values
 ('00-B5-D4-93-C2-20', '10G');
 

-- -----------------------------------------------------
-- Populate table Node
-- -----------------------------------------------------

insert into Node (osSerialNumber, intAddress, nodeName, nodeType, manufacturer, model, location, price) values
(112, '00-B0-D0-63-C2-26', 'Leaf1', 'switch', 'Cisco', '3750', 'N1', 4000);
insert into Node (osSerialNumber, intAddress, nodeName, nodeType, manufacturer, model, location, price) values
(113, '00-BA-D1-13-C2-56', 'Leaf2', 'switch', 'Cisco', '3750', 'N1', 4500);
insert into Node (osSerialNumber, intAddress, nodeName, nodeType, manufacturer, model, location, price) values
(114, '00-AB-D2-43-C2-11', 'Leaf3', 'switch', 'Cisco', '2950', 'N1', 3000);
insert into Node (osSerialNumber, intAddress, nodeName, nodeType, manufacturer, model, location, price) values
(115, '00-BC-D3-61-C2-25', 'Leaf4', 'switch', 'Cisco', '3750', 'N1', 4500);
insert into Node (osSerialNumber, intAddress, nodeName, nodeType, manufacturer, model, location, price) values
(116, '00-B5-D4-93-C2-20', 'Leaf5', 'switch', 'Juniper', '1070', 'N2', 10500);


-- -----------------------------------------------------
-- Populate table IP
-- -----------------------------------------------------
insert into IP values
('192.168.1.101', '192.168.1.0/24', '192.168.1.1', 'IPV4');
insert into IP values
('192.168.1.102', '192.168.1.0/24', '192.168.1.1', 'IPV4');
insert into IP values
('192.168.1.103', '192.168.1.0/24', '192.168.1.1', 'IPV4');
insert into IP values
('192.168.1.104', '192.168.1.0/24', '192.168.1.1', 'IPV4');
insert into IP values
('192.168.1.105', '192.168.1.0/24', '192.168.1.1', 'IPV4');
insert into IP values
('fe30::1b0d:fccd:a1s2:6282', 'fe80::4b0d:f4cd:a182:6282', 'fe80::4d0d:f4cd:c182:6282', 'IPV6');

-- -----------------------------------------------------
-- Populate table User
-- -----------------------------------------------------

insert into User values
(111, '192.168.1.101',  'Mack', 'Initen', 'mack.intent@example.com', 'password', '2000-09-11');
insert into User values
(3456,  '192.168.1.102', 'Mario', 'Fanderham', 'mario.fanderham@example.com', 'password', '1985-01-23');
insert into User values
(1212,  '192.168.1.103', 'Tibor', 'Molnar', 'tibor.molnar@waltoninstitute.ie', 'password', '1995-06-20');
insert into User values
(9876,  '192.168.1.104', 'Roy', 'Cahnde', 'roy.cahnde@example.com', 'password', '1987-03-19');
insert into User values
(9971,  '192.168.1.105', 'Rowan', 'Sharlock', 'rowan.sharlock@gmail.com', 'password', '1990-04-02');

-- -----------------------------------------------------
-- Populate table Server
-- -----------------------------------------------------

insert into Server values
(1, 0111, 'RXS-480','192.168.1.101', 'Ubuntu_23.10', '192.1.88.98', 'description', '2024-01-02', 'serverBackupTo', 'serverMonitoredWith', 'serverSupport', 'serverServices');
insert into Server values 
(2, 3456, 'RXX-10', '192.168.1.102', 'Windows 2000', '192.1.88.91', 'description', '2024-01-02', 'serverBackupTo', 'serverMonitoredWith', 'serverSupport', 'serverServices');
insert into Server values 
(3, 1212, 'BB-323', '192.168.1.103', 'Cirros 01', '192.2.88.98', 'description', '2024-01-02', 'serverBackupTo', 'serverMonitoredWith', 'serverSupport', 'serverServices');
insert into Server values 
(4, 9876, 'CSI-1', '192.168.1.104', 'Ubuntu 18.04 LTS', '82.1.1.98', 'description', '2024-01-02', 'serverBackupTo', 'serverMonitoredWith', 'serverSupport', 'serverServices');
insert into Server values 
(5, 9971, 'MMT001', '192.168.1.105', 'Ubuntu 16.04 LTS', '92.1.22.1', 'description', '2024-01-02', 'serverBackupTo', 'serverMonitoredWith', 'serverSupport', 'serverServices');

-- -----------------------------------------------------
-- Populate table IoTDevices
-- -----------------------------------------------------

insert into IoTDevices values
(1, 'low');
insert into IoTDevices values 
(2, 'medium');
insert into IoTDevices values 
(3, 'high');
insert into IoTDevices values 
(4, 'ultra high');
insert into IoTDevices values 
(5, 'lightning speed');

-- -----------------------------------------------------
-- Populate table ComputerDevices
-- -----------------------------------------------------

insert into ComputerDevices values
(1, '16GB');
insert into ComputerDevices values 
(2, '1TB');
insert into ComputerDevices values 
(3, '256GB');
insert into ComputerDevices values 
(4, '5.1TB');
insert into ComputerDevices values 
(5, '2.99TB');


-- -----------------------------------------------------
-- Triggers
-- -----------------------------------------------------


DELIMITER $$
CREATE TRIGGER before_user_update
    BEFORE UPDATE ON user
    FOR EACH ROW 
BEGIN
    INSERT INTO user_audit
    SET action = 'update',
        ISBN = OLD.userID,
        price = OLD.ipAddress,
        changedate = NOW(); 
END $$
DELIMITER ;


