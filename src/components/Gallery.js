import '../styles/Gallery.scss'
import listeLogements from '../data/protoLogements.json'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Gallery() {

    useEffect(() => {
        fetch("logements.json")
            .then((response) => response.json())
            .catch((error) => console.log(error))
    }, [])


    return (
        <section className='gallery'>
            {listeLogements.map((logement) => (
                <Link to={'/logement/' + logement.id} key={logement.id}>
                    <div key={logement.id} className='card'>
                        <img src={logement.cover}></img>
                        <h2>{logement.title}</h2>
                    </div>
                </Link>
            ))}
        </section>
    )
}

export default Gallery; 