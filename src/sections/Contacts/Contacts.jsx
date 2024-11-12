import styles from './Contacts.module.scss'

const Contacts = () => {
    return (
        <div className={`App_container ${styles.contacts}`}>
           <h3>Контакты</h3>
           <div className={styles.contacts_wrapper}>
                <div className={styles.map}>
                    <div style={{position:'relative', overflow:'hidden'}}>
                        <a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee', fontSize:'12px', position:'absolute', top:0}}>Москва</a>
                        <a href="https://yandex.ru/maps/213/moscow/house/2_ya_frezernaya_ulitsa_3a/Z04YcQNiSE0AQFtvfXt1cX5nbQ==/?ll=37.742645%2C55.741790&utm_medium=mapframe&utm_source=maps&z=16.37" style={{color:'#eee', fontSize:'12px', position:'absolute', top:'14px'}}>
                            2-я Фрезерная улица, 3А — Яндекс Карты
                        </a>
                        <iframe src="https://yandex.ru/map-widget/v1/?ll=37.742645%2C55.741790&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjcwMTcwMxJD0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsIDIt0Y8g0KTRgNC10LfQtdGA0L3QsNGPINGD0LvQuNGG0LAsIDPQkCIKDf_3FkIVBPZeQg%2C%2C&z=16.37" height="400" frameborder="1" allowfullscreen="true" style={{position:'relative', width:'100%', height: '500px', border:'none'}}>
                        </iframe>
                    </div>
                </div>
                <div className={styles.info}>
                    <div>
                        <p>Работаем пн-пт</p>
                        <p>с 9:00 до 18:00</p>
                        <a href="tel:+79994443322">+79994443322</a>
                        <a href="mailto:mail@mail.ru">mail@mail.ru</a>
                        <p>г.Москва, 2-я фрезерная, 3а</p>
                        <p>Проход через кпп - в ТТ Принт</p>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Contacts