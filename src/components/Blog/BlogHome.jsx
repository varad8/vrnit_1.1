import React from 'react'
import HeroSection from './HeroSection'
import "./common.css"
import BlogCard from './BlogCard'
import NavBar from './NavBar'
const BlogHome = () => {
  return (
    <>
{/* NavBar */}
<NavBar/>
<HeroSection/>

{/* Blog Card */}
<div className='bg-dark'>
<BlogCard/>
  </div>
    </>
 
  )
}

export default BlogHome