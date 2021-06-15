const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
        default: "Site"
    },
    LastName: {
        type: String,
        required: true,
        default: "Owner"
    },
    Type: {
        type: String,
        default: "Staff"
    }
})

module.exports = mongoose.model('Users',userSchema);