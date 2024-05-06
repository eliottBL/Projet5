import '../../../styles/index.css';
import Header from '../../Header';
import MainErreur from '../../main/MainErreur';
import Footer from '../../Footer';

function Erreur404() {
  return  (<div className="container">
      <Header />
      <MainErreur />
      <Footer />
  </div>)
}

export default Erreur404;
