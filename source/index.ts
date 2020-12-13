import { JetApp, HashRouter } from "webix-jet";
import routerDashboard from "@modules/dashboard/source/dashboardRouter";
import routerSubjects from "@modules/subjects/source/subjectsRouter";
import routerScripter from "@modules/scripts/source/scripterRouter";
const App = new JetApp({
  id: "dashboard",
  start: "/dashboard",
  router: HashRouter,
  views: function (url: string): any {
    return (
      routerDashboard.getView(url) ||
      routerSubjects.getView(url) ||
      routerScripter.getView(url)
    );
  },
});

webix.ready(() => {
  App.render();
});
