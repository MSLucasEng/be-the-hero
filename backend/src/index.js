const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); /**Request da url em json. O express vai transformar o json do body em um objeto do javascript para receber o request*/
app.use(routes);

/**
 * Rota / recurso
 */

 /**
  * Métodos HTTP:
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação do back-end
  * PUT: Alterar uma informação do back-end
  * DELETE: Deletar uma informação do back-end
  */

 /**
 * Tipos de parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtos e paginação)
 * Router Params: Parâmetros utilizados para identificar recursos após "/" no request e ":id" no index.js
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /** Bancos de dados:
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server (Melhor Estrutura)
  * NoSQL: MongoDB, CouchDB, etc (Bancos não relacionais) */
 /** Driver: SELECT * FROM users ; Query Builder: table('users').select('*').where() */

app.listen(3333);