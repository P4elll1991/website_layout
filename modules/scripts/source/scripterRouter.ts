import BaseRouter from "@router/baseRouter";
import ScripterdView from "./views/scripter";

/**
 * Роутер для модуля документации
 * Возвращает представление, используя соответствие маршрута и названия файла или undefined в случае отсутствия
 * @param url - маршрут
 */

let routerScripter = new BaseRouter();

routerScripter.addView("scripter", ScripterdView);

export default routerScripter;
