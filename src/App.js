
import './App.css';
import Header from './components/Header';
import HeroSectionWithSlideShow from './components/HeroSectionWithSlideShow'
import ConversionSection from './components/ConversionSection';
import LeadManagement from './components/LeadManagement';
import WhatsAppFeatures from './components/WhatsappFeatures';
import IntegrationSection from './components/IntegrationSection';   
import Testimonials from './components/Testimonials';
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

    </div>
  );
}

export default App;
