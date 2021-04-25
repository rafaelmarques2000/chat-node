const { Sequelize } = require('sequelize');

module.exports = function (){
    return new Sequelize('chat_db','root','root', {
        'host': 'pgsql_chat_api',
        'dialect': "postgres",
        'port':5432
    });
}
