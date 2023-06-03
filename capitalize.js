// write a funciton that accepts a string and returns a caps string

function capitalizeAllString (word) {
    console.log(word, " < -------this is the word that was passed in")
    return word.toUpperCase()
}
function lowerCaseAllString (word) {
    return word.toLowerCase()
}

module.exports = {
    capitalizeAllString,
    lowerCaseAllString
    // 'capitalizeAllString': capitalizeAllString,
    // 'lowerCaseAllString': lowerCaseAllString
}