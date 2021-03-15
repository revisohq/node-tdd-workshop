const curriedSum = (number1) => {
    return (number2) => {
        return number1 + number2
    }
}

module.exports = {
    curriedSum
}