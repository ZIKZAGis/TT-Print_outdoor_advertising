import styles from './Footer.module.scss'
import logo from "./../../media/logo/logo_white.svg"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className='App_container'>
                <ul className={styles.footer_list}>
                    <li>
                        <img src={logo} alt="Логотип ТТ Принт" />
                    </li>
                    <li><a href="mailto:ttprintnr@ya.ru">ttprintnr@ya.ru</a></li>
                    <li><a href="tel:+79646460969">+7(964)646-09-69</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer