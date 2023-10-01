const Sequelize = sequelize;

export default defineNitroPlugin(async (nitro) => {
  try {
    await Sequelize.authenticate().then(() => {
      console.log('연결되었습니다.');
    });
  } catch (error) {
    console.log(error);
    console.log('연결할수 없습니다.');
  }
});
