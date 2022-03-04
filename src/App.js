import Navbar from './components/Navbar/Navbar';
import AboutUs from './container/AboutUs/AboutUs';
import Chef from './container/Chef/Chef';
import Header from './container/Header/Header';
import Laurels from './container/Laurels/Laurels';
import SpecialMenu from './container/Menu/SpecialMenu';
import Gallery from './container/Gallery/Gallery';
import FindUs from './container/Findus/FindUs';
import Footer from './container/Footer/Footer';
function App() {
  return (
<>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
</>
  );
}

export default App;
