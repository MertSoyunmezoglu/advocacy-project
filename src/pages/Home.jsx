import PageBanner from '../components/PageBanner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

export default function Home() {
  const [showFooter, setShowFooter] = useState(false)

  return (
    <>
      <Navbar />
      <PageBanner bg="/assets/images/homepage.jpg" />
  

     

   
    </>
  )
}
