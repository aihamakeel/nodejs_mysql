const pool = require('../conncetion/mysql');
const { notifyMessage } = require('../notifications');

//create User function--------------------------
let User = {};

//get all
User.all = ()=>{
    return new Promise((resolve,reject)=>{
        pool.query('select * from users',(err,result)=>{
            if(err) return reject(notifyMessage(false,'Users was not readed','',err));
            return resolve(notifyMessage(true,'Users readed successfully',result,''));
        });
    });
}

//get one
User.one = (id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('select * from users where id=?',[id] ,(err,result)=>{
            if(err) return reject(notifyMessage(false,'Users was not readed','',err));
            return resolve(notifyMessage(true,'Users readed successfully',result,''));
        });
    });
}

//delete
User.delete = (id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('delete from users where id=?',[id] ,(err,result)=>{
            if(err) return reject(notifyMessage(false,'User was not deleted','',err));
            return resolve(notifyMessage(true,'User deleted successfully',result,''));
        });
    });
}
//export User module
module.exports = User;