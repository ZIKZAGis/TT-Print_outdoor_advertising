import { useEffect, useRef, useState } from 'react';
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground'
import styles from './Gallery.module.scss'
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { images_links } from '../OurServices/data';

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
            let isThrottled = false;
        
            leftBtn.addEventListener('click', () => {
                if (!isThrottled) {
                    scroll.scrollLeft -= scrollSize;
                    isThrottled = true;
        
                    setTimeout(() => {
                        isThrottled = false;
                    }, 1500);
                }
            });
        
            rightBtn.addEventListener('click', () => {
                if (!isThrottled) { 
                    scroll.scrollLeft += scrollSize;
                    isThrottled = true; 
        
                    setTimeout(() => {
                        isThrottled = false; 
                    }, 1500);
                }
            });
        }

        resizeObserver.observe(refSize.current)

    }, [scrollSize])

    return (
        <div className={styles.gallery} id='gallery'>
            <AnimatedBackground/>
            <div className={`${styles.gallery_wrapper} App_container`}>
                <div className={styles.gallery_text}>
                    <p>Более 15 лет изготавливаем наружную рекламу</p>
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