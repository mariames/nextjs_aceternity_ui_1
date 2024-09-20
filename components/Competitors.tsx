import React from 'react'
import { InfoCard } from './InfoCard'
import { GlobeDemo } from './ui/GridGlobe'

const Competitors = () => {
  return (
<>
  <div className="p-6 bg-white text-2xl">
    <div className="text-gray-700 flex flex-col items-center justify-center text-center md:flex-row md:justify-center">
      <p className="text-gray-700">An hour a week is all you need to track dozens of competitors and surface key, deal-winning insights. How?</p>
    </div>
    <p className="text-gray-700 text-center">Put your competitive intelligence on autopilot and let AI filter out the noise.</p>
  </div>
  <GlobeDemo />
</>

  )
}

export default Competitors
