import React from 'react'

import GalleryContents from '@/components/gallery-and-journal-contents'
import OtherNav from '@/components/OtherNav'
import { journals } from '@/utils/data'

function page() {

  return (
    <div className=' gallery'>

      <OtherNav page='Journals' />

      <GalleryContents source={journals} sourceName='Journals' />

    </div>
  )
}

export default page