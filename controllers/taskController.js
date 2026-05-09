const Task = require("../models/Task");

const createTask = async (req, res) => {

   try {

      const {
         title,
         description,
         project,
         assignedTo,
         deadline,
         priority
      } = req.body;

      const task = await Task.create({

         title,
         description,
         project,
         assignedTo,
         deadline,
         priority

      });

      res.status(201).json(task);

   } catch(error){

      res.status(500).json({
         message: error.message
      });

   }

};

const getTasks = async (req, res) => {

   try {

      let tasks;

      if(req.user.role === "admin"){

         tasks = await Task.find()

         .populate("project", "title")

         .populate("assignedTo", "name email");

      } else {

         tasks = await Task.find({

            assignedTo: req.user.id

         })

         .populate("project", "title")

         .populate("assignedTo", "name email");

      }

      res.status(200).json(tasks);

   } catch(error){

      res.status(500).json({
         message: error.message
      });

   }

};

const updateTaskStatus = async (req, res) => {

   try {

      const { status } = req.body;

      const task = await Task.findByIdAndUpdate(

         req.params.id,

         { status },

         { new: true }

      );

      res.status(200).json(task);

   } catch(error){

      res.status(500).json({
         message: error.message
      });

   }

};

module.exports = {
   createTask,
   getTasks,
   updateTaskStatus
};