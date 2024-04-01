const mongoose = require('mongoose');

const storySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a title'],
        },
        author: {
            type: String,
            required: [true, 'Please provide an author'],
        },
        anonymous: {
            type: String,
            required: [true, 'Please provide an anonymous'],
        },
        domain: {
            type: String,
            required: [true, 'Please provide a domain'],
        },
        // body: {
        //     type: String,
        //     required: [true, 'Please provide a body'],
        // },
        body: {
            type: String,
            required: [true, 'Please provide a body'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Story', storySchema);
