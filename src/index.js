const express = require('express');
var cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors());

app.set('port', process.env.PORT || 3000);

app.use(require('./routes/inventario'));
app.use(require('./routes/operation'));
app.use(require('./routes/operationtipe'));
app.use(require('./routes/person'));
app.use(require('./routes/sell'));
app.use(require('./routes/user'));

app.get('/',(req,res)=>{
    res.send('Prueba')
});
app.listen(app.get('port'), () => {
    console.log(`Server en puerto ${app.get('port')}`);
});
