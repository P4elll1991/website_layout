package layout_types

import (
	"website_layout/modules/layout/app/types/layout_types/styles"
)

// Событие блока
type EventTag struct {
    Id string
    Type EventTagType // тип события
    Params []interface{} // параметры передаваемые функции
    Function Func // Функция которая выполняется при этом событии
}

type Param struct {
    Id string
    Type ParamType
    Value string
}

type Attr struct {
    Id string
    Name string // имя аттрибута
    Value string // значение
    Is_required bool // обязательный
}

// Описание элемента DOM
type Tag  struct{
    Id string // ай-ди элемента
    Order int64 // Порядок контейнера в родительском контейнере
    Name string // Название
    Type TagType // Название элемента
    Description string // Описание элемента (данного)
    Description_type string // Описание типа элемента
    Attr []Attr //  аттрибуты
    Styles []styles.IStyle // Стили элемента
    Classes []Selector // Классы елемента
    Events []EventTag // События элемента
    Data []Tag // подэлементы
}



// Тип элемента DOM
type TagType string
const (
    CONTENT TagType = "content" // не контейнер - только для текстового содержания
    DIV TagType = "div" // Тег-контейнер для разделов HTML-документа. Используется для группировки блочных элементов с целью форматирования стилями.
    SPAN TagType = "span" // Контейнер для строчных элементов. Можно использовать для форматирования отрывков текста например выделения цветом отдельных слов.
    INPUT TagType = "input" // Создает многофункциональные поля формы в которые пользователь может вводить данные.
    CANVAS TagType = "canvas" // Холст-контейнер для динамического отображения изображений таких как простые изображения диаграммы графики и т.п. Для рисования используется скриптовый язык JavaScript.
    FOOTER TagType = "footer" // Определяет завершающую область (нижний колонтитул) документа или раздела
    FORM TagType = "form" // Форма для сбора и отправки на сервер информации от пользователей
    BODY TagType = "body" // Тело документа
    H1 TagType = "h1" // заголовки
    H2 TagType = "h2" //
    H3 TagType = "h3" //
    H4 TagType = "h4" //
    H5 TagType = "h5" //
    H6 TagType = "h6" //
    EMBED TagType = "embed" // Тег-контейнер для встраивания внешнего интерактивного контента или плагина.
    HEAD TagType = "head" // Элемент-контейнер для метаданных HTML-документа таких как
    A TagType = "a" // Создаёт гипертекстовые ссылки.
    IFRAME TagType = "iframe" // Создает встроенный фрейм загружая в текущий HTML-документ другой документ.
    IMG TagType = "img" // Встраивает изображения в HTML-документ с помощью атрибута src значением которого является адрес встраиваемого изображения.
    LABEL TagType = "label" // Добавляет текстовую метку для элемента <input>
    LI TagType = "li" // Элемент маркированного или нумерованного списка.
    LINK TagType = "link" // Определяет отношения между документом и внешним ресурсом. Также используется для подключения внешних таблиц стилей.
    OL TagType = "ol" // Упорядоченный нумерованный список. Нумерация может быть числовая или алфавитная.
    OPTGROUP TagType = "optgroup" // Контейнер с заголовком для группы элементов <option>
    OPTION TagType = "option" // Определяет вариант/опцию для выбора в раскрывающемся списке <select> <optgroup> или <datalist>
    OUTPUT TagType = "output" // Поле для вывода результата вычисления рассчитанного с помощью скрипта.
    P TagType = "p" // Параграфы в тексте.
    SCRIPT TagType = "script" // Используется для определения сценария на стороне клиента (обычно JavaScript). Содержит либо текст скрипта либо указывает на внешний файл сценария с помощью атрибута src.
    SELECT TagType = "select" // Элемент управления позволяющий выбирать значения из предложенного множества. Варианты значений помещаются в <option>.
    STYLE TagType = "style" // Подключает встраиваемые таблицы стилей
    TABLE TagType = "table" // Тег для создания таблицы.
    TBODY TagType = "tbody" // Определяет тело таблицы.
    TD TagType = "td" // Создает ячейку таблицы.
    TH TagType = "th" // Создает заголовок ячейки таблицы.
    THEAD TagType = "thead" // Определяет заголовок таблицы.
    TR TagType = "tr" // Создает строку таблицы.
    TITLE TagType = "title" // Заголовок HTML-документа отображаемый в верхней части строки заголовка браузера. Также может отображаться в результатах поиска поэтому это следует принимать во внимание предоставление названия.
    UL TagType = "ul" // Создает маркированный список.
)
    

// Тип события элемента DOM
type EventTagType string
const (
    ON_BLUR EventTagType = "onblur" //Потеря фокуса
    ON_CHANGE EventTagType = "onchange" //Изменение значения элемента формы.
    ON_CLICK EventTagType = "onclick" //Щелчок левой кнопкой мыши на элементе.
    ON_DBL_CLICK EventTagType = "ondblclick" //Двойной щелчок левой кнопкой мыши на элементе.
    ON_FOCUS EventTagType = "onfocus" //Получение фокуса
    ON_KEY_DOWN EventTagType = "onkeydown" //Клавиша нажата но не отпущена.
    ON_KEY_PRESS EventTagType = "onkeypress" //Клавиша нажата и отпущена.
    ON_KEY_UP EventTagType = "onkeyup" //Клавиша отпущена.
    ON_LOAD EventTagType = "onload" // Документ загружен.
    ON_MOUSE_DOWN EventTagType = "onmousedown" // Нажата левая кнопка мыши.
    ON_MOUSE_MOVE EventTagType = "onmousemove" // Перемещение курсора мыши.
    ON_MOUSE_OUT EventTagType = "onmouseout" // Курсор покидает элемент.
    ON_MOUSE_OVER EventTagType = "onmouseover" // Курсор наводится на элемент.
    ON_MOUSE_UP EventTagType = "onmouseup" // Левая кнопка мыши отпущена.
    ON_RESET EventTagType = "onreset" // Форма очищена.
    ON_SELECT EventTagType = "onselect" // Выделен текст в поле формы.
    ON_SUBMIT EventTagType = "onsubmit" // Форма отправлена.
    ON_UNLOAD EventTagType = "onunload" // Закрытие окна.
)
