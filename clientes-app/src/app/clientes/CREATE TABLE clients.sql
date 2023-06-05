CREATE TABLE clients 
(
    id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    username VARCHAR(100) NOT NULL,
    cif VARCHAR(12) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    grupo INT,

    
);

