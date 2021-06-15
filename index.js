import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import fileupload from 'express-fileupload'

const app = express()

const DB_URL = `mongodb+srv://user:user@cluster0.dw6s5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const PORT = 5000

app.use(express.json())
app.use(express.static('static'))
app.use(fileupload({}))

app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()