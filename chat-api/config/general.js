let bodyParser = require('body-parser');
let cors = require('cors');
module.exports = function (app){
    app.all(cors());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
}
