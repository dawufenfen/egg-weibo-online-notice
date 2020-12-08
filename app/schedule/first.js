const Subscription = require("egg").Subscription;

class FirstAPI extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: "3s", // 3 秒间隔
      type: "worker", // 指定所有的 worker 都需要执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    const res = await this.ctx.service.status.getStatus();
    //提取状态，记录时间
    const desc = res.data.data.cards[0].card_group[1].desc1;
    const currentDate = new Date();
    const timeString =
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();
    this.ctx.app.info_desc = `${desc}  发现时间：${timeString}`;
  }
}

module.exports = FirstAPI;
