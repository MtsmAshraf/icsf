import React from 'react'
import styles from "./products-cards.module.css"
import ProductCard from './ProductCard/ProductCard'
import allProducts, { Product } from "../allProducts"
import Image from 'next/image'
// import { useTranslations } from 'next-intl'
const ProductCards = ({
    category
} : {
    category: string
}) => {
    // const t = useTranslations("HomePage.Products")
    const arr = [1,2,2,324,4,-1]
    console.log(arr.sort())
  return (
    <div className={styles.productCards}>
        {
            allProducts.map((product: Product) => {
                if(!category){
                    return(
                        <ProductCard key={product.id}>
                            <div className={parseInt(product.id) % 2 !== 0 ? styles.odd + " " + styles.productCard : styles.productCard}>
                                <div className={styles.cardImg}>
                                    <Image src={product.src} alt='Product Image'></Image>
                                </div>
                                <p>
                                    {/* {t(`ProductsCards.${product.id}`)} */}
                                    {product.name}
                                </p>
                            </div>
                        </ProductCard>
                    )
                }else{
                    return(
                        product.category === category && 
                        <ProductCard key={product.id}>
                            <div className={styles.productCard}>
                                <div className={styles.cardImg}>
                                    <Image src={product.src} alt='Product Image'></Image>
                                </div>
                                <p>
                                    {/* {t(`ProductsCards.${product.id}`)} */}
                                    {product.name}
                                </p>
                            </div>
                        </ProductCard>
                    )
                }
            })
        }
    </div>
  )
}

export default ProductCards