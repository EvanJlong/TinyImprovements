const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating a user schema//
var UserSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: "Name is Required"
    }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;