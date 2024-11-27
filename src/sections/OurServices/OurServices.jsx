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
            'Сетка 720dpi - 450р/м2'
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
            'пвх 3мм + печать - 3000р/м2',
            'пвх 5мм + печать - 3500р/м2',
            'пвх 3мм + плоттерная резка - от 3500р/м2',
            'пвх 5мм + плоттерная резка - от 4000р/м2',
            'композит + печать - 5000р/м2',
            'композит + плоттерная резка - от 6000р/м2',
        ]
    },
    {
        id: '4',
        img: "https://vvd.by/wa-data/public/shop/cats/63.jpg",
        title: 'Вывески',
        price: 'от 6000р/м2',
        detailing: [
            'световой короб поликарбонатный - 17000р/м2',
            'световой короб баннерный - 16500р/м2',
            'композит на раме + печать - 6000р/м2',
            'композит на раме + световые буквы - индивидальный рассчёт',
            'композит на раме с прорезкой (световой) - 18000р/м2',
        ]
    },
    {
        id: '5',
        img: "https://www.svetogor.com/images/bukvy3.jpg",
        title: 'Объёмные буквы',
        price: 'от 30р/см',
        detailing: [
            'буквы из пвх 5мм - 30р/см',
            'буквы из пвх 8мм - 40р/см',
            'объёмные не световые буквы от 12см, до 99см - от 90р/см',
            'объёмные не световые буквы более 100см - 10000р/м2',
            'объёмные световые буквы от 12см, до 99см - от 130р/см',
            'объёмные световые буквы более 100см - 16000р/м2',
        ]
    },
    {
        id: '6',
        img: "https://фрезеровка.москва/wp-content/uploads/2019/09/frezerovka-pv%D1%81-768x480.jpg",
        title: 'Фрезеровка',
        price: 'от 1000р/мп'
    },
    {
        id: '7',
        img: "https://printsburg.ru/upload/iblock/01b/33siqqboi1luekyl9qcjm1u9ahzbzuos.jpg",
        title: 'Плоттерная резка',
        price: 'от 10000р/м2'
    },
    {
        id: '8',
        img: "https://mk-monteko.ru/gallery/photos-slides-fullsize/5ac0ff3b5ae37_IMG_2895.JPG",
        title: 'Сварные конструкции',
        price: 'индивидуальный рассчёт'
    },
    {
        id: '9',
        img: "https://optima-fasad.ru/wp-content/uploads/2022/08/%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6-%D0%B2%D1%8B%D0%B2%D0%B5%D1%81%D0%BA%D0%B8-%D1%84%D0%B0%D1%81%D0%B0%D0%B4%D0%B0.jpg",
        title: 'Монтажные работы',
        price: 'индивидуальный рассчёт'
    },

]

const OurServices = () => {
    return (
        <div className={`${styles.our_services} App_container`} id='services'>
            <h2 className={styles.headline}>Наши Услуги</h2>
            <ul className={styles.services_list}>
                {Services_Arr.map((item) => {
                    return (
                        <li key={item.id} className={styles.services_item}>
                            <img src={item.img} alt={item.title} />
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
            </p>
        </div>
    )
}

export default OurServices