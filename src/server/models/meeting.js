const meeting = (sequelize, DataTypes) => {
  const Meeting = sequelize.define('meeting', {
    gcalid: {
      type: DataTypes.STRING,
    },
    addedToNeuhausCal: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  
  Meeting.associate = models => {
    Meeting.belongsTo(models.Applicant);
  };

  return Meeting;
}

export default meeting;
