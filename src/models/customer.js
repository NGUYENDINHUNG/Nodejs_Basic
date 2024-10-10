import mongoose from "mongoose";
import mongoose_delete from "mongoose-delete";
const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  { timestamps: true }
);
CustomerSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Customer = mongoose.model("Customer", CustomerSchema);

export default Customer;
