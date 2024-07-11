"use client"

import React, { useEffect, useState } from 'react'
import { Nunito_Sans, Cairo, Lora, Open_Sans, Platypi, GFS_Didot } from 'next/font/google'
import Nav from '@/components/Nav'

import { photos } from '@/utils/data'
const display_photos = photos.slice(0, 2) 

import { journal } from '@/utils/data'

const displayJournals = [journal[0], journal[1]]
import { motion } from 'framer-motion'

const nunito_sans = Nunito_Sans({ weight: ["200", "400", "500", "600"], subsets: ["latin"] })
const cairo = Cairo({ weight: ["200", "300", "400", "500", "600", "700"], subsets: ["latin"] })
const open_sans = Open_Sans({ weight: ["400", "500", "600", "700"], subsets: ["latin"] })
const gfs_didot = GFS_Didot({ weight: "400", subsets: ["greek"] })

function page() {

  const [currentPath, setCurrentPath] = useState("/")

  useEffect(() => {

    if (window !== undefined) {
      setCurrentPath(window.location.pathname)
    }

  }, [])

  let coverCount = 0

  const handleChangeCover = () => {

    coverCount === 3 ? coverCount = 0 : coverCount++

    const covers = document.querySelectorAll(".cover-bg")

    covers.forEach(cover => {
      cover.classList.remove("visible-cover")
    })

    covers[coverCount].classList.add("visible-cover")
  }

  const handleToggleMenu = () => {
    const menu = document.querySelector(".mobile-menu")
    menu?.classList.toggle("open")
  }

  return (
    <div>

      {/* Mobile */}

      <div className=' md:hidden w-full flex items-center justify-between box-border mt-10 absolute top-0 left-0 z-10 overflow-hidden'>

        <a href="/">
          <i className="fi fi-ss-island-tropical ml-10 mr-10 text-3xl opacity-90"></i>
        </a>

        <i className="fi fi-rr-angle-small-down text-white text-2xl cursor-pointer flex items-center justify-center mr-10" onClick={handleToggleMenu}></i>
      </div>

      <div className=' md:opacity-0 opacity-0 w-full h-screen bg-[#e6e9e9] fixed z-20 block pt-8 mobile-menu'>

        <div className=' w-full flex items-center justify-end pr-8 box-border'>
          <i className="fi fi-rr-cross text-black text-2xl cursor-pointer" onClick={handleToggleMenu}></i>
        </div>

        <img src="/veggie.png" alt="" className=' w-44 absolute bottom-0 mb-10 transform -translate-x-16 left-0 blur-sm' />

        <img src="/veggie2.png" alt="" className=' w-52 absolute bottom-0 mb-48 transform translate-x-16 right-0 blur-md' />

        <div className=' w-4/5 pt-3 pb-3 ml-auto mr-auto text-center flex items-center justify-center'>
          <a href="/about" className={`${nunito_sans.className} ${currentPath === "/about" ? "font-bold" : "font-normal"} text-lg text-black hover:bg-white hover:bg-opacity-25 w-full pt-3 pb-3`}>ABOUT</a>
        </div>

        <div className=' w-4/5 pt-3 pb-3 ml-auto mr-auto text-center flex items-center justify-center'>
          <a href="/gallery" className={`${nunito_sans.className} ${currentPath === "/explore" ? "font-bold" : "font-normal"} text-lg text-black hover:bg-white hover:bg-opacity-25 w-full pt-3 pb-3`}>GALLERY</a>
        </div>

        <div className=' w-4/5 pt-3 pb-3 ml-auto mr-auto text-center flex items-center justify-center'>
          <a href="/search" className={`${nunito_sans.className} ${currentPath === "/search" ? "font-bold" : "font-normal"} text-lg text-black hover:bg-white hover:bg-opacity-25 w-full pt-3 pb-3`}>SEARCH</a>
        </div>

        <div className=' w-4/5 pt-3 pb-3 ml-auto mr-auto text-center flex items-center justify-center'>
          <a href="/journal" className={`${nunito_sans.className} ${currentPath === "/journal" ? "font-bold" : "font-normal"} text-lg text-black hover:bg-white hover:bg-opacity-25 w-full pt-3 pb-3`}>JOURNAL</a>
        </div>

      </div>

      {/* Ouuutt */}

      <div className='cover-bg w-full h-screen bg1'></div>
      <div className='cover-bg w-full h-screen bg2'></div>
      <div className='cover-bg w-full h-screen bg3'></div>
      <div className='cover-bg w-full h-screen bg4'></div>

      <header className=' w-full h-screen' id='header'>

        <Nav />

        <div className=' md:pt-24 pt-52'>
          <motion.h1
            className={`${gfs_didot.className} font-medium md:text-[40px] text-center text-4xl md:leading-normal leading-relaxed`}
            initial={{ opacity: 0, translateY: "30px" }}
            whileInView={{ opacity: 1, translateY: "0px" }}
            transition={{ delay: 0.2, duration: 0.6, type: "tween", ease: "easeOut" }}
          >
            The Sky Is <br className=' md:hidden block' /> Beautiful
          </motion.h1>
          <motion.h2
            className={`${nunito_sans.className} md:text-lg text-base text-center text-white md:mt-2 mt-5`}
            initial={{ opacity: 0, translateY: "30px" }}
            whileInView={{ opacity: 1, translateY: "0px" }}
            transition={{ delay: 0.8, duration: 0.6, type: "tween", ease: "easeOut" }}
          >
            Welcome to my Gallery
          </motion.h2>
        </div>

        <motion.div
          className=' w-max md:mt-10 mt-20 ml-auto mr-auto flex items-center justify-center p-3 ring-1 ring-white rounded-full'
          onClick={handleChangeCover}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <i className="fi fi-ss-play md:text-lg text-xl flex items-center justify-center cursor-pointer"></i>

        </motion.div>

        <motion.div
          className='flex items-center justify-center w-max ml-auto mr-auto mt-24'
          initial={{ opacity: 0, translateY: "-10px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          transition={{ delay: 1, duration: 0.6, type: "spring", ease: "easeIn" }}
        >
          <motion.a
            href='#blog-preview'
            className={`flex items-center justify-center text-sm cursor-pointer ${nunito_sans.className}`}
            whileHover={{ gap: "5px" }}
          >Let's explore
            <i className="fi fi-ts-angle-small-right text-white text-xl flex items-center justify-center w-max"></i>
          </motion.a>
        </motion.div>

        <div className=' bg-gradient-to-b from-transparent to-[#020b11] w-full h-48 absolute bottom-0 -z-10 m-0 transform md:translate-y-0 translate-y-5'></div>

      </header>

      {/* Blogs Preveiw Area */}

      <section id='blog-preview' className=' bg-[#020b11] w-full md:h-screen md:p-0 md:pt-16 p-10 m-0'>

        <motion.h1
          className={`${nunito_sans.className} text-center text-2xl md:p-0 p-6 pb-2`}
          initial={{ opacity: 0, translateY: "30px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          transition={{ delay: 0.6, duration: 1, type: "spring", ease: "easeIn" }}
        >Showcase the beauty of the world</motion.h1>

        <motion.p
          className={`${nunito_sans.className} text-center text-sm md:mt-5 mt-8 font-light md:p-0 p-6 pt-0`}
          initial={{ opacity: 0, translateY: "30px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          transition={{ delay: 0.7, duration: 1, type: "spring", ease: "easeIn" }}
        >By taking photos of moments and amaizing sights 🌿 <br /> This is a Journal, a Log, and a Diary.</motion.p>

        <div className=' md:flex items-center justify-center gap-10 block md:mt-10 mt-14 w-4/5 ml-auto mr-auto'>

          {display_photos.map(photo => {
            return (
              <motion.div
                className=' md:w-1/4 w-full ml-auto mr-auto md:m-0 mb-10 h-80 overflow-hidden bg-black'
                initial={{ opacity: 0, translateY: "30px" }}
                whileInView={{ opacity: 1, translateY: "0px" }}
                transition={{ delay: 1, duration: 1, type: "spring", ease: "easeIn" }}
                key={photo.id}
              >
                <img src={photo.image} alt="" className=' absolute -z-10 w-full h-full filter brightness-100 hover:brightness-110 transition-all ease-in' />

                <div className='absolute bottom-0 mb-6 transform left-1/2 -translate-x-1/2 z-10'>
                  <p className={`${gfs_didot.className} text-2xl text-center font-medium`}>{photo.title}</p>
                  <p className={`${nunito_sans.className} mt-3 text-sm mb-5 text-center font-medium`}>{photo.subtitle}</p>
                </div>

                {/* View btn */}

                <div className=' w-full ml-auto mr-auto h-full flex items-center justify-center absolute z-10 opacity-0 hover:opacity-100 hover:backdrop-brightness-75 transition-all ease-in-out'>

                  <a href={`/gallery/${photo.id}`} className={`w-1/2 pt-2 pb-2 bg-white text-black text-sm text-center ${nunito_sans.className}`}>View</a>
                </div>

              </motion.div>
            )
          })}

        </div>

        <a href="/gallery" className=' flex items-center justify-center gap-2 pt-5 text-orange-300'>
          See more <i className="fi fi-rr-arrow-small-right flex items-center justify-center"></i>
        </a>

      </section>

      <section id='journal' className=' bg-[#020b11]   md:p-20 p-10 m-0'>

        <motion.h1
          className={`${nunito_sans.className} text-center text-2xl md:p-0 p-6 pb-2`}
          initial={{ opacity: 0, translateY: "30px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          transition={{ delay: 0.6, duration: 1, type: "spring", ease: "easeIn" }}
        >My Journal</motion.h1>

        <motion.p
          className={`${nunito_sans.className} text-center text-sm md:mt-5 mt-8 font-light md:p-0 p-6 pt-0`}
          initial={{ opacity: 0, translateY: "30px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          transition={{ delay: 0.7, duration: 1, type: "spring", ease: "easeIn" }}
        >This is my story. My journey that I have documented. Basically my hobby and life 🥰</motion.p>

        <div className=' md:flex items-center justify-center gap-10 block md:mt-14 mt-14 w-4/5 ml-auto mr-auto'>

          {displayJournals.map(journal => {
            return (
              <motion.div
                className=' md:w-3/6 w-full ml-auto mr-auto md:m-0 mb-10 overflow-hidden'
                initial={{ opacity: 0, translateY: "30px" }}
                whileInView={{ opacity: 1, translateY: "0px" }}
                transition={{ delay: 0.8, duration: 1, type: "spring", ease: "easeIn" }}
                key={journal.id}
              >

                <div className=' w-full h-60 overflow-hidden'>

                  <img src={`${journal.image}`} alt="" className=' absolute w-full h-60 filter brightness-110' />

                  {/* View btn */}

                  <div className=' w-full ml-auto mr-auto h-60 flex items-center justify-center absolute z-10 opacity-0 hover:opacity-100 hover:backdrop-brightness-75 transition-all ease-in-out'>

                    <a href={`/journal/${journal.id}`} className={`w-1/2 pt-2 pb-2 bg-white text-black text-sm text-center ${nunito_sans.className}`}>View</a>
                  </div>
                </div>

                <motion.p
                  className={` text-center text-white ${cairo.className} text-sm mt-5`}
                  initial={{ opacity: 0, translateY: "-30px" }}
                  whileInView={{ opacity: 1, translateY: "0px" }}
                  transition={{ delay: 1.1, duration: 1, type: "spring", ease: "easeIn" }}
                >{journal.uploadedAt}</motion.p>

                <motion.p
                  className={`${gfs_didot.className} text-center md:text-xl text-lg mt-3`}
                  initial={{ opacity: 0, translateY: "-30px" }}
                  whileInView={{ opacity: 1, translateY: "0px" }}
                  transition={{ delay: 1.2, duration: 1, type: "spring", ease: "easeIn" }}
                >
                  {journal.title}
                </motion.p>

                <motion.p
                  className={`${nunito_sans.className} text-center md:text-sm text-sm mt-3 font-light`}
                  initial={{ opacity: 0, translateY: "-30px" }}
                  whileInView={{ opacity: 1, translateY: "0px" }}
                  transition={{ delay: 1.4, duration: 1, type: "spring", ease: "easeIn" }}
                >
                  {journal.subtitle}
                </motion.p>

              </motion.div>
            )
          })}

        </div>

        <a href="/gallery" className=' flex items-center justify-center gap-2 pt-5 text-orange-300'>
          All Posts <i className="fi fi-rr-arrow-small-right flex items-center justify-center"></i>
        </a>

      </section>

      <footer className=' w-full h-[50rem] relative m-0 p-0'>

        <div className=' bg-gradient-to-b from-[#020b11] to-transparent w-full h-48 absolute z-10 m-0 p-0 top-0 transform -translate-y-5'></div>

        <div className=' relative z-20 w-full h-full flex items-center justify-center'>

          <div className=' md:flex items-center justify-center gap-5 block'>

            <p className={`${nunito_sans.className} text-center`}>© 2024 MY WONDERFUL STORY</p>

            <div className=' flex items-center justify-center gap-2 md:m-0 mt-3'>
              <span className=' md:block hidden'>|</span> <a href="/about" className={`${nunito_sans.className} ${currentPath === "/about" ? "font-bold" : "font-normal"} text-xs`}>ABOUT</a>

              | <a href="/gallery" className={`${nunito_sans.className} ${currentPath === "/explore" ? "font-bold" : "font-normal"} text-xs`}>GALLERY</a>

              | <a href="/journal" className={`${nunito_sans.className} ${currentPath === "/journal" ? "font-bold" : "font-normal"} text-xs`}>JOURNAL</a>

              | <a href="/search" className={`${nunito_sans.className} ${currentPath === "/search" ? "font-bold" : "font-normal"} text-xs`}>SEARCH</a>
            </div>

          </div>
        </div>

      </footer>

    </div>
  )
}

export default page