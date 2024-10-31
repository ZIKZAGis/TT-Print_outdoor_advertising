import styles from "./Header.module.scss";
import { SiMaildotru } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";


const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                Logo
            </div>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <a href="#">Главная</a>
                    </li>
                    <li>
                        <a href="#">Услуги</a>
                    </li>
                    <li>
                        <a href="#">Портфолио</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                </ul>
                <ul className={styles.list_contacts}>
                    <li>
                        <a href="mailto:mail@mail.ru">
                            <SiMaildotru/>
                            <p>mail@mail.ru</p>
                        </a>
                    </li>
                    <li>
                        
                        <a href="tel:+79994443322">
                            <FaPhoneAlt/>
                            <p>+79994443322</p>
                        </a>
                    </li>
                </ul>                
            </nav>
        </div>
    )
}

export default Header