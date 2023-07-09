/**
 * Defines a user schema using Mongoose.
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // First name of the user
    first_name: {
        type: String,
        required: [true, 'first_name is required for creating a user'],
        trim: true,
        text: true
    },
    // Last name of the user
    last_name: {
        type: String,
        required: [true, 'last_name is required for creating a user'],
        trim: true,
        text: true
    },
    // Unique username of the user
    username: {
        type: String,
        required: [true, 'username is required for creating a user'],
        trim: true,
        text: true,
        unique: true
    },
    // Email of the user
    email: {
        type: String,
        required: [true, 'email is required for creating a user'],
        trim: true,
        unique: true,
    },
    // Password of the user
    password: {
        type: String,
        required: [true, 'password is required for creating a user'],
    },
    // Profile picture of the user (defaults to a placeholder image)
    picture: {
        type: String,
        default: 'https://www.flaticon.com/free-icon/user_1077114?term=user&page=1&position=3&origin=search&related_id=1077114',
    },
    // Gender of the user (can be 'male' or 'female', defaults to 'male')
    gender: {
        type: String,
        enum: ['male', 'female'],
        default: 'male',
        required: [true, 'gender is required for creating a user'],
    },
    // Date of birth of the user
    date_of_birth: {
        type: Date,
        required: [true, 'date_of_birth is required for creating a user'],
        trim: true,
    },
    verified: { 
        type : 'boolean', 
        required : [true,'verified is required for creating a user'], 
        default: false,  
    },
    friends: {
        
    }
});
