const express = require('express')
const path =require('path')
const app = new express()
app.use(express.static('public'))

app.listen(3000, () => {
    console.log('App listening on port 3000')
})
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'views/index.js'))
    })

    app.get ('/pilots',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'views/pilots.ejs'))
    })
    app.get ('/cities',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'views/cities.ejs'))
    })
    app.get ('/names',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'views/names.ejs'))
    })
