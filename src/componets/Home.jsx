import React from 'react'
import Globalicon from './partials/Globalicon'
import LatestOffer from './LatestOffer'
import Exclusively from './Exclusively'
import ExploreMore from './ExploreMore'
import FormPage from "./FormPage"
import Navbar from './partials/Navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Globalicon/>
    <LatestOffer/>
    {/* <FormPage/> */}
    <Exclusively/>
    {/* <ExploreMore/> */}
    </>
  )
}
