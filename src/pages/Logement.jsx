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
  const tags = logement[0].tags
  const hostName = logement[0].host.name
  const hostPicture = logement[0].host.picture
  const rate = logement[0].rating
  const location = logement[0].location
  const title = logement[0].title

  return (
    <div>
      <Header />
      <main>
        <p>{id}</p>
        <Carroussel pictures={pictures} />
        <InfoLogement location={location} title={title} tags={tags} hostName={hostName} hostPic={hostPicture} rate={rate} />
      </main>
      <Footer />
    </div>
  )
}


export default Logement;
