## Build
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build

## Run
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d

## Nota
By default, __docker-compose__ uses the ```.env``` file, so if you have the .env file and set it up with your production environment variables, it would be enough with
```
docker-compose -f docker-compose.prod.yaml up --build
```