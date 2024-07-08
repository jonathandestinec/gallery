"use client"

import React, { useEffect, useState } from 'react'
import { Nunito_Sans } from 'next/font/google'

const nunito_sans = Nunito_Sans({ weight: ["200", "400", "500", "600"], subsets: ["latin"] })

function Nav() {

    const [currentPath, setCurrentPath] = useState("/")

    useEffect(() => {

        if (window !== undefined) {
            setCurrentPath(window.location.pathname)
        }

    }, [])

    console.log(currentPath)

    return (

        <div>

            {/* Desktop */}
            <nav className=' w-full h-14 md:flex items-center justify-center gap-28 pt-14 pb-14 hidden'>

                <a href="/about" className={`${nunito_sans.className} ${currentPath === "/about" ? "font-bold" : "font-normal"} text-xs`}>ABOUT</a>
                <a href="/gallery" className={`${nunito_sans.className} ${currentPath === "/explore" ? "font-bold" : "font-normal"} text-xs`}>GALLERY</a>

                <a href="/">
                    <i className="fi fi-rr-island-tropical ml-10 mr-10 text-3xl"></i>
                </a>

                <a href="/journal" className={`${nunito_sans.className} ${currentPath === "/journal" ? "font-bold" : "font-normal"} text-xs`}>JOURNAL</a>
                <a href="/search" className={`${nunito_sans.className} ${currentPath === "/search" ? "font-bold" : "font-normal"} text-xs`}>SEARCH</a>
            </nav>
        </div>
    )
}

export default Nav