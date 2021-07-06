import React, { Component } from 'react';
class Adress extends Component {
    state = { adress: "Sfax Route l'Afran" }

    render() {
        const handleClick = () => {
            const newAdress = prompt(('enter your address'))
            this.setState({ adress: newAdress })
        }
        return (
            <div>
                <h1> this is my address: {this.state.adress}</h1>
                <button onClick={handleClick}> Change Adress</button>
            </div>);
    }
}

export default Adress;