const Subscription = require("egg").Subscription;
const cmd = require("node-cmd");
var flag = false;
var workerProcess;

//打开浏览器提示。分为信息页面和音乐页面。（因为浏览器禁止自动播放音频。。o(╥﹏╥)o。。所以拆分为两个页面，保证有声音提示和界面提示）
const render = () => {
  const child_process = require("child_process");
  child_process.exec("start http://localhost:7001/public/result/good_luck.mp3");
  //错开执行，保证先后
  setTimeout(() => {
    child_process.exec("start http://localhost:7001/status");
  }, 500);
};
class SecondAPI extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: "3s", // 3 秒间隔
      type: "worker", // 指定所有的 worker 都需要执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    if (this.app.info_desc && this.app.info_desc.indexOf("微博在线了") === -1) {
      // 说明用户在线，提醒。（避免重复触发）
      console.log("==========上线了==========");
      if (!flag && !workerProcess) {
        render();
      }
      flag = true;
    }
  }
}

module.exports = SecondAPI;
