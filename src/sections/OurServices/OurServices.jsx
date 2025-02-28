import styles from './OurServices.module.scss'
import {services_Arr} from './data'

const OurServices = () => {
    return (
        <div className={`${styles.our_services} App_container`} id='services'>
            <h2 className={styles.headline}>Наши Услуги</h2>
            <ul className={styles.services_list}>
                {services_Arr.map((item) => {
                    return (
                        <li key={item.id} className={styles.services_item} style={{backgroundImage: `url(${item.img})`}}>
                            <div>
                                <p>{item.title} - <span>{item.price}</span></p>
                                {item.detailing &&
                                    <ul className={styles.detailing_list}>
                                        {item.detailing.map((det) => {
                                            return (
                                                <li>{det}</li>
                                            )
                                        })}
                                    </ul>
                                }
                            </div>
                        </li>
                    )
                })}
            </ul>
            <p className={styles.clarification}>
                *Доставка - рассчитывается в зависимости от удалённости и габаритов заказа, осуществляется "яндекс доставкой". <span>Самовывоз - бесплатно.</span>
                <br/> <span>*Заказы менее 1м2 - просчитываются индивидуально</span>
            </p>
        </div>
    )
}

export default OurServices