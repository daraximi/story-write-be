const mongoose = require('mongoose');

const draftSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a title'],
        },
        anonymous: {
            type: Boolean,
        },
        body: {
            type: String,
            required: [false, 'Please provide a body'],
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

module.exports = mongoose.model('Draft', draftSchema);
