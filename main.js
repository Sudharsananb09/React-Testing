// Function to add two numbers
const sum = (a, b) =>{
    console.log(a+b)
    return a + b
}

// Function to clone an array of values
const clone = (array) => {
    return [...array]
}

module.exports = {
    sum,
    clone
}