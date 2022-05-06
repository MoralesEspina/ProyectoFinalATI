const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');

/*CRUD-Get*/
router.get('/sellinfo',(req,res)=>{
    console.log('Obteniendo Tipos de Operación')
    mysqlConnection.query('Select * from sellinfo',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Get-id*/
router.get('/sellinfo/:id',(req,res)=>{
    console.log('Obteniendo Información de Venta')
    mysqlConnection.query('Select * from sellinfo where idsellinfo = ?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Insert*/
router.post('/sellinfo',(req,res)=>{
    console.log('Agregando Información de Venta')
    let emp=req.body;
    console.log(emp);
    mysqlConnection.query('insert into sellinfo (idproduct, quantity, idsell, unitprice,total) values (?,?,?,?,?)',
    [emp.idproduct, emp.quantity, emp.idesell, emp.unitprice, emp.total],(err,result)=>{
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
router.put('/sellinfo/:id',(req,res)=>{
    console.log('Actualizando Información de Venta')
    let emp=req.body;
    mysqlConnection.query('update sellinfo set idproduct=?, quantity=?, idsell=?, unitprice=?, total=? where idsellinfo=?',
    [emp.idproduct, emp.quantity, emp.idesell, emp.unitprice, emp.total,req.params.id],(err,result)=>{
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
router.delete('/sellinfo/:id',(req,res)=>{
    console.log('Eliminando Información de Venta')
    mysqlConnection.query('delete from sellinfo where idsellinfo = ?',[req.params.id],(err,result)=>{
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