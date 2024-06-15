import '../styles/index.scss';
import { Link } from 'react-router-dom';

function Erreur404() {
  return (
    <main className='main-erreur'>
      <h2 className='erreur-title'>404</h2>
      <p className='erreur-paragraphe'>Oups! La page que vous demandez n'existe pas.</p>
      <Link className='retour' to={'/'}>Retourner sur la page d’accueil</Link>
    </main>
  )
}

export default Erreur404;
