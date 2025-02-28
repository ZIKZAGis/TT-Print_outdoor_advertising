import styles from './Contacts.module.scss'

const Contacts = () => {
    return (
        <div className={`App_container ${styles.contacts}`} id='contacts'>
           <div className={styles.contacts_wrapper}>
                <div className={styles.info}>
                    <div>
                        <h2>Контакты</h2>
                        <ul className={styles.contacts_list}>
                            <li>
                                <p>Адрес:</p>
                                <address>1-я Фрезерная улица, 2/1с21<br/></address>
                            </li>
                            <li>
                                <p>График работы:</p>
                                <p>Пн-Пт:<br/> c 9:00 до 18:00</p>
                            </li>
                            <li>
                                <p>Телефон:</p>
                                <a href="tel:+79646460969">+7(964)646-09-69</a>
                            </li>
                            <li>
                                <p>Email:</p>
                                <a href="mailto:ttprintnr@ya.ru">ttprintnr@ya.ru</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.map}>
                    <div style={{position:'relative', overflow:'hidden'}}>
                        <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee', fontSize:'12px', position:'absolute', top:0}}>Москва</a>
                        <a href="https://yandex.ru/maps/213/moscow/house/1_ya_frezernaya_ulitsa_2_1s21/Z04YcQNiS0EGQFtvfXt1cHllZQ==/?ll=37.741882%2C55.741446&utm_medium=mapframe&utm_source=maps&z=19.01" style={{color:'#eee', fontSize:'12px', position:'absolute', top:'14px'}}>
                            1-я Фрезерная улица, 2/1с21 — Яндекс Карты
                        </a>
                        <iframe src="https://yandex.ru/map-widget/v1/?ll=37.741882%2C55.741446&mode=whatshere&whatshere%5Bpoint%5D=37.742161%2C55.741675&whatshere%5Bzoom%5D=17&z=19.01" width="560" height="400" frameborder="1" allowfullscreen="true" style={{position:'relative', width:'100%', height: '400px', border:'none', borderRadius: '10px'}}></iframe>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Contacts