import { JetView } from "webix-jet";
import DashboardConfig from "./dashboard-config";
import { Clasters } from "@modules/subjects/source/types/clasters";

export default class DashboardView extends JetView {
  private view: {
    buttons: {
      legal_entitys: webix.ui.button;
      individual: webix.ui.button;
    };
  };

  public init(): void {
    this.view = {
      buttons: {
        legal_entitys: this.$$("legal_entitys") as webix.ui.button,
        individual: this.$$("individuals") as webix.ui.button,
      },
    };
    this.attachEvents();
  }

  public attachEvents(): void {
    this.view.buttons.legal_entitys.attachEvent("onItemClick", (): void => {
      this.app.show(`/subjects?claster=${Clasters.LEGAL_ENTITYS}`);
    });
    this.view.buttons.individual.attachEvent("onItemClick", (): void => {
      this.app.show(`/subjects?claster=${Clasters.INDIVIDUALS}`);
    });
  }

  public config() {
    return DashboardConfig();
  }

  public destructor(): void {
    super.destructor();
  }
}
