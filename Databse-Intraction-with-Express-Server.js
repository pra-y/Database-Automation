const express= require('express')
const mysql = require('mysql')

const api=express()
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'NODE'
  })

// connect
db.connect((err)=> {
    if (err){
        throw err
    }
    console.log('mysql connected')
})


  // create db 
api.get('/createdb',(req,res)=>{
    let sql='CREATE DATABASE NODE'
    db.query(sql,(err,result)=>{
        if (err) throw err
        console.log(result)
        res.send('db created')
    })
})


  
// create table
api.get('/insert',(req,res)=>{
    let sql='CREATE TABLE STUDENTS (ROLL_NO INT, NAME VARCHAR(100))'
    db.query(sql,(err,result)=>{
        if (err) throw err
        console.log(result)
        res.send('table created')
    })
})

// insert data into table
api.get('/insert_data', (req,res) =>{
    let sql= 'INSERT INTO STUDENTS VALUES (1,"SANTOSH")'
    db.query(sql,(err,result)=>{
        if (err) throw err
        console.log(result)
        res.send("inserted data")
    })
})

// update data in db
api.get('/update',(req,res)=>{
    let sql= 'UPDATE STUDENTS SET NAME="AMIT"'
    db.query(sql,(err,result)=>{
        if (err) throw err
        console.log(result)
        res.send("data updated")
    })
})


// Delete  database 
api.get('/drop',(req,res)=>{
    let sql='DROP DATABASE NODE'
    db.query(sql,(err,result)=> {
        if (err) throw err 
        console.log(result)
        res.send('delete db')
    })
})

api.listen('5000',() =>{
    console.log("server have started at 5000")
})