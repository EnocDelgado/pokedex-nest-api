<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Pokedex


## Run on dev

1. Clone repository
2. Run
```
yarn install
```

3. It's required Nest CLI is installed
```
npm i -g @nestjs/cli
```

4. Run database
```
docker-compose up -d
```

5. Clone ```.env.template``` file and rename to ```.env```.

6. Fill environment variables on the ```.env```.

7. Run app on dev:
```
yarn start:dev
```

8. Rebuilt database with seed, make a get request petition with:
```
http://localhost:3000/api/v2/seed
```

## Used Stack
* MongoDB
* Nest


# Production Build

1. Create file ```.end.prod```.
2. Fill environment variables of prod.
3. Create a new image:
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```