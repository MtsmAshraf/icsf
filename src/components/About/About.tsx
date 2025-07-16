import React from 'react'
import styles from "./about.module.css"
// import MainBtn from '../MainBtn/MainBtn'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
// import { useTranslations } from 'next-intl'
// import { Link } from '@/i18n/routing'
import Logo from '../Logo/logo'
import MainHeading from '../MainHeading/MainHeading'
const About = ({
    lo
}: {
    lo: string
}) => {
    // const t = useTranslations('HomePage');
    // const tBtn = useTranslations('MainBtn');
  return (
    <section id='about' className={lo === "ar"? styles.about + " " + styles.ar: styles.about}>
        <MainHeading>
            {/* <span>
                {t('SubHeading')}
            </span>
            <h1>
                {t('Heading')}
            </h1> */}
            <h2>
                About Us
            </h2>
            {/* <p>
                We provide a turn key solution
                for all firefighting, fire alarm,
                security and surveillance
                systems
            </p> */}
        </MainHeading>
        <div className="container">
            <div className={styles.text}>
                <div className={styles.aboutHeading}>
                    {/* <h2>{t("About.Heading")}</h2> */}
                    <h2 className='hexagon'>
                        ICSF
                    </h2>
                    {/* <p>{t("About.Span")}</p> */}
                    <p>
                        international  
                        center for safety and fire - ICSF
                    </p>
                </div>
                <p className={styles.aboutDetails}>
                    born in 2000 and  
                    have around 25 years of experience on fire fighting and  
                    alarm systems sector
                    <br />
                    Which is the bigger sister of Fire Link, born in 2024 in the same field of fire fighting and  
                    alarm systems sector
                </p>
                <ul>
                    <li>
                        {/* {t("About.Ul.0")} */}
                        PROVIDE TURN-KEY SOLUTIONS FOR ALMOST ALL FIREFIGHTING, FIRE ALARM AND
                        SECURITY SYSTEMS.
                    </li>
                    <li>
                        {/* {t("About.Ul.2")} */}
                        OUR MISSION IS TO PROTECT PEOPLE, PROPERTY AND KEEP BUSINESS RUNNING, BY
                        DELIVERING HIGH QUALITY SECURITY AND FIREFIGHTING SERVICES.
                    </li>
                    <li>
                        {/* {t("About.Ul.3")} */}
                        WE HAVE A HIGHLY QUALIFIED TEAM TO DELIVER OUR SERVICES WITH HIGHEST QUALITY
                        ACCORDING TO OUR CLIENT’S REQUIREMENTS AND TIME FRAME.
                    </li>
                </ul>
                {/* <MainBtn href='#about' lo={lo}>
                    <Link href={"/about"}>
                        <span>
                            {tBtn("More")}
                        </span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </MainBtn> */}
            </div>
            <div className={styles.logo}>
                <Logo lo={lo} logoNo={1}></Logo>
            </div>
        </div>
    </section>
  )
}

export default About