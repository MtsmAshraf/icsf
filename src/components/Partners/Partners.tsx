"use client"
import React from 'react'
import styles from "./partners.module.css"
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
import sliderLogos, { SliderLogo } from './sliderProducts';
const Partners = ({
    lo
}: {
    lo: string,
}) => {
    // const t = useTranslations("HomePage.Brands")
  return (
    <section id='partners' className={lo === "ar" ? styles.partners + " " + styles.ar : styles.partners}>
        <MainHeading>
            {/* <h2>{t("MainHeading.H2")}</h2> */}
            <h2>Partners</h2>
            <p>Here is some of our success partners</p>
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
                    el: `.partnersPagination`
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
                    spaceBetween: 10
                    },
                    640: {
                    slidesPerView: 2,
                    },
                    768: {
                    slidesPerView: 3,
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
            <div className={styles.partnersPagination}>
                <div className={`partnersPagination`}></div>
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

export default Partners