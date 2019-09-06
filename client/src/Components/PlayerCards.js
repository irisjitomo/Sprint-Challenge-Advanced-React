import React from 'react'



class PlayerCard extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        console.log(this.props.data)
        return(
            <div>
            <h1>Player Data:</h1>
            <br></br>
            {this.props.data.map(player => {
                return(
                    <div key={player.id}>
                        <h3>{player.name}</h3>
                        <h4>Country of Origin: {player.country}</h4>
                        <p>Searches : {player.searches}</p>
                    </div>
                )
            })}
            </div>
            
        )
    }
}




export default PlayerCard