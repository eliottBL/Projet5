import '../styles/Gallery.scss'
import listeLogements from './logements.json'

useEffect(() => {
    fetch(listeLogements)
        .then((response) => response.json()
            .then(({ logementsData }) => console.log(logementsData))
            .catch((error) => console.log(error))
        )
}, [])

function Gallery() {
    return (
        <section>
            <p>GALLERY</p>
        </section>

    )
}

export default Gallery; 