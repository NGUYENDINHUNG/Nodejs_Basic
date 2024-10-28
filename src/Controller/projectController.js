import {
  createProjectSevices,
  getProjectService,
  UpdateProjectService,
  RemoveProjectService,
  RemoveUserProjectService,
} from "../services/ProjectService.js";

const postCreateProject = async (req, res) => {
  try {
    let result = await createProjectSevices(req.body); // Đã có await
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  } catch (error) {
    console.log("««««« errror »»»»»", error);
    return res.status(500).json({
      EC: 1,
      message: "Error creating project",
      error,
    });
  }
};
const getProject = async (req, res) => {
  let result = await getProjectService(req.query);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const UpdateProject = async (req, res) => {
  let result = await UpdateProjectService(req.body);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};
const DeleteProject = async (req, res) => {
  let result = await RemoveProjectService(req.body.id);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};
const DeleteUser = async (req, res) => {
  try {
    let result = await RemoveUserProjectService(req.body); // Đã có await
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  } catch (error) {
    console.log("««««« errror »»»»»", error);
    return res.status(500).json({
      EC: 1,
      message: "Error remove users project",
      error,
    });
  }
};
export default {
  postCreateProject,
  getProject,
  UpdateProject,
  DeleteProject,
  DeleteUser,
};
