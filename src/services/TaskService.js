import Task from "../models/task.js";
import aqp from "api-query-params";

export const CreateTaskService = async (data) => {
  if (data.type === "EMPTY-TASK") {
    let result = await Task.create(data);
    return result;
  }
  return null;
};

export const getTaskService = async (queryString) => {
  const page = queryString.page;
  const { filter, limit } = aqp(queryString);
  let offset = (page - 1) * limit; // phân  trang

  let result = await Task.find(filter).skip(offset).limit(limit).exec();
  return result;
};

export const UpdateTaskService = async (data) => {
  let result = await Task.updateOne({ _id: data.id }, { ...data });
  return result;
};
export const RemoveTaskService = async (id) => {
  let result = await Task.deleteById(id);
  return result;
};
