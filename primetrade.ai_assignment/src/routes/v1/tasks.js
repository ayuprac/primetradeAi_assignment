const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const taskController = require('../../controllers/taskController');
const { auth } = require('../../middlewares/auth');

router.use(auth); // all routes protected

router.post('/', [
  check('title', 'Title is required').notEmpty()
], taskController.createTask);

router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
