"use client"
import React, { useEffect, useState } from 'react'
import styles from "./hero.module.css"
import { useTranslations } from 'next-intl';
import MainBtn from '../MainBtn/MainBtn';
import Logo from '../Logo/logo';
const Hero = ({
    lo
}: {
    lo: string,
}) => {
    // translations
    const t = useTranslations("HomePage.Hero")
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
        <div className={styles.part}>
            <div className={styles.logo}>
                <Logo lo={lo} logoNo={1}></Logo>
            </div>
            <h1>
                {/* {
                    t("Heading")
                } */}
                ICSF
            </h1>
            <p>
                {/* {
                    t("P")
                } */}
                born in 2000 an have around 24 years’ experience on fire fighting and alarm systems sector
            </p>
            {/* <MainBtn href="#contact" lo={lo}>
                {t("MainBtn")}
            </MainBtn> */}
        </div>
        <div className={styles.part}>
            <div className={styles.logo}>
                <Logo lo={lo} logoNo={2}></Logo>
            </div>
            <h1>
                {/* {
                    t("Heading")
                } */}
                Fire Link
            </h1>
            <p>
                    {/* {
                        t("P")
                    } */}
                    born in 2024 as sister company for international  
                    center for safety and fire.
            </p>
            {/* <MainBtn href="#contact" lo={lo}>
                {t("MainBtn")}
            </MainBtn> */}
        </div>
    </section>
  )
}

export default Hero