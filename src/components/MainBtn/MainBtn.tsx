import React from 'react'
import styles from "./main-btn.module.css"
const MainBtn = ({
    children,
    lo,
    href
} : {
    children: React.ReactNode,
    lo: string,
    href: string
}) => {
  return (
    <a href={href} className={lo === "ar" ? styles.mainBtn + " " + styles.ar : styles.mainBtn}>
        {children}
    </a>
  )
}

export default MainBtn