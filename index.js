// Here is the enter of the package
const date = require('./src/dateFormat');
const escape = require('./src/HTMLEscape');
module.exports = {
    ...date,
    ...escape
}
