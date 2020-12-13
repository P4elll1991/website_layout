export default function EditorConfig() {
    return {
        view: 'accordion',
        multi: 'mixed',
        rows: [
            {
                header: 'Стили',
                body: {
                    rows: [
                        {
                            view: 'datatable',
                            editable: true,
                            select: true,
                            autoheight: true,
                            scrollX: true,
                            scrollY: true,
                            columns: [
                                {
                                    id: 'trash',
                                    header: '',
                                    width: 30,
                                    template: function(obj: any, common: any) {
                                        return common.trashIcon(obj, common)
                                    },
                                },
                                {
                                    id: 'title',
                                    header: 'Свойство',
                                    editor: 'combo',
                                    options: [{ id: 1, value: 'margin' }, { id: 2, value: 'padding' }],
                                },
                                { id: 'value', header: 'Значение', editor: 'text' },
                            ],
                            data: [{ id: 1, title: 1, value: 1994 }, { id: 2, title: 2, value: 1972 }],
                        },
                        {
                            margin: 5,
                            cols: [{}, { view: 'icon', icon: 'fas fa-plus' }, {}],
                        },
                        {
                            view: 'form',
                            id: 'log_form',
                            elements: [
                                {
                                    cols: [
                                        { view: 'checkbox', value: 1, width: 30 },
                                        {
                                            view: 'slider',
                                            label: 'Level',
                                            value: '20',
                                            min: 10,
                                            max: 120,
                                            name: 's1',
                                            title: webix.template('#value#'),
                                        },
                                    ],
                                },
                                {
                                    cols: [
                                        { view: 'checkbox', value: 1, width: 30 },
                                        { view: 'counter', label: 'Age', step: 10, value: 33, min: 21, max: 100 },
                                    ],
                                },

                                {
                                    view: 'colorpicker',
                                    label: 'Front color',
                                    name: 'color',
                                    value: '#ffaadd',
                                },
                                {
                                    view: 'combo',
                                    label: 'Combo',
                                    value: 'One',
                                    options: ['One', 'Two', 'Three'],
                                },
                                {
                                    rows: [
                                        {
                                            view: 'list',
                                            id: 'mylist',
                                            type: 'uploader',
                                            autoheight: true,
                                            borderless: true,
                                        },
                                        {
                                            view: 'uploader',
                                            value: 'Загрузить картинку',
                                            name: 'files',
                                            link: 'mylist',
                                        },
                                    ],
                                },
                            ],
                        },
                        {},
                    ],
                },
            },
            {
                header: 'Классы',
                collapsed: true,
                body: {
                    rows: [
                        {
                            view: 'datatable',
                            editable: true,
                            select: true,
                            autoheight: true,
                            scrollX: true,
                            scrollY: true,
                            columns: [
                                {
                                    id: 'trash',
                                    header: '',
                                    width: 30,
                                    template: function(obj: any, common: any) {
                                        return common.trashIcon(obj, common)
                                    },
                                },
                                {
                                    id: 'title',
                                    header: 'Название класса',
                                    editor: 'combo',
                                    options: [{ id: 1, value: 'item1' }, { id: 2, value: 'item2' }],
                                },
                            ],
                            data: [{ id: 1, title: 1 }, { id: 2, title: 2 }],
                        },
                        {
                            margin: 5,
                            cols: [{}, { view: 'icon', icon: 'fas fa-plus' }, {}],
                        },
                        {},
                    ],
                },
            },
            {
                header: 'Функции',
                collapsed: true,
                body: {
                    rows: [
                        {
                            view: 'datatable',
                            editable: true,
                            select: true,
                            autoheight: true,
                            scrollX: true,
                            scrollY: true,
                            columns: [
                                {
                                    id: 'trash',
                                    header: '',
                                    width: 30,
                                    template: function(obj: any, common: any) {
                                        return common.trashIcon(obj, common)
                                    },
                                },
                                {
                                    id: 'event',
                                    header: 'Событие',
                                    editor: 'combo',
                                    options: [{ id: 1, value: 'onClick' }, { id: 2, value: 'onDbClick' }],
                                },
                                {
                                    id: 'function',
                                    header: 'Функция',
                                    editor: 'combo',
                                    options: [{ id: 1, value: 'func1' }, { id: 2, value: 'func2' }],
                                },
                                {
                                    id: 'input',
                                    header: 'Вход',
                                    editor: 'text',
                                },
                            ],
                            data: [
                                { id: 1, event: 1, function: 1, input: '1,2,3' },
                                { id: 2, event: 2, function: 2, input: '1,2,3' },
                            ],
                        },
                        {
                            margin: 5,
                            cols: [{}, { view: 'icon', icon: 'fas fa-plus' }, {}],
                        },
                        {},
                    ],
                },
            },
            {
                header: 'Редактор функции',
                collapsed: true,
                body: {
                    rows: [
                        {
                            view: 'text',
                            value: 'function1',
                            label: '&nbsp;&nbsp;&nbsp;Название функции',
                            labelPosition: 'top',
                            width: 200,
                        },
                        {
                            view: 'text',
                            value: 'x,y,z',
                            label: '&nbsp;&nbsp;&nbsp;Входные значения функции',
                            labelPosition: 'top',
                            width: 200,
                        },
                        {
                            view: 'textarea',
                            label: '&nbsp;&nbsp;&nbsp;Тело функции',
                            labelPosition: 'top',
                            minHeight: 200,
                            value: 'type here',
                        },
                        {
                            view: 'button',
                            value: 'Сохранить',
                            align: 'center',
                        },
                    ],
                },
            },
        ],
    }
}
