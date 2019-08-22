const {pool} = require('../db/init');

// *Save a Selected Meeting to DB*
// *Find all meetings based on applicant email*
// *Delete a meeting*
// *Change a meeting*

const meetingController = {
  getAllMeetings: (req, res, next) => {
    pool.query(`SELECT * FROM meeting`)
    .then((result) => {
      res.meetings = result.rows;
      next();
      // pool.end(() => console.log('pool has ended'));
    });
  },

  getMeetingsByApplicant: (req, res, next) => {
    
    const applicantEmail = req.params.email;

    const query = {
      text:`SELECT meeting.meeting_id, meeting.addedtoneuhauscal, meeting.applicant_id, meeting.gcalid, applicant.email
      FROM meeting
      INNER JOIN applicant
      ON meeting.applicant_id = applicant.applicant_id
      WHERE applicant.email = $1;`,
      values: [applicantEmail]
    }

    pool.query(query, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.meetings = result.rows;
        next();
      }
    })
  },
  changeMeeting: (req, res, next) => {
    next();
  },
  addMeeting: (req, res, next) => {
    next();
  }
};

module.exports = meetingController;
