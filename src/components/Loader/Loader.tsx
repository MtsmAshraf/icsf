"use client"
import React, { useEffect, useState } from 'react'
import "./loader.css"
import Image from 'next/image'
import loaderImg from "../../../public/imgs/loader.svg"
import helmetIcon from "../../app/[locale]/favicon.ico"
import Logo from '../Logo/logo'
const Loader = ({
    lo
} : {
    lo: string
}) => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 500);
    },[])
    return (
        <div className={loaded ? "loading" + " " + "loaded" : "loading"}>
            {/* <div className='push-pop loader'>
                <div></div>
                <div></div>
            </div> */}
            {/* <div className='push-out loader'>
                <div></div>
                <div></div>
            </div> */}
            <div className="loader">
                <div>
                    <Image src={helmetIcon} alt='helmet Icon'></Image>
                    <Logo lo={lo}></Logo>
                </div>
                <Image src={loaderImg} alt='Loader'></Image>
            </div>
        </div>
    )
}

export default Loader