"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./why.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faClock, faFaceSmileBeam, faIndustry, faMoneyBills, faRankingStar } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
import MainHeading from '../MainHeading/MainHeading'
const Why = ({
    lo
} : {
    lo: string
}) => {
    const t = useTranslations("HomePage.why")
    // scroll animations
    const why: any = useRef(null)
    const [whyScrolled, setWhyScrolled] = useState(false)
    
    function getOffsetTopRelativeToWindow(element: HTMLElement | any) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        return rect.top + scrollTop;
    }
    
    const scrollwhyiSection = () => {
    if(why.current){
        const headingOffsetTop = getOffsetTopRelativeToWindow(why.current)
        if(headingOffsetTop <= (window.scrollY + 350)){
            setWhyScrolled(true)
        }
        }
    }
    useEffect(() => {
        const headingOffsetTop = getOffsetTopRelativeToWindow(why.current)
        if(headingOffsetTop <= (window.scrollY + 350)){
            setTimeout(() => {
                setWhyScrolled(true)
            }, 1200);
        }
        window.addEventListener("scroll", scrollwhyiSection)
    },[whyScrolled])

    
    const classNames = [
        lo === "ar" ? styles.ar : null,
        whyScrolled ? styles.scrolled : null,
        styles.why
    ]

  return (
    <div ref={why} className={classNames.join(" ")}>
        <MainHeading centered={true}>
            <h2>
                {t("h2")}
            </h2>
        </MainHeading>
        <div className="container">
            <div className={styles.card}>
                <div className={styles.heading}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={faFaceSmileBeam} />
                    </span>
                    <h3>
                        {t("cardsHeadings.0")}
                    </h3>
                </div>
                <p>
                        {t("cardPs.0")}
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.heading}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={faMoneyBills} />
                    </span>
                    <h3>
                        {t("cardsHeadings.1")}
                    </h3>
                </div>
                <p>
                        {t("cardPs.1")}
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.heading}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={faRankingStar} />
                    </span>
                    <h3>
                        {t("cardsHeadings.2")}
                    </h3>
                </div>
                <p>
                        {t("cardPs.2")}
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.heading}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={faClock} />
                    </span>
                    <h3>
                        {t("cardsHeadings.3")}
                    </h3>
                </div>
                <p>
                        {t("cardPs.3")}
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.heading}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={faAward} />
                    </span>
                    <h3>
                        {t("cardsHeadings.4")}
                    </h3>
                </div>
                <p>
                        {t("cardPs.4")}
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.heading}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={faIndustry} />
                    </span>
                    <h3>
                        {t("cardsHeadings.5")}
                    </h3>
                </div>
                <p>
                        {t("cardPs.5")}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Why