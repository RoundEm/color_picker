const fs = require('fs')
const pool = require('./db')

fs.readFile('./client/src/data.json', 'utf-8', (err, data) => { 
    if (err) { 
        console.log('error reading from file: ', err) 
    } else {
        const colorsData = JSON.parse(data)
        for (const color of colorsData) {
            insertColorRow(color)
        }
    }
})


const colorCategories = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray']

function insertColorGroupTableRow(color) {
    const query = `
        insert into color_groups(name)
        values($1) returning *
    `
    pool.query(query, [color])
        .then(res => console.log('insert color group res: ', res))
        .catch(err => console.log('insert color group row error: ', err))
}

for (const color of colorCategories) {
    insertColorGroupTableRow(color)
}

function insertColorRow({ hexCode, colorGroup }) {
    const query = `
        insert into colors(hex_code, color_group_id)
        values($1, $2) returning *
    `
    pool.query(query, [hexCode, colorGroup])
        .then(res => console.log('insert color row res: ', res))
        .catch(err => console.log('insert color row error: ', err))
}