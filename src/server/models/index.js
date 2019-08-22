const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {dialect: 'postgres'},
);

const models = {
  Applicant: sequelize.import('./applicant'),
  Meeting: sequelize.import('./meeting'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export const xyz = { sequelize };

export default models;
