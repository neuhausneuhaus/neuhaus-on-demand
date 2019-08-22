let router = require('express').Router();
const meetingController = require('../controllers/meeting-controller');
const applicantController = require('../controllers/applicant-controller');


// https://expressjs.com/en/guide/routing.html#route-parameters
// http://forbeslindesay.github.io/express-route-tester/

// Mandatory Params:
  // :email
  // :name

// Optional Queries:
  //&duration=
    //defaults to 30 min
  //&theme=
    // coffee? Business? idk.
  //&weekends=
    // this is dangerous. Should probably only implement when I have a user key



router.get('/:email/:name?',
  applicantController.addApplicant,
  meetingController.getMeetingsByApplicant,
  (req, res, next) => {
    res.json(res);
  }
);

router.get('/edit/:email',
  meetingController.getMeetingsByApplicant,
  meetingController.changeMeeting,
  (req, res, next) => {
    //probably reroute to /meet to make a new meeting? idk.
    res.send("This is where you would pick a meeting you've made and edit it");
  }
);

module.exports = router;