"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from "./contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useTranslations } from 'next-intl'
import MainHeading from '../MainHeading/MainHeading'
// import SocialUl from '../SocialUl/SocialUl'
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
            Here are our phone numbers and social media links
          </p>
        </MainHeading>
        <div className="container">
          <div className={styles.info}>
              <div>
                <div>
                  <div>
                    <a target='_blank' className={styles.iconLink + ` hexagon`} href="tel:+201004384423">
                      <FontAwesomeIcon icon={faPhone} />
                    </a>
                <h3>
                  Phone
                </h3>
                    <div>
                      {/* <span>
                          {t('Contact.Contacts.Management')}
                      </span>   */}
                      <a target='_blank' href="tel:+201004384423">
                        +201004384423
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <a target='_blank' className={styles.iconLink + ` hexagon`} href="https://wa.me/201004384423">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                <h3>
                  Whatsapp
                </h3>
                    <div>
                      {/* <span>
                          {t('Contact.Contacts.Management')}
                        </span>   */}
                      <a target='_blank' href="https://wa.me/201004384423">
                        +201004384423
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <a target='_blank' className={styles.iconLink + ` hexagon`} href="mailto:assemaforcompressor@gmail.com?subject=AlAsema-website">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                <h3>
                  Email
                </h3>
                    <div>
                      <a target='_blank' href="mailto:username@example.com?subject=ICSF-website">
                        username@example.com
                      </a>
                    </div>
                  </div>  
                </div>
              </div>
          </div>
          <div className={styles.socialMedia}>
                <a href="https://www.facebook.com/profile.php?id=100064239420433">
                  <FontAwesomeIcon icon={faFacebookF} className='hexagon'  />
                  <span>ICSF</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100057528936336">
                  <FontAwesomeIcon icon={faFacebookF} className='hexagon'  />
                  <span>Fire Link</span>
                </a>
          </div>
        </div>
    </section>
  )
}

export default Contact