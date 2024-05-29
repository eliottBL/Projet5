import svg from '../assets/fleche.png'
import '../styles/Carroussel.scss'
import { useState } from 'react'

function Carroussel({ pictures }) {

    const picturesArray = { pictures }.pictures
    const [index, setIndex] = useState(0)
    const prev = () => {
        if (index - 1 < 0) {
            setIndex(picturesArray.length - 1)
        }
        else setIndex(index - 1)
    }

    const next = () => {
        if (index + 1 > picturesArray.length - 1) {
            setIndex(0)
        }
        else setIndex(index + 1)
    }


    return (
        <div className="carroussel">
            <div>
                <img className="prev" onClick={prev} src={svg}></img>
                <img className="next" onClick={next} src={svg}></img>
            </div>
            <img className="carroussel-gallery" src={picturesArray[index]}></img>
        </div>)
}

export default Carroussel;