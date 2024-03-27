const asyncHandler = require('express-async-handler');
const Story = require('../models/storyModel');

// @desc    Get all stories
// @route   GET /api/stories
const getStories = asyncHandler(async (req, res) => {
    const stories = await Story.find({});
    res.status(200).json(stories);
    console.log('200 OK');
});

//@desc Create new story
//@route POST /api/stories
const createStory = asyncHandler(async (req, res) => {
    const { title, body, anonymous, author } = req.body;
    if (!title || !body) {
        res.status(400);
        throw new Error('Please provide a title and body');
    }
    const story = await Story.create({ title, body, anonymous, author });
    res.status(201).json(story);
    console.log('201 Created');
});

module.exports = { getStories, createStory };
