import React from 'react'
import Footer from '../Shared/Footer';
import Appointment from './Appointment';
import Banner from './Banner';
import Cards from './Cards';
import Contact from './Contact';
import ExceptionalService from './ExceptionalService';
import PatientReview from './PatientReview';
import Services from './Services';

function Home() {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
            <ExceptionalService></ExceptionalService>
            <Appointment></Appointment>
            <PatientReview></PatientReview>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}

export default Home;
