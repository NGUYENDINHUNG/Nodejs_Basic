import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"; // Đổi tên thành chữ thường

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});

const projectSchema = new mongoose.Schema({
  name: String,
  startDate: String,
  endDate: String,
  description: String,
});

//shape data
const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    status: String,
    startDate: String,
    endDate: String,
    usersInfo: userSchema,
    projectInfo: projectSchema,
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

// Override all methods
taskSchema.plugin(mongooseDelete, { overrideMethods: "all" });
const Task = mongoose.model("task", taskSchema);

export default Task;
