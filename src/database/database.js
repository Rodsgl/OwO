import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("amon", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
