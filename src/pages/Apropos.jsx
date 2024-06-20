import '../styles/index.scss';
import imageUrl from '../assets/image-apropos.png'
import Banner from '../components/Banner';

import dataApropos from '../data/protoApropos.json'
import Collapse from '../components/Collapse';

function Apropos() {
  const texte = ''
  return (
    <main className='main-apropos'>
      <Banner texte={texte} imageUrl={imageUrl} />
      <section className='apropos-collapses'>
        {dataApropos.map((data) => (
          <Collapse key={data.titre} title={data.titre} contenue={data.contenue} />
        ))}
      </section>
    </main>
  )
}

export default Apropos;
