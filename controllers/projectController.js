const Project = require("../models/Project");
const User = require("../models/User");

const createProject = async (req, res) => {

   try {

      const { title, description } = req.body;

      const project = await Project.create({

         title,
         description,

         createdBy: req.user.id,

         members: [req.user.id]

      });

      res.status(201).json(project);

   } catch(error){

      res.status(500).json({
         message: error.message
      });

   }

};

const getProjects = async (req, res) => {

   try {

      let projects;

      if(req.user.role === "admin"){

         projects = await Project.find()

         .populate("createdBy", "name email")

         .populate("members", "name email");

      } else {

         projects = await Project.find({

            members: req.user.id

         })

         .populate("createdBy", "name email")

         .populate("members", "name email");

      }

      res.status(200).json(projects);

   } catch(error){

      res.status(500).json({
         message: error.message
      });

   }

};

const addMembers = async (req, res) => {

   try {

      const { members } = req.body;

      const project = await Project.findByIdAndUpdate(

         req.params.id,

         {
            $addToSet: {
               members: members
            }
         },

         { new: true }

      );

      res.status(200).json(project);

   } catch(error){

      res.status(500).json({
         message: error.message
      });

   }

};

module.exports = {
   createProject,
   getProjects,
   addMembers
};