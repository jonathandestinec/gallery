"use client"

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Tag from '../Tag';

import { Nunito_Sans, Cairo, Lora, Open_Sans, Platypi, GFS_Didot } from 'next/font/google'

const nunito_sans = Nunito_Sans({ weight: ["200", "400", "500", "600"], subsets: ["latin"] })
const cairo = Cairo({ weight: ["200", "300", "400", "500", "600", "700"], subsets: ["latin"] })
const open_sans = Open_Sans({ weight: ["400", "500", "600", "700"], subsets: ["latin"] })
const gfs_didot = GFS_Didot({ weight: "400", subsets: ["greek"] })

function Header(props: {
  source: {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    views: number;
    images: string[];
    uploadedAt: string;
    time: string;
    tags: string[];
  } | undefined
}) {

  const images = props.source?.images

  let photoCount = -1

  const handleChangePhoto = () => {

    if (images) {
      const photosLength = images.length

      photoCount === (photosLength - 1) ? photoCount = 0 : photoCount++

      console.log(photoCount)

      const covers = document.querySelectorAll(".photo_img")

      covers.forEach(cover => {
        cover.classList.remove("opacity-100")
        cover.classList.add("opacity-0")
      })

      covers[photoCount].classList.add("opacity-100")
    }
  }

  return (
    <div>

      {/* Banner */}
      <div className=' md:w-7/12 w-9/12 h-[23rem] mr-auto ml-auto md:mt-8 mt-16 rounded-2xl overflow-hidden relative ring-1 ring-slate-300'>

        {images && (
          images.map(image => (

            <Image src={image} alt='' width={200} height={200} className=' w-full h-full photo_img absolute top-0 left-0 journal-img' key={image} priority />

          ))
        )}

        {/* Change Photo Btn */}
        <div className=' w-full h-max mb-10 flex items-center justify-center absolute bottom-0'>
          <motion.div
            className=' w-max flex items-center justify-center p-3 ring-1 ring-white rounded-full'
            onClick={handleChangePhoto}
            initial={{ scale: 1, translateX: "0px" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <i className="fi fi-ss-play md:text-lg text-xl flex items-center justify-center cursor-pointer"></i>

          </motion.div>
        </div>
      </div>

      <div className='md:w-7/12 w-9/12 ml-auto mr-auto mt-5'>

        <div className=' md:flex items-center justify-between flex-wrap block'>

          {/* Tags */}
          <div className=' flex items-center justify-center gap-5 md:w-1/5 w-max overflow-x-scroll tags-container'>
            {
              props.source?.tags.map(tag => (
                <Tag tag={`${tag}`} key={tag} />
              ))
            }
          </div>

          <div className=' flex items-center justify-between gap-5 md:mt-0 mt-5 w-max'>

            {/* Uploaded At */}

            <p className={`${nunito_sans.className} text-sm text-center font-black`}>{props.source?.uploadedAt}</p>

            {/* Views */}
            <div className=' font-mono text-sm flex items-center justify-start gap-2 w-full box-border'>
              <i className="fi fi-sr-eye flex items-center justify-center text-lg"></i>
              <h4 className=' font-mono text-base font-normal'>{props.source?.views}</h4>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Header