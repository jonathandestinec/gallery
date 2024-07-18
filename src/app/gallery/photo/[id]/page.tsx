"use client"

import React from 'react'
import { photos } from '@/utils/data'
import { Nunito_Sans, GFS_Didot } from 'next/font/google'
import OtherNav from '@/components/OtherNav'
import Image from 'next/image'
import { motion } from 'framer-motion'
import TextReveal from "@/components/magicui/text-reveal";
import { constrainedMemory } from 'process'

const nunito_sans = Nunito_Sans({ weight: ["200", "400", "500", "600"], subsets: ["latin"] })
const gfs_didot = GFS_Didot({ weight: "400", subsets: ["greek"] })

function page({ params }: { params: { id: string } }) {

    const photo = photos.find((photo) => photo.id === parseInt(params.id))

    const images = photo?.images

    let photoCount = -1

    const handleChangePhoto = () => {

        if (images) {
            const photosLength = images.length

            photoCount === (photosLength - 1) ? photoCount = 0 : photoCount++

            console.log(photoCount)

            const covers = document.querySelectorAll(".photo_img")
            const bgCover = document.querySelectorAll(".photo-bg-image")

            covers.forEach(cover => {
                cover.classList.remove("opacity-100")
                cover.classList.add("opacity-0")
            })

            bgCover.forEach(bgCover => {
                bgCover.classList.remove("opacity-100")
                bgCover.classList.add("opacity-0")
            })

            covers[photoCount].classList.add("opacity-100")
            bgCover[photoCount].classList.add("opacity-100")
        }
    }

    if (!photo) {
        return (
            <div className=' w-full h-screen ml-auto mr-auto flex items-center justify-center'>
                <p className='text-6xl text-center'>🙃🌨️🌿 <br /> <span className=' font-mono font-bold text-2xl'>This photo does not exist yet</span></p>
            </div>
        )
    }

    return (
        <div className=' w-full ml-auto mr-auto'>

            <OtherNav page='Photo' />

            <div className='md:w-1/2 w-10/12 ml-auto mr-auto md:mt-10 mt-24 ring-1 ring-gray-500 rounded-2xl md:p-8 p-5 box-border bg-opacity-10 bg-black backdrop-blur-xl'>

                <div className=' w-full md:h-[20rem] h-[25rem] relative'>
                    {
                        images?.map(image => (
                            <div key={image}>
                                <Image width={200} height={200} src={`${image}`} alt='' className=' w-full h-full absolute rounded-3xl photo_img' priority />
                            </div>
                        ))
                    }
                </div>

                <div className=' w-full h-16 flex items-center justify-center md:mb-0 mb-10'>

                    <div className=' font-mono text-sm flex items-center justify-start gap-2 absolute w-full pl-10 box-border'>
                        <i className="fi fi-sr-eye flex items-center justify-center text-lg"></i>
                        <h4 className=' font-mono text-base font-normal'>{photo.views}</h4>
                    </div>

                    <motion.div
                        className=' w-max md:mt-10 mt-16 ml-auto mr-auto flex items-center justify-center p-3 ring-1 ring-white rounded-full'
                        onClick={handleChangePhoto}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "tween", duration: 0.2 }}
                    >
                        <i className="fi fi-ss-play md:text-lg text-xl flex items-center justify-center cursor-pointer"></i>

                    </motion.div>
                </div>
            </div>

            <section className=' md:pt-16 pt-10 relative w-full h-screen'>

                {/* Gradient stuff */}
                {/* <div className=' w-full h-16 absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-[rgb(255 255 255/2)]'></div> */}

                {/* <TextReveal
                    className={`text-white text-center ${nunito_sans.className}`}
                    text={`${photo.subtitle}`}
                /> */}

                <motion.h1
                    className={`${gfs_didot.className} text-3xl text-center`}
                    initial={{translateY: "30px", opacity: 0}}
                    whileInView={{translateY: "0px", opacity: 1}}
                    transition={{delay: 0.1, ease: "easeInOut", duration: 0.5}}
                >{photo.title}</motion.h1>

                <div className="z-10 flex min-h-[16rem] items-center justify-center bg-transparent">

                    <TextReveal
                        className={`text-white ${nunito_sans.className} text-white`}
                        text={`${photo.subtitle}`}
                    />

                </div>

            </section>

            {/* Background images */}

            {
                images?.map(image => (
                    <Image width={200} height={200} src={`${image}`} alt='' className=' w-full h-screen rounded-3xl photo-bg-image fixed -z-10 top-0 left-0 blur-sm brightness-[40%]' key={image} priority />
                ))
            }
        </div>
    )
}

export default page