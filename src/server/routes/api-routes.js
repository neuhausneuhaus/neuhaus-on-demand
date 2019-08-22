let router = require('express').Router();
const meetingController = require('../controllers/meeting-controller');

router.get('/', (req, res) => {
  res.json({message: 'Oh joyous day. Kaloo Caley!'});
});


router.get('/meetings/:email', meetingController.getMeetingsByApplicant, (req, res, next) => {
  res.json(res.meetings);
});
router.get('/meetings', meetingController.getAllMeetings, (req, res, next) => {
  res.json(res.meetings);
});

module.exports = router;