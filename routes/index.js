const { Router } = require('express');
const {
  getAllMessages,
  createNewMessage,
  editOneMessage,
  deleteOneMessage,
} = require('../controllers/messages.controller');

const router = Router();

/* GET home page. */
router.get('/', getAllMessages);
router.post('/', createNewMessage);
router.patch('/:id', editOneMessage);
router.delete('/:id', deleteOneMessage);

module.exports = router;
