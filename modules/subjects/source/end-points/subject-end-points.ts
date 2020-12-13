import BaseModel from "@modules/base-model/base-model";
import Subject from "../types/subjects";
import { Subjects1, Subjects2 } from "../types/subjects";
import {
  questions1,
  questions2,
  questions3,
  questions4,
  questions5,
} from "../types/questions";
import Question from "../types/questions";

class SubjectsModel extends BaseModel {
  public getSubjects(id: string): Promise<Subject[]> {
    console.log(id);
    switch (id) {
      case "legal_entitys":
        return Promise.resolve(Subjects2);
      case "individuals":
        return Promise.resolve(Subjects1);
      default:
        return Promise.reject();
    }
  }

  public getQuestions(id: string): Promise<Question[]> {
    console.log(id);
    switch (id) {
      case "Halva":
        return Promise.resolve(questions1);
      case "cash":
        return Promise.resolve(questions2);
      case "Repayment":
        return Promise.resolve(questions3);
      case "Open":
        return Promise.resolve(questions4);
      case "Close":
        return Promise.resolve(questions5);
      case "Loans":
        let Loans: Question[] = questions1
          .concat(questions2)
          .concat(questions3);
        return Promise.resolve(Loans);
      case "Contributions":
        let Contributions: Question[] = questions4.concat(questions5);
        return Promise.resolve(Contributions);
      case "individuals":
        let Persons: Question[] = questions1
          .concat(questions2)
          .concat(questions3)
          .concat(questions4)
          .concat(questions5);
        return Promise.resolve(Persons);
      case "legal_entitys":
        let legal_entitys: Question[] = questions1
          .concat(questions2)
          .concat(questions3)
          .concat(questions4)
          .concat(questions5);
        return Promise.resolve(legal_entitys);
      default:
        return Promise.reject();
    }
  }
}

let subjectsModel = new SubjectsModel();

export default subjectsModel;
