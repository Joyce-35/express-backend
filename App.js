//jshint esversion:6


const express = require("express")


const app = express()
const handleAllRequest = (req, res) =>{
    res.write("Response from server.use")
}
app.post("/profile", handleAllRequest)
app.use('/all', function (req, res) {
    res.write('<h1> Hello my name is Ama</h1>')
})
app.get('/', function (req, res) {
    res.write('<h1> Hello Welcome to my page</h1>')
})
app.put('/profile', function (req, res) {
    res.write('<h1> Hello Welcome to my page</h1>')
})
app.delete('/all', function (req, res) {
    res.write('<h1> Hello Welcome to my page</h1>')
})



app.listen(3000, function () {
    console.log("server started on port 3000")
})