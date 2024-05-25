
function Rating() {
    const rate = Number
    for (let i = 0; i < rate; i++) {
        return (<img className="red"></img>)
    }
    for (let i = 0; i < 5 - rate; i++) {
        return (<img className="grey"></img>)
    }
}

export default Rating;