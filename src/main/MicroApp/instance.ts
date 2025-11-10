import MicroBase from "web-bridge-base/microApp";
import { EAction } from "../../constants/const";

/**
 * 子应用使用
 */
class Micro extends MicroBase {
  constructor() {
    super();
  }

  // -- 修改或续写业务方法 --

  // 即时获取数据
  public async getContainerInfo(namespace?: string) {
    this.logger.log("「动作」获取容器信息");
    const res = await this.get<any>({ action: EAction.containerInfo }, namespace);
    return res.payload;
  }

  // 监听容器角色改变
  public onRoleChange(callback: (data: any) => void) {
    this.logger.log("「监听」角色改变");
    return this.on(EAction.role, callback);
  }

  // 通知容器打开新页面
  public open(params: any, namespace?: string) {
    this.logger.log("「动作」打开新页面");
    this.emit({ action: EAction.open, payload: params }, namespace);
  }
}

export default new Micro();
