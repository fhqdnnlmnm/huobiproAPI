var config = require('config');
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/huobi";
// console.log(config.get('huobi'));

var DB_CONN_STR="mongodb://localhost:27017/coinauto"
var mongo={}

var mongo = MongoClient.connect(url, function (err, db) {
    if (err) throw err;
        console.log("数据库已创建");
        // db.close();
        return db;
    }
);

function insertData(client,params,callback){
    var db=client
}

exports.insert=function(symbol,obj){
    var dbo = mongo.db("runoob");
    var myobj = { name: "菜鸟教程", url: "www.runoob" };
    dbo.collection("site").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
}

mongo.insert=function(symbol,obj){


    MongoClient.connect(DB_CONN_STR,function(err,client){
        console.log("连接成功!");
        insertData(client,params,function(result){
            console.log("新增成功"+result);
            client.close();
            console.log("连接断开");
        })
    })
}



module.exports=mongo;

