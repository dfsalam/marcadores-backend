const express=require('express')
const mysql=require('mysql')
const myconn =require('express-myconnection')
const routes=require('./routes')
const cors=require('cors')

const app=express()
app.use(cors())
app.set('port',8080);

const dbOptions={
    host:'150.136.105.14',
    port:'3306',
    user:'root',
    password:'admin',
    database:'mdeportivos'
}
//middelwares
app.use(myconn(mysql,dbOptions,'single'))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Welcome to my APP');

})
app.use('/api', routes)

app.listen(app.get('port'),()=>{
    console.log(`server running on port ${app.get('port')}`)
})

