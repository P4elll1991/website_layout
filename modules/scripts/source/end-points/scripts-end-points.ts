import BaseModel from "@modules/base-model/base-model";
import Script from "../types/scripts";
import { Script1, Script2, Script3, Script4, Script5 } from "../types/scripts";

class ScriptModel extends BaseModel {
  public getScript(id: string): Promise<Script> {
    console.log(id);
    switch (id) {
      case "1":
        return Promise.resolve(Script1);
      case "2":
        return Promise.resolve(Script2);
      case "3":
        return Promise.resolve(Script3);
      case "4":
        return Promise.resolve(Script4);
      case "5":
        return Promise.resolve(Script5);
      case "6":
        return Promise.resolve(Script1);
      case "7":
        return Promise.resolve(Script2);
      case "8":
        return Promise.resolve(Script3);
      case "9":
        return Promise.resolve(Script4);
      case "10":
        return Promise.resolve(Script5);
      case "11":
        return Promise.resolve(Script1);
      case "12":
        return Promise.resolve(Script2);
      case "13":
        return Promise.resolve(Script3);
      case "14":
        return Promise.resolve(Script4);
      case "15":
        return Promise.resolve(Script5);
      case "16":
        return Promise.resolve(Script1);
      case "17":
        return Promise.resolve(Script2);
      case "18":
        return Promise.resolve(Script3);
      case "19":
        return Promise.resolve(Script4);
      case "20":
        return Promise.resolve(Script5);
      case "21":
        return Promise.resolve(Script1);
      case "22":
        return Promise.resolve(Script2);
      case "23":
        return Promise.resolve(Script3);
      case "24":
        return Promise.resolve(Script4);
      case "25":
        return Promise.resolve(Script5);
      default:
        return Promise.reject();
    }
  }
}

let scriptModel = new ScriptModel();

export default scriptModel;
