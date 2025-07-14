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
  },[contactScrolled])

  
  const classNames = [
      lo === "ar" ? styles.ar : null,
      contactScrolled ? styles.scrolled : null,
      styles.contact
  ]
  return (
    <section id='contact' ref={contact} className={classNames.join(" ")}>
        <MainHeading centered>
          <h2>
            {t("Contact.MainHeading.H2")}
          </h2>
        </MainHeading>
        <div className="container">
          <div className={styles.location}>
            <h2>
              {t('Contact.Location.Heading')}
            </h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215.2984717036612!2d31.744281594828276!3d30.300450805257057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457fd9cae6d2cd3%3A0xf460953f2a0d1aae!2z2KfZhNmF2YfYr9mKINmE2YTYo9mF2YYg2KfZhNi12YbYp9i52Yog2YjZhdiz2KrZhNiy2YXYp9iqINin2YTZhdi12KfZhti5!5e0!3m2!1sen!2seg!4v1748751259960!5m2!1sen!2seg" 
              allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className={styles.address}>
              <address>
                <FontAwesomeIcon icon={faLocationDot} />  {t('Contact.Location.Address.Line1')},
                <br />
                {t('Contact.Location.Address.Line2')},
                <br />
                {t('Contact.Location.Address.Line3')},
                <br />
                {t('Contact.Location.Address.Line4')}
              </address>
            </div>
          </div>
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