import Footer from "../landing/Footer";
import Hero from "../landing/Hero";
import Join from "../landing/Join";
import Navbar from "../landing/Navbar";
import Services from "../landing/Services";
import Stats from "../landing/Stats";
import Why from "../landing/Why";

const LandingPage = () => {
    return(
        <main className='min-h-screen'>
          <div className='relative overflow-hidden'>
            <img className='absolute z-0 w-3/4 right-0' src="https://res.cloudinary.com/dbqgpezvw/image/upload/v1698382220/bem-estar/assets/backgrounds/ko35qpnfziiexpmhfdll.svg" alt="" />
            <div className='z-10 relative'>
              <Navbar type="header" isHome={false}/> 
              <Hero/>
            </div>
          </div>
          <div className='mt-20 mb-40'>
            <Stats/>
          </div>
          <div className='mt-20 mb-20 '>
            <Services/>
            <Why/>
          </div>
            <div className='mb-40'>
              <Join/>
            </div>
          <Footer/>
      </main>
    );
}  

export default LandingPage;