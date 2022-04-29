const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');

/*CRUD-Get*/
router.get('/person',(req,res)=>{
    console.log('Obteniendo Personas')
    mysqlConnection.query('Select * from person',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Get-id*/
router.get('/person/:id',(req,res)=>{
    console.log('Obteniendo Personas')
    mysqlConnection.query('Select * from person where idpersonas = ?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Insert*/
router.post('/person',(req,res)=>{
    console.log('Agregando Personas')
    let emp=req.body;
    console.log(emp);
    mysqlConnection.query('insert into person (name,lastname,email,kind) values (?,?,?,?)',
    [emp.name,emp.lastname,emp.email,emp.kind],(err,result)=>{
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
router.put('/person/:id',(req,res)=>{
    console.log('Actualizando Persona')
    let emp=req.body;
    mysqlConnection.query('update person set name=?, lastname=?, email=?, kind=? where idpersonas=?',
    [emp.name,emp.lastname,emp.email,emp.kind,req.params.id],(err,result)=>{
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
router.delete('/person/:id',(req,res)=>{
    console.log('Eliminando Persona')
    mysqlConnection.query('delete from person where idpersonas = ?',[req.params.id],(err,result)=>{
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