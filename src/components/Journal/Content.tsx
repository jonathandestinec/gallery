"use server"

import React from 'react'

import { MDXRemote } from 'next-mdx-remote/rsc'

function Content(props: {data:string}) {

    props.data && console.log(props.data)
    
  return (
    <MDXRemote source={props.data}/>
  )
}

export default Content