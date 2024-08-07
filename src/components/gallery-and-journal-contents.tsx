import React from 'react'
import { photos } from '@/utils/data'
import Tag from './Tag'

import { Nunito_Sans, Cairo, Lora, Open_Sans, Platypi, GFS_Didot } from 'next/font/google'

const nunito_sans = Nunito_Sans({ weight: ["200", "400", "500", "600"], subsets: ["latin"] })
const cairo = Cairo({ weight: ["200", "300", "400", "500", "600", "700"], subsets: ["latin"] })
const open_sans = Open_Sans({ weight: ["400", "500", "600", "700"], subsets: ["latin"] })
const gfs_didot = GFS_Didot({ weight: "400", subsets: ["greek"] })

function GalleryContents(props: {source: { id: number; title: string; subtitle: string; views: number; images: string[]; uploadedAt: string; time: string; tags: string[]; }[], sourceName:string}) {
    return (
        <div className=' w-4/5 ml-auto mr-auto md:flex block items-center justify-center gap-8 flex-wrap mt-16 mb-16'>
            {props.source.map(data => (
                <div key={data.id} className=' md:w-1/5 w-full mb-10 ml-auto mr-auto md:m-0 rounded-xl p-5 ring-1 ring-gray-500 bg-opacity-80 gallery-photo overflow-hidden'>

                    <a href={`${props.sourceName === "Journals" ? "/journals/journal" : "/gallery/photo"}/${data.id}`}>
                        <img src={`${data.images[0]}`} className=' w-full h-[18rem] rounded-xl' alt="" />
                    </a>

                    <div className=' pr-5 pl-5 mt-5 box-border flex items-center justify-start gap-3'>
                        {
                            data.tags.map((tag, i) => (
                                <Tag tag={tag} key={i} />
                            ))
                        }
                    </div>

                    <p className={`${nunito_sans.className} text-lg font-normal ml-5 mt-3 mb-3`}>{data.title}</p>

                    <p className={`${nunito_sans.className} text-xs font-normal ml-5 mt-3`}>{data.time}
                        <span className=' mr-2 ml-2'>|</span>
                        <span>{data.uploadedAt}</span>
                    </p>

                </div>
            ))}
        </div>
    )
}

export default GalleryContents