// import React from 'react'
// import styles from "./products.module.css"
// import MainHeading from '../MainHeading/MainHeading'
// import ProductsGrid from './ProductsGrid/ProductsGrid'
// import { useTranslations } from 'next-intl'
// const Products = ({
//   lo
// }: {
//   lo: string
// }) => {
//   const t = useTranslations("HomePage")
//   return (
//     <section id='products' className={lo === "ar" ? styles.products + " " + styles.ar : styles.products}>
//         <div className="container">
//             <MainHeading>
//                 <h2>
//                   {t("Products.MainHeading.H2")}
//                 </h2>
//                 <p>
//                   {t("Products.MainHeading.P")}
//                 </p>
//             </MainHeading>
//         <ProductsGrid lo={lo}></ProductsGrid>
//         </div>
//     </section>
//   )
// }

// export default Products