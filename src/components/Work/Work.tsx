import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./work.module.css"
import Image from 'next/image'
import test from "../../../public/imgs/lucas-gallone-uPk5aOtimUE-unsplash.jpg"
import { useTranslations } from 'next-intl'
const Work = ({
    lo
}: {
    lo: string
}) => {
  const t = useTranslations("HomePage")
  return (
    <section className={lo === "ar" ? styles.work + " " + styles.ar : styles.work}>
        <div className="container">
            <MainHeading>
                <h2>
                    {t("Work.MainHeading.H2")}
                </h2>
            </MainHeading>
            <div className={styles.workCards}>
                <div className={styles.card}>
                    <div>
                        <Image src={test} alt='Work Image'></Image>
                    <h3>
                        Work Title
                    </h3>
                    </div>
                    <p>
                        The only way to get trouble-free and long-term use of the compressor is to use only original spare parts and lubricants. Al-assema competent service staff use only genuine  spare 
                    </p>
                </div>
                <div className={styles.card}>
                    <div>
                        <Image src={test} alt='Work Image'></Image>
                    <h3>
                        Work Title
                    </h3>
                    </div>
                    <p>
                         original spare parts and lubricants. Al-assema competent service staff use only genuine  spare 
                    </p>
                </div>
                <div className={styles.card}>
                    <div>
                        <Image src={test} alt='Work Image'></Image>
                    <h3>
                        Work Title
                    </h3>
                    </div>
                    <p>
                        The only way to get trouble-free and long-term use of the compressor is to use only original spare parts and lubricants. Al-assema competent service staff use only genuine  spare 
                    </p>
                </div>
                <div className={styles.card}>
                    <div>
                        <Image src={test} alt='Work Image'></Image>
                    <h3>
                        Work Title
                    </h3>
                    </div>
                    <p>
                        The only way to get trouble-free and long-term use of the compressor is to use only original spare parts and lubricants. Al-assema competent service staff use only genuine  spare 
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work