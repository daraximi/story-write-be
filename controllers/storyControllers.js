const asyncHandler = require('express-async-handler');
const Story = require('../models/storyModel');

// @desc    Get all stories
// @route   GET /api/stories
const getStories = asyncHandler(async (req, res) => {
    const stories = await Story.find({});
    res.status(200).json(stories);
});

// @desc    Get single story
// @route   GET /api/stories/:id
const getStory = asyncHandler(async (req, res) => {
    const storyId = req.params.id;
    const story = await Story.findById(storyId);
    if (!story) {
        res.status(404);
        throw new Error('Story not found');
    }
    res.status(200).json(story);
});

//@desc Create new story
//@route POST /api/stories
const createStory = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { title, author, anonymous, domain, body } = req.body;
    if (!title || !body) {
        res.status(400);
        throw new Error('Please provide a title and body');
    }
    const story = await Story.create({
        title,
        body,
        anonymous,
        domain,
        author,
    });
    res.status(201).json(story);
});

module.exports = { getStories, createStory, getStory };
