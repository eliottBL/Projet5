import '../styles/Banner.scss'

function Banner({ image }) {
    return (
        <section>
            <p>Chez vous, partout et ailleurs</p>
            <div>
                <img src={image}></img>
            </div>
        </section>

    )
}

export default Banner; 