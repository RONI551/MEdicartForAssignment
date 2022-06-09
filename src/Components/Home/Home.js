import React from 'react';

import ImgageSlider from '../Carousel/ImgageSlider';
import { Sliderpicture } from '../Carousel/SliderData';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import Team from '../Team/Team';
import Treatmetn from '../TreatMetnHistory/Treatmetn';


const Home = () => {
   
    return (
        <div>
    
        <ImgageSlider slider={Sliderpicture} ></ImgageSlider>
        <Team></Team>
        
        <Service></Service>
        <Treatmetn></Treatmetn>
        <Footer></Footer>
            
        </div>
    );
};

export default Home;