function Carroussel({ pictures }) {

    const picturesArray = { pictures }
    let i = 0
    let src = picturesArray[i]
    const Prev = () => {
        i - 1
        if (i < 0) i = picturesArray.length
    }
    const Next = () => {
        i + 1
        if (i > picturesArray.length) i = 0
    }

    <div className="carroussel">
        <div>
            <img className="prev" onClick={Prev()}></img>
            <img className="next" onClick={Next()}></img>
        </div>
        <img className="carroussel-gallery" src={src}></img>
    </div>
}

export default Carroussel;