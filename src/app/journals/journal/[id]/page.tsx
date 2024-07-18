import React from 'react'

// Highlighting CSS
import "@/styles/github-dark.css"

import { MDXRemote } from 'next-mdx-remote/rsc'
import { journals } from '@/utils/data'
import Header from '@/components/Journal/Header'
import OtherNav from '@/components/OtherNav'

import { Nunito_Sans } from 'next/font/google'

const nunito_sans = Nunito_Sans({ weight: ["200", "400", "500", "600"], subsets: ["latin"] })

// Highlighting Stuff
import rehypeHighlight from 'rehype-highlight';

import langHttp from 'highlight.js/lib/languages/http'
import langNginx from 'highlight.js/lib/languages/nginx'


function page({ params }: { params: { id: string } }) {

    const journal = journals.find((i) => i.id === parseInt(params.id))

    // Highlighting Stuff

    const options = {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [rehypeHighlight],
        }
    }

    if (!journal) {
        return (
            <div className=' w-full h-screen ml-auto mr-auto flex items-center justify-center'>
                <p className='text-6xl text-center'>🙃🌨️🌿 <br /> <span className=' font-mono font-bold text-2xl'>Journal not made yet</span></p>
            </div>
        )
    }

    return (
        <div>

            <OtherNav page='Journal' />

            <Header source={journal} />

            <div className={`md:w-7/12 w-9/12 ml-auto mr-auto mt-10 prose ${nunito_sans.className} lg:prose-xl text-white prose-lime antialiased prose-invert`}>

                <MDXRemote source={journal.content} options={options} />

            </div>
        </div>
    )
}

export default page