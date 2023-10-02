import { UserModel } from '~/server/models/User.model';

export default defineEventHandler(async (event) => {
  const users = await UserModel.findAll({
    //조건 설정 가능(where, order)
  });
  return users;
});
