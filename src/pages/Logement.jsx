import Carroussel from '../components/Carroussel';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/index.scss';
import { useParams } from 'react-router';
import listeLogements from '../data/protoLogements.json'

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
      </main>
      <Footer />
    </div>
  )
}


export default Logement;
