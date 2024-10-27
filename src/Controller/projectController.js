import { createProjectSevices , getProjectService } from "../services/createProject.js";

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
    EC:0,
    data:result
  })
};
export default { postCreateProject, getProject };
