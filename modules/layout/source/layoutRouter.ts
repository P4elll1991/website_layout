import BaseRouter from "@router/baseRouter";
import LayoutView from "./views/layout";

/**
 * Роутер для модуля документации
 * Возвращает представление, используя соответствие маршрута и названия файла или undefined в случае отсутствия
 * @param url - маршрут
 */

let layoutRouter = new BaseRouter();

layoutRouter.addView("layout", LayoutView);

export default layoutRouter;
