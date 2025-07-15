import React from "react"
import styles from "./logo.module.css"
import Image from "next/image"
import logo1 from "../../../public/imgs/logo-1.png"
import logo2 from "../../../public/imgs/logo-2.png"


const Logo = ({
    lo,
    logoNo
}: {
    lo: string,
    logoNo: number
}) => {

  return (
    <div className={lo === "ar" ? styles.logo + " " + styles.ar : styles.logo}>
      {
        logoNo === 1 ? 
        <Image src={logo1} alt="ICSF logo"></Image>
        :
        <Image src={logo2} alt="Fire Link logo"></Image>
      }
    </div>
  )
}

export default Logo