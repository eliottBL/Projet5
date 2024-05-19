import '../styles/index.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Erreur404() {
  return (<div className="container">
    <Header />
    <main className='main-erreur'>
      <h2 className='erreur-title'>404</h2>
      <p className='erreur-paragraphe'>Oups! La page que vous demandez n'existe pas.</p>
      <Link className='retour' to={'/'}>Retourner sur la page d’accueil</Link>
    </main>
    <Footer />
  </div>)
}

export default Erreur404;
