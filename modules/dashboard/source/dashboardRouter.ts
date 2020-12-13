import BaseRouter from "@router/baseRouter";
import DashboardView from "./views/dashboard";

/**
 * Роутер для модуля документации
 * Возвращает представление, используя соответствие маршрута и названия файла или undefined в случае отсутствия
 * @param url - маршрут
 */

let routerDashboard = new BaseRouter();

routerDashboard.addView("dashboard", DashboardView);

export default routerDashboard;
