import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground'
import styles from './Intro.module.scss'

const Intro = () => {
    return (
        <div className={styles.intro} id='top'>
            <div className={`${styles.intro_wrapper} App_container`}>
                <div className={styles.intro_text_block}>
                    <p>Изготавливаем рекламу с 2010 года</p>
                    <h1>Наружная реклама<br/> по всей Москве</h1>
                    <div className={styles.variable_text_block}>
                        <p className={styles.intro_static}>Изготавливаем</p>
                        <ul className={styles.list_of_types}>
                            <li className={styles.type}>Световые короба</li>
                            <li className={styles.type}>Вывески</li>
                            <li className={styles.type}>Баннеры</li>
                            <li className={styles.type}>Сварные конструкции</li>
                            <li className={styles.type}>Объёмные буквы</li>
                            <li className={styles.type}>Таблички</li>
                            <li className={styles.type}>Плоттерную резку</li>
                        </ul>
                    </div>
                    <p>Ваши идеи - наши яркие решения! <br/>Наружная реклама, которая привлекает внимание!</p>
                </div>
                <div className={styles.intro_order_block}>
                    <p>Срок изготовления<br/> <span>от 1 рабочего дня!</span></p>
                    <button className={styles.order_button}>
                        <p>
                            Просчитать / Заказать
                        </p>
                        <div className={styles.order_contacts}>
                            <a href="mailto:ttprintnr@ya.ru">ttprintnr@ya.ru</a>
                            <a href="tel:+79646460969">+79646460969</a>
                        </div>    
                    </button>
                </div>
            </div>
            <AnimatedBackground/>
        </div>
    )
}

export default Intro