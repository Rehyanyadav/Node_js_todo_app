const app = require('./app');
const port = 4000;
const db  = require('./config/db');
const userModel = require('./models/user.model');

app.get('/',(req,res)=>{

    res.send('Hello World !!!');
})
app.listen(port,()=>{
    console.log(`server is listening on port http://localhost${port}`);
});


