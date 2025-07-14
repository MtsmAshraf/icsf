"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./main-heading.module.css"
const MainHeading = ({
    children,
    centered
} : {
    children: React.ReactNode,
    centered?: boolean,
}) => {
  // scroll animations
  const mainHeading: any = useRef(null)
  const [mainHeadingScrolled, setMainHeadingScrolled] = useState(false)
  
  function getOffsetTopRelativeToWindow(element: HTMLElement | any) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      return rect.top + scrollTop;
  }
  
  const scrollmainHeadingiSection = () => {
  if(mainHeading.current){
      const headingOffsetTop = getOffsetTopRelativeToWindow(mainHeading.current)
      if(headingOffsetTop <= (window.scrollY + 350)){
          setMainHeadingScrolled(true)
      }
      }
  }
  useEffect(() => {
      const headingOffsetTop = getOffsetTopRelativeToWindow(mainHeading.current)
      if(headingOffsetTop <= (window.scrollY + 350)){
          setTimeout(() => {
              setMainHeadingScrolled(true)
          }, 1200);
      }
      window.addEventListener("scroll", scrollmainHeadingiSection)
  },[mainHeadingScrolled])

  
  const classNames = [
      // lo === "ar" ? styles.ar : null,
      centered ? styles.centered : null,
      mainHeadingScrolled ? styles.scrolled : null,
      styles.mainHeading
  ]
  return (
    <div ref={mainHeading} className={classNames.join(" ")}>{children}</div>
  )
}

export default MainHeading