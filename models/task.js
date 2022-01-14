const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskName: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const Tasks = mongoose.model("tasks", taskSchema);

module.exports = Tasks;
