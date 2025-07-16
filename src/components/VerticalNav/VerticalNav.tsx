import React from 'react'
import styles from "./vertical-nav.module.css"
// import SocialUl from '../SocialUl/SocialUl'
// import LangSwitch from '../Nav/LangSwitch/LangSwitch'
// import { Link } from '@/i18n/routing'
// import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Logo from '../Logo/logo'
const VerticalNav = ({
    shown,
    // lo
} : {
    shown: boolean,
    // lo: string
}) => {
    // const pathname = usePathname()
    const t = useTranslations("Header")
    const closeVerticalNav = () => {
        const closeBtn: any = document.querySelector("#close-vertical-nav") 
        if(closeBtn){
            closeBtn.click();
        }
    }
    return (
    <div className={shown ? styles.verticalNav + " " + styles.shown : styles.verticalNav}>
        {/* <h3>{t("VerticalNav.Language")}</h3>
        <LangSwitch lo={lo}></LangSwitch> */}
        {/* <h3>{t("VerticalNav.Sections")}</h3> */}
        <div className={styles.logo}>
            <Logo logoNo={1}></Logo>
        </div>
        <ul className={styles.links}>
            {/* <li onClick={() => {closeVerticalNav()}}>
                <a href={'/'}>{t("VerticalNav.Home")}</a>
            </li> */}
            {/* <li onClick={() => {closeVerticalNav()}}>
                <a href={'#manufacturing'}>{t("VerticalNav.Manufacturing")}</a>
            </li>
            <li onClick={() => {closeVerticalNav()}}>
                <a href={'#fire-system'}>{t("VerticalNav.FireSystem")}</a>
            </li> */}
            <li onClick={() => {closeVerticalNav()}}>
                <a href={'#fields'}>
                    {t("VerticalNav.Fields")}
                </a>
            </li>
            <li onClick={() => {closeVerticalNav()}}>
                <a href={'#partners'}>
                    {/* {t("VerticalNav.Brands")} */}
                    Partners
                </a>
            </li>
            <li onClick={() => {closeVerticalNav()}}>
                <a href={'#where'}>
                    {/* {t("VerticalNav.Brands")} */}
                    Our Location
                </a>
            </li>
            {/* <li onClick={() => {closeVerticalNav()}}>
                <a href={'#products'}>{t("VerticalNav.Products")}</a>
            </li> */}
            {/* <li onClick={() => {closeVerticalNav()}}>
                <a href={'#contact'}>{t("VerticalNav.ContactUs")}</a>
            </li> */}
        </ul>
        {/* <h3>{t("VerticalNav.Contact")}</h3>
        <SocialUl></SocialUl> */}
    </div>
  )
}

export default VerticalNav