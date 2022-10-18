const {
  getMessages, createMessage, editMessage, deleteMessage,
} = require('../services/messages.service');

const getAllMessages = async (req, res) => {
  try {
    const messages = await getMessages();
    res.set('Access-Control-Expose-Headers', 'X-Total-Count');
    res.set('X-Total-Count', messages.length);
    if (messages === null || messages.length < 1) {
      return res.status(200).json([]);
    }
    return res.status(200).json(messages);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const createNewMessage = async (req, res) => {
  try {
    const message = await createMessage(req);
    return res.status(201).json(message);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const editOneMessage = async (req, res) => {
  try {
    await editMessage(req);
    return res.status(200).json('Повідомлення успішно змінене');
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const deleteOneMessage = async (req, res) => {
  try {
    await deleteMessage(req);
    return res.status(200);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const messageController = {
  getAllMessages,
  createNewMessage,
  editOneMessage,
  deleteOneMessage,
};

module.exports = messageController;
