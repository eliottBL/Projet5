import Carroussel from '../components/Carroussel';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/index.scss';
import { useParams } from 'react-router';
import listeLogements from '../data/protoLogements.json'
import InfoLogement from '../components/InfoLogement';

function Logement() {
  const { id } = useParams()
  const logement = listeLogements.filter(element => element.id == id)
  const pictures = logement[0].pictures

  return (
    <div>
      <Header />
      <main>
        <p>{id}</p>
        <Carroussel pictures={pictures} />
        <InfoLogement tags={logement[0].tags} name={logement[0].host} title={logement[0].title} location={logement[0].location} rate={logement[0].rating} />
      </main>
      <Footer />
    </div>
  )
}


export default Logement;
