import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"; // Đổi tên thành chữ thường

// shape data
const customerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    startDate: String,
    endDate: String,
    description: String,
    customerInfor: customerSchema,
    usersInfor: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    leader: userSchema,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "task" }],
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

// Sử dụng plugin mongooseDelete
projectSchema.plugin(mongooseDelete, { overrideMethods: "all" });

const Project = mongoose.model("project", projectSchema);

export default Project;
