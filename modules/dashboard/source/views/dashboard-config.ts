export default function DashboardConfig() {
  return {
    rows: [
      {},
      {
        height: 300,
        cols: [
          {},
          {
            view: "button",
            localId: "legal_entitys",
            value: `Юридические лица`,
            css: "webix_primary",
            inputWidth: 300,
            inputHeight: 300,
            width: 300,
          },
          {},
          {
            view: "button",
            localId: "individuals",
            value: "Физические лица",
            css: "webix_primary",
            inputWidth: 300,
            inputHeight: 300,
            width: 300,
          },
          {},
        ],
      },
      { gravity: 1 },
    ],
  };
}
