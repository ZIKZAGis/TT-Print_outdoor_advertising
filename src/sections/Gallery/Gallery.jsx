import { useEffect, useRef, useState } from 'react';
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground'
import styles from './Gallery.module.scss'
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

const images_links = [
    'https://www.nwgs.ru/upload/iblock/244/2441acef1d37ea03c87ccbd4d081a071.jpg',
    'https://foxystudio.by/assets/images/shirokoformatnaya-pechat-bannerov-13.jpg',
    'https://letrero.ru/assets/images/old/a6449512982b2f626011f6b8182cd3d5.jpg',
    'https://wp-art.ru/storage/app/media/vyveski/alumin_compozit/compozit.jpg',
    'https://atlasgroup.pro/wp-content/uploads/IMG_1220.jpg',
    'https://zametno.su/upload/resize_cache/webp/iblock/98c/h1wumnhz55nvxmv0bn89731arstx46kc.webp',
    'https://bukva5.ru/upload/iblock/c67/c67819246d18322137f489832971cd64.jpg',
    'https://mrrk.ru/wp-content/uploads/2023/11/nesvetovye-vyveski-optimized.jpeg',
    'https://ledbukvy.ru/wp-content/uploads/2020/02/2leda1-1024x768.jpg',
    'https://lasercut.spb.ru/templates/megalaser/images/galery/fanera/frezerovka_pvh.jpg',
    'https://alteya69.ru/upload/iblock/879/879abe814ab1d4edd3059ca686bbe8b8.jpg',
    'https://akvarel22.ru/upload/iblock/bad/bad460d5d1e8258d5a6ca3bee51f7754.jpg',
    'https://prinx.ru/d/76.jpg',
    'https://letrero.ru/assets/images/old/dbf1e39b51f7cb93ad4dc883de3d3e82.jpg',
    'https://avtorgroup.ru/upload/iblock/2ec/0wlv77f4ugz6izgb27xuh90mqoar0gfi.jpg',
    'https://вывески-амулет.рф/wp-content/uploads/2020/01/simple.jpg'
]


const Gallery = () => {
    const refSize = useRef(null)
    const [scrollSize, setScrollSize] = useState(null)

    useEffect(() => {
        const scroll = document.getElementById('scroll')
        const leftBtn = document.getElementById('left')
        const rightBtn = document.getElementById('right')

        if(!refSize.current) return

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setScrollSize(entry.contentRect.width)
                scroll.scrollLeft = 0
            }
        })

        
        if (scroll && leftBtn && rightBtn) {
            leftBtn.addEventListener('click', () => {
                scroll.scrollLeft -= scrollSize
            })
            rightBtn.addEventListener('click', () => {
                scroll.scrollLeft += scrollSize
            })
        }

        resizeObserver.observe(refSize.current)

    }, [scrollSize])

    return (
        <div className={styles.gallery}>
            <AnimatedBackground/>
            <div className={`${styles.gallery_wrapper} App_container`}>
                <div className={styles.gallery_text}>
                    <p>Более 1000 лет изготавливаем наружную рекламу</p>
                </div>
                <div className={styles.gallery_slider} id='scroll_block' ref={refSize}>
                    <h2>Наши работы</h2>
                    <div className={styles.scroll_container} >
                        <span className={styles.arrow_left} id='left'>
                            <IoMdArrowRoundBack/>
                        </span>
                        <ul id='scroll'>
                            {images_links.map((link, index) => {
                                return (
                                    <li key={index}style={{backgroundImage: `url(${link})`}}></li>
                                )
                            })}
                        </ul>
                        <span className={styles.arrow_right} id='right'>
                            <IoMdArrowRoundForward/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery