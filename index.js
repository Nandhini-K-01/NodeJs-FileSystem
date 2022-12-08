const express = require("express");
const fs = require("fs");
const app = express();

//To create a txt file in fsfiles folder with file name as current date time and content as current timestamp
let date_ob = new Date();
// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

//date & time in YYYY-MM-DD HH:MM:SS format
const fileName = year + "-" + month + "-" + date + " " + hours + "h" + minutes + "m" + seconds + "s";
const fileData = new Date().toString();

const createFile = async () => {
    fs.writeFileSync(`fsfiles/${fileName}.txt`, fileData);
}

//To retrieve all txt files in fsfiles folder
const path = require('path');
const fullPath = path.join(__dirname, 'fsfiles')
const readFile = ()=>{
    fs.readdir(fullPath, (error, fsfiles) => {
        if (error) console.log(error)
        fsfiles.forEach( file => console.log(file))
        })
}

app.get("/createfile", (req,res,next)=>{
    createFile()
    res.send("file created at successfully")
})

app.get("/readfile", (req,res,next)=>{
    readFile()
    res.send("file read")
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is listening to ${PORT}`)
})