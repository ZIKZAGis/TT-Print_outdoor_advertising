const services_Arr = [
    {
        id: '1',
        img: "/images/our_services/shirka.webp",
        title: 'Широкоформатная печать',
        price: 'от 350р/м2',
        detailing: [
            'Баннер литой 360dpi - 450р/м2',
            'Баннер литой 720dpi - 550р/м2',
            'Баннер ламинированный 360dpi - 350р/м2',
            'Баннер ламинированный 720dpi - 450р/м2',
            'Сетка 360dpi - 450р/м2',
            'Сетка 720dpi - 550р/м2',
            '*постпечатная обработка просчитывается дополнительно'
        ]
    },
    {
        id: '2',
        img: "/images/our_services/intererka.webp",
        title: 'Интерьерная печать',
        price: 'от 600р/м2',
        detailing: [
            'Баннер литой 1440dpi - 700р/м2',
            'Баннер ламинированный 1440dpi - 600р/м2',
            'Плёнка 1440dpi - 600р/м2',
            'Плёнка блэк бэк 1440pdi - 700р/м2',
            'Бумага пп 1440dpi - 800р/м2',
            'Перфорированная плёнка 1440dpi - 1500р/м2',
            'ламинация - 300р/м2'
        ]
    },
    {
        id: '3',
        img: "/images/our_services/tablichka.webp",
        title: 'Таблички',
        price: 'от 3000р/м2',
        detailing: [
            'Пвх 3мм + печать - 3000р/м2',
            'Пвх 5мм + печать - 3500р/м2',
            'Пвх 3мм + плоттерная резка - от 4000р/м2',
            'Пвх 5мм + плоттерная резка - от 5000р/м2',
            'Композит + печать - 5000р/м2',
            'Композит + плоттерная резка - от 6000р/м2',
        ]
    },
    {
        id: '4',
        img: "/images/our_services/viveska.webp",
        title: 'Вывески',
        price: 'от 6500р/м2',
        detailing: [
            'Световой короб поликарбонатный - 15000р/м2',
            'Световой короб баннерный - 18000р/м2',
            'Композит на раме + печать - 6500р/м2',
            'Композит на раме + световые буквы - расчет индивидуально',
            'Композит на раме с прорезкой (световой) - 25000р/м2',
        ]
    },
    {
        id: '5',
        img: "/images/our_services/bukvi.webp",
        title: 'Объёмные буквы',
        price: 'от 40р/см',
        detailing: [
            'Буквы из пвх 5мм - 40р/см',
            'Буквы из пвх 8мм - 50р/см',
            'Объёмные не световые буквы от 12см, до 99см - от 100р/см',
            'Объёмные не световые буквы более 100см - расчет индивидуально',
            'Объёмные световые буквы от 12см, до 99см - от 130р/см',
            'Объёмные световые буквы более 100см - расчет индивидуально',
        ]
    },
    {
        id: '6',
        img: "/images/our_services/freza.webp",
        title: 'Фрезеровка',
        price: 'от 50р/мп',
        detailing: [
            'Фрезеровка нашего материала (пвх) - 50р/мп',
            'Фрезеровка нашего материала (композит) - 80р/мп',
            'Фрезеровка материала заказчика (пвх)- 60р/мп',
            'Фрезеровка материала заказчика (композит)- 90р/мп',
            '*минимальная стоимость фрезеровки - 1000р',
            '**стоимость фрезеровки указана без учета стоимости материала'
        ]
    },
    {
        id: '7',
        img: "/images/our_services/plotter.webp",
        title: 'Плоттерная резка',
        price: 'от 1200р/м2',
        detailing: [
            'Белая плёнка - 1200р/м2',
            'Цветная плёнка - 1500/м2',
            'Транслюцентная плёнка - 2500р/м2',
            'Плоттерная резка по печати - 2000р/м2',
            '*в стоимость включена выборка с закаткой монтажной пленки'
        ]
    },
    {
        id: '8',
        img: "/images/our_services/rama.webp",
        title: 'Сварные конструкции',
        price: 'индивидуальный просчёт',
        detailing: [
            'Расчитывается в зависимости от сложности и объёмов - от 2000р/м2'
        ]
    },
    {
        id: '9',
        img: "/images/our_services/monaj.webp",
        title: 'Монтажные работы',
        price: 'индивидуальный просчёт',
        detailing: [
            'Расчитывается в зависимости от сложности, высоты и удалённости монтажа'
        ]
    },
    {
        id: '10',
        img: "/images/our_services/avto.webp",
        title: 'Реклама на авто',
        price: 'от 1250р/м2',
        detailing: [
            'Печать на баннере + нашивка на тент - 1250р/м2',
            'Изготовления нового тента - расчет индивидуально'
        ]
    },

]

const images_links = [
    '/images/our_work/photo_1.webp',
    '/images/our_work/photo_2.webp',
    '/images/our_work/photo_3.webp',
    '/images/our_work/photo_4.webp',
    '/images/our_work/photo_5.webp',
    '/images/our_work/photo_6.webp',
    '/images/our_work/photo_7.webp',
    '/images/our_work/photo_8.webp',
    '/images/our_work/photo_9.webp',
    '/images/our_work/photo_10.webp',
    '/images/our_work/photo_11.webp',
    '/images/our_work/photo_12.webp',
    '/images/our_work/photo_13.webp',
    '/images/our_work/photo_14.webp',
    '/images/our_work/photo_15.webp',
    '/images/our_work/photo_16.webp',
    '/images/our_work/photo_17.webp',
    '/images/our_work/photo_18.webp',
    '/images/our_work/photo_19.webp',
    '/images/our_work/photo_20.webp',
    '/images/our_work/photo_21.webp',
    '/images/our_work/photo_22.webp',
    '/images/our_work/photo_23.webp',
    '/images/our_work/photo_24.webp',
    '/images/our_work/photo_25.webp',
    '/images/our_work/photo_26.webp',
    '/images/our_work/photo_27.webp',
    '/images/our_work/photo_28.webp',
    '/images/our_work/photo_29.webp',
    '/images/our_work/photo_30.webp',
    '/images/our_work/photo_31.webp',
    '/images/our_work/photo_32.webp',
    '/images/our_work/photo_33.webp',
    '/images/our_work/photo_34.webp',
    '/images/our_work/photo_35.webp',
    '/images/our_work/photo_36.webp',
    '/images/our_work/photo_37.webp',
    '/images/our_work/photo_38.webp',
]


export {services_Arr, images_links}