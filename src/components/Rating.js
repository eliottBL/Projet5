import svg from '../assets/star.svg'
import '../styles/Rating.scss'

function Rating({ rating }) {
    const rate = rating
    console.log(rate)
    let note = []

    for (let i = 0; i < rate; i++) {
        note.push('red')
    }
    for (let i = 0; i < 5 - rate; i++) {
        note.push('grey')
    }
    return (
        <div className='rate'>
            {note.map((classe, index) => (
                <div key={`${classe}-${index}`}>
                    <img className={classe} src={svg}></img>
                </div>
            ))}
        </div>
    )

}


export default Rating;