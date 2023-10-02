import { Sequelize } from 'sequelize';
const config = useRuntimeConfig();

export const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    host: '127.0.0.1',
    dialect: 'mysql',

    //query 결과확인(true,false)
    // logging: false,
  },
);
