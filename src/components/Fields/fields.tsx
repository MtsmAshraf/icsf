"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./fields.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBellConcierge, 
    faBuildingColumns, 
    faGopuram, 
    faHospital, 
    faHotel, 
    faIndustry, 
    faPlaneDeparture, 
    faRoadBridge, 
    faShop, 
    faTreeCity, 
} from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
import MainHeading from '../MainHeading/MainHeading'
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
    })

    
    const classNames = [
        lo === "ar" ? styles.ar : null,
        fieldsScrolled ? styles.scrolled : null,
        styles.fields
    ]

  return (
    <div id='fields' ref={fields} className={classNames.join(" ")}>
        {/* <h2>{t("H2")}</h2> */}
        <MainHeading inverted>
            <h2>
                Our Fields
            </h2>
            <p>
                Here are some of our fields of work
            </p>
        </MainHeading>
        <div className="container">
            <div className={styles.field} style={{ transitionDelay: "0s" }}>
                <div className={styles.icon + ` hexagon`}>
                    <FontAwesomeIcon icon={faIndustry} />
                </div>
                <span>  
                    Industrial
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "0.2s" }}>
                <div className={styles.icon + ` hexagon`}>
                    <FontAwesomeIcon icon={faShop} />
                </div>
                <span>
                    {/* {t("Spans.1")} */}
                    Commercial Residential
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "0.4s" }}>
                <div className={styles.icon + ` hexagon`}>
                    <FontAwesomeIcon icon={faTreeCity} />                    
                </div>
                <span>
                    {/* {t("Spans.2")} */}
                    PublicAttractions
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "0.6s" }}>
                <div className={styles.icon + ` hexagon`}>
                    <FontAwesomeIcon icon={faHotel} />
                </div>
                <span>
                    {/* {t("Spans.3")} */}
                    Residences
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "0.8s" }}>
                <div className={styles.icon + ` hexagon`}>
                    <FontAwesomeIcon icon={faHospital} />
                </div>
                <span>
                    {/* {t("Spans.10")} */}
                    Hospitals
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "1s" }}>
                <div className={styles.icon + ` hexagon`}>
                    <FontAwesomeIcon icon={faPlaneDeparture} />
                </div>
                <span>
                    {/* {t("Spans.5")} */}
                    Airports
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "1.2s" }}>
                <div className={styles.icon + ` hexagon`}>
                    <FontAwesomeIcon icon={faBuildingColumns} />
                </div>
                <span>
                    {/* {t("Spans.6")} */}
                    Museums
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "1.4s" }}>
                <div className={styles.icon + ` hexagon`}>
                    <FontAwesomeIcon icon={faRoadBridge} />
                </div>
                <span>
                    {/* {t("Spans.7")} */}
                    Facilities
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "1.6s" }}>
                <div className={styles.icon + ` hexagon`}>
                    <FontAwesomeIcon icon={faBellConcierge} />
                </div>
                <span>
                    {/* {t("Spans.8")} */}
                    Hotels & Resorts
                </span>
            </div>
            <div className={styles.field} style={{ transitionDelay: "1.8s" }}>
                <div className={styles.icon + ` hexagon`}>
                    <FontAwesomeIcon icon={faGopuram} />
                </div>
                <span>
                    {/* {t("Spans.9")} */}
                    Malls
                </span>
            </div>
            </div>
        </div>
  )
}

export default Fields