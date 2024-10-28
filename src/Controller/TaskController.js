import {
  CreateTaskService,
  getTaskService,
  UpdateTaskService,
  RemoveTaskService,
} from "../services/TaskService.js";

const postTaskProject = async (req, res) => {
  let result = await CreateTaskService(req.body);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const getTaskProject = async (req, res) => {
  let result = await getTaskService(req.query);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const putTaskProject = async (req, res) => {
  let result = await UpdateTaskService(req.body);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};
const DeleteTaskProject = async (req, res) => {
  let result = await RemoveTaskService(req.body.id);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

export default {
  postTaskProject,
  getTaskProject,
  putTaskProject,
  DeleteTaskProject,
};
