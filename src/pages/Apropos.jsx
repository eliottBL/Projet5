import '../styles/index.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import imageUrl from '../assets/image-apropos.png'
import Banner from '../components/Banner';

function Apropos() {
  return (<div className="container">
    <Header />
    <main>
      <Banner imageUrl={imageUrl} />
    </main>
    <Footer />
  </div>)
}

export default Apropos;
