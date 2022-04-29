const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');

/*CRUD-Get*/
router.get('/user',(req,res)=>{
    console.log('Obteniendo Usuarios')
    mysqlConnection.query('Select * from user',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Get-id*/
router.get('/user/:id',(req,res)=>{
    console.log('Obteniendo Usuario')
    mysqlConnection.query('Select * from user where iduser = ?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Insert*/
router.post('/user',(req,res)=>{
    console.log('Agregando Usuarios')
    let emp=req.body;
    console.log(emp);
    mysqlConnection.query('insert into user (name,lastname,email,password,admin) values (?,?,?,?,?)',
    [emp.name, emp.lastname, emp.email, emp.password, emp.admin],(err,result)=>{
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
router.put('/user/:id',(req,res)=>{
    console.log('Actualizando Usuarios')
    let emp=req.body;
    mysqlConnection.query('update user set name=?, lastname=?, email=?, password=?, admin=? where iduser=?',
    [emp.name, emp.lastname, emp.email, emp.password, emp.admin,req.params.id],(err,result)=>{
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
router.delete('/user/:id',(req,res)=>{
    console.log('Eliminando Usuario')
    mysqlConnection.query('delete from user where iduser = ?',[req.params.id],(err,result)=>{
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