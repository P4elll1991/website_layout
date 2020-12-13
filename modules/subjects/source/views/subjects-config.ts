import header from "@modules/header/header";

export default function SubjectsConfig() {
  return {
    rows: [
      header("Выбор вопросов", false),
      {
        cols: [
          {},
          {
            rows: [
              { view: "label", label: "Тематика вопросов", align: "center" },
              {
                localId: "subjects_tree",
                view: "tree",
                width: 320,
                select: true,
                data: [],
              },
            ],
          },

          {
            rows: [
              { view: "label", label: "Список вопросов", align: "center" },
              {
                localId: "questions_list",
                view: "list",
                dynamic: true,
                width: 320,
                height: 600,
                template: "#rank#. #title#",
                select: "multiselect",
                data: [],
              },
            ],
          },
          {},
        ],
      },
      {},
      { $subview: true, popup: true },
    ],
  };
}
