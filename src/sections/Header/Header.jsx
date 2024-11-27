import styles from "./Header.module.scss";
import logo from "./../../media/logo/logo_white.svg"
import { SiMaildotru } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuHandler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className={`${styles.wrapper} App_container`}>
            <div className={styles.logo}>
                <img src={logo} alt="Логотип ТТ Принт" />
            </div>
            <nav>
                <div className={`${styles.burger_btn} ${isMenuOpen && styles.burger_btn_open}`} onClick={menuHandler}>
                    <div>
                        <span></span>
                    </div>
                </div>
                <ul className={`${styles.list} ${isMenuOpen && styles.list_open}`}>
                    <li>
                        <a href="#top" onClick={closeMenu}>Главная</a>
                    </li>
                    <li>
                        <a href="#services" onClick={closeMenu}>Услуги</a>
                    </li>
                    <li>
                        <a href="#gallery" onClick={closeMenu}>Портфолио</a>
                    </li>
                    <li>
                        <a href="#contacts" onClick={closeMenu}>Контакты</a>
                    </li>
                </ul>
                <ul className={styles.list_contacts}>
                    <li>
                        <a href="mailto:TTPrintNR@ya.ru">
                            <SiMaildotru/>
                            <p>ttprintnr@ya.ru</p>
                        </a>
                    </li>
                    <li>
                        
                        <a href="tel:+79646460969">
                            <FaPhoneAlt/>
                            <p>+7(964)646-09-69</p>
                        </a>
                    </li>
                </ul>                
            </nav>
        </div>
    )
}

export default Header