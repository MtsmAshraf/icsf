import Image from 'next/image'
import React from 'react'
import bgLogo from "../../../public/imgs/favicon.ico"
import styles from "./footer.module.css"
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import Logo from '../Logo/logo'
const Footer = ({
    lo
}: {
    lo: string
}) => {
    const t = useTranslations("Footer")
  return (
    <footer className={lo === "ar" ? styles.footer + " " + styles.ar : styles.footer}>
        <div className={styles.bgImg}>
            <Image src={bgLogo} alt='logo bg'></Image>
        </div>
        <div className={styles.footerContainer}>
            <Link href={"/"} className={styles.logo}>
                <Logo logoNo={1} lo={lo}></Logo>
            </Link>
            <p>
                &copy; {t("P")}
                <br />
                {t("P2")}
            </p>
            <div className={styles.devFooter}>
                by: <a target='_blank' href="https://moatasim-ashraf.netlify.app">
                    {t("DevFooter")}
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer