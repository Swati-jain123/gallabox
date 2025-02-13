
import './App.css';
import Header from './components/Header';
import HeroSectionWithSlideShow from './components/HeroSectionWithSlideShow'
import ConversionSection from './components/ConversionSection';
import LeadManagement from './components/LeadManagement';
import WhatsAppFeatures from './components/WhatsappFeatures';
import IntegrationSection from './components/IntegrationSection';   
import Testimonials from './components/Testimonials';
import RecognitionSection from './components/RecognitionSection';
import FooterHeroSection from './components/FooterHeroSection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
<Header/>
<HeroSectionWithSlideShow/>
<ConversionSection/>
<LeadManagement/>
<WhatsAppFeatures/>
<IntegrationSection/>
<Testimonials/>
<RecognitionSection/>

{/* <FooterHeroSection/>
<Footer/> */}

    </div>
  );
}

export default App;
