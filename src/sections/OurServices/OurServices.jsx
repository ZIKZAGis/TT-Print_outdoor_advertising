import styles from './OurServices.module.scss'

const Services_Arr = [
    {
        id: '1',
        img: "https://wowbanner.ru/sites/default/files/intpechat1.jpg",
        title: 'Широкоформатная печать',
        price: 'от 400р/м2',
        detailing: [
            'Баннер литой 360dpi - 450р/м2',
            'Баннер литой 720dpi - 500р/м2',
            'Баннер ламинированный 360dpi - 400р/м2',
            'Баннер ламинированный 720dpi - 450р/м2',
            'Сетка 360dpi - 400р/м2',
            'Сетка 720dpi - 450р/м2',
            '*постпечатная обработка просчитывается дополнительно'
        ]
    },
    {
        id: '2',
        img: "https://wowbanner.ru/sites/default/files/holst_nautralnyy.jpg",
        title: 'Интерьерная печать',
        price: 'от 500р/м2',
        detailing: [
            'Баннер литой 1440dpi - 600р/м2',
            'Баннер ламинированный 1440dpi - 550р/м2',
            'Плёнка 1440dpi - 550р/м2',
            'Плёнка блэк бэк 1440pdi - 600р/м2',
            'Бумага 1440dpi - 500р/м2',
            'Перфорированная плёнка 1440dpi - 1000р/м2'
        ]
    },
    {
        id: '3',
        img: "https://adv-f1.ru/wp-content/uploads/2019/01/tabl1.jpg",
        title: 'Таблички',
        price: 'от 3000р/м2',
        detailing: [
            'Пвх 3мм + печать - 3000р/м2',
            'Пвх 5мм + печать - 3500р/м2',
            'Пвх 3мм + плоттерная резка - от 3500р/м2',
            'Пвх 5мм + плоттерная резка - от 4000р/м2',
            'Композит + печать - 5000р/м2',
            'Композит + плоттерная резка - от 6000р/м2',
        ]
    },
    {
        id: '4',
        img: "https://vvd.by/wa-data/public/shop/cats/63.jpg",
        title: 'Вывески',
        price: 'от 6000р/м2',
        detailing: [
            'Световой короб поликарбонатный - 17000р/м2',
            'Световой короб баннерный - 16500р/м2',
            'Композит на раме + печать - 6000р/м2',
            'Композит на раме + световые буквы - индивидальный рассчёт',
            'Композит на раме с прорезкой (световой) - 18000р/м2',
        ]
    },
    {
        id: '5',
        img: "https://www.svetogor.com/images/bukvy3.jpg",
        title: 'Объёмные буквы',
        price: 'от 30р/см',
        detailing: [
            'Буквы из пвх 5мм - 30р/см',
            'Буквы из пвх 8мм - 40р/см',
            'Объёмные не световые буквы от 12см, до 99см - от 90р/см',
            'Объёмные не световые буквы более 100см - 10000р/м2',
            'Объёмные световые буквы от 12см, до 99см - от 130р/см',
            'Объёмные световые буквы более 100см - 16000р/м2',
        ]
    },
    {
        id: '6',
        img: "https://фрезеровка.москва/wp-content/uploads/2019/09/frezerovka-pv%D1%81-768x480.jpg",
        title: 'Фрезеровка',
        price: 'от 45р/мп',
        detailing: [
            'Фрезеровка нашего материала - 45р/мп',
            'Фрезеровка материала заказчика - 100р/мп',
            '*минимальная стоимость фрезеровки - 500р'
        ]
    },
    {
        id: '7',
        img: "https://www.tpml.ru/sites/default/files/styles/845x50/public/product_kartinki/plotter-big.jpg?itok=FSdLztIR",
        title: 'Плоттерная резка',
        price: 'от 900р/м2',
        detailing: [
            'Белая плёнка - 900р/м2',
            'Цветная плёнка - 1500/м2',
            'Транслюцентная плёнка - 2000р/м2',
            'Плоттерная резка по печати - 2000р/м2',
            '*в стоимость включена выборка с закаткой монтажной пленки'
        ]
    },
    {
        id: '8',
        img: "https://mk-monteko.ru/gallery/photos-slides-fullsize/5ac0ff3b5ae37_IMG_2895.JPG",
        title: 'Сварные конструкции',
        price: 'индивидуальный рассчёт',
        detailing: [
            'Рассчитывается в зависимости от сложности и объёмов'
        ]
    },
    {
        id: '9',
        img: "https://optima-fasad.ru/wp-content/uploads/2022/08/%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6-%D0%B2%D1%8B%D0%B2%D0%B5%D1%81%D0%BA%D0%B8-%D1%84%D0%B0%D1%81%D0%B0%D0%B4%D0%B0.jpg",
        title: 'Монтажные работы',
        price: 'индивидуальный рассчёт',
        detailing: [
            'Рассчитывается в зависимости от сложности, высоты и удалённости монтажа'
        ]
    },

]

const OurServices = () => {
    return (
        <div className={`${styles.our_services} App_container`} id='services'>
            <h2 className={styles.headline}>Наши Услуги</h2>
            <ul className={styles.services_list}>
                {Services_Arr.map((item) => {
                    return (
                        <li key={item.id} className={styles.services_item} style={{backgroundImage: `url(${item.img})`}}>
                            <div>
                                <p>{item.title} - <span>{item.price}</span></p>
                                {item.detailing &&
                                    <ul className={styles.detailing_list}>
                                        {item.detailing.map((det) => {
                                            return (
                                                <li>{det}</li>
                                            )
                                        })}
                                    </ul>
                                }
                            </div>
                        </li>
                    )
                })}
            </ul>
            <p className={styles.clarification}>
                *Доставка - рассчитывается в зависимости от удалённости и габаритов заказа, осуществляется "яндекс доставкой". <span>Самовывоз - бесплатно.</span>
                <br/> <span>*Заказы менее 1м2 - просчитываются индивидуально</span>
            </p>
        </div>
    )
}

export default OurServices