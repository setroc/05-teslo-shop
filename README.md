# Next.js OpenJira App
Para correr localmente, se necesita la base de datos
```
docker-compose up -d 
```
* El -d, significa __detached__

* MongoDB URL local:
```
mongodb://localhost:27017/teslo
```

## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__ y asignar las variables de entorno necesarias

## Llenar la base de datos con información de pruebas

Hacer una peticion a 
```
http://localhost:3000/api/seed
```