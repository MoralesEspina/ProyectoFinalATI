const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');

/*CRUD-Get*/
router.get('/sell',(req,res)=>{
    console.log('Obteniendo Operaciónes')
    mysqlConnection.query('Select * from operation',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Get-id*/
router.get('/sell/:id',(req,res)=>{
    console.log('Obteniendo Operación')
    mysqlConnection.query('Select * from operation where idoperation = ?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Insert*/
router.post('/sell',(req,res)=>{
    console.log('Agregando Operación')
    let emp=req.body;
    console.log(emp);
    mysqlConnection.query('insert into operation (productid,quantity,operationtypeid,sellid) values (?,?,?,?)',
    [emp.productid,emp.quantity,emp.operationtypeid,emp.sellid],(err,result)=>{
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
router.put('/sell/:id',(req,res)=>{
    console.log('Actualizando Operación')
    let emp=req.body;
    mysqlConnection.query('update operation set productid=?, quantity=?, operationtypeid=?, sellid=? where idoperation=?',
    [emp.productid,emp.quantity,emp.operationtypeid,emp.sellid,req.params.id],(err,result)=>{
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
router.delete('/sell/:id',(req,res)=>{
    console.log('Eliminando Operación')
    mysqlConnection.query('delete from operation where idoperation = ?',[req.params.id],(err,result)=>{
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