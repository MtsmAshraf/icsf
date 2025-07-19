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
                    <span>
                        {t('Filter.All')}
                    </span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} defaultChecked type="radio" id='all' name='grid-filter' value={""}/>
            </div>
            <div>
                <label htmlFor="cat-1">
                    <div className={styles.icon}>
                        <Image src={body} alt='cat-1 icon'></Image>
                    </div>
                    <span>
                        {/* {t('Filter.Body')} */}
                        Cat 1
                    </span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='cat-1' name='grid-filter' value={"cat-1"}/>
            </div>
            <div>
                <label htmlFor="cat-2">
                    <div className={styles.icon}>
                        <Image src={helmet} alt='helmet icon'></Image>
                    </div>
                    <span>
                        {/* {t('Filter.Head')} */}
                        Cat 2
                    </span>
                </label>
                <input onChange={(e) => setSelectedCategory(e.target.value)} type="radio" id='cat-2' name='grid-filter' value={"cat-2"}/>
            </div>
        </div>
        <ProductCards category={selectedCategory}></ProductCards>
    </section>
  )
}

export default ProductsGrid