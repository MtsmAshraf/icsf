import React from "react"
import styles from "./logo.module.css"
import { useTranslations } from "next-intl"
const Logo = ({
    lo
}: {
    lo: string
}) => {

  const t = useTranslations("Header")
  return (
    <div className={lo === "ar" ? styles.logo + " " + styles.ar : styles.logo}>
        <h3>
            {/* {t("Logo")} */}
            ICSF
        </h3>
    </div>
  )
}

export default Logo