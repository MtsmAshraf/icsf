"use client"
import React, { useEffect, useState } from 'react'
import "./loader.css"
import Logo from '../Logo/logo'
const Loader = ({
    lo
} : {
    lo: string
}) => {
    const [loaded, setLoaded] = useState(false)
    const [hide, setHide] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 300);
        setTimeout(() => {
            setHide(true)
        }, 700);
    },[])
    const classNames = [
        "loading",
        loaded ? "loaded" : "",
        hide ? "hide" : "",
    ]
    return (
        <div className={classNames.join(" ")}>
            <div className="loader">
                <div>
                    <Logo logoNo={1} lo={lo}></Logo>
                </div>
                <div>
                    <Logo logoNo={2} lo={lo}></Logo>
                </div>
                {/* <Image src={loaderImg} alt='Loader'></Image> */}
            </div>
        </div>
    )
}

export default Loader