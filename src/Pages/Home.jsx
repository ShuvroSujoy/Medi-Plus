
import HeroSection from '../Component/HeroSection';

import Help from '../Component/Help'
import MedicalNews from '../Component/MedicalNews'
import HealthOffer from '../Component/HealthOffer';


const Home = () => {
    return (
        <div>
            <div>
                <HeroSection/>
            </div>
            <div>
                <Help/>
            </div>
            <div>
                <HealthOffer/>
            </div>
            <div>
                <MedicalNews/>
            </div>
            
        </div>
    );
};

export default Home;