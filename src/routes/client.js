const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');

/*CRUD-Get*/
router.get('/client',(req,res)=>{
    console.log('Obteniendo Clientes')
    mysqlConnection.query('Select * from client',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Get-id*/
router.get('/client/:id',(req,res)=>{
    console.log('Obteniendo Cliente')
    mysqlConnection.query('Select * from client where idclient = ?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Insert*/
router.post('/client',(req,res)=>{
    console.log('Agregando Clientes')
    let emp=req.body;
    console.log(emp);
    mysqlConnection.query('insert into client (NIT,idperson) values (?,?)',
    [emp.nit,emp.idperson],(err,result)=>{
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
router.put('/client/:id',(req,res)=>{
    console.log('Actualizando Persona')
    let emp=req.body;
    mysqlConnection.query('update client set NIT=?, idperson=? where idclient=?',
    [emp.nit,emp.idperson,req.params.id],(err,result)=>{
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
router.delete('/client/:id',(req,res)=>{
    console.log('Eliminando Persona')
    mysqlConnection.query('delete from client where idclient = ?',[req.params.id],(err,result)=>{
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