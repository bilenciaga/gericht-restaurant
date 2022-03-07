import Navbar from './components/Navbar/Navbar';
import AboutUs from './container/AboutUs/AboutUs';
import Chef from './container/Chef/Chef';
import Header from './container/Header/Header';
import Laurels from './container/Laurels/Laurels';
import SpecialMenu from './container/Menu/SpecialMenu';
import Gallery from './container/Gallery/Gallery';
import FindUs from './container/Findus/FindUs';
import Footer from './container/Footer/Footer';
import 'aos/dist/aos.css'
import Aos from 'aos';
function App() {
  Aos.init();

  const names = [<Header />, <AboutUs />, <SpecialMenu />, <Chef />, <Laurels />, <Gallery />, <FindUs />, <Footer />]
  return (
<div className='bg-black'>
    <Navbar />
    <div>
      {names.map((name) => (
        <div data-aos="fade-up"
        data-aos-duration="2000">
          {name}
        </div>
      ) )}
    </div>
    {/* <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />  */}
</div>
  );
}

export default App;
