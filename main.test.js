// Importing required functions from the main.js function library 
const {sum, clone} = require('./main')

test('Adding two numbers',() => {
    expect(sum(1,2)).toBe(3)
})

test('Cloning an array',() => {
    const array = [1,2,3,4,5]
    expect(clone(array)).toEqual(array)
})