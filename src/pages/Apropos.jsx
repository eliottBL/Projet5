import '../styles/index.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import imageUrl from '../assets/image-apropos.png'
import Banner from '../components/Banner';
import Collapses from '../components/Collapses';

function Apropos() {
  const texte = ''
  return (
    <main>
      <Banner texte={texte} imageUrl={imageUrl} />
      <section>
        <Collapses />
      </section>
    </main>
  )
}

export default Apropos;
