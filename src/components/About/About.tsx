import React from 'react'
import styles from "./about.module.css"
// import MainBtn from '../MainBtn/MainBtn'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
// import { Link } from '@/i18n/routing'
import Logo from '../Logo/logo'
const About = ({
    lo
}: {
    lo: string
}) => {
    const t = useTranslations('HomePage');
    // const tBtn = useTranslations('MainBtn');
  return (
    <section className={lo === "ar"? styles.about + " " + styles.ar: styles.about}>
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
                    born in 2000 an  
                    have around 24 years’ experience on fire fighting and  
                    alarm systems sector
                    <br />
                    Which is the bigger sister of Fire Link, born in 2024 in the same field of fire fighting and  
                    alarm systems sector
                </p>
                <ul>
                    <li>
                        {t("About.Ul.0")}
                    </li>
                    <li>
                        {t("About.Ul.1")}
                    </li>
                    <li>
                        {t("About.Ul.2")}
                    </li>
                    <li>
                        {t("About.Ul.3")}
                    </li>
                    <li>
                        {t("About.Ul.4")}
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