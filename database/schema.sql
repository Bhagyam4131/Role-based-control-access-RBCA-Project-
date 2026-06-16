CREATE DATABASE rbac_auth;

USE rbac_auth;


CREATE TABLE users (

id INT AUTO_INCREMENT PRIMARY KEY,

name VARCHAR(100) NOT NULL,

email VARCHAR(100) UNIQUE NOT NULL,

password VARCHAR(255) NOT NULL,

role ENUM(

'Admin',

'Instructor',

'Student'

) DEFAULT 'Student',

created_at TIMESTAMP

DEFAULT CURRENT_TIMESTAMP

);