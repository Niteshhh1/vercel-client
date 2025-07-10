import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import ConsultationForm from '../../components/form/ConsultationForm'
import WhyChoose from '../../components/extraInfo/WhyChoose'
import AboutUs from '../../components/aboutUs/AboutUs'
import OurProjects from '../../components/ourprojects/OurProjects'
import HappyClients from '../../components/clients/HappyClients'
import FooterSection from '../../components/footer/FooterSection'

function Landing() {
  return (
    <div>
      <NavBar/>
      <ConsultationForm/>
      <WhyChoose/>
      <section id="about">
        <AboutUs />
      </section>
      <section id='projects'>
        <OurProjects/>
      </section>
      <section id='clients'>
        <HappyClients/>
      </section>
      <section id='subscribe'>
        <FooterSection/>
      </section>
    </div>
  )
}

export default Landing