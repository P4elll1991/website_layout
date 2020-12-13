import { JetView } from "webix-jet";
import ScripterConfig from "./scripter-config";
import scriptModel from "../end-points/scripts-end-points";
import Script, { reaction } from "../types/scripts";

export default class ScripterdView extends JetView {
  private view: {
    text_answers: webix.ui.textarea;
    reaction_customer_list: webix.ui.list;
  };

  private question_id: string;

  public init(): void {
    this.view = {
      text_answers: this.$$("text_answers") as webix.ui.textarea,
      reaction_customer_list: this.$$(
        "reaction_customer_list"
      ) as webix.ui.list,
    };
    this.question_id = this.getParam("questionId", false);
    console.log(this.question_id);
    this.renderScript(this.question_id);
    this.attachEvents();
  }

  public attachEvents(): void {
    this.view.reaction_customer_list.attachEvent(
      "onAfterSelect",
      (id: string) => {
        let reaction: reaction = this.view.reaction_customer_list.getItem(id);
        this.renderScript(reaction.link);
      }
    );
  }

  public config() {
    return ScripterConfig();
  }

  private renderScript(id: string): void {
    scriptModel.getScript(id).then((script: Script) => {
      this.view.text_answers.setValue(script.text);
      this.view.reaction_customer_list.clearAll();
      script.reaction.forEach((r:reaction, index:number)=>{
        r.rank = String(index+1)
      })
      this.view.reaction_customer_list.parse(script.reaction, "json");
    });
  }

  public destructor(): void {
    super.destructor();
  }
}
