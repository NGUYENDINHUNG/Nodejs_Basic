import aqp from "api-query-params";
import { uploadSingleFile } from "../services/fileServices.js";
import {
  createCustomerService,
  createArrayCustomersService,
  getAllCustomersService,
  UpdateCustomersService,
  DeleteCustomersService,
  DeleteArrayCustomerService,
} from "../services/customerSevice.js";

const postCreateCustomer = async (req, res) => {
  let { name, email, address, phone, description } = req.body;
  let imageUrl = " ";
  //image: String
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  } else {
    let results = await uploadSingleFile(req.files.image);
    imageUrl = results.path;
    console.log("««««« results »»»»»", results.path);
  }

  let customerData = {
    name,
    email,
    address,
    phone,
    description,
    image: imageUrl,
  };
  let customers = await createCustomerService(customerData);
  return res.status(200).json({
    EC: 0,
    data: customers,
  });
};

const postCreateArrayCustomer = async (req, res) => {
  let customers = await createArrayCustomersService(req.body.customers);
  if (customers) {
    return res.status(200).json({
      EC: 0,
      data: customers,
    });
  } else {
    return res.status(500).json({
      EC: -1,
      data: null,
    });
  }
};

const getAllCustomers = async (req, res) => {

  let limit = req.query.limit;
  let page = req.query.page;
  let name = req.query.name;
  let result = null;
  if (limit && page) {
    result = await getAllCustomersService(limit, page, name ,req.query);
  } else result = await getAllCustomersService();

  if (result) {
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  } else {
    return res.status(500).json({
      EC: -1,
      data: null,
    });
  }
};

const UpdateCustomers = async (req, res) => {
  let { id, name, email, address, phone, description } = req.body;
  let result = await UpdateCustomersService(
    id,
    name,
    email,
    address,
    phone,
    description
  );
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};
const DeleteCustomers = async (req, res) => {
  let id = req.body.id1;
  let result = await DeleteCustomersService(id);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};
const DeleteArrayCustomers = async (req, res) => {
  let ids = req.body.customerId;
  let result = await DeleteArrayCustomerService(ids);

  return res.status(200).json({
    EC: 0,
    data: result,
  });
};
export default {
  postCreateCustomer,
  postCreateArrayCustomer,
  getAllCustomers,
  UpdateCustomers,
  DeleteCustomers,
  DeleteArrayCustomers,
};
