const db = require('../models');

const getMessages = async () => db.Messages.findAll();

const createMessage = async (req) => db.Messages.create(req.body);

const editMessage = async (req) => {
  const [message] = await db.Messages.update(req.body, { where: { id: req.params.id } });
  if (message === 0) {
    throw Error('Повідомлення не існує');
  }
};

const deleteMessage = async (req) => {
  const message = await db.Messages.destroy({ where: { id: req.params.id } });
  if (!message) {
    throw Error('Повідомлення не існує');
  }
};

const messageService = {
  getMessages,
  createMessage,
  editMessage,
  deleteMessage,
};

module.exports = messageService;
