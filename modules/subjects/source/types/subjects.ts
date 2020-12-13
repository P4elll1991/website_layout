export default interface Subject {
  id: string;
  value: string;
  open?: boolean;
  data?: Subject[];
}

export let Subjects1: Subject[] = [
  {
    id: "individuals",
    value: "Физические лица",
    open: true,
    data: [
      {
        id: "Loans",
        value: "Кредиты",
        data: [
          { id: "Halva", value: "Халва" },
          { id: "cash", value: "Наличными" },
          { id: "Repayment", value: "Погошение кредитов" },
        ],
      },
      {
        id: "Contributions",
        value: "Вклады",
        data: [
          { id: "Open", value: "Открытие вкалда" },
          { id: "Close", value: "Закрытие вклада" },
        ],
      },
    ],
  },
];

export let Subjects2: Subject[] = [
  {
    id: "legal_entitys",
    value: "Юридические лица",
    open: true,
    data: [
      {
        id: "Loans",
        value: "Кредиты",
        data: [
          { id: "Halva", value: "Халва" },
          { id: "cash", value: "Наличными" },
          { id: "Repayment", value: "Погошение кредитов" },
        ],
      },
      {
        id: "Contributions",
        value: "Вклады",
        data: [
          { id: "Open", value: "Открытие вкалда" },
          { id: "Close", value: "Закрытие вклада" },
        ],
      },
    ],
  },
];
