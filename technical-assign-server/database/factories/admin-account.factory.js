const UserAdminModel = require("../models").UserAdmin;
const { hashPassword } = require("../../libs/common");

const factory = {};

factory.createUserAdmin = async () => {
  const password = await hashPassword("admin007");
  const userAdmin = await UserAdminModel.findOne({ username: "admin" });
  if (!userAdmin) {
    const model = new UserAdminModel({
      username: "admin",
      password,
    });
    await model.save();
    console.info("Admin is created");
  }
};

module.exports = factory;
