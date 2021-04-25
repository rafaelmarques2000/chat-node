const userModel = require('../model/userModel');

class userFacade {
    async registerUser(data){
       try {
           let result = await userModel.create(data);
           console.log('Usuario registrado com sucesso');
       }catch (e){
           console.log('Falha ao registrar usuario');
       }
    }

    async unregisterUser(data){
        try {
            let user = await userModel.findOne({where:{socketServerSessionID: data.socketServerSessionID}});
            await user.destroy();
            console.log('Usuario desregistrado com sucesso');
        }catch (e){
            console.log('Falha ao desregistrado usuario');
        }
    }

    async getChatUsers(){
        try{
            return await userModel.findAll();
        }catch (e){
            return { error: true, msg:"Falha ao obter usuarios"}
        }
    }
}

module.exports = new userFacade();