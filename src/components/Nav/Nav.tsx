import React from 'react'
import styles from "./nav.module.css"
// import { useTranslations } from 'next-intl'
// import { Link } from '@/i18n/routing'
import { usePathname } from 'next/navigation'

const Nav = ({
    lo
}: {
    lo: string
}) => {
    // const t = useTranslations("Header")
    const pathname = usePathname()
  return (
    <nav className={lo === "ar" ? styles.nav + " " + styles.ar : styles.nav}>
        <ul className={styles.links}>
            <li>
                <a className={pathname === `/${lo}` ? styles.active : ""} href={'#'}>
                {/* {t("Nav.Home")} */}
                Home
                </a>
            </li>
            <li>
                <a href={'#'}>
                    {/* {t("Nav.Manufacturing")} */}
                    Link
                    </a>
            </li>
            <li>
                <a href={'#'}>
                    {/* {t("Nav.Products")} */}
                    Link
                    </a>
            </li>
            <li>
                <a href={'#'}>
                    {/* {t("Nav.ContactUs")} */}
                    Link
                    </a>
            </li>
        </ul>
        {/* <LangSwitch lo={lo}></LangSwitch> */}
    </nav>
  )
}

export default Nav