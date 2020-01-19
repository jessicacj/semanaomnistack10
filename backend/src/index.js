// importar o módulo express
const express = require("express");
// importa mongoose
const mongoose = require("mongoose");
// importar as rotas
const routes = require("./routes");
// criação da aplicação
const app = express();

// conectar ao banco de dados
mongoose.connect('mongodb+srv://jazz23:i52zd9SXdUPiQG4@cluster0-ubxhv.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);

// porta de acesso ao servidor
app.listen(3333);