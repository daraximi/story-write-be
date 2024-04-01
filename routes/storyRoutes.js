const router = require('express').Router();

const {
    getStories,
    createStory,
    getStory,
} = require('../controllers/storyControllers');

router.route('').get(getStories);
router.route('/:id').get(getStory);
router.route('').post(createStory);

module.exports = router;
