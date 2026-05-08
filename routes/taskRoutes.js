const express = require("express");

const router = express.Router();

const {
   createTask,
   getTasks,
   updateTaskStatus
} = require("../controllers/taskController");

const authMiddleware = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");

router.post(
   "/",
   authMiddleware,
   roleMiddleware("admin"),
   createTask
);

router.get(
   "/",
   authMiddleware,
   getTasks
);

router.put(
   "/:id/status",
   authMiddleware,
   updateTaskStatus
);

module.exports = router;