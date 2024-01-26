const express = require('express')
const path =require('path')
const { start } = require('repl')
const app = new express()
app.use(express.static('public'))

app.listen(3000, () => {
    console.log('App listening on port 3000')
})
app.get('/', (req, res) => {
    res.render(path.resolve(__dirname,'/index.js'))
    })

    app.get ('/pilots',(req,res)=>{
        res.render('pilots')
    app.get ('/cities',(req,res)=>{
        res.render('cities')
    })
    app.get ('/names',(req,res)=>{
        res.render('names')
    })
