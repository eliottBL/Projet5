import '../styles/index.scss';
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
