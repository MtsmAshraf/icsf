"use client"
import React, { useEffect, useState } from 'react'
import styles from "./hero.module.css"
// import { useTranslations } from 'next-intl';
// import MainBtn from '../MainBtn/MainBtn';
import Logo from '../Logo/logo';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/bundle";
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
const Hero = ({
    lo
}: {
    lo: string,
}) => {
    // translations
    // const t = useTranslations("HomePage.Hero")
    // loading animation
    const [loaded, setLoaded] = useState(false)
    useEffect(()=> {
        setTimeout(() => {
            setLoaded(true)
        }, 1000);
    },[])

    const classNames = [
        lo === "ar" ? styles.ar : null,
        loaded ? styles.loaded : null,
        styles.hero
    ]

  return (
    <section id='hero' className={classNames.join(" ")}>
        <div className={styles.swiper}>
            <Swiper
                loop
                autoplay={{
                    delay: 5000
                }}
                slidesPerView= {1}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                    el: `.heroPagination`
                }}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                navigation={{
                    nextEl: '.featured-swiper-button-next',
                    prevEl: '.featured-swiper-button-prev'
                }}
                effect='fade'
                className={styles.mySwiperProdHero}
                // autoHeight={true}
                >
                {/* <SwiperSlide className={styles.first}>
                    <div className={styles.img}>
                        <Image src={logo} alt={`Al-assema for compressed air systems logo`}></Image>
                    </div>
                    <p>
                        {t("0")}
                    </p>
                </SwiperSlide> */}
                <SwiperSlide className={styles.part + " " + styles.one} id='one'>
                        <div className={styles.logo}>
                            <Logo lo={lo} logoNo={1}></Logo>
                        </div>
                        <h1>
                            ICSF
                        </h1>
                        <p>
                            born in 2000 and have around 25 years of experience on fire fighting and alarm systems sector
                        </p>
                </SwiperSlide>
                <SwiperSlide className={styles.part + " " + styles.two} id='two'>
                        <div className={styles.logo}>
                            <Logo lo={lo} logoNo={2}></Logo>
                        </div>
                        <h1>
                            Fire Link
                        </h1>
                        <p>
                                born in 2024 as sister company for international  
                                center for safety and fire.
                        </p>
                </SwiperSlide>
            </Swiper>
            <div className={styles.heroPagination}>
                <div className={`heroPagination`}></div>
            </div>
            <button className='featured-swiper-button-prev hexagon'>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className='featured-swiper-button-next hexagon'>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
        <a href="#about">
            <FontAwesomeIcon icon={faAnglesDown} />
        </a>
        <div className={styles.btns}>
            <a href="#contact">Contact Us</a>
            <a href="#products">Our Products</a>
        </div>
    </section>
  )
}

export default Hero