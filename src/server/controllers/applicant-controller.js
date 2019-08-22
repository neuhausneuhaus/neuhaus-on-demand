

const {pool} = require('../db/init');
// {
//   name: req.params.name ? req.params.name : "fellow human",
//   email: req.params.email
// }

const applicantController = {

  addApplicant: (req, res, next) => {
    next();
  }
  
};

module.exports = applicantController;
