var images = [
    { id: 1, src: '//docs.webix.com/samples/26_carousel/imgs/image001.jpg', title: 'Image 1' },
    { id: 2, src: '//docs.webix.com/samples/26_carousel/imgs/image002.jpg', title: 'Image 2' },
    { id: 3, src: '//docs.webix.com/samples/26_carousel/imgs/image003.jpg', title: 'Image 3' },
    { id: 4, src: '//docs.webix.com/samples/26_carousel/imgs/image004.jpg', title: 'Image 4' },
    { id: 5, src: '//docs.webix.com/samples/26_carousel/imgs/image005.jpg', title: 'Image 5' },
    { id: 6, src: '//docs.webix.com/samples/26_carousel/imgs/image006.jpg', title: 'Image 6' },
]

export default function ResultConfig() {
    function img(obj: any) {
        return '<img src="' + obj.src + '" style="width:100%; height:100%;" ondragstart="return false"/>'
    }
    return {
        rows: [
            {
                view: 'toolbar',
                cols: [{ view: 'label', label: 'Результат' }],
            },
            {
                template: '<div>Здесь будет отображаться результат</div>',
            },
            { view: 'resizer' },
            {
                header: 'Проверка адаптивности',
                collapsed: true,
                height: 200,
                body: {
                    view: 'accordion',
                    multi: false,
                    cols: [
                        {
                            header: 'Масштаб',
                            body: {
                                rows: [
                                    {},
                                    {
                                        cols: [
                                            {
                                                view: 'counter',
                                                label: 'Ширина экрана',
                                                labelWidth: 150,
                                                width: 300,
                                                step: 10,
                                                value: 33,
                                                min: 21,
                                                max: 100,
                                            },
                                            {
                                                view: 'slider',
                                                value: '20',
                                                min: 10,
                                                max: 120,
                                                name: 's1',
                                                title: webix.template('#value#'),
                                            },
                                        ],
                                    },
                                    {},
                                ],
                            },
                        },
                        {
                            header: 'Устройства',
                            collapsed: true,
                            body: {
                                rows: [
                                    {
                                        cols: [
                                            {},
                                            {
                                                view: 'combo',
                                                label: 'Выбрать устройство',
                                                labelWidth: 150,
                                                value: 'One',
                                                width: 400,
                                                options: ['One', 'Two', 'Three'],
                                            },
                                            {},
                                        ],
                                    },

                                    {
                                        cols: [
                                            {},
                                            {
                                                view: 'dataview',
                                                yCount: 1,
                                                width: 600,
                                                select: true,
                                                scroll: false,
                                                type: {
                                                    width: 100,
                                                    height: 65,
                                                },
                                                template: img,
                                                data: images,
                                            },
                                            {},
                                        ],
                                    },
                                    {},
                                ],
                            },
                        },
                    ],
                },
            },
        ],
    }
}
