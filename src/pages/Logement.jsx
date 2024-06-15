import Carroussel from '../components/Carroussel';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/index.scss';
import { useParams } from 'react-router';
import listeLogements from '../data/protoLogements.json'
import InfoLogement from '../components/InfoLogement';
import Erreur404 from './Erreur';

function Logement() {
  const { id } = useParams()
  const logement = listeLogements.find(element => element.id == id)

  if (!logement) {
    return <Erreur404 />
  }
  return (
    <main>
      <Carroussel pictures={logement.pictures} />
      <InfoLogement equipements={logement.equipments} description={logement.description} location={logement.location} title={logement.title} tags={logement.tags} hostName={logement.host.name} hostPic={logement.host.picture} rate={logement.rating} />
    </main>
  )
}


export default Logement;
