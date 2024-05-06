import '../../../styles/index.css';
import Header from '../../Header';
import MainAccueil from '../../main/MainAccueil';
import Footer from '../../Footer';

function Accueil() {
  return  (<div className="container">
      <Header />
      <MainAccueil />
      <Footer />
  </div>)
}

export default Accueil;
