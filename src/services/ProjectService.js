import Project from "../models/project.js";
import aqp from "api-query-params";

export const createProjectSevices = async (data) => {
  if (data.type === "EMPTY-PROJECT") {
    let result = await Project.create(data);
    return result;
  }
  if (data.type === "ADD-USERS") {
    console.log("««««« checkdata »»»»»", data);
    let myProject = await Project.findById(data.projectId).exec();
    for (let i = 0; i < data.userArr.length; i++) {
      myProject.usersInfor.push(data.userArr[i]);
    }
    let newResult = await myProject.save();
    console.log("««««« myProject »»»»»", myProject);
    //find project by id
    // const userArr = req.body.userArr.map(id => mongoose.Types.ObjectId(id));
    return newResult;
  }
  return null;
};
export const getProjectService = async (queryString) => {
  const page = queryString.page;

  const { filter, limit, population } = aqp(queryString);
  delete filter.page;
  let offset = (page - 1) * limit; // phân  trang
  let result = await Project.find(filter)
    .skip(offset)
    .limit(limit)
    .populate(population)
    .exec();

  return result;
};
export const UpdateProjectService = async (data) => {
  let result = await Project.updateOne({ _id: data.id }, { ...data });
  return result;
};
export const RemoveProjectService = async (id) => {
  let result = await Project.deleteById(id);
  return result;
};
export const RemoveUserProjectService = async (data)=>{
     if (data.type === "REMOVE-USERS") {
      let myProject = await Project.findById(data.projectId).exec();
      for (let i = 0; i < data.userArr.length; i++) {
       myProject.usersInfor.pull(data.userArr[i])
      }
      let newResult = await myProject.save();
      console.log("««««« myProject »»»»»", myProject);
      return newResult
     } 
     return null;  
}