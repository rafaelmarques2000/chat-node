
class defaultController {
    index(req,res,next){
        res.send({
            'serverStatus': "OK",
            "serverTime": new Date().toString()
        })
    }
}

module.exports = new defaultController();