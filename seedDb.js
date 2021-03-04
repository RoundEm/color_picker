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

function insertColorRow({ hexCode, colorGroup }) {
    const query = `
        insert into colors(hex_code, color_group_id)
        values($1, $2) returning *
    `
    pool.query(query, [hexCode, colorGroup])
        .then(res => console.log('insert color row res: ', res))
        .catch(err => console.log('insert color row error: ', err))
}

// TODO: is `returning *` from the queries necessary?
// TODO: check that this refactoring to include passed in `id` works
// const colorCategories = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'gray']

// function insertColorGroupTableRow(color, id) {
//     const query = `
//         insert into color_groups(name, id)
//         values($1, $2) returning *
//     `
//     pool.query(query, [color, id])
//         .then(res => console.log('insert color group res: ', res))
//         .catch(err => console.log('insert color group row error: ', err))
// }

// for (const [index, color] of colorCategories.entries()) {
//     insertColorGroupTableRow(color, index+1)
// }