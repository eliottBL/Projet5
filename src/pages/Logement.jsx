import Carroussel from '../components/Carroussel';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/index.scss';
import { redirect, useParams } from 'react-router';
import listeLogements from '../data/protoLogements.json'
import InfoLogement from '../components/InfoLogement';

function Logement() {
  const { id } = useParams()
  const logement = listeLogements.find(element => element.id == id)
  /*if (logement == undefined) {
    redirect()
  }*/
  const pictures = logement.pictures
  const tags = logement.tags
  const hostName = logement.host.name
  const hostPicture = logement.host.picture
  const rate = logement.rating
  const location = logement.location
  const title = logement.title

  return (
    <div>
      <Header />
      <main>
        <p>{id}</p>
        <Carroussel pictures={logement.pictures} />
        <InfoLogement location={logement.location} title={logement.title} tags={logement.tags} hostName={logement.host.name} hostPic={logement.host.picture} rate={logement.rating} />
      </main>
      <Footer />
    </div>
  )
}


export default Logement;
