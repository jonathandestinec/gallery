import React from 'react'
import { Nunito_Sans, Cairo, Lora, Open_Sans, Platypi, GFS_Didot } from 'next/font/google'

const nunito_sans = Nunito_Sans({ weight: ["200", "400", "500", "600"], subsets: ["latin"] })
const cairo = Cairo({ weight: ["200", "300", "400", "500", "600", "700"], subsets: ["latin"] })
const open_sans = Open_Sans({ weight: ["400", "500", "600", "700"], subsets: ["latin"] })
const gfs_didot = GFS_Didot({ weight: "400", subsets: ["greek"] })

import GalleryContents from '@/components/gallery-contents'

function page() {
  return (
    <div className=' gallery'>

      <div className=' flex items-center justify-between mt-3'>

        <a href="/">
          <i className="fi fi-ss-island-tropical md:ml-16 ml-10 md:text-3xl text-2xl opacity-90"></i>
        </a>

        <h1 className={`text-center ${nunito_sans.className} text-4xl underline-offset-4 mt-5 font-bold basis-auto`}>Gallery</h1>

        <a href="/">
          <i className="fi fi-rr-arrow-small-right md:text-3xl text-2xl flex items-center justify-center md:mr-16 mr-10"></i>
        </a>

      </div>


      <GalleryContents />

    </div>
  )
}

export default page