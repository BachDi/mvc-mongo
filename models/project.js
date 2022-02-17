const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectName:{
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    default: true,
  },
  createdBy:{
    type: String,
    required: true,
  },
})

const Projects = mongoose.model("projects", projectSchema);

module.exports = Projects;