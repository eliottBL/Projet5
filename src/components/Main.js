import '../styles/Main.scss';
import Banner from '../components/Banner';

function Main({ imageUrl }) {
    let image = imageUrl
    return (
        <main>
            <Banner image={image} />
        </main>
    )
};

export default Main; 