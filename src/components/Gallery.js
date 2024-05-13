import '../styles/Gallery.scss'
import listeLogements from './logements.json'
import { useState, useEffect } from 'react'

function Gallery() {

    return (
        <section className='gallery'>
            {listeLogements.map((logement) => (
                <div key={logement.id} className='card'>
                    <h2>{logement.title}</h2>
                </div>

            ))}
        </section>

    )
}

export default Gallery; 