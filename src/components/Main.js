import '../styles/Main.css';

const listeLogements = await fetch("logements.json")
    .then(function (response) {
        return response.json();
    })
    .catch(function () {
        alert("liste logement.json ou communication API")
    });

function Main (){
    return (
        <main>
            <section className='image'>
                <p>blablabla</p>
            </section>
            <section className='gallery'>
                {listeLogements.map((logement) => (
                    <div className='card'>{logement}</div>
                ))}
             </section>
        </main>
    )
};

export default Main; 