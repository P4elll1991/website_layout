import header from '@modules/header/header'

export default function ResultConfig() {
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
                        { header: 'Масштаб', body: 'Масштаб' },
                        { header: 'Устройства', collapsed: true, body: 'Устройства' },
                    ],
                },
            },
        ],
    }
}
