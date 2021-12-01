const mongoose = require('mongoose')

const woodSchema = mongoose.Schema({
    name: {
        type: 'string',
        unique: 1,
        maxLength:100,
        required: true,
    }
})

const Wood = mongoose.model('Wood',woodSchema)

module.exports = {Wood}