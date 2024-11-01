import styles from "./Header.module.scss";
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
                Logo
            </div>
            <nav>
                <div className={`${styles.burger_btn} ${isMenuOpen && styles.burger_btn_open}`} onClick={menuHandler}>
                    <div>
                        <span></span>
                    </div>
                </div>
                <ul className={`${styles.list} ${isMenuOpen && styles.list_open}`}>
                    <li>
                        <a href="#" onClick={closeMenu}>Главная</a>
                    </li>
                    <li>
                        <a href="#" onClick={closeMenu}>Услуги</a>
                    </li>
                    <li>
                        <a href="#" onClick={closeMenu}>Портфолио</a>
                    </li>
                    <li>
                        <a href="#" onClick={closeMenu}>Контакты</a>
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