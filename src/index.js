const express = require('express');
var cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors());

app.set('port', process.env.PORT || 3000);

app.use(require('./routes/category'));
app.use(require('./routes/client'));
app.use(require('./routes/person'));
app.use(require('./routes/product'));
app.use(require('./routes/sell'));
app.use(require('./routes/sellinfo'));
app.use(require('./routes/supplying'));
app.use(require('./routes/user'));

app.get('/',(req,res)=>{
    res.send('Prueba')
});
app.listen(app.get('port'), () => {
    console.log(`Server en puerto ${app.get('port')}`);
});
