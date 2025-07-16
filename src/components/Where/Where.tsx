"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./where.module.css"
// import { useTranslations } from 'next-intl'
import MainHeading from '../MainHeading/MainHeading'
const Where = ({
  lo
}: {
  lo: string
}) => {
  // const t = useTranslations("HomePage")
  // scroll animations
  const where: any = useRef(null)
  const [whereScrolled, setWhereScrolled] = useState(false)
  
  function getOffsetTopRelativeToWindow(element: HTMLElement | any) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      return rect.top + scrollTop;
  }
  
  const scrollWhereSection = () => {
  if(where.current){
      const headingOffsetTop = getOffsetTopRelativeToWindow(where.current)
      if(headingOffsetTop <= (window.scrollY + 350)){
          setWhereScrolled(true)
      }
      }
  }
  useEffect(() => {
      const headingOffsetTop = getOffsetTopRelativeToWindow(where.current)
      if(headingOffsetTop <= (window.scrollY + 350)){
          setTimeout(() => {
              setWhereScrolled(true)
          }, 1200);
      }
      window.addEventListener("scroll", scrollWhereSection)
  })

  
  const classNames = [
      lo === "ar" ? styles.ar : null,
      whereScrolled ? styles.scrolled : null,
      styles.where
  ]
  return (
    <section id='where' ref={where} className={classNames.join(" ")}>
        <MainHeading>
          <h2>
            {/* {t("Contact.MainHeading.H2")} */}
            Our Location          
          </h2>

          <p>
            Here are this locations of our head office and shops
          </p>
        </MainHeading>
          <div className={styles.locations}>
            <div className={styles.location}>
              <h2>
                {/* {t('Contact.Location.Heading')} */}
                ICSF shop
              </h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.781217974793!2d31.7427494!3d30.300289400000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457fd9b476b366b%3A0x66b4bb20a60b2145!2zSW50ZXJuYXRpb25hbCBjZW50ZXIgZm9yIGZpcmUgYW5kIHNhZmV0eSDYp9mE2YXYsdmD2LIg2KfZhNiv2YjZhNmKINmE2YTYp9i32YHYp9ihINmI2KfZhNin2YXZhiDYp9mE2LXZhtin2LnZig!5e0!3m2!1sen!2seg!4v1752687120428!5m2!1sen!2seg"
                allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <div className={styles.address}>
                <address>
                    Negoom El Safa Mall - Shop no.8, Ordonia, <br />
                    10th of Ramadan City, Egypt 

                  {/* {t('Contact.Location.Address.Line1')},
                  <br />
                  {t('Contact.Location.Address.Line2')},
                  <br />
                  {t('Contact.Location.Address.Line3')},
                  <br />
                  {t('Contact.Location.Address.Line4')} */}
                </address>
              </div>
            </div>
            <div className={styles.location}>
              <h2>
                {/* {t('Contact.Location.Heading')} */}
                Fire link office
              </h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1678.7855287936068!2d31.74373725104356!3d30.29739481117393!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE3JzUwLjUiTiAzMcKwNDQnNDAuMCJF!5e0!3m2!1sen!2seg!4v1752688045034!5m2!1sen!2seg"
                allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <div className={styles.address}>
                <address>
                    Jeddah Mall, Third Floor – Office No. 3, Ordonia, <br />
                    10th of Ramadan City, Egypt 

                  {/* {t('Contact.Location.Address.Line1')},
                  <br />
                  {t('Contact.Location.Address.Line2')},
                  <br />
                  {t('Contact.Location.Address.Line3')},
                  <br />
                  {t('Contact.Location.Address.Line4')} */}
                </address>
              </div>
            </div>
            <div className={styles.location}>
              <h2>
                {/* {t('Contact.Location.Heading')} */}
                Fire link shop
              </h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3444.8892354190525!2d31.743442128481053!3d30.297214757345994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE3JzUwLjEiTiAzMcKwNDQnNDIuMSJF!5e0!3m2!1sen!2seg!4v1752687032277!5m2!1sen!2seg" 
                allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <div className={styles.address}>
                <address>
                                  <p>
                    Jeddah Mall - Ground Floor - Shop No. 16, Ordonia, <br />
                    10th of Ramadan City, Egypt 
                                  </p>

                  {/* {t('Contact.Location.Address.Line1')},
                  <br />
                  {t('Contact.Location.Address.Line2')},
                  <br />
                  {t('Contact.Location.Address.Line3')},
                  <br />
                  {t('Contact.Location.Address.Line4')} */}
                </address>
              </div>
            </div>
          </div>
        {/* <div className={styles.socialMedia}>
          <div>
            <SocialUl></SocialUl>
          </div>
        </div> */}
    </section>
  )
}

export default Where