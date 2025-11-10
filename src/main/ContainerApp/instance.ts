import ContainerBase, { IPostMessageContent, PostMessageData } from "web-bridge-base/containerApp";
import { EAction } from "../../constants/const";

/**
 * 容器使用
 */
class Container extends ContainerBase {
  constructor() {
    super();
  }

  // -- 修改或续写业务方法 --

  // 监听并即时给子应用返回数据
  public onContainerInfo(
    callback: (
      data: { action: EAction.containerInfo },
      event: MessageEvent<PostMessageData<IPostMessageContent<{ action: EAction.containerInfo }>>>
    ) => any,
    namespace?: string
  ) {
    this.logger.log("「监听」获取容器信息");
    return this.on(EAction.containerInfo, callback, namespace);
  }

  // 监听子应用触发登陆
  public onLogin(callback: () => void, namespace?: string) {
    this.logger.log("「监听」登录动作");
    return this.on(EAction.login, callback, namespace);
  }

  // 通知子应用改变业务角色
  public changeRole(params: any) {
    this.logger.log("「动作」改变角色");

    const { role, doctorMode } = params;

    this.emit({ action: EAction.role, payload: { role, doctorMode } });
  }
}

export default new Container();
