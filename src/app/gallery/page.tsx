import React from 'react'

import GalleryContents from '@/components/gallery-and-journal-contents'
import OtherNav from '@/components/OtherNav'
import { photos } from '@/utils/data'

function page() {

  return (
    <div className=' gallery'>

      <OtherNav page='Gallery' />

      <GalleryContents source={photos} sourceName='Gallery' />

    </div>
  )
}

export default page