
const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const Task = require('../models/Task');


const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

const resolveOwnerId = (owner) => {
  if (!owner) return null;
 
  if (owner._id) return owner._id.toString();
  return owner.toString();
};


exports.createTask = async (req, res, next) => {
  try {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { title, description } = req.body;
    const task = new Task({
      title,
      description,
      owner: req.user.id
    });

    await task.save();
    res.status(201).json({ success: true, data: task });
  } catch (err) {
    console.error('createTask error:', err);
    next(err);
  }
};

exports.getTasks = async (req, res, next) => {
  try {
    const filter = req.user?.role === 'admin' ? {} : { owner: req.user.id };
    const tasks = await Task.find(filter).populate('owner', 'name email');
    res.json({ success: true, data: tasks });
  } catch (err) {
    console.error('getTasks error:', err);
    next(err);
  }
};


exports.getTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res.status(400).json({ success: false, message: 'Invalid task id' });
    }

    const task = await Task.findById(id).populate('owner', 'name email');
    if (!task) return res.status(404).json({ success: false, message: 'Task not found' });

   
    const ownerId = resolveOwnerId(task.owner);
    console.log('getTask -> req.user:', req.user, 'task.owner:', ownerId);

    if (req.user.role !== 'admin' && ownerId !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    res.json({ success: true, data: task });
  } catch (err) {
    console.error('getTask error:', err);
    next(err);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res.status(400).json({ success: false, message: 'Invalid task id' });
    }

    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ success: false, message: 'Task not found' });

    const ownerId = resolveOwnerId(task.owner);
    console.log('updateTask -> req.user:', req.user, 'task.owner:', ownerId);

    if (req.user.role !== 'admin' && ownerId !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    const { title, description, completed } = req.body;
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (completed !== undefined) task.completed = completed;

    await task.save();
    res.json({ success: true, data: task });
  } catch (err) {
    console.error('updateTask error:', err);
    next(err);
  }
};


exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      return res.status(400).json({ success: false, message: 'Invalid task id' });
    }

   
    const task = await Task.findById(id).populate('owner', '_id');
    if (!task) return res.status(404).json({ success: false, message: 'Task not found' });

    const ownerId = resolveOwnerId(task.owner);
    console.log('deleteTask -> req.user:', req.user, 'task.owner:', ownerId);

    if (req.user.role !== 'admin' && ownerId !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    await Task.deleteOne({ _id: id });
    res.json({ success: true, message: 'Task removed' });
  } catch (err) {
    console.error('deleteTask error:', err);
    next(err);
  }
};
