import styles from './OurServices.module.scss'

const OurServices = () => {
    return (
        <div className={`${styles.our_services} App_container`}>
            <h2 className={styles.headline}>Наши Услуги</h2>
            <ul className={styles.services_list}>
                <li>
                    <img src="https://vvd.by/wa-data/public/shop/cats/63.jpg" alt="вывески" />
                    <p>Вывески</p>
                </li>
                <li>
                    <img src="https://www.svetogor.com/images/bukvy3.jpg" alt="Объёмные буквы" />
                    <p>Объёмные буквы</p></li>
                <li>
                    <img src="https://wowbanner.ru/sites/default/files/intpechat1.jpg" alt="Широкоформатная печать" />
                    <p>Широкоформатная печать</p>
                </li>
                <li>
                    <img src="https://wowbanner.ru/sites/default/files/holst_nautralnyy.jpg" alt="Интерьерная печать" />
                    <p>Интерьерная печать</p>
                </li>
                <li>
                    <img src="https://фрезеровка.москва/wp-content/uploads/2019/09/frezerovka-pv%D1%81-768x480.jpg" alt="Фрезеровка" />
                    <p>Фрезеровка</p>
                </li>
                <li>
                    <img src="https://printsburg.ru/upload/iblock/01b/33siqqboi1luekyl9qcjm1u9ahzbzuos.jpg" alt="Плоттерная резка" />
                    <p>Плоттерная резка</p>
                </li>
                <li>
                    <img src="https://mk-monteko.ru/gallery/photos-slides-fullsize/5ac0ff3b5ae37_IMG_2895.JPG" alt="Сварные конструкции" />
                    <p>Сварные конструкции</p>
                </li>
                <li>
                    <img src="https://optima-fasad.ru/wp-content/uploads/2022/08/%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6-%D0%B2%D1%8B%D0%B2%D0%B5%D1%81%D0%BA%D0%B8-%D1%84%D0%B0%D1%81%D0%B0%D0%B4%D0%B0.jpg" alt="Монтажные работы" />
                    <p>Монтажные работы</p>
                </li>
            </ul>
        </div>
    )
}

export default OurServices