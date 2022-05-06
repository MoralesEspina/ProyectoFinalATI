const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');

/*CRUD-Get*/
router.get('/egresos',(req,res)=>{
    console.log('Obteniendo Egresos')
    mysqlConnection.query('Select * from egresos',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Get-id*/
router.get('/egresos/:id',(req,res)=>{
    console.log('Obteniendo Egreso')
    mysqlConnection.query('Select * from egresos where idegresos = ?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*CRUD-Insert*/
router.post('/egresos',(req,res)=>{
    console.log('Agregando Productos')
    let emp=req.body;
    console.log(emp);
    mysqlConnection.query('insert into egresos (idproduct,cant,type,date,iduser) values (?,?,?,?,?)',
    [emp.idproduct, emp.cant, emp.type, emp.date, emp.iduser],(err,result)=>{
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
router.put('/egresos/:id',(req,res)=>{
    console.log('Actualizando Producto')
    let emp=req.body;
    mysqlConnection.query('update egresos set idproduct=?, cant=?, type=?, date=?, iduser=? where idegresos=?',
    [emp.idproduct, emp.cant, emp.type, emp.date, emp.iduser, req.params.id],(err,result)=>{
        if(!err){
            console.log(result);
            res.status(202).send("Actualizado Correctamente");
        }else{
            console.log(err);egresos
            res.send('Error'+err);
        }
    })
});

/*CRUD-Delete*/
router.delete('/egresos/:id',(req,res)=>{
    console.log('Eliminando Producto')
    mysqlConnection.query('delete from egresos where idegresos = ?',[req.params.id],(err,result)=>{
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