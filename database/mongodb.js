var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce');
var db=mongoose.connection;
db.once('open',()=>console.log("we are connected to ecommerce db"));
db.on('error',console.error.bind(console,'connection error..'));

var authenticationSchema=new mongoose.Schema({
    username:{type:String, required:true,unique:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
});
var productsSchema=new mongoose.Schema({
    Id:{type:String,required:true,unique:true},
    ProductName:{type:String,required:true},
    Category:{type:String,required:true},
    Img:{type:"String"},
    Brand:{type:String,required:true},
    Price:{type:Number,required:true},
    Review:{type:String}
});

var products=mongoose.model('products',productsSchema);


// var WomenTop=new products({Id:"1",ProductName:"WomenTop",Category:"ClothingWomen",Img:"https://images.unsplash.com/photo-1485145782098-4f5fd605a66b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRvcHMlMjBmb3IlMjB3b21lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:100,Review:"3 stars"});
// WomenTop.save(function(err,WomenTop){
//     if(err)return console.error(err);
// });
// var WomenTrousers=new products({Id:"2",ProductName:"WomenTrousers",Category:"ClothingWomen",Img:"https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRyb3VzZXJzJTIwZm9yJTIwd29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:200,Review:"4 stars"});
// WomenTrousers.save(function(err,WomenTrousers){
//     if(err)return console.error(err);
// });
// var WomenSuits=new products({Id:"3",ProductName:"WomenSuits",Category:"ClothingWomen",Img:"https://images.unsplash.com/photo-1597983073750-16f5ded1321f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGt1cnRhJTIwcGFqYW1hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:300,Review:"3 stars"});
// WomenSuits.save(function(err,WomenSuits){
//     if(err)return console.error(err);
// });
// var WomenSaree=new products({Id:"4",ProductName:"WomenSaree",Category:"ClothingWomen",Img:"https://images.unsplash.com/photo-1619516388835-2b60acc4049e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwYnJpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:500,Review:"3 stars"});
// WomenSaree.save(function(err,WomenSaree){
//     if(err)return console.error(err);
// });
// var WomenJacket=new products({Id:"5",ProductName:"WomenJacket",Category:"ClothingWomen",Img:"https://images.unsplash.com/photo-1617733401065-c7bdf0b33417?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:500,Review:"2 stars"});
// WomenJacket.save(function(err,WomenJacket){
//     if(err)return console.error(err);
// });
// var MenShirt=new products({Id:"6",ProductName:"MenShirt",Category:"ClothingMen",Img:"https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnQlMjBmb3IlMjBtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:500,Review:"2 stars"});
// MenShirt.save(function(err,MenShirt){
//     if(err)return console.error(err);
// });
// var MenPants=new products({Id:"7",ProductName:"MenPants",Category:"ClothingMen",Img:"https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhbnQlMjBmb3IlMjBtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:500,Review:"2 stars"});
// MenPants.save(function(err,MenPants){
//     if(err)return console.error(err);
// });
// var MenJeans=new products({Id:"8",ProductName:"MenJeans",Category:"ClothingMen",Img:"https://images.unsplash.com/photo-1476231790875-016a80c274f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amVhbnMlMjBmb3IlMjBtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:300,Review:"4 stars"});
// MenJeans.save(function(err,MenJeans){
//     if(err)return console.error(err);
// });
// var MenEthnicwear=new products({Id:"9",ProductName:"MenEthnicwear",Category:"ClothingMen",Img:"https://images.unsplash.com/photo-1628250523744-6e414eded400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGt1cnRhJTIwcGFqYW1hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:700,Review:"3 stars"});
// MenEthnicwear.save(function(err,MenEthnicwear){
//     if(err)return console.error(err);
// });
// var MenJacket=new products({Id:"10",ProductName:"MenJacket",Category:"ClothingMen",Img:"https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8amFja2V0JTIwZm9yJTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:300,Review:"4 stars"});
// MenJacket.save(function(err,MenJacket){
//     if(err)return console.error(err);
// });
// var StationeryBox=new products({Id:"11",ProductName:"StationeryBox",Category:"Stationery",Img:"https://images.unsplash.com/photo-1543237935-aa9ffc1c0bc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN0YXRpb25lcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:100,Review:"4 stars"});
// StationeryBox.save(function(err,StationeryBox){
//     if(err)return console.error(err);
// });
// var StationeryPens=new products({Id:"12",ProductName:"StationeryPens",Category:"Stationery",Img:"https://images.unsplash.com/photo-1567855354833-ac2c4f967b0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0YXRpb25lcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:50,Review:"3 stars"});
// StationeryPens.save(function(err,StationeryPens){
//     if(err)return console.error(err);
// });
// var StationeryPencils=new products({Id:"13",ProductName:"StationeryPencils",Category:"Stationery",Img:"https://images.unsplash.com/photo-1563946245714-9c3863e4372d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVuY2lsJTIwYm94fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:50,Review:"3 stars"});
// StationeryPencils.save(function(err,StationeryPencils){
//     if(err)return console.error(err);
// });
// var StationeryBooks=new products({Id:"14",ProductName:"StationeryBooks",Category:"Stationery",Img:"https://images.unsplash.com/photo-1601001435957-74f0958a93fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3RhdGlvbmVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:500,Review:"5 stars"});
// StationeryBooks.save(function(err,StationeryBooks){
//     if(err)return console.error(err);
// });
// var StationeryBags=new products({Id:"15",ProductName:" StationeryBags",Category:"Stationery",Img:"https://images.unsplash.com/photo-1495968283540-e1df41995ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhY2slMjB0byUyMHNjaG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:300,Review:"3 stars"});
// StationeryBags.save(function(err, StationeryBags){
//     if(err)return console.error(err);
// });
// var ShoesHeels=new products({Id:"16",ProductName:" ShoesHeels",Category:"Shoes",Img:"https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhlZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:400,Review:"4 stars"});
// ShoesHeels.save(function(err, ShoesHeels){
//     if(err)return console.error(err);
// });
// var ShoesSports=new products({Id:"17",ProductName:" ShoesSports",Category:"Shoes",Img:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnRzJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",Brand:"Nike",Price:500,Review:"5 stars"});
// ShoesSports.save(function(err, ShoesSports){
//     if(err)return console.error(err);
// });
// var ShoesCasual=new products({Id:"18",ProductName:"ShoesCasual",Category:"Shoes",Img:"https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",Brand:"Nike",Price:500,Review:"5 stars"});
// ShoesCasual.save(function(err, ShoesCasual){
//     if(err)return console.error(err);
// });
// var JwelleryEarrings=new products({Id:"19",ProductName:"JwelleryEarrings",Category:"Jwellery",Img:"https://images.unsplash.com/photo-1615197419962-90f21da0956d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZWFycmluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",Brand:"Malabar",Price:200,Review:"5 stars"});
// JwelleryEarrings.save(function(err, JwelleryEarrings){
//     if(err)return console.error(err);
// });
// var JwelleryNecklace=new products({Id:"20",ProductName:"JwelleryNecklace",Category:"Jwellery",Img:"https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmVja2xhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",Brand:"Tanishq",Price:200,Review:"5 stars"});
// JwelleryNecklace.save(function(err,JwelleryNecklace){
//     if(err)return console.error(err);
// });
// var JwelleryRings=new products({Id:"21",ProductName:"JwelleryRings",Category:"Jwellery",Img:"https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",Brand:"Tanishq",Price:300,Review:"3 stars"});
// JwelleryRings.save(function(err, JwelleryRings){
//     if(err)return console.error(err);
// });
// var JwelleryBracelets=new products({Id:"22",ProductName:"JwelleryBracelets",Category:"Jwellery",Img:"https://images.unsplash.com/photo-1597006354775-2955b15ec026?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnJhY2VsZXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:400,Review:"2 stars"});
// JwelleryBracelets.save(function(err,JwelleryBracelets){
//     if(err)return console.error(err);
// });
// var JwelleryBangles=new products({Id:"23",ProductName:"JwelleryBangles",Category:"Jwellery",Img:"https://images.unsplash.com/photo-1601482438629-346a273776af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2xlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",Brand:"Levi",Price:400,Review:"2 stars"});
// JwelleryBangles.save(function(err,JwelleryBangles){
//     if(err)return console.error(err);
// });

module.exports={
    authdetails:mongoose.model('authDetails',authenticationSchema),
    prod:products,
};