"use client"
import React from 'react'
import styles from "./clients.module.css"
import Image from 'next/image';
// import logo from "../../../public/imgs/logojpg.webp"
// import sliderProducts from './sliderProducts';
// import { useTranslations } from 'next-intl';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/bundle";
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 

import MainHeading from '../MainHeading/MainHeading';
import sliderLogos, { SliderLogo } from './sliderClients';
const Clients = ({
    lo
}: {
    lo: string,
}) => {
    // const t = useTranslations("HomePage.Brands")
  return (
    <section id='clients' className={lo === "ar" ? styles.clients + " " + styles.ar : styles.clients}>
        <MainHeading>
            {/* <h2>{t("MainHeading.H2")}</h2> */}
            <h2>Clients</h2>
            {/* <p>Here are some of clients</p> */}
        </MainHeading>
        <div className={styles.swiper}>
            <Swiper
                loop
                autoplay={{
                    delay: 1000
                }}
                // slidesPerView= {5}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                    el: `.clientsPagination`
                }}
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: '.featured-swiper-button-next',
                    prevEl: '.featured-swiper-button-prev'
                }}
                className='mySwiperProdHero'
                autoHeight={true}
                breakpoints={{
                    400: {
                    slidesPerView: 3,
                    // spaceBetween: 10
                    },
                    640: {
                    slidesPerView: 3,
                    },
                    768: {
                    slidesPerView: 4,
                    },
                    1024: {
                    slidesPerView: 5,
                    },
                }}
                >
                {
                    sliderLogos.map((logo: SliderLogo) => {
                        return(
                        <SwiperSlide key={logo.id}>
                            <div className={styles.img + ` hexagpn`}>
                                <Image src={logo.src} alt={`Brand number ${logo.src} logo`}></Image>
                            </div>
                        </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className={styles.clientsPagination}>
                <div className={`clientsPagination`}></div>
            </div>
            {/* <button className='featured-swiper-button-prev'>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className='featured-swiper-button-next'>
                <FontAwesomeIcon icon={faChevronRight} />
            </button> */}
        </div>
    </section>
  )
}

export default Clients