const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');

/*CRUD-Get*/
router.get('/product',(req,res)=>{
    console.log('Obteniendo Productos')
    mysqlConnection.query('Select * from product',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Get-id*/
router.get('/product/:id',(req,res)=>{
    console.log('Obteniendo Producto')
    mysqlConnection.query('Select * from product where idproduct = ?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Insert*/
router.post('/product',(req,res)=>{
    console.log('Agregando Productos')
    let emp=req.body;
    console.log(emp);
    mysqlConnection.query('insert into product (name,unitprice,quantity,userid,description,categoryid,priceout) values (?,?,?,?,?,?,?)',
    [emp.name, emp.unitprice, emp.quantity, emp.userid, emp.description, emp.categoryid, emp.priceout],(err,result)=>{
        if(!err){
            console.log(result);
            res.status(201).send("Creado Correctamente");
        }else{
            console.log(err);
            res.send('Error'+err);
        }
    })
});

/*CRUD-Update*/
router.put('/product/:id',(req,res)=>{
    console.log('Actualizando Producto')
    let emp=req.body;
    mysqlConnection.query('update product set name=?, unitprice=?, quantity=?, userid=?, description=?, categoryid=?, priceout=? where idproduct=?',
    [emp.name, emp.unitprice, emp.quantity, emp.userid, emp.description, emp.categoryid, emp.priceout, req.params.id],(err,result)=>{
        if(!err){
            console.log(result);
            res.status(202).send("Actualizado Correctamente");
        }else{
            console.log(err);
            res.send('Error'+err);
        }
    })
});

/*CRUD-Delete*/
router.delete('/product/:id',(req,res)=>{
    console.log('Eliminando Producto')
    mysqlConnection.query('delete from product where idproduct = ?',[req.params.id],(err,result)=>{
        if(!err){
            console.log(result);
            res.status(202).send("Eliminado Correctamente");
        }else{
            console.log(err);
            res.send('Error'+err);
        }
    })
});

module.exports = router;