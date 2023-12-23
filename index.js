const express = require("express")
const app = express()
app.set('view engine', 'ejs')
app.set('views', './views')

app.listen(3000, (req, res) => {
    console.log("nay la code web cua nam")
    console.log("Port is 3000")
})
app.get("/", (req, res) => {
    console.log('dang loi/')
    res.render('index.ejs')
})

app.get("/viet", (req, res) => {
    console.log('dang loi/viet')
    res.render('viet.ejs')
})

app.get("/nam", (req, res) => {
    console.log('dang loi/nam')
    res.render('nam.ejs')
})

app.get("/vietnam", (req, res) => {
    console.log('dang loi/vietnam')
    res.send("welcome back my channel1 troi du mua")
})






