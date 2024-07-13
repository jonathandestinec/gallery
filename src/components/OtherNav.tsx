import React from 'react'

import { Nunito_Sans, GFS_Didot } from 'next/font/google'

const nunito_sans = Nunito_Sans({ weight: ["200", "400", "500", "600"], subsets: ["latin"] })
const gfs_didot = GFS_Didot({ weight: "400", subsets: ["greek"] })
function OtherNav(props: { page: string, title: string }) {
    return (
        <div className=' flex items-center justify-between md:mt-3 mt-8'>

            <a href="/">
                <i className="fi fi-ss-island-tropical md:ml-16 ml-10 md:text-3xl text-2xl opacity-90"></i>
            </a>

            <h1 className={`text-center ${nunito_sans.className} text-4xl underline-offset-4 mt-5 font-bold basis-auto`}>{props.page}</h1>

            <a href="/">
                <i className="fi fi-rr-arrow-small-right md:text-3xl text-2xl flex items-center justify-center md:mr-16 mr-10"></i>
            </a>

        </div>
    )
}

export default OtherNav