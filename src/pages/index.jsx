import '../styles/index.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import imageUrl from '../assets/image-accueil.png'
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';

function Accueil() {
  const image = imageUrl;
  return (<div className="container">
    <Header />
    <main>
      <Banner imageUrl={imageUrl} />
      <Gallery />
    </main>
    <Footer />
  </div>)
}

export default Accueil;
