const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../../../config/database')();

class userModel extends Model {}

userModel.init({
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT
    },
    nickname:{
        type:DataTypes.STRING,
        allowNull: true
    },
    color:{
      type:DataTypes.STRING,
      allowNull: false
    },
    socketServerSessionID: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'userModel',
    tableName: 'users',
    freezeTableName:true,
})
userModel.sync();
module.exports = userModel;