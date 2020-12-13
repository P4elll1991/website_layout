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
            localId: "lets_go",
            value: `Начать верстку`,
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
