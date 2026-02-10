import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import OperationsHeroSection from '../Components/Operations/OperationsHeroSection'
import OperationsOverviewSection from '../Components/Operations/OperationsOverviewSection'
import OperatingModelSection from '../Components/Operations/OperatingModelSection'
import CoreOperationsSection from '../Components/Operations/CoreOperationsSection'
import SafetyCommitmentSection from '../Components/Operations/SafetyCommitmentSection'

const Operations = () => {
  return (
    <>
    <Navbar/>
    <OperationsHeroSection/>
    <OperationsOverviewSection/>
    <OperatingModelSection/>
    <CoreOperationsSection/>
    <SafetyCommitmentSection/>
    <Footer/>
    </>
  )
}

export default Operations