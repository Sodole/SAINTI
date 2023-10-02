export default defineNitroPlugin(async (nitro) => {
  try {
    await sequelize.authenticate().then(() => {
      console.log('연결되었습니다.');
    });
    //db table 변경(force:true 테이블 생성 및 존재하는 경우 삭제, data 삭제됨 주의
    //alter 테이블 현재 상태 확인 및 모델과 일치하도록 변경)
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.log(error);
    console.log('연결할수 없습니다.');
  }
});
