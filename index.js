const app=require('express')();
const mongoose=require('mongoose');
const db=require('./database/mongodb'); 
const authdetails=db.authdetails;
const products=db.prod;

app.get('/allproducts',(req,res)=>{
    var obj=[];
products.find({$or:[{Category:"ClothingMen"},{Category:"ClothingWomen"},{Category:"Jwellery"}]},function(err,products){
    if(err) return console.error(err); 
    for(let i=0;i<products.length;i++)
    obj.push(products[i]);
    console.log("obj is ",obj);
    res.status(200).json({ success: true, data: obj });
res.end();
})
});
app.post('/signup',(req,res)=>{
    console.log(req.body);
    const user=new authdetails({ username:req.body.Username, email:req.body.Email, password:req.body.Password });
    user.save(function(err,user){
        if(err) return console.error(err);
        else {console.log('user saved in collection'); 
        res.writeHead(301,{Location:"http://localhost:3000/"});
       res.end();
    }
    });
    
});
app.post('/signin',(req,res)=>{
    console.log(req.body);
    res.writeHead(301,{Location:"http://localhost:3000/"});
    res.end();

});

app.get('/ClothingMen',(req,res)=>{
    var obj=[];
products.find({Category:"ClothingMen"},function(err,products){
    if(err) return console.error(err); 
    for(let i=0;i<products.length;i++)
    obj.push(products[i]);
    console.log("obj is ",obj);
    res.status(200).json({ success: true, data: obj });
res.end();
})
});
app.get('/ClothingWomen',(req,res)=>{
    var obj=[];
products.find({Category:"ClothingWomen"},function(err,products){
    if(err) return console.error(err); 
    for(let i=0;i<products.length;i++)
    obj.push(products[i]);
    console.log("obj is ",obj);
    res.status(200).json({ success: true, data: obj });
res.end();
})
});
app.get('/Jwellery',(req,res)=>{
    var obj=[];
products.find({Category:"Jwellery"},function(err,products){
    if(err) return console.error(err); 
    for(let i=0;i<products.length;i++)
    obj.push(products[i]);
    console.log("obj is ",obj);
    res.status(200).json({ success: true, data: obj });
res.end();
})
});
app.get('/Stationery',(req,res)=>{
    var obj=[];
products.find({Category:"Stationery"},function(err,products){
    if(err) return console.error(err); 
    for(let i=0;i<products.length;i++)
    obj.push(products[i]);
    console.log("obj is ",obj);
    res.status(200).json({ success: true, data: obj });
res.end();
})
});
app.get('/Shoes',(req,res)=>{
    var obj=[];
products.find({Category:"Shoes"},function(err,products){
    if(err) return console.error(err); 
    for(let i=0;i<products.length;i++)
    obj.push(products[i]);
    console.log("obj is ",obj);
    res.status(200).json({ success: true, data: obj });
res.end();
})
});
app.listen(7000,()=>{
    console.log(`server is running  !`);
}); 