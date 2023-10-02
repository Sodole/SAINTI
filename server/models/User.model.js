import { DataTypes, Model } from 'sequelize';

export class UserModel extends Model {}

UserModel.init(
  {
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1, 50],
      },
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  },
  { sequelize, tableName: 'users' },
);
