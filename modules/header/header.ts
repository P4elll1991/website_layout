import { JetView } from "webix-jet";

export default function header(
  title: string,
  window: boolean
): webix.ui.layoutConfig {
  return { rows: [headerClass(title, window)] };
}

function headerClass(title: string, window: boolean): any {
  return class extends JetView {
    private view: {
      exit: webix.ui.button;
    };
    public config(): webix.ui.toolbarConfig {
      return {
        view: "toolbar",
        borderless: true,
        elements: [
          {
            view: "label",
            label: title,
          },

          {
            localId: "button-exit",
            view: "button",
            type: "icon",
            icon: "fa fa-window-close",
            inputWidth: 25,
            inputHeight: 22,
            width: 25,
            tooltip: "Выход",
          },
        ],
      };
    }

    public init(): void {
      this.view = {
        exit: this.$$("button-exit") as webix.ui.button,
      };

      this.view.exit.attachEvent("onItemClick", () => {
        if (window) this.show("../");
        else this.app.show("dashboard");
      });
    }
  };
}
