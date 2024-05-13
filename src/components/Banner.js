import '../styles/Banner.scss'

function Banner({ imageUrl }) {
    return (
        <section>
            <p>Chez vous, partout et ailleurs</p>
            <div>
                <img src={imageUrl}></img>
            </div>
        </section>

    )
}

export default Banner; 