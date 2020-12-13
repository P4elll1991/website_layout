export default function TreeBlocksConfig() {
    return {
        view: 'accordion',
        multi: true,
        rows: [
            {
                body: {
                    rows: [
                        {
                            view: 'treetable',
                            columns: [
                                {
                                    id: 'ID',
                                    editor: 'text',
                                    header: 'ID',
                                    width: 200,
                                    template: '{common.treetable()} #ID#',
                                },
                                {
                                    id: 'type',
                                    editor: 'combo',
                                    header: 'Тип элемента',
                                    width: 100,
                                    options: [
                                        { id: 1, value: '' },
                                        { id: 2, value: 'Accordion' },
                                        { id: 3, value: 'Multiview' },
                                        { id: 4, value: 'Data branch' },
                                        { id: 5, value: 'List' },
                                        { id: 6, value: 'Calendar' },
                                    ],
                                },
                            ],

                            editable: true,
                            autoheight: true,
                            data: [
                                {
                                    type: 1,
                                    ID: 'HTML Blocks',
                                    data: [
                                        {
                                            _id: 3,
                                            type: 2,
                                            ID: 'finalized',
                                        },
                                        {
                                            _id: 4,
                                            type: 3,
                                            ID: 'finalized',
                                        },
                                        {
                                            type: 4,
                                            ID: 'in progress',
                                            data: [
                                                {
                                                    type: 5,
                                                    ID: 'finalized',
                                                },
                                            ],
                                            id: 2,
                                        },
                                        { type: 6, ID: 'planing' },
                                    ],
                                    id: 1,
                                },
                            ],
                        },
                        {
                            view: 'treetable',
                            columns: [
                                {
                                    id: 'name',
                                    editor: 'text',
                                    header: 'Имя класса',
                                    width: 200,
                                    template: '{common.treetable()} #name#',
                                },
                                {
                                    id: 'description',
                                    editor: 'text',
                                    header: 'Описание',
                                    width: 100,
                                },
                            ],

                            editable: true,
                            autoheight: true,
                            data: [
                                {
                                    name: 'CSS Class',
                                    description: '',
                                    data: [
                                        {
                                            _id: 3,
                                            name: 2,
                                            description: 'finalized',
                                        },
                                        {
                                            _id: 4,
                                            name: 3,
                                            description: 'finalized',
                                        },
                                        {
                                            name: 4,
                                            description: 'in progress',
                                            data: [
                                                {
                                                    name: 5,
                                                    description: 'finalized',
                                                },
                                            ],
                                            id: 2,
                                        },
                                        { name: 6, description: 'planing' },
                                    ],
                                    id: 1,
                                },
                            ],
                        },
                        {
                            view: 'treetable',
                            columns: [
                                {
                                    id: 'name',
                                    editor: 'text',
                                    header: 'Имя функции',
                                    width: 200,
                                    template: '{common.treetable()} #name#',
                                },
                                {
                                    id: 'description',
                                    editor: 'text',
                                    header: 'Описание',
                                    width: 150,
                                },

                                {
                                    id: 'params',
                                    editor: 'text',
                                    header: 'Параметры',
                                    width: 100,
                                },
                            ],

                            editable: true,
                            autoheight: true,
                            data: [
                                {
                                    name: 'JS functions',
                                    description: '',
                                    data: [
                                        {
                                            _id: 3,
                                            name: 2,
                                            description: 'finalized',
                                        },
                                        {
                                            _id: 4,
                                            name: 3,
                                            description: 'finalized',
                                        },
                                        {
                                            name: 4,
                                            description: 'in progress',
                                            data: [
                                                {
                                                    name: 5,
                                                    description: 'finalized',
                                                },
                                            ],
                                            id: 2,
                                        },
                                        { name: 6, description: 'planing' },
                                    ],
                                    id: 1,
                                },
                            ],
                        },
                        {},
                    ],
                },
            },
            {
                header: 'Галлерея шаблонов',
                collapsed: true,
                body: {
                    rows: [
                        {
                            view: 'treetable',
                            columns: [
                                {
                                    id: 'ID',
                                    editor: 'text',
                                    header: 'ID',
                                    width: 200,
                                    template: '{common.treetable()} #ID#',
                                },
                                {
                                    id: 'type',
                                    editor: 'combo',
                                    header: 'Тип элемента',
                                    width: 100,
                                    options: [
                                        { id: 1, value: '' },
                                        { id: 2, value: 'Accordion' },
                                        { id: 3, value: 'Multiview' },
                                        { id: 4, value: 'Data branch' },
                                        { id: 5, value: 'List' },
                                        { id: 6, value: 'Calendar' },
                                    ],
                                },
                            ],

                            editable: true,
                            autoheight: true,
                            data: [
                                {
                                    type: 1,
                                    ID: 'HTML Blocks',
                                    data: [
                                        {
                                            _id: 3,
                                            type: 2,
                                            ID: 'finalized',
                                        },
                                        {
                                            _id: 4,
                                            type: 3,
                                            ID: 'finalized',
                                        },
                                        {
                                            type: 4,
                                            ID: 'in progress',
                                            data: [
                                                {
                                                    type: 5,
                                                    ID: 'finalized',
                                                },
                                            ],
                                            id: 2,
                                        },
                                        { type: 6, ID: 'planing' },
                                    ],
                                    id: 1,
                                },
                            ],
                        },
                        {
                            view: 'treetable',
                            columns: [
                                {
                                    id: 'name',
                                    editor: 'text',
                                    header: 'Имя класса',
                                    width: 200,
                                    template: '{common.treetable()} #name#',
                                },
                                {
                                    id: 'description',
                                    editor: 'text',
                                    header: 'Описание',
                                    width: 100,
                                },
                            ],

                            editable: true,
                            autoheight: true,
                            data: [
                                {
                                    name: 'CSS Class',
                                    description: '',
                                    data: [
                                        {
                                            _id: 3,
                                            name: 2,
                                            description: 'finalized',
                                        },
                                        {
                                            _id: 4,
                                            name: 3,
                                            description: 'finalized',
                                        },
                                        {
                                            name: 4,
                                            description: 'in progress',
                                            data: [
                                                {
                                                    name: 5,
                                                    description: 'finalized',
                                                },
                                            ],
                                            id: 2,
                                        },
                                        { name: 6, description: 'planing' },
                                    ],
                                    id: 1,
                                },
                            ],
                        },
                        {
                            view: 'treetable',
                            columns: [
                                {
                                    id: 'name',
                                    editor: 'text',
                                    header: 'Имя функции',
                                    width: 200,
                                    template: '{common.treetable()} #name#',
                                },
                                {
                                    id: 'description',
                                    editor: 'text',
                                    header: 'Описание',
                                    width: 150,
                                },

                                {
                                    id: 'params',
                                    editor: 'text',
                                    header: 'Параметры',
                                    width: 100,
                                },
                            ],

                            editable: true,
                            autoheight: true,
                            data: [
                                {
                                    name: 'JS functions',
                                    description: '',
                                    data: [
                                        {
                                            _id: 3,
                                            name: 2,
                                            description: 'finalized',
                                        },
                                        {
                                            _id: 4,
                                            name: 3,
                                            description: 'finalized',
                                        },
                                        {
                                            name: 4,
                                            description: 'in progress',
                                            data: [
                                                {
                                                    name: 5,
                                                    description: 'finalized',
                                                },
                                            ],
                                            id: 2,
                                        },
                                        { name: 6, description: 'planing' },
                                    ],
                                    id: 1,
                                },
                            ],
                        },
                        {},
                    ],
                },
            },
        ],
    }
}
