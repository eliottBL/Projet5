import '../styles/Gallery.scss'
//import listeLogements from '../../public/logements.json'
import { useState, useEffect } from 'react'

function Gallery() {

    useEffect(() => {
        fetch("../../public/logements.json")
            .then((response) => console.log(response.json())
                .catch((error) => console.log(error))
            )
    }, [])
    /*
        return (
            <section className='gallery'>
                {listeLogements.map((logement) => (
                    <div key={logement.id} className='card'>
                        <h2>{logement.title}</h2>
                    </div>
    
                ))}
            </section>
    
        )*/
}

export default Gallery; 