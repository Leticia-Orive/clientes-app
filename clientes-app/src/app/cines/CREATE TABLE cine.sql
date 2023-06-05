CREATE TABLE cine
(
    id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    name VARCHAR(100) NOT NULL,
    provincia VARCHAR(100) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    codigoPostal INT,
    telefono INT,
    sala INT,

    
);