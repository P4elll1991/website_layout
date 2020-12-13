import { JetApp, HashRouter } from "webix-jet";
import routerDashboard from "@modules/dashboard/source/dashboardRouter";
import layoutRouter from "@modules/layout/source/layoutRouter"
const App = new JetApp({
  id: "dashboard",
  start: "/dashboard",
  router: HashRouter,
  views: function (url: string): any {
    return (
      routerDashboard.getView(url) ||
      layoutRouter.getView(url) 
    );
  },
});

webix.ready(() => {
  App.render();
});
