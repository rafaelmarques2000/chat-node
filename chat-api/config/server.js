let express = require('express');
let app = express();
/** Registra rotas na instancia do express */
require('./routes')(app);
/** Registra configuracoes em geral */
require('./general')(app);
module.exports = app;

