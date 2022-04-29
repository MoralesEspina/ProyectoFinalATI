const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');

/*CRUD-Get*/
router.get('/optipe',(req,res)=>{
    console.log('Obteniendo Tipos de Operación')
    mysqlConnection.query('Select * from operationtipe',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Get-id*/
router.get('/optipe/:id',(req,res)=>{
    console.log('Obteniendo Tipo de Operación')
    mysqlConnection.query('Select * from operationtipe where idop = ?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Insert*/
router.post('/optipe',(req,res)=>{
    console.log('Agregando Tipo de Operación')
    let emp=req.body;
    console.log(emp);
    mysqlConnection.query('insert into operationtipe (name) values (?)',
    [emp.name],(err,result)=>{
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
router.put('/optipe/:id',(req,res)=>{
    console.log('Actualizando Tipo de Operación')
    let emp=req.body;
    mysqlConnection.query('update operationtipe set name=? where idop=?',
    [emp.name,req.params.id],(err,result)=>{
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
router.delete('/optipe/:id',(req,res)=>{
    console.log('Eliminando Tipo de Operación')
    mysqlConnection.query('delete from operationtipe where idop = ?',[req.params.id],(err,result)=>{
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