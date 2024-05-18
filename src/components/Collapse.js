import '../styles/Collapse.scss'
import { useState, useEffect } from 'react'
import svg from '../assets/fleche.png'

function Collapse({ title, liste }) {
    const [isOpen, setIsOpen] = useState(false)
    const [style, setStyle] = useState("fermé");

    const Rotate = () => {
        console.log("you just clicked");
        if (style == "fermé") setStyle("ouvert");
        else if (style == "ouvert") setStyle("fermé");
    }

    return isOpen ? (
        <section className='collapse'>
            <div className='collapse-head'>
                <h3>{title}</h3>
                <img className={style} onClick={() => { setIsOpen(false); Rotate(); }} src={svg}></img>
            </div>
            <div className='collapse-liste'>{liste}</div>
        </section>


    ) : (<section className='collapse'>
        <div className='collapse-head'>
            <h3>{title}</h3>
            <img className={style} onClick={() => { setIsOpen(true); Rotate(); }} src={svg}></img>
        </div>
    </section>)
}

export default Collapse; 