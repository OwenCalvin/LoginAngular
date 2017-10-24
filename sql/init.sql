CREATE DATABASE LoginAngular;
USE LoginAngular;

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    username VARCHAR(25) NOT NULL,
    email VARCHAR(254) NOT NULL,
    password VARCHAR(60) NOT NULL,
    admin BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT PK_id PRIMARY KEY (id)
);
