CREATE DATABASE weighty;
USE weighty;

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    username VARCHAR(25) NOT NULL,
    email VARCHAR(254) NOT NULL,
    password VARCHAR(60) NOT NULL,
    admin BOOLEAN NOT NULL,
    CONSTRAINT PK_id PRIMARY KEY (id)
);

CREATE TABLE weights (
    id_tblUsers INT NOT NULL,
    weight VARCHAR(3) NOT NULL,
    day DATE NOT NULL,
    CONSTRAINT FK_id_tblUsers FOREIGN KEY (id_tblUsers) REFERENCES users(id)
);