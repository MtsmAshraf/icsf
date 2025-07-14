"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./manufacturing.module.css"
import MainHeading from '../MainHeading/MainHeading'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import safteyHelmet from "../../../public/imgs/manufacturing/c-zar-helmet.jpg"
import uniform from "../../../public/imgs/manufacturing/uniform.jpg"
import MainBtn from '../MainBtn/MainBtn'
const Manufacturing = ({
    lo
}: {
    lo: string
}) => {
    const t = useTranslations("HomePage.Manufacturing")
    // scroll animations
    const manufacturing: any = useRef(null)
    const [manufacturingScrolled, setManufacturingScrolled] = useState(false)
    
    function getOffsetTopRelativeToWindow(element: HTMLElement | any) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        return rect.top + scrollTop;
    }
    
    const scrollmanufacturingiSection = () => {
    if(manufacturing.current){
        const headingOffsetTop = getOffsetTopRelativeToWindow(manufacturing.current)
        if(headingOffsetTop <= (window.scrollY + 200)){
            setManufacturingScrolled(true)
        }
        }
    }
    useEffect(() => {
        const headingOffsetTop = getOffsetTopRelativeToWindow(manufacturing.current)
        if(headingOffsetTop <= (window.scrollY + 200)){
            setTimeout(() => {
                setManufacturingScrolled(true)
            }, 1200);
        }
        window.addEventListener("scroll", scrollmanufacturingiSection)
    },[manufacturingScrolled])

    const classNames = [
        lo === "ar" ? styles.ar : null,
        manufacturingScrolled ? styles.scrolled : null,
        styles.manufacturing
    ]


  return (
    <section ref={manufacturing} id='manufacturing' className={classNames.join(" ")}>
        
        <div className="container">
            <MainHeading>
                <h2>
                    {t('MainHeading.H2')}
                </h2>
                <p>
                    {t('MainHeading.P')}
                </p>
            </MainHeading>
            <div className={styles.part}>
                <h3>{t("Parts.1.Heading")}</h3>
                <div className={styles.partImg}>
                    <Image src={uniform} alt='Safety Uniforms'></Image>
                </div>
                <div className={styles.text}>
                    <ul>
                        <li>{t("Parts.1.Uls.0")}</li>
                        <li>{t("Parts.1.Uls.1")}</li>
                        <li>{t("Parts.1.Uls.2")}</li>
                        <li>{t("Parts.1.Uls.3")}</li>
                    </ul>
                    <div className={styles.order}>
                        <MainBtn href='#contact' lo={lo}>
                            {t("Parts.2.OrderBtn")}
                        </MainBtn>
                    </div>
                </div>
            </div>
            <div className={styles.part}>
                    <h3>{t("Parts.2.Heading")}</h3>
                <div className={styles.partImg}>
                    <Image src={safteyHelmet} alt='Safety Helmets'></Image>
                </div>
                <div className={styles.text}>
                    <ul>
                        <li>{t("Parts.2.Uls.0")}</li>
                        <li>{t("Parts.2.Uls.1")}</li>
                        <li>{t("Parts.2.Uls.2")}</li>
                        <li>{t("Parts.2.Uls.3")}</li>
                    </ul>
                    <div className={styles.order}>
                        <MainBtn href='#contact' lo={lo}>
                            {t("Parts.2.OrderBtn")}
                        </MainBtn>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Manufacturing