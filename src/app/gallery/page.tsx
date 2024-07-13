import React from 'react'
import { Nunito_Sans, Cairo, Lora, Open_Sans, Platypi, GFS_Didot } from 'next/font/google'

const nunito_sans = Nunito_Sans({ weight: ["200", "400", "500", "600"], subsets: ["latin"] })
const cairo = Cairo({ weight: ["200", "300", "400", "500", "600", "700"], subsets: ["latin"] })
const open_sans = Open_Sans({ weight: ["400", "500", "600", "700"], subsets: ["latin"] })
const gfs_didot = GFS_Didot({ weight: "400", subsets: ["greek"] })

import GalleryContents from '@/components/gallery-contents'
import OtherNav from '@/components/OtherNav'

function page() {
  return (
    <div className=' gallery'>

      <OtherNav page='Gallery'/>

      <GalleryContents />

    </div>
  )
}

export default page