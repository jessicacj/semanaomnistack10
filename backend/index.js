// importar o módulo express
const express = require("express");
// criação da aplicação
const app = express();
// parâmetros de requisição (cliente) e resposta
app.get("/", (request, response) => {
return response.json({ message: "Hello OmniStack"});
});
// porta de acesso ao servidor
app.listen(3333);