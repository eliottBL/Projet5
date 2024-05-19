import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/index.scss';
import { useParams } from 'react-router';

function Logement() {
  const { id } = useParams()
  return (
    <div>
      <Header />
      <main>
        <p>{id}</p>
      </main>
      <Footer />
    </div>
  )
}


export default Logement;
