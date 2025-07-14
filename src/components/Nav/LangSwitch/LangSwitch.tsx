import React from 'react'
import styles from "./lang-switch.module.css"
import { usePathname, useRouter } from 'next/navigation'
const LangSwitch = ({
  lo
}: {
  lo: string
}) => {
  const pathname = usePathname()
  const router = useRouter()
  const changeLanguage = () => {
      const nextLocale = lo === "en" ? "ar" : "en";
      const splitPathname = pathname.split("/")
      splitPathname[1] = nextLocale;
      const jointPathname = splitPathname.join("/")
      router.replace(`${jointPathname}`)
  }
  return (
    <button onClick={changeLanguage} className={styles.langSwitch}>
      <span className={lo === "ar" ? styles.active : ""}>Ar</span>
      <span className={lo === "en" ? styles.active : ""}>En</span>
    </button>
  )
}

export default LangSwitch