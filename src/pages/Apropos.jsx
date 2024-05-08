import '../styles/index.scss';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

function Apropos() {
  const texte = 'apropos'
  return (<div className="container">
    <Header />
    <Main texte={texte} />
    <Footer />
  </div>)
}

export default Apropos;
