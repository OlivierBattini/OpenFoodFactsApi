# Open Food Facts API

## Project description

This project was created for a technical test, that is create an API to search the [Open Food Facts open database](https://fr.openfoodfacts.org/data) with the following constraints :

- [x] We need to query the API by `code` or `product_name`
- [x] Develop the application using TypeScript
- [x] Ideally, use NestJS
- [x] The project has at least one relevant test
- [x] The API documentation is automatically generated
- [x] **BONUS** : To avoid querying too much the database, implement a caching solution

## How to install

### Prerequisites

In order to run the project, you first need to download and/or install :

- [NodeJS 18.12.1 LTS and tools](https://github.com/nvm-sh/nvm#readme)
- [Docker](https://docs.docker.com/get-docker/)
- [A copy of the Open Food Facts database dump](https://static.openfoodfacts.org/data/openfoodfacts-mongodbdump.tar.gz)

### Install steps

1. Clone this repository
2. Install project dependencies by running the command `npm i`
3. Copy the file `.env.example` to `.env`
4. Untar the Open Food Facts database dump and put the files `products.bson` and `products.metadata.json` in the `mongo` directory
5. Start the Docker container using the command `npm run docker` (at first run, will take several minutes for MongoDB to restore and index data)
6. You can optionnally run the test suite using the command `npm run test` (initialized MongoDB container required)
7. Start the NestJS application using the command `npm start`
8. Query the API on `http://localhost:3000/` using your favorite tool (curl, Postman, Insomnia...)

### Using your own copy of MongoDB Open Food Facts database

If you come with your own database or Docker container :

1. Follow install steps 1, 2, 3
2. Open the `.env` file, modify `DB_*` parameters accordingly to your database configuration
3. Follow install steps 6, 7, 8

## OpenAPI documentation

API documentation is reachable at `http://localhost:3000/api`.

## To go further

What more could be done / improved ?

- Add more security [following OWASP recommendations]((https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html)) and using middleware such as :
  - Helmet
  - Express-rate-limit
  - ...
- Add to Docker compose file a node container configuration to have fully deployable solution
- Add CI/CD pipelines (linting, testing, deploying...)
- Document API product fields using [yaml files from the Open Food Facts server repository](https://github.com/openfoodfacts/openfoodfacts-server/blob/main/docs/reference/schemas/product.yaml) (?)