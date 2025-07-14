import React from 'react'
import styles from "./social-ul.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
const SocialUl = () => {
  return (
    <ul className={styles.socialUl}>
        <li>
            <a title="Phone Call" target='_blank' href="tel:+201004893305">
                <FontAwesomeIcon icon={faPhone}/>
            </a>
        </li>
        <li>
            <a title="Gmail" target='_blank' href="mailto:Abduallah.almhdy@gmail.com?subject=Al-Mahdy-website">
                <FontAwesomeIcon icon={faEnvelope}/>
            </a>
        </li>
        <li>
            <a title="Whatsapp" target='_blank' href="https://wa.me/201004893305">
                <FontAwesomeIcon icon={faWhatsapp}/>
            </a>
        </li>
    </ul>
  )
}

export default SocialUl