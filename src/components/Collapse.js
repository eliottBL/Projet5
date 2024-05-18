import '../styles/Collapse.scss'
import { useState, useEffect } from 'react'
import svg from '../assets/fleche.png'

function Collapse() {
    const [isOpen, setIsOpen] = useState(false)
    const [style, setStyle] = useState("fermé");

    const Rotate = () => {
        console.log("you just clicked");
        if (style == "fermé") setStyle("ouvert");
        else if (style == "ouvert") setStyle("fermé");
    }

    return isOpen ? (
        <section className='collapse'>
            <h3>Collapse</h3>
            <img onClick={() => { setIsOpen(false); Rotate(); }} src={svg}></img>
        </section>

    ) : (<section className='collapse'>
        <h3>Collapse</h3>
        <img onClick={() => { setIsOpen(true); Rotate(); }} src={svg}></img>
    </section>)
}

export default Collapse; 