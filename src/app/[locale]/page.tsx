import About from "@/components/About/About";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Loader from "@/components/Loader/Loader";
import ServicesCards from "@/components/servicesCards/ServicesCards";
import Partners from "@/components/Partners/Partners";
import Fields from "@/components/Fields/fields";
import Clients from "@/components/Clients/Clients";
// import Contact from "@/components/Contact/Contact";
import Where from "@/components/Where/Where";
// import Products from "@/components/Products/Products";
// import Work from "@/components/Work/Work";
// import Testimonials from "@/components/Testimonials/Testimonials";
// import Contact from "@/components/Contact/Contact";
// import Fields from "@/components/Fields/fields";
// import Why from "@/components/Why/why";
// import Brands from "@/components/Brands/Brands";
// import Manufacturing from "@/components/Manufacturing/Manufacturing";
// import FireSystem from "@/components/FireSystem/FireSystem";
// import About from "@/components/About/About";

export default async function Home({
  params
}: {
  params: Promise<{locale: string}>

}) {
  
  const { locale } = await params;
  
  return (
    <div className={styles.page}>
      <Loader lo={locale}></Loader>
      <Hero lo={locale}></Hero>
      <About lo={locale}></About>
      <Partners lo={locale}></Partners>
      <ServicesCards lo={locale}></ServicesCards>
      <Fields lo={locale}></Fields>
      <Clients lo={locale}></Clients>
      {/* 
      <Why lo={locale}></Why>
      <Manufacturing lo={locale}></Manufacturing>
      <FireSystem lo={locale}></FireSystem>
      <Fields lo={locale}></Fields> */}
      {/* <Products lo={locale}></Products> */}
      {/* <Work lo={locale}></Work>
      <Testimonials parentEl={"home"} lo={locale}></Testimonials> */}
      <Where lo={locale}></Where>
      {/* <Contact lo={locale}></Contact> */}
    </div>
  );
}
