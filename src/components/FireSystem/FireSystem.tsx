"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./fire-system.module.css"
import MainHeading from '../MainHeading/MainHeading'
import Image from 'next/image'
import fireSystemImg from "../../../public/imgs/fire-systems.jpeg"
import { useTranslations } from 'next-intl'
import MainBtn from '../MainBtn/MainBtn'

const FireSystem = ({
    lo
} : {
    lo: string
}) => {
    const t = useTranslations("HomePage.FireSystem")
    // scroll animations
    const fireSystem: any = useRef(null)
    const [fireSystemScrolled, setFireSystemScrolled] = useState(false)
    
    function getOffsetTopRelativeToWindow(element: HTMLElement | any) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        return rect.top + scrollTop;
    }
    
    const scrollfireSystemiSection = () => {
    if(fireSystem.current){
        const headingOffsetTop = getOffsetTopRelativeToWindow(fireSystem.current)
        if(headingOffsetTop <= (window.scrollY + 350)){
            setFireSystemScrolled(true)
        }
        }
    }
    useEffect(() => {
        const headingOffsetTop = getOffsetTopRelativeToWindow(fireSystem.current)
        if(headingOffsetTop <= (window.scrollY + 350)){
            setTimeout(() => {
                setFireSystemScrolled(true)
            }, 1200);
        }
        window.addEventListener("scroll", scrollfireSystemiSection)
    })

    
    const classNames = [
        lo === "ar" ? styles.ar : null,
        fireSystemScrolled ? styles.scrolled : null,
        styles.fireSystem
    ]

  return (
    <div id='fire-system' ref={fireSystem} className={classNames.join(" ")}>
        <MainHeading>
            <h2>
                {
                    t("MainHeading.H2")
                }
            </h2>
        </MainHeading>
        <div className="container">
            <div className={styles.text}>
                <p>{t("Ps.P1")}</p>
                <p>{t("Ps.P2")}</p>
                <MainBtn href='#contact' lo={lo}>
                    {t("MainBtn")}
                </MainBtn>
            </div>
            <div className={styles.img}>
                <Image src={fireSystemImg} alt='fire systmes image'></Image>
            </div>
        </div>
    </div>
  )
}

export default FireSystem