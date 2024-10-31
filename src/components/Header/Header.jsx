import styles from "./Header.module.scss";

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
                    <li>
                        <a href="tel:+79994443322">+79994443322</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header