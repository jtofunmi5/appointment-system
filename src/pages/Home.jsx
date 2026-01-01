import React from 'react'
import Emergency from '../component/Emergency'
import Transforming from '../component/Transforming'
import Secondsection from '../component/Secondsection'
import Primary from '../component/Primary'
import Thirdsection from '../component/Thirdsection'
import Take from '../component/Take'
import Whychooseus from '../component/Whychooseus'
import OurTeam from '../component/OurTeam'
import ReviewPage from '../component/ReviewPage'
import NeedHealp from '../ExternalComponent/NeedHealp'
import Footer from '../component/Footer'
import Navbar from '../ExternalComponent/Navbar'

const Home = () => {
  return (
    <div>
     <Emergency />
     <Navbar />
     <Transforming />
     <Secondsection />
     <Thirdsection />
     <Primary />
     <Take />
     <Whychooseus />
     <OurTeam />
     <ReviewPage />
     <NeedHealp />
     <Footer />
    </div>
  )
}

export default Home;