import '../styles/Gallery.scss'
import listeLogements from './logements.json'
import { useState, useEffect } from 'react'

function Gallery() {

    return (
        <section className='gallery'>
            <p>GALLERY</p>
            {listeLogements.map((logement) => (
                <div key={logement.id} className='card'>{logement.title}</div>
            )

            )}
        </section>

    )
}

export default Gallery; 