"use client"

import React from 'react'

function Tag(props: { tag: string }) {

    const handleTag = (tag:string) => {
        console.log(tag)
    }

    return (
        <div className=' w-16 text-center pt-1 pb-1 rounded-lg bg-cyan-400 bg-opacity-50 cursor-pointer' onClick={() => {
            handleTag(props.tag)
        }}>
            <p className=' text-sm font-light text-center font-mono'>{props.tag}</p>
        </div>
    )
}

export default Tag