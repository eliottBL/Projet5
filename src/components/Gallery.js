import '../styles/Gallery.scss'
import listeLogements from '../data/protoLogements.json'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Gallery() {
    /*
        useEffect(() => {
            fetch("../../public/logements.json", {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
        }, [])
        */

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