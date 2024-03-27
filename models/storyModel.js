const mongoose = require('mongoose');

const storySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a title'],
        },
        body: {
            type: String,
            required: [true, 'Please provide a body'],
        },
        anonymous: {
            type: Boolean,
        },
        author: {
            type: String,
            required: [false, 'Please provide an author'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Story', storySchema);
