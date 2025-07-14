"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./fields.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns, faCity, faEarthAfrica, faGraduationCap, faHospital, faHotel, faHouseUser, faIndustry, faOilWell, faPlaneDeparture, faShop, faTrowelBricks } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
const Fields = ({
    lo
} : {
    lo: string
}) => {
    const t = useTranslations("HomePage.fields")
    // scroll animations
    const fields: any = useRef(null)
    const [fieldsScrolled, setFieldsScrolled] = useState(false)
    
    function getOffsetTopRelativeToWindow(element: HTMLElement | any) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        return rect.top + scrollTop;
    }
    
    const scrollfieldsiSection = () => {
    if(fields.current){
        const headingOffsetTop = getOffsetTopRelativeToWindow(fields.current)
        if(headingOffsetTop <= (window.scrollY + 350)){
            setFieldsScrolled(true)
        }
        }
    }
    useEffect(() => {
        const headingOffsetTop = getOffsetTopRelativeToWindow(fields.current)
        if(headingOffsetTop <= (window.scrollY + 350)){
            setTimeout(() => {
                setFieldsScrolled(true)
            }, 1200);
        }
        window.addEventListener("scroll", scrollfieldsiSection)
    },[fieldsScrolled])

    
    const classNames = [
        lo === "ar" ? styles.ar : null,
        fieldsScrolled ? styles.scrolled : null,
        styles.fields
    ]

  return (
    <div id='fields' ref={fields} className={classNames.join(" ")}>
        <h2>{t("H2")}</h2>
        <div className="container">
            <div className={styles.field} style={{ transitionDelay: "0s" }}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faTrowelBricks} />
                </div>
                <span>  
                    {t("Spans.0")}
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "0.2s" }}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faBuildingColumns} />
                </div>
                <span>
                    {t("Spans.1")}
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "0.4s" }}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faGraduationCap} />                    
                </div>
                <span>
                    {t("Spans.2")}
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "0.6s" }}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faHotel} />
                </div>
                <span>
                    {t("Spans.3")}
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "0.8s" }}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faIndustry} />
                </div>
                <span>
                    {t("Spans.4")}
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "1s" }}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faCity} />
                </div>
                <span>
                    {t("Spans.5")}
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "1.2s" }}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faOilWell} />
                </div>
                <span>
                    {t("Spans.6")}
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "1.4s" }}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faEarthAfrica} />
                </div>
                <span>
                    {t("Spans.7")}
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "1.6s" }}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faShop} />
                </div>
                <span>
                    {t("Spans.8")}
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "1.8s" }}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faHouseUser} />
                </div>
                <span>
                    {t("Spans.9")}
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "2s" }}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faHospital} />
                </div>
                <span>
                    {t("Spans.10")}
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "2.2s" }}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faPlaneDeparture} />
                </div>
                <span>
                    {t("Spans.11")}
                </span>
            </div>
            </div>
        </div>
  )
}

export default Fields