//import express module
import express from 'express'

//import cors
import cors from 'cors'

//import mongoose
import mongoose from 'mongoose'

//import bodyParser from 'body-parser'
import bodyParser from 'body-parser'

import path from 'path'
import * as dotenv from 'dotenv'

//importing module routes from src\route\AllMethodRoutes.js
import allrestmethodroutes from './src/route/AllMethodRoutes.js'

/*===================================================================================================*/

//calling .env with dotenv
dotenv.config()


//initialize app with express
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, 'public')))

//set up database connection
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Successfully connected to the database")
}).catch(err => {
    console.log(err)
}); 

//initialize cors
app.use(cors())

//parse through bodyparser to make readable for our api
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//calling allrestmethodroutes with app
allrestmethodroutes(app)


app.get('/', (req, res) => {
    res.send('you are at the home page')
})

app.listen(process.env.PORT, () => {
    // console.log(`Server listening on port ${process.env.PORT}`)
})
