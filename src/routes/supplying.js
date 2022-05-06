const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');

/*CRUD-Get*/
router.get('/supplying',(req,res)=>{
    console.log('Obteniendo Reabastecimientos')
    mysqlConnection.query('Select * from supplying',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Get-id*/
router.get('/supplying/:id',(req,res)=>{
    console.log('Obteniendo Reabastecimiento')
    mysqlConnection.query('Select * from supplying where idsupplying = ?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Insert*/
router.post('/supplying',(req,res)=>{
    console.log('Agregando Reabastecimiento')
    let emp=req.body;
    console.log(emp);
    mysqlConnection.query('insert into supplying (iduser,idproduct, quantity) values (?,?,?)',
    [emp.iduser,emp.idproduct,emp.quantity],(err,result)=>{
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
router.put('/supplying/:id',(req,res)=>{
    console.log('Actualizando Reabastecimiento')
    let emp=req.body;
    mysqlConnection.query('update supplying set iduser=?, idproduct=?, quantity=? where idsupplying=?',
    [emp.iduser,emp.idproduct,emp.quantity,req.params.id],(err,result)=>{
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
router.delete('/supplying/:id',(req,res)=>{
    console.log('Eliminando Reabastecimientos')
    mysqlConnection.query('delete from operation where idsupplying = ?',[req.params.id],(err,result)=>{
        if(!err){supplying
            console.log(result);
            res.status(202).send("Eliminado Correctamente");
        }else{
            console.log(err);
            res.send('Error'+err);
        }
    })
});

module.exports = router;