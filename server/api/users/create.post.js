import { UserModel } from '~/server/models/User.model';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  //create user
  const user = await UserModel.create(body);

  return user;
});
