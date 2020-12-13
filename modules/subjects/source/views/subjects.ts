import { JetView } from "webix-jet";
import SubjectsConfig from "./subjects-config";
import { Clasters } from "../types/clasters";
import subjectsModel from "../end-points/subject-end-points";
import Subject from "../types/subjects";
import Question from "../types/questions";

export default class DashboardView extends JetView {
  private view: {
    subjects_tree: webix.ui.tree;
    questions_list: webix.ui.list;
  };
  private claster: Clasters;

  public init(): void {
    this.view = {
      subjects_tree: this.$$("subjects_tree") as webix.ui.tree,
      questions_list: this.$$("questions_list") as webix.ui.list,
    };
    this.attachEvents();
    this.claster = this.getParam("claster", false);
    console.log(this.claster);
    this.renderTree(this.claster);
  }

  public attachEvents(): void {
    this.view.questions_list.attachEvent("onItemDblClick", (id: any): void => {
      let item: any = this.view.questions_list.getSelectedItem(true)[0];
      console.log(item);
      this.show(`./scripter?questionId=${id}`);
    });

    this.view.subjects_tree.attachEvent("onAfterSelect", (id: any) => {
      console.log(id);
      subjectsModel.getQuestions(id).then((Questions: Question[]) => {
        this.view.questions_list.clearAll();
        Questions.forEach((question: Question, index: number) => {
          question.rank = String(index + 1);
        });
        this.view.questions_list.parse(Questions, "json");
      });
    });
  }

  private renderTree(id: string): void {
    subjectsModel.getSubjects(id).then((subjects: Subject[]) => {
      this.view.subjects_tree.clearAll();
      let subjectsJSON = JSON.stringify(subjects);
      this.view.subjects_tree.parse(subjectsJSON, "json");
      this.view.subjects_tree.select(subjects[0].id, true);
    });
  }

  public config() {
    return SubjectsConfig();
  }

  public destructor(): void {
    super.destructor();
  }
}
