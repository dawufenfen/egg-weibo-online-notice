const Controller = require("egg").Controller;

class statusController extends Controller {
  async onlineStatus() {
    await this.ctx.render("result/resultShow.tpl", {});
  }
}

module.exports = statusController;
