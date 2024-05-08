import '../../../styles/index.scss';
import Header from '../components/Header';
import MainErreur from '../../components/main/MainErreur';
import Footer from '../components/Footer';

function Erreur404() {
  return (<div className="container">
    <Header />
    <MainErreur />
    <Footer />
  </div>)
}

export default Erreur404;
