const applicant = (sequelize, DataTypes) => {
  const Applicant = sequelize.define('applicant', {
    name: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  });

  Applicant.associate = models => {
    Applicant.hasMany(models.Meeting, { OnDelete: 'CASCADE' });
  }


  return applicant;
};

export default applicant;
