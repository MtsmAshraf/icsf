"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useTranslations } from 'next-intl'
import MainHeading from '../MainHeading/MainHeading'
const Contact = ({
  lo
}: {
  lo: string
}) => {
  const t = useTranslations("HomePage")
  // scroll animations
  const contact: any = useRef(null)
  const [contactScrolled, setContactScrolled] = useState(false)
  
  function getOffsetTopRelativeToWindow(element: HTMLElement | any) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      return rect.top + scrollTop;
  }
  
  const scrollcontactiSection = () => {
  if(contact.current){
      const headingOffsetTop = getOffsetTopRelativeToWindow(contact.current)
      if(headingOffsetTop <= (window.scrollY + 350)){
          setContactScrolled(true)
      }
      }
  }
  useEffect(() => {
      const headingOffsetTop = getOffsetTopRelativeToWindow(contact.current)
      if(headingOffsetTop <= (window.scrollY + 350)){
          setTimeout(() => {
              setContactScrolled(true)
          }, 1200);
      }
      window.addEventListener("scroll", scrollcontactiSection)
  })

  
  const classNames = [
      lo === "ar" ? styles.ar : null,
      contactScrolled ? styles.scrolled : null,
      styles.contact
  ]
  return (
    <section id='contact' ref={contact} className={classNames.join(" ")}>
        <MainHeading>
          <h2>
            {t("Contact.MainHeading.H2")}
          </h2>
          <p>
            Here are our location, phone numbers and social media links
          </p>
        </MainHeading>
        <div className="container">
          <div className={styles.info}>
              <div>
                {/* <h3>
                  Phone
                </h3> */}
                <div>
                  <div>
                    <a target='_blank' className={styles.iconLink} href="tel:+201004893305">
                      <FontAwesomeIcon icon={faPhone} />
                    </a>
                    <div>
                      <span>
                          {t('Contact.Contacts.Management')}
                      </span>  
                      <a target='_blank' href="tel:+201004893305">
                        +201004893305
                      </a>
                    </div>
                  </div>
                  <div>
                    <a target='_blank' className={styles.iconLink} href="tel:+201003117396">
                      <FontAwesomeIcon icon={faPhone} />
                    </a>
                    <div>
                      <span>
                        {t('Contact.Contacts.Exhibition')}
                      </span>  
                      <a target='_blank' href="tel:+201003117396">
                        +201003117396
                      </a>
                    </div>
                  </div>  
                  <div>
                    <a target='_blank' className={styles.iconLink} href="tel:+201025855588">
                      <FontAwesomeIcon icon={faPhone} />
                    </a>
                    <div>
                      <span>
                          {t('Contact.Contacts.Sales')}
                      </span>  
                      <a target='_blank' href="tel:+201025855588">
                        +201025855588
                      </a>
                    </div>
                  </div>  
                </div>
              </div>
              <div>
                {/* <h3>
                  Whatsapp
                </h3> */}
                <div>
                  <div>
                    <a target='_blank' className={styles.iconLink} href="https://wa.me/201004893305">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <div>
                      <span>
                          {t('Contact.Contacts.Management')}
                        </span>  
                      <a target='_blank' href="https://wa.me/201004893305">
                        +201004893305
                      </a>
                    </div>
                  </div>  
                  <div>
                    <a target='_blank' className={styles.iconLink} href="https://wa.me/201003117396">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <div>
                      <span>
                        {t('Contact.Contacts.Exhibition')}
                      </span>  
                      <a target='_blank' href="https://wa.me/201003117396">
                        +201003117396
                      </a>
                    </div>
                  </div>  
                  <div>
                    <a target='_blank' className={styles.iconLink} href="https://wa.me/201025855588">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <div>
                      <span>
                          {t('Contact.Contacts.Sales')}
                        </span>  
                      <a target='_blank' href="https://wa.me/201025855588">
                        +201025855588
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* <h3>
                  Email
                </h3> */}
                <div>
                  <div>
                    <a target='_blank' className={styles.iconLink} href="mailto:assemaforcompressor@gmail.com?subject=AlAsema-website">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <div>
                      <a target='_blank' href="mailto:Abduallah.almhdy@gmail.com?subject=Al-Mahdy-website">
                        Abduallah.almhdy@gmail.com
                      </a>
                    </div>
                  </div>  
                </div>
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

export default Contact