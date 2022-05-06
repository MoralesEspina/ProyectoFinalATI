const express = require('express');
const router = express.Router();
const mysqlConnection = require('../configurations/db-conf');
const jwt = require('jsonwebtoken');


//Visualizar Personas
router.post("/login", (req, res) => {
    const body = req.body;
    console.log(body.email);
    let user;           

    mysqlConnection.query("Select email, password from user where email = ?", body.email, (err, rows, field) => {
        if (!err) {
            user = rows[0];
            if (user === undefined) {
                return res.status(401).send('Usuario no Existe');
            }
            if (body.password === user.password) {
                const token = jwt.sign({_id: user.iduser }, 'secret', { expiresIn: '1m' });
                return res.status(200).json({ token });
            } else {
                return res.status(401).send('Logeo Invalido');
            }
        } else {
            return res.status(500).send(err);
        }
    });
});

module.exports = router;