import React from 'react'
import Header from "../component/Layout/Header.jsx"
import Hero from "../component/Route/Hero/Hero.jsx"
import Categories from "../component/Route/Categories/Categories.jsx"
import BestDeals from "../../component/Route/BestDeals/BestDeals.jsx"
function HomePage() {
  return (
    <div>
        <Header activeHeading={1}/>
        <Hero/>
        <Categories/>
        <BestDeals/>
    </div>
  )
}

export default HomePage