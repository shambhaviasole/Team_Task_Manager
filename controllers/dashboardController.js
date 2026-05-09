const Task = require("../models/Task");
const Project = require("../models/Project");

const getDashboardData = async (req, res) => {

   try {

      const totalProjects =
         await Project.countDocuments();

      const totalTasks =
         await Task.countDocuments();

      const completedTasks =
         await Task.countDocuments({
            status: "Completed"
         });

      const pendingTasks =
         await Task.countDocuments({
            status: "Pending"
         });

      const inProgressTasks =
         await Task.countDocuments({
            status: "In Progress"
         });

      const overdueTasks =
         await Task.countDocuments({

            deadline: {
               $lt: new Date()
            },

            status: {
               $ne: "Completed"
            }

         });

      const highPriorityTasks =
         await Task.countDocuments({
            priority: "High"
         });

      res.status(200).json({

         totalProjects,
         totalTasks,
         completedTasks,
         pendingTasks,
         inProgressTasks,
         overdueTasks,
         highPriorityTasks

      });

   } catch(error){

      res.status(500).json({
         message: error.message
      });

   }

};

module.exports = {
   getDashboardData
};