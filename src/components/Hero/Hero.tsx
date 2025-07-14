"use client"
import React, { useEffect, useState } from 'react'
import styles from "./hero.module.css"
import { useTranslations } from 'next-intl';
import MainBtn from '../MainBtn/MainBtn';
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
        <h1>
            {
                t("Heading")
            }
        </h1>
        <p>
            {
                t("P")
            }
        </p>
        <MainBtn href="#contact" lo={lo}>
            {t("MainBtn")}
        </MainBtn>
    </section>
  )
}

export default Hero