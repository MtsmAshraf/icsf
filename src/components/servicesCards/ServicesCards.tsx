"use client"
import React from 'react'
import styles from "./services-cards.module.css"
import Image from 'next/image'
import Card from './card/card'
import design from "../../../public/imgs/icons8-design-100.png"
import supply from "../../../public/imgs/icons8-supply-100.png"
import international from "../../../public/imgs/icons8-international-50.png"
import installation from "../../../public/imgs/icons8-installation-64.png"
import testing from "../../../public/imgs/icons8-testing-48.png"
import maintainance from "../../../public/imgs/icons8-installation-50.png"
import MainHeading from '../MainHeading/MainHeading'

const ServicesCards = ({
    lo
}: {
    lo: string
}) => {
  return (
    <section className={lo === "en" ? styles.servicesCards + " " + styles.en : styles.servicesCards}>
        <div className="container">
            <MainHeading>
                {/* <span>
                    {t('SubHeading')}
                </span>
                <h1>
                    {t('Heading')}
                </h1> */}
                <h2>
                    Services
                </h2>
                <p>
                    We provide a turn key solution
                    for all firefighting, fire alarm,
                    security and surveillance
                    systems
                </p>
            </MainHeading>
            <div className={styles.cards}>
                <Card>
                    <div className={` hexagon`}>
                        <Image src={design} alt='design'></Image>
                    </div>
                    <div className={styles.cardText}>    
                        <h2 className=''>
                            Design
                        </h2>
                        <p>
                            DESIGN ALL FIREFIGHTING AND FIRE ALARM SYSTEM
                        </p>
                    </div>
                </Card>
                <Card>
                    <div className={` hexagon`}>
                        <Image src={supply} alt='supply'></Image>
                    </div>
                    <div className={styles.cardText}>    
                        <h2 className=''>
                            SUPPLY
                        </h2>
                        <p>
                            SUPPLY ALL SYSTEMS COMPONENTS
                        </p>
                    </div>
                </Card>
                <Card>
                    <div className={` hexagon`}>
                        <Image src={international} alt='international'></Image>
                    </div>
                    <div className={styles.cardText}>    
                        <h2 className=''>
                            International
                        </h2>
                        <p>
                            AGENTS FOR SOME OF
                            INTERNATIONAL BRANDS
                        </p>
                    </div>
                </Card>
                <Card>
                    <div className={` hexagon`}>
                        <Image src={installation} alt='installation'></Image>
                    </div>
                    <div className={styles.cardText}>    
                        <h2 className=''>
                            INSTALLATION
                        </h2>
                        <p>
                            INSTALLATION USING ALL NECESSARY TOOLS
                        </p>
                    </div>
                </Card>
                <Card>
                    <div className={` hexagon`}>
                        <Image src={testing} alt='testing'></Image>
                    </div>
                    <div className={styles.cardText}>    
                        <h2 className=''>
                            TESTING
                        </h2>
                        <p>
                            TESTING & COMMISSIONING
                        </p>
                    </div>
                </Card>
                <Card>
                    <div className={` hexagon`}>
                        <Image src={maintainance} alt='maintainance'></Image>
                    </div>
                    <div className={styles.cardText}>    
                        <h2 className=''>
                            MAINTENANCE
                        </h2>
                        <p>
                            MAINTENANing ALL FIREFIGHTING AND FIRE ALARM SYSTEM
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    </section>
  )
}

export default ServicesCards