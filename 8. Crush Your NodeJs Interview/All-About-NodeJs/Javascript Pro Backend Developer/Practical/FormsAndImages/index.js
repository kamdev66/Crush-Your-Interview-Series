const express = require('express')
const app = express()
const port = 5000

app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get('/myget', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.get('/mygetform',(req,res)=>{
    res.render('getForm');
})

app.get('/mypostform',(req,res)=>{
    res.render('postForm')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))