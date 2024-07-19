"use client"

import React, { useState } from 'react'

import OtherNav from '@/components/OtherNav'
import GalleryContents from '@/components/gallery-and-journal-contents'
import { journals, photos, tags } from '@/utils/data'
import { ScrollArea } from "@/components/ui/scroll-area"

import { Nunito_Sans, GFS_Didot } from 'next/font/google'

const nunito_sans = Nunito_Sans({ weight: ["200", "400", "500", "600"], subsets: ["latin"] })
const gfs_didot = GFS_Didot({ weight: "400", subsets: ["greek"] })


function page() {

    const [JournalArticles, setJournalArticles] = useState([...journals.slice(0, 2)])
    const [PhotoArticles, setPhotoArticles] = useState([...photos.slice(0, 2)])

    const initialJournalArticles = [...journals.slice(0, 2)]
    const initialPhotoArticles = [...photos.slice(0, 2)]

    const [activeTag, setActiveTag] = useState("")

    const allPhotos = [...photos]
    const allJournals = [...journals]

    const handleFindTag = (tag: string) => {
        // TODO: Implement search functionality with tags

        // Find the tag from the tags in the articles array
        const taggedPhotos = allPhotos.filter(article => article.tags.includes(tag))
        const taggedJournals = allJournals.filter(article => article.tags.includes(tag))

        console.log('Search by tag', tag, taggedPhotos)

        // Update the articles state with the filtered articles
        setPhotoArticles(taggedPhotos)
        setJournalArticles(taggedJournals)

        setActiveTag(tag)
    }

    const handleClearTags = () => {
        setPhotoArticles(initialPhotoArticles)
        setJournalArticles(initialJournalArticles)
        setActiveTag("")
    }

    const handleSearch = (query: string) => {
        // TODO: Implement search functionality with search input
        // Find the articles from the articles tags array in the search input
        // Update the articles state with the filtered articles

        console.log(query)

        const filteredPhotos = allPhotos.filter(article => article.title.toLowerCase().includes(query.toLowerCase()) || article.subtitle.toLowerCase().includes(query.toLowerCase()))
        const filteredJournals = allJournals.filter(article => article.title.toLowerCase().includes(query.toLowerCase()) || article.subtitle.toLowerCase().includes(query.toLowerCase()))

        setJournalArticles(filteredJournals)
        setPhotoArticles(filteredPhotos)

        if (!filteredJournals && !filteredPhotos) {
            setJournalArticles([])
            setPhotoArticles([])
        }
    }

    return (
        <div>
            <OtherNav page='Search' />

            {/* Search Bar */}

            <label className="input input-bordered flex items-center gap-2 md:w-2/5 w-3/4 ml-auto mr-auto mt-10 mb-5 bg-gray-800 bg-opacity-50">
                <input type="text" className="grow" placeholder="Search" onChange={(e) => {
                    handleSearch(e.target.value)
                }} />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>


            {/* Preview Container */}
            <div className=' w-4/5 mt-0 p-5 box-border ml-auto mr-auto ring-1 ring-slate-300 rounded-2xl md:flex gap-2 block'>

                {/* Tags */}
                <div className=' md:w-1/4 w-full ring-1 ring-slate-300 box-border rounded-lg flex items-center justify-start gap-5 flex-wrap flex-1 p-5'>

                    <div className=' h-max flex items-center justify-start gap-5 flex-wrap flex-1'>
                        {
                            tags.map((tag, i) => (
                                <div className={` w-16 h-max text-center pt-1 pb-1 rounded-lg ${activeTag === tag ? " bg-lime-500" : "bg-cyan-400"} bg-opacity-50 cursor-pointer mb-0`} key={i} onClick={() => {
                                    handleFindTag(tag)
                                }}>
                                    <p className=' text-sm font-light text-center font-mono'>{tag}</p>
                                </div>
                            ))
                        }

                        {/* Clear Tags */}

                        <div className={` w-16 h-max text-center pt-1 pb-1 rounded-lg bg-red-500 bg-opacity-50 cursor-pointer mb-0`} onClick={handleClearTags}>
                            <p className=' text-sm font-light text-center font-mono'>Clear</p>
                        </div>

                    </div>

                </div>

                {/* Recent Articles */}
                <ScrollArea className=' md:w-9/12 md:h-[20rem] h-[34rem] w-full p-5 box-border rounded-lg'>

                    {
                        PhotoArticles[0] === undefined && JournalArticles[0] === undefined ? (
                            <div className=' flex items-center justify-center w-full h-full'>
                                <p className=' text-center text-lg text-gray-400 font-light'>No results found. <br />
                                Try searching for something else 📸🖋️.</p>
                            </div>
                        ) : (
                            <div>
                                {
                                    PhotoArticles.map(article => (
                                        <div className=' w-full flex flex-wrap flex-1 mb-5' key={article.title}>
                                            <div className=' mt-2 w-full border-b border-b-slate-400'>
                                                <h1 className={`${gfs_didot.className} text-2xl`}>{article.title}</h1>
                                                <p className={`${nunito_sans.className} mt-4`}>{article.subtitle}</p>

                                                {/* Read More */}
                                                <div className=' flex items-center justify-end w-full gap-5'>
                                                    <a className={`${nunito_sans.className} font-semibold text-lime-500 flex items-center justify-center gap-1 mt-5 md:mr-14 mr-0 mb-5`} href={`/gallery/photo/${article.id}`}>
                                                        <span>Read more</span>
                                                        <i className="fi fi-rr-arrow-small-right flex items-center justify-center h-max"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                                {
                                    JournalArticles.map(article => (
                                        <div className=' w-full flex flex-wrap flex-1 mb-5' key={article.subtitle}>
                                            <div className=' mt-2 w-full border-b border-b-slate-400'>
                                                <h1 className={`${gfs_didot.className} text-2xl`}>{article.title}</h1>
                                                <p className={`${nunito_sans.className} mt-4`}>{article.subtitle}</p>

                                                {/* Read More */}
                                                <div className=' flex items-center justify-end w-full gap-5'>
                                                    <a className={`${nunito_sans.className} font-semibold text-lime-500 flex items-center justify-center gap-1 mt-5 md:mr-14 mr-0 mb-5`} href={`/journals/journal/${article.id}`}>
                                                        <span>Read more</span>
                                                        <i className="fi fi-rr-arrow-small-right flex items-center justify-center h-max"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }

                </ScrollArea>

            </div>
        </div>
    )
}

export default page