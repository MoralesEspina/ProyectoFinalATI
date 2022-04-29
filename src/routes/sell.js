const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');

/*CRUD-Get*/
router.get('/sell',(req,res)=>{
    console.log('Obteniendo Operaciónes')
    mysqlConnection.query('Select * from sell',(err,rows,fields)=>{
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
    mysqlConnection.query('Select * from sell where idsell = ?',[req.params.id],(err,rows,fields)=>{
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
    mysqlConnection.query('insert into sell (personid,operationtypeid,total,cash,date,userid) values (?,?,?,?,?,?)',
    [emp.nombre,emp.personid,emp.total,emp.cash,emp.date,emp.userid],(err,result)=>{
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
    mysqlConnection.query('update sell set personid=?, operationtypeid=?, total=?, cash=?, date=?, userid=? where idsell=?',
    [emp.nombre,emp.personid,emp.total,emp.cash,emp.date,emp.userid,req.params.id],(err,result)=>{
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
    mysqlConnection.query('delete from sell where idsell = ?',[req.params.id],(err,result)=>{
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