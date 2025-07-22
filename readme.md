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

-----------------------------------------------------------------------------------------------
CRUD

CRUD é um acrônimo das quatro operações básicas em sistemas que manipulam dados:

C → Create: Criar um novo dado (ex: cadastrar um usuário).
R → Read: Ler/consultar dados (ex: listar usuários ou buscar um usuário por ID).
U → Update: Atualizar dados existentes (ex: editar o nome ou email do usuário).
D → Delete: Excluir dados (ex: remover um usuário do banco).

Essas operações geralmente são feitas em APIs com métodos HTTP:

Operação	           Método HTTP	             Exemplo de rota
Create	               POST	                     /users
Read	               GET	                     /users ou /users/:id
Update	               PUT ou PATCH	             /users/:id
Delete	               DELETE	                 /users/:id

------------------------------------------------------------------------------------------------
PORQUE USAR FUNÇÕES ASSINCRONAS?

Quando usamos async, podemos usar await dentro da função. Isso faz com que o código espere a resposta da operação assíncrona antes de continuar, evitando códigos em forma de “callback hell” ou promessas .then().catch().

Exemplo prático:

"const contact = await ContactsRepository.findById(id)"

A linha acima só continua para a próxima instrução depois que a consulta terminar.
Se a função não fosse async, usar await nela daria erro de sintaxe.
