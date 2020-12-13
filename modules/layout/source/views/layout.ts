import { JetView } from "webix-jet";
import LayoutConfig from "./layout-config";

export default class LayoutView extends JetView {
  private view: {
    
  };

  public init(): void {
    this.view = {
      
    };
    this.attachEvents();
  }

  public attachEvents(): void {
  
  }

  public config() {
    return LayoutConfig();
  }

  public destructor(): void {
    super.destructor();
  }
}
