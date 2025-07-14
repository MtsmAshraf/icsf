"use client"
import React, { useState } from 'react'
import styles from "./products-grid.module.css"
import ProductCards from './ProductCards/ProductCards'
import Image from 'next/image'
import all from "../../../../public/imgs/products-icons/safety-all.svg"
import body from "../../../../public/imgs/products-icons/body.svg"
import feet from "../../../../public/imgs/products-icons/feet.svg"
import eyes from "../../../../public/imgs/products-icons/eyes.svg"
import helmet from "../../../../public/imgs/products-icons/helmet.svg"
import hands from "../../../../public/imgs/products-icons/hands.svg"
import traffic from "../../../../public/imgs/products-icons/traffic.svg"
import paper from "../../../../public/imgs/products-icons/paper.svg"
import { useTranslations } from 'next-intl'

const ProductsGrid = ({
    lo
}: {
    lo: string
}) => {
    const [selectedCategory, setSelectedCategory] = useState("")
    const t = useTranslations("HomePage.Products")
  return (
    <section className={lo === "ar" ? styles.productsGrid + " " + styles.ar : styles.productsGrid}>
        <div className={styles.filter}>
            <div>
                <label htmlFor="all">
                    <div className={styles.icon}>
                        <Image src={all} alt='all icon'></Image>
                    </div>
                    <span>{t('Filter.All')}</span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} defaultChecked type="radio" id='all' name='grid-filter' value={""}/>
            </div>
            <div>
                <label htmlFor="body">
                    <div className={styles.icon}>
                        <Image src={body} alt='body icon'></Image>
                    </div>
                    <span>{t('Filter.Body')}</span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='body' name='grid-filter' value={"body"}/>
            </div>
            <div>
                <label htmlFor="head">
                    <div className={styles.icon}>
                        <Image src={helmet} alt='helmet icon'></Image>
                    </div>
                    <span>{t('Filter.Head')}</span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='head' name='grid-filter' value={"head"}/>
            </div>
            <div>
                <label htmlFor="eyes">
                    <div className={styles.icon}>
                        <Image src={eyes} alt='eyes icon'></Image>
                    </div>
                    <span>{t('Filter.Eyes')}</span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='eyes' name='grid-filter' value={"eyes"}/>
            </div>
            <div>
                <label htmlFor="feet">
                    <div className={styles.icon}>
                        <Image src={feet} alt='feet icon'></Image>
                    </div>
                    <span>{t('Filter.Feet')}</span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='feet' name='grid-filter' value={"feet"}/>
            </div>
            <div>
                <label htmlFor="hands">
                    <div className={styles.icon}>
                        <Image src={hands} alt='hands icon'></Image>
                    </div>
                    <span>{t('Filter.Hands')}</span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='hands' name='grid-filter' value={"hands"}/>
            </div>
            <div>
                <label htmlFor="traffic">
                    <div className={styles.icon}>
                        <Image src={traffic} alt='traffic icon'></Image>
                    </div>
                    <span>{t('Filter.Traffic')}</span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='traffic' name='grid-filter' value={"traffic"}/>
            </div>
            <div>
                <label htmlFor="paper">
                    <div className={styles.icon}>
                        <Image src={paper} alt='paper icon'></Image>
                    </div>
                    <span>{t('Filter.Paper')}</span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='paper' name='grid-filter' value={"paper"}/>
            </div>
        </div>
        <ProductCards category={selectedCategory}></ProductCards>
    </section>
  )
}

export default ProductsGrid