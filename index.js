import express from 'express'
import {resolve} from 'path'
import {config} from 'dotenv'
config()
const app = express()
const port = +process.env.PORT || 4000
const productURL = 'http://localhost:3000/results'
app.use(express.static('./static'))
// Retrieve data
async function getData() {
    return await (await fetch(productURL)).json()
}
app.get('/', (req, res) => {
    res.status(200).sendFile(resolve('./static/index.html'))
})
app.get('/about', (req, res) => {
    res.status(200).sendFile(resolve('./static/about.html'))
})
app.get('/products', (req, res) => {
    res.status(200).json
})
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
}) 
