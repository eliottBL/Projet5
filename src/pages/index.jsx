import '../styles/index.scss';
import imageUrl from '../assets/image-accueil.png'
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';

function Accueil() {
  const texte = 'Chez vous, partout et ailleurs'
  return (
    <main>
      <Banner texte={texte} imageUrl={imageUrl} />
      <Gallery />
    </main>
  )
}

export default Accueil;
