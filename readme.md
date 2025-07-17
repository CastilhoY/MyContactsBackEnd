REPOSITORY PATTERN

Data Source: Fonte de Dados (Array, SQL, NoSQL, .json, API)

Reposirory Pattern: Layer (camada de abstração de acesso ao Data Source).
(para não acessar direto pelo UserController.js)

Controller <-> Data Source ---> errado

Controller <-> Repository.create <-> Data Source ---> certo

-----------------------------------------------------------------------------------------------
MIDDLEWARE

Request <--> Middlewares -> controller -> responde

Middlewares servem para saber se a Request vai para o proximo  middlewares, para o controller ou se já "mata" a requisição no middleware mesmo

Eles são ordenados em sequencia, então do 1 vai para o dois etc: Middlaware 1 -> Middlaware 2 -> Middlaware 3 -> Middlaware 4 (Route)
