
DROP database empresa

create database empresa

use empresa
go
create table departamentos(
id_departamento int not null primary key identity,
departamento varchar(100) not null,
)



create table empleados(
codigo int not null primary key identity,
nombre varchar(100) not null,
apellido varchar(100) not null,
id_departamento int not null,
fecha_contratacion datetime not null,
nombre_Cargo varchar(100) not null
)



ALTER TABLE empleados
ADD CONSTRAINT FK_id_departamento FOREIGN KEY (id_departamento)
REFERENCES departamentos (id_departamento)
   ON DELETE CASCADE
   ON UPDATE CASCADE;


   insert into empleados (nombre,apellido,id_departamento,fecha_contratacion,nombre_Cargo)
   values ('Julio', 'Cruz',1,'15/07/2019', 'Gerente')

   select * from empleados

   
	insert into departamentos (departamento) values ('Compras')
	insert into departamentos(departamento)values('Informática')
select * from departamentos