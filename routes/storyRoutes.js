const router = require('express').Router();

const { getStories, createStory } = require('../controllers/storyControllers');

router.route('/api/stories').get(getStories);
router.route('/api/stories').post(createStory);

module.exports = router;
