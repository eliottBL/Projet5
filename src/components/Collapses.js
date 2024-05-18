import '../styles/Gallery.scss'
import listeLogements from '../data/protoLogements.json'
import { useState, useEffect } from 'react'
import Collapse from './Collapse';


function Collapses() {
    return (
        <section>
            <Collapse title={'Fiabilités'} contenue={'Les annonces postées sur Kasa garantissent une fiabilité[...]par nos équipes.'} />
            <Collapse title={'Respect'} contenue={'La bienveillance fait partie des valeurs[...]de notre plateforme.'} />
            <Collapse title={'Service'} contenue={'La bienveillance fait partie des valeurs[...]de notre plateforme.'} />
            <Collapse title={'Sécurité'} contenue={'La sécurité est la priorité[...]domestique pour nos hôtes.'} />
        </section>
    )
}

export default Collapses;
