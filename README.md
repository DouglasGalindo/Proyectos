Dentro de la carpeta Prueba trabajo se encuentran 3 archivos el primero es PruebaDesarrollo que contiene el proyecto de Angular que consume el web service.

El segundo archivo se llama prueba_desarrollo-main este es el proyecto del backend creado en Flask-RestX.
Se abre en visual studio code.

para ejecutarlo primero tenemos que configurar el ambiente, en la terminal de visual studio code pegar los siguientes comandos:

1. python -m venv venv
2. venv\Scripts\actívate
3. pip install Flask Flask-RestX pyodbc 
4. pip install Flask-SQLAlchemy
5. pip install flask_migrate  
6. pip install Flask-Cors

para ejecutar debemos escribir en la terminal:
1. cd app/main
2. Python app.py

Después abrimos el navegador y escribimos la siguiente URL:

http://localhost:5000/

vemos que se nos muestra el web service y ya podemos hacer uso de él desde el navegador.

después de levantado el servicio ejecutamos el proyecto PruebaDesarrollo que está hecho en angular para ejecutar escribimos:

ng serve -o

y lista podemos empezar a usar el proyecto web
