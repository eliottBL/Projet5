import '../styles/index.scss';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import imageUrl from '../assets/image-apropos.png'

function Apropos() {
  const image = imageUrl;
  return (<div className="container">
    <Header />
    <Main imageUrl={image} />
    <Footer />
  </div>)
}

export default Apropos;
