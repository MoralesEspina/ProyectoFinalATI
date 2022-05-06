const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');

/*CRUD-Get*/
router.get('/category',(req,res)=>{
    console.log('Obteniendo Categoria')
    mysqlConnection.query('Select * from category',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Get-id*/
router.get('/category/:id',(req,res)=>{
    console.log('Obteniendo Categoria')
    mysqlConnection.query('Select * from category where idcategory = ?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Insert*/
router.post('/category',(req,res)=>{
    console.log('Agregando Categoria')
    let emp=req.body;
    console.log(emp);
    mysqlConnection.query('insert into category (nombre,descripcion) values (?,?)',
    [emp.nombre,emp.descripcion],(err,result)=>{
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
router.put('/category/:id',(req,res)=>{
    console.log('Actualizando Categoria')
    let emp=req.body;
    mysqlConnection.query('update category set nombre=?, descripcion=? where idcategory=?',
    [emp.nombre,emp.descripcion,req.params.id],(err,result)=>{
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
router.delete('/category/:id',(req,res)=>{
    console.log('Eliminando Categoria')
    mysqlConnection.query('delete from operation where idcategory = ?',[req.params.id],(err,result)=>{
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