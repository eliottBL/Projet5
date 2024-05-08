import '../../../styles/index.scss';
import Header from '../components/Header';
import MainAccueil from '../components/Main';
import Footer from '../components/Footer';

function Accueil() {
  return (<div className="container">
    <Header />
    <Main />
    <Footer />
  </div>)
}

export default Accueil;
