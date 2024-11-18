import styles from './OurServices.module.scss'

const Services_Arr = [
    {
        id: '1',
        img: "https://vvd.by/wa-data/public/shop/cats/63.jpg",
        title: 'Вывески',
        price: 'от 10000р/м2'
    },
    {
        id: '2',
        img: "https://www.svetogor.com/images/bukvy3.jpg",
        title: 'Объёмные буквы',
        price: 'от 1000р/см'
    },
    {
        id: '3',
        img: "https://wowbanner.ru/sites/default/files/intpechat1.jpg",
        title: 'Широкоформатная печать',
        price: 'от 10000р/м2'
    },
    {
        id: '4',
        img: "https://wowbanner.ru/sites/default/files/holst_nautralnyy.jpg",
        title: 'Интерьерная печать',
        price: 'от 10000р/м2'
    },
    {
        id: '5',
        img: "https://фрезеровка.москва/wp-content/uploads/2019/09/frezerovka-pv%D1%81-768x480.jpg",
        title: 'Фрезеровка',
        price: 'от 1000р/мп'
    },
    {
        id: '6',
        img: "https://printsburg.ru/upload/iblock/01b/33siqqboi1luekyl9qcjm1u9ahzbzuos.jpg",
        title: 'Плоттерная резка',
        price: 'от 10000р/м2'
    },
    {
        id: '7',
        img: "https://mk-monteko.ru/gallery/photos-slides-fullsize/5ac0ff3b5ae37_IMG_2895.JPG",
        title: 'Сварные конструкции',
        price: 'индивидуальный рассчёт'
    },
    {
        id: '8',
        img: "https://optima-fasad.ru/wp-content/uploads/2022/08/%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6-%D0%B2%D1%8B%D0%B2%D0%B5%D1%81%D0%BA%D0%B8-%D1%84%D0%B0%D1%81%D0%B0%D0%B4%D0%B0.jpg",
        title: 'Монтажные работы',
        price: 'индивидуальный рассчёт'
    },
]

const OurServices = () => {
    return (
        <div className={`${styles.our_services} App_container`}>
            <h2 className={styles.headline}>Наши Услуги</h2>
            <ul className={styles.services_list}>
                {Services_Arr.map((item) => {
                    return (
                        <li key={item.id}>
                            <img src={item.img} alt={item.title} />
                            <div>
                                <p>{item.title} - <span>{item.price}</span></p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default OurServices