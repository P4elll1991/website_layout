import header from "@modules/header/header";

export default function ScripterConfig() {
  return {
    view: "window",
    position: "center",
    width: 600,
    height: 600,
    modal: true,
    move: true,
    head: header("СКРИПТ", true),

    body: {
      rows: [
        {
          localId: "text_answers",
          view: "textarea",
          label: "Текст скрипта",
          labelAlign: "center",
          labelPosition: "top",
          value: "Какой то скрипт",
        },
        {
          header: "Реакция собеседника",
          body: {
            localId: "reaction_customer_list",
            view: "list",
            template: "#rank#. #title#",
            select: "multiselect",
            data: [
              {
                id: 1,
                title: "The Shawshank Redemption",
                year: "1994",
                votes: "678,79",
                rating: "9,2",
                rank: "1",
              },
              {
                id: 2,
                title: "The Godfather",
                year: "1972",
                votes: "511,495",
                rating: "9,2",
                rank: "2",
              },
              {
                id: 3,
                title: "The Godfather: Part II",
                year: "1974",
                votes: "319,352",
                rating: "9",
                rank: "3",
              },
              {
                id: 4,
                title: "The Good, the Bad and the Ugly",
                year: "1966",
                votes: "213,03",
                rating: "8,9",
                rank: "4",
              },
            ],
          },
        },
      ],
    },
  };
}
