import React from 'react';
import AutoRepair from '../AutoRepair/AutoRepair';
import Carousel from '../Banner/Carousel/Carousel';
import Choose from '../Choose/Choose';
import Overview from '../Overview/Overview';
import Review from '../Review/Review';
import Services from '../Services/Services';
import VehicleServiced from '../VehicleServiced/VehicleServiced';
import { IMAGES } from '../mock';
import Team from '../../Team/Team';
import Footer from '../../Share/Footer/Footer';
const Home = () => {
    return (
        <div>
            {/* <Carousel time={6000}>
                {
                    IMAGES.map((image, index) => <img key={index} src={image.imageUrl} alt={image.placeHolder} />)
                }
            </Carousel>
            <Choose></Choose>
            <VehicleServiced />
            <AutoRepair></AutoRepair>
            <Review></Review>
            <Overview></Overview>
            <Services></Services> */}
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;