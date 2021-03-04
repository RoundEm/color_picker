const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001
const pool = require('./db')

app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

// return color groups
app.get('/color_groups', (req, res) => {
    const queryString = `SELECT * FROM color_groups`
    pool.query(queryString)
        .then(_res => {
            console.log('color groups res: ', _res)
            res.json(_res.rows)
        })
        .catch(err => {
            console.log('post err: ', err)
        })
})

// return colors by color group
app.get('/color_group/:id', (req, res) => {
    const queryString = `
        SELECT * FROM color_groups
        WHERE id = $1
    `
    pool.query(queryString, [req.params.id])
        .then(_res => {
            console.log('color_group res: ', _res)
            res.json(_res.rows)
        })
        .catch(err => {
            console.log('post err: ', err)
        })
})

// return all colors
app.get('/colors', (req, res) => {
    const queryString = `SELECT * FROM colors`
    pool.query(queryString)
        // TODO: sort by `id` so that all color groups are together
        .then(_res => {
            // console.log('colors res: ', _res)
            res.json(_res.rows)
        })
        .catch(err => {
            console.log('post err: ', err)
        })
})

// return one color by id
app.get('/color/:id', (req, res) => {
    const queryString = `
        SELECT * FROM colors
        WHERE id = $1
    `
    pool.query(queryString, [req.params.id])
        .then(_res => {
            console.log('color res: ', _res)
            // res.json(_res.rows)
        })
        .catch(err => {
            console.log('post err: ', err)
        })
})

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

app.listen(port, () => {
    console.log(`API server now listening at port ${port}`)
})