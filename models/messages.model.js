module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('messages', {
    userName: {
      type: DataTypes.STRING,
      field: 'userName',
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      field: 'message',
      allowNull: false,
    },
    replyTo: {
      type: DataTypes.INTEGER,
      field: 'replyTo',
    },
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'messages',
  });
  return Message;
};
