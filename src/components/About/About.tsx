import React from 'react'
import styles from "./about.module.css"
import MainBtn from '../MainBtn/MainBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
const About = ({
    lo
}: {
    lo: string
}) => {
    const t = useTranslations('HomePage');
    const tBtn = useTranslations('MainBtn');
  return (
    <section className={lo === "ar"? styles.about + " " + styles.ar: styles.about}>
        <div className="container">
            <div className={styles.text}>
                <div className={styles.aboutHeading}>
                    <h2>{t("About.Heading")}</h2>
                    <p>{t("About.Span")}</p>
                </div>
                <p className={styles.aboutDetails}>
                    {t("About.P")}
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
                <MainBtn href='#about' lo={lo}>
                    <Link href={"/about"}>
                        <span>
                            {tBtn("More")}
                        </span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </MainBtn>
            </div>
            <div className={styles.logo}>
                
            </div>
        </div>
    </section>
  )
}

export default About