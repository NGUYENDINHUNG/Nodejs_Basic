import Customer from "../models/customer.js";

export const createCustomerService = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      email: customerData.email,
      address: customerData.address,
      phone: customerData.phone,
      description: customerData.description,
      image: customerData.image,
    });
    return result;
  } catch (error) {
    console.log("««««« error »»»»»", error);
    return null;
  }
};

export const createArrayCustomersService = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    return result;
  } catch (error) {
    console.log("««««« error »»»»»", error);
    return null;
  }
};

export const getAllCustomersService = async () => {
  try {
    const filter = {};
    let result = await Customer.find(filter);
    return result;
  } catch (error) {
    console.log("«««««  »»»»»", error);
    return null;
  }
};

export const UpdateCustomersService = async (
  id,
  name,
  email,
  address,
  phone,
  description
) => {
  try {
    let result = await Customer.updateOne(
      { _id: id },
      { name, email, address, phone, description }
    );
    return result;
  } catch (error) {
    console.log("««««« error »»»»»", error);
    return null;
  }
};

export const DeleteCustomersService = async (id) => {
  try {
    let result = await Customer.deleteById(id);
    return result;
  } catch (error) {
    console.log("««««« error »»»»»", error);
    return null;
  }
};
