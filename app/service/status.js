const Service = require("egg").Service;

class StatusService extends Service {
  async getStatus() {
    const res = await this.ctx.curl(
      "https://m.weibo.cn/api/container/getIndex",
      {
        data: {
          containerid: "100808cbec86fbcc1c453633f835c10c9db0ee_-_live",
          luicode: 10000011,
          lfid: 2314751736988591,
          type: "uid",
          value: 1736988591,
        },
        dataType: "json",
      }
    );
    return res;
  }
}

module.exports = StatusService;
