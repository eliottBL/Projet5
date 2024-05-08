import '../styles/index.scss';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

function Accueil() {
  const texte = 'accueil'
  return (<div className="container">
    <Header />
    <Main texte={texte} />
    <Footer />
  </div>)
}

export default Accueil;
