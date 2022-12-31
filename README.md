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

In order to run the project, you first need to download and/or install :

- [NodeJS 18.12.1 LTS and tools](https://github.com/nvm-sh/nvm#readme)
- [Docker](https://docs.docker.com/get-docker/)
- [A copy of the Open Food Facts database dump](https://static.openfoodfacts.org/data/openfoodfacts-mongodbdump.tar.gz)

Then :

1. Clone this repository
2. Install project dependencies by running the command `npm i`
3. Untar the Open Food Facts database dump and put the files `products.bson` and `products.metadata.json` in the `mongo` directory
4. Start the Docker container using the command `npm run docker` (may take several minutes to restore the database at first run)
5. You can optionnally run the test suite using the command `npm run test`
6. Start the NestJS application using the command `npm start`
7. Query the API on `http://localhost:3000/` using your favorite tool (curl, Postman, Insomnia...)

## OpenAPI documentation

API documentation is available at `http://localhost:3000/api`.

## To go further

What more could be done / improved ?

- Add more security [following OWASP recommendations]((https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html)) using middleware such as :
  - Helmet
  - Express-rate-limit
  - ...
- Document API product fields using [yaml files from the Open Food Facts server repository](https://github.com/openfoodfacts/openfoodfacts-server/blob/main/docs/reference/schemas/product.yaml) (?)