import React from 'react'
import Header from '../common/Header'
import { Link, useLocation } from 'react-router-dom'
import { blogs } from '../Data/blogs';

export default function BlogDetails() {
    let uselocation = useLocation();
    let currentId = uselocation.pathname.split('/')[2]
    let currentData = blogs.filter((v)=> v.id==currentId)[0]
  return (
    <div className='but'>
        <Header/>
        <h1>{currentData.title}</h1>
        <button ><Link to={'/ret'}>Return</Link></button>
    </div>
  )
}
