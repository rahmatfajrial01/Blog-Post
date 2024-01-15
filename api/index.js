const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require('cors')
const connectDatabase = require("./src/config/db")
const morgan = require('morgan')



app.use(cors())
app.use(morgan("dev"))
dotenv.config()
app.use(express.json())
const PORT = process.env.PORT
connectDatabase()

const authRoutes = require('./src/routes/userRoutes.js')
const { notFound, errorHandler } = require("./src/middlewares/errorHandler")

app.use('/api/user', authRoutes);

app.use(notFound)
app.use(errorHandler)

// app.get("/", (req, res) => {
//     res.send("server is running")
// })

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})