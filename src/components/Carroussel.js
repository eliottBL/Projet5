import svg from '../assets/fleche.png'
import '../styles/Carroussel.scss'
import { useState, useEffect } from 'react'

function Carroussel({ pictures }) {

    const picturesArray = { pictures }.pictures
    const [index, setIndex] = useState(0)
    const Prev = () => {
        let newIndex = index - 1
        if (newIndex < 0) {
            setIndex(picturesArray.length - 1)
        }
        else { setIndex(index - 1) }
    }

    const Next = () => {
        let newIndex = index + 1
        if (newIndex > picturesArray.length - 1) {
            setIndex(0)
        }
        else { setIndex(index + 1) }
    }


    return (
        <div className="carroussel">
            <div>
                <img className="prev" onClick={Prev} src={svg}></img>
                <img className="next" onClick={Next} src={svg}></img>
            </div>
            <img className="carroussel-gallery" src={picturesArray[index]}></img>
        </div>)
}

export default Carroussel;