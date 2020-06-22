const express = require('express')
const app = express()
const port = process.env.PORT || 8080
require('log-timestamp');

const routes = require('./api/routes')
routes(app)

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true }))

app.listen(port, function (){

    console.log("Server started on port: " + port)
})

