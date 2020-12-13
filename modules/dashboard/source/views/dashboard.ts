import { JetView } from "webix-jet";
import DashboardConfig from "./dashboard-config";

export default class DashboardView extends JetView {
  private view: {
    buttons: {
      lets_go: webix.ui.button;
    };
  };

  public init(): void {
    this.view = {
      buttons: {
        lets_go: this.$$("lets_go") as webix.ui.button
      },
    };
    this.attachEvents();
  }

  public attachEvents(): void {
    this.view.buttons.lets_go.attachEvent("onItemClick", (): void => {
      this.app.show(`/layout`);
    });
  }

  public config() {
    return DashboardConfig();
  }

  public destructor(): void {
    super.destructor();
  }
}
