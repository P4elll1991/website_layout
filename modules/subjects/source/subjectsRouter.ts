import BaseRouter from "@router/baseRouter";
import DashboardView from "./views/subjects";

/**
 * Роутер для модуля документации
 * Возвращает представление, используя соответствие маршрута и названия файла или undefined в случае отсутствия
 * @param url - маршрут
 */

let routerSubjects = new BaseRouter();

routerSubjects.addView("subjects", DashboardView);

export default routerSubjects;
