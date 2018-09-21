// // var mongoclient=require('./framework/mongoClient');

// // mongoclient.insert();

// var mongoclient=require('mongodb').MongoClient;
// var url="mongodb://localhost:27017/";


// var mongoSig=mongoclient.connect(url,function(err,db){
//     return function() {
//         return db;
//     }
// });
// console.log(mongoSig);
// dbo=mongoSig.db("runoob");
// var myobj = { name: "菜鸟教程", url: "www.runoob" };
// dbo.collection("site").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("文档插入成功");
//         db.close();
// });
var Vehicle=function(){
    
    this.price=1000;
};
var v=Vehicle();
console.log(v);
console.log(price);