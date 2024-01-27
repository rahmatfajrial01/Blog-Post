const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require('cors')
const connectDatabase = require("./src/config/db")
const morgan = require('morgan')
const path = require("path");




app.use(cors())
app.use(morgan("dev"))
dotenv.config()
app.use(express.json())
const PORT = process.env.PORT
connectDatabase()

const authRoutes = require('./src/routes/userRoutes.js')
const postCategoriesRoutes = require('./src/routes/postCategoriesRoutes')
const postRoutes = require('./src/routes/postRoutes.js')
const commentRoutes = require('./src/routes/commentRoutes')
const { notFound, errorHandler } = require("./src/middlewares/errorHandler")

app.use('/api/user', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/post-categories', postCategoriesRoutes);
app.use('/api/comment', commentRoutes);
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));


app.use(notFound)
app.use(errorHandler)

// app.get("/", (req, res) => {
//     res.send("server is running")
// })

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})