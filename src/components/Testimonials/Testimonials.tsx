"use client"
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import styles from "./testimonials.module.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import test from "../../../public/imgs/user.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
import 'swiper/css';
import 'swiper/css/navigation'; // If using navigation module
import 'swiper/css/pagination'; // If using pagination module
const Testimonials = ({
        lo,
        parentEl
    }: {
        lo: string,
        parentEl: string
    }) => {
  const t = useTranslations("HomePage")
  return (
    <section className={lo === "ar" ? styles.testimonials + " " + styles.ar : styles.testimonials}>
        <div className="container">
            <h2>
                {t("Testimonials.MainHeading.H2")}
            </h2>
            <div className={styles.swiper}>
                <Swiper
                    loop
                    autoplay={{
                        delay: 5000
                    }}
                    slidesPerView= {1}
                    spaceBetween={80}
                    pagination={{
                        clickable: true,
                        el: `.pagination`
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        nextEl: `.featured-swiper-button-next`,
                        prevEl: `.featured-swiper-button-prev`
                    }}
                    className={`mySwiperProd${parentEl}`}
                    autoHeight={true}
                    >
                    <SwiperSlide className={styles.SwiperSlide}>
                        <div className={styles.img}>
                            <Image src={test} alt='test'></Image>
                        </div>
                        <div className={styles.text}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati et, laudantium laborum temporibus maxime itaque modi commodi voluptates qui saepe repellendus, nemo tempora, explicabo officia quod est voluptatum adipisci?
                            </p>
                            <div className={styles.clientInfo}>
                                <h4>Client Name</h4>
                                <span>Client Job Title</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.SwiperSlide}>
                        <div className={styles.img}>
                            <Image src={test} alt='test'></Image>
                        </div>
                        <div className={styles.text}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati et, laudantium laborum temporibus maxime itaque modi commodi voluptates qui saepe repellendus, nemo tempora, explicabo officia quod est voluptatum adipisci?
                            </p>
                            <div className={styles.clientInfo}>
                                <h4>Client Name</h4>
                                <span>Client Job Title</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className={styles.pagination}>
                    <div className={`pagination`}></div>
                </div>
                <div className={styles.btns}>
                    <button className={`featured-swiper-button-prev`}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className={`featured-swiper-button-next`}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials