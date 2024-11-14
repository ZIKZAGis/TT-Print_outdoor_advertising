import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className='App_container'>
                <ul className={styles.footer_list}>
                    <li>ЛОГО</li>
                    <li><a href="mailto:mail@mail.ru">mail@mail.ru</a></li>
                    <li><a href="tel:+79994443322">+79994443322</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer