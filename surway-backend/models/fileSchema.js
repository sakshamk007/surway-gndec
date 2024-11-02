const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'new', 'closed'], // Only allow these values
        default: 'new' // Default value is 'active'
    },
    responses: {
        type: Number,
        default: 0 // Default value for responses is 0
    },
    lastModified: {
        type: Date,
        default: Date.now // Automatically set to the current date
    },
    creationDate: {
        type: Date,
        default: Date.now // Automatically set to the current date when the document is first created
    }
});

// Automatically update the `lastModified` field on each save
projectSchema.pre('save', function (next) {
    this.lastModified = Date.now();
    next();
});

module.exports = mongoose.model('surveys', projectSchema);
